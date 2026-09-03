import React, { useEffect, useRef } from "react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { isPlayableInPlaylist } from "../../data/playlistMapping";

// Cache script promise to ensure API script is loaded exactly once
let apiScriptPromise: Promise<void> | null = null;

function loadYouTubeAPI(): Promise<void> {
  if (apiScriptPromise) return apiScriptPromise;

  console.log("[YT] API SCRIPT REQUESTED");
  apiScriptPromise = new Promise<void>((resolve) => {
    if ((window as any).YT && (window as any).YT.Player) {
      console.log("[YT] API READY");
      resolve();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    const previousOnReady = (window as any).onYouTubeIframeAPIReady;
    (window as any).onYouTubeIframeAPIReady = () => {
      if (previousOnReady) previousOnReady();
      console.log("[YT] API READY");
      resolve();
    };
  });

  return apiScriptPromise;
}

export const YouTubePlayer: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    volume,
    isMuted,
    playerError,
    registerPlayerInstance,
    setPlayingState,
    setBufferingState,
    setPlayerReady,
    setPlayerError,
    skipToNext,
  } = useAudioPlayer();

  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const playerReadyRef = useRef<boolean>(false);
  const pendingTrackRef = useRef<{ videoId: string; startSeconds: number } | null>(null);
  const currentVideoIdRef = useRef<string | null>(null);
  const bufferingTimeoutRef = useRef<any>(null);
  const currentSongRef = useRef<any>(currentSong);

  useEffect(() => {
    currentSongRef.current = currentSong;
  }, [currentSong]);

  // Get environment-aware origin
  const getOrigin = () => {
    const envOrigin = import.meta.env.VITE_APP_ORIGIN;
    if (envOrigin) return envOrigin;
    return window.location.origin;
  };

  const startBufferingTimeout = () => {
    clearBufferingTimeout();
    bufferingTimeoutRef.current = setTimeout(() => {
      console.log(`[YT] BUFFERING TIMEOUT EXCEEDED (15s)`);
      setPlayingState(false);
      setBufferingState(false);
      setPlayerError("Playback could not be started.");
    }, 15000);
  };

  const clearBufferingTimeout = () => {
    if (bufferingTimeoutRef.current) {
      clearTimeout(bufferingTimeoutRef.current);
      bufferingTimeoutRef.current = null;
    }
  };

  // Mount/Unmount effect: handles React StrictMode safely
  useEffect(() => {
    let active = true;

    const initPlayer = async () => {
      await loadYouTubeAPI();

      if (!active) return;

      const container = containerRef.current;
      if (!container) return;

      // Always clear container and mount a fresh placeholder to survive StrictMode
      container.innerHTML = "";
      const placeholder = document.createElement("div");
      placeholder.id = "yt-iframe-placeholder";
      placeholder.style.width = "100%";
      placeholder.style.height = "100%";
      container.appendChild(placeholder);

      try {
        // Initialize player with verified playlist song or fallback (Ho Deenanath, Pos 2 in PLfQdCQYpIfyQ)
        const initialVideoId = (currentSong?.youtubeVideoId && isPlayableInPlaylist(currentSong.youtubeVideoId))
          ? currentSong.youtubeVideoId
          : "j74EcjyN1WQ";
        console.log(`[YT] PLAYER CREATED with playlist-verified videoId: ${initialVideoId}`);

        new (window as any).YT.Player("yt-iframe-placeholder", {
          height: "100%",
          width: "100%",
          videoId: initialVideoId,
          playerVars: {
            listType: "playlist",
            list: "PLfQdCQYpIfyQ",
            autoplay: 0, // Autoplay manually triggered to preserve user gesture
            controls: 1, // Enable default controls
            rel: 0,
            origin: getOrigin(),
            enablejsapi: 1
          },
          events: {
            onReady: (event: any) => {
              if (!active) {
                event.target.destroy();
                return;
              }
              console.log("[YT] PLAYER READY (Playlist PLfQdCQYpIfyQ mounted)");
              playerRef.current = event.target;
              playerReadyRef.current = true;
              registerPlayerInstance(event.target);
              setPlayerReady(true);
              setPlayerError(null);

              // Sync initial volume/mute settings
              event.target.setVolume(volume);
              if (isMuted) event.target.mute();
              else event.target.unMute();

              // Trigger playback if a video was selected before player was ready
              if (pendingTrackRef.current) {
                const { videoId, startSeconds } = pendingTrackRef.current;
                pendingTrackRef.current = null;
                console.log(`[YT] LOAD VIDEO ${videoId} at ${startSeconds}s (from pending)`);
                console.log("[player-call] loadVideoById called with:", videoId, "startSeconds:", startSeconds);
                event.target.loadVideoById({
                  videoId,
                  startSeconds,
                  endSeconds: currentSongRef.current?.endTime,
                });
                console.log("[YT] PLAY REQUESTED");
                event.target.playVideo();
                currentVideoIdRef.current = videoId;
              } else if (currentSongRef.current?.youtubeVideoId) {
                const song = currentSongRef.current;
                const startSec = song.startTime || 0;
                console.log(`[YT] LOAD VIDEO ${song.youtubeVideoId} at ${startSec}s (from initial active)`);
                console.log("[player-call] loadVideoById called with:", song.youtubeVideoId, "startSeconds:", startSec);
                event.target.loadVideoById({
                  videoId: song.youtubeVideoId,
                  startSeconds: startSec,
                  endSeconds: song.endTime,
                });
                event.target.playVideo();
                currentVideoIdRef.current = song.youtubeVideoId;
              }
            },
            onStateChange: (event: any) => {
              if (!active) return;
              const state = event.data;
              const activeSong = currentSongRef.current;

              // Trace logging for states
              let stateName = "UNKNOWN";
              if (state === -1) stateName = "UNSTARTED";
              else if (state === 0) stateName = "ENDED";
              else if (state === 1) stateName = "PLAYING";
              else if (state === 2) stateName = "PAUSED";
              else if (state === 3) stateName = "BUFFERING";
              else if (state === 5) stateName = "CUED";

              console.log(`[YT] STATE ${stateName} | videoId=${activeSong?.youtubeVideoId} playerReady=${playerReadyRef.current} isPlaying=${state === 1} isBuffering=${state === -1 || state === 3} playerError=${playerError}`);

              // Wrong-Song Protection Verification
              if (state === 1 || state === 3) {
                try {
                  const actualVideoData = event.target.getVideoData?.();
                  const actualVideoId = actualVideoData?.video_id;
                  const expectedVideoId = activeSong?.youtubeVideoId;
                  if (actualVideoId && expectedVideoId && actualVideoId !== expectedVideoId) {
                    console.error(`[WRONG-SONG MISMATCH] Expected ${expectedVideoId} but player reported ${actualVideoId}`);
                    event.target.pauseVideo();
                    setPlayingState(false);
                    setBufferingState(false);
                    setPlayerError(`Playback mismatch: Expected recording ${expectedVideoId} but player loaded ${actualVideoId}.`);
                    return;
                  }
                } catch {
                  // Ignore
                }
              }

              if (state === -1) {
                // UNSTARTED
                setPlayingState(false);
                setBufferingState(true);
                startBufferingTimeout();
              } else if (state === 0) {
                // ENDED
                setPlayingState(false);
                setBufferingState(false);
                clearBufferingTimeout();
                skipToNext();
              } else if (state === 1) {
                // PLAYING
                setPlayingState(true);
                setBufferingState(false);
                setPlayerError(null);
                clearBufferingTimeout();
              } else if (state === 2) {
                // PAUSED
                setPlayingState(false);
                setBufferingState(false);
                clearBufferingTimeout();
              } else if (state === 3) {
                // BUFFERING
                setPlayingState(false);
                setBufferingState(true);
                startBufferingTimeout();
              } else if (state === 5) {
                // CUED
                setPlayingState(false);
                setBufferingState(false);
                clearBufferingTimeout();
              }
            },
            onError: (event: any) => {
              if (!active) return;
              const code = event.data;
              console.log(`[YT] ERROR ${code}`);
              console.error(`[YouTube Player Error] Code: ${code} | videoId=${currentSong?.youtubeVideoId} playerReady=${playerReadyRef.current} isPlaying=false isBuffering=false`);
              setPlayingState(false);
              setBufferingState(false);
              clearBufferingTimeout();

              if (code === 101 || code === 150) {
                setPlayerError("embedding restriction");
              } else if (code === 2) {
                setPlayerError("Invalid video configuration.");
              } else if (code === 5) {
                setPlayerError("YouTube HTML5 player error.");
              } else if (code === 100) {
                setPlayerError("This recording is unavailable on YouTube.");
              } else {
                setPlayerError("Player connection failed.");
              }
            }
          }
        });
      } catch (err) {
        console.error("Failed to construct YT.Player", err);
      }
    };

    initPlayer();

    return () => {
      active = false;
      clearBufferingTimeout();
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore
        }
        playerRef.current = null;
        playerReadyRef.current = false;
        registerPlayerInstance(null);
        setPlayerReady(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track loading effect on song change
  useEffect(() => {
    if (!currentSong?.youtubeVideoId) return;
    const videoId = currentSong.youtubeVideoId;
    const startSeconds = currentSong.startTime || 0;

    // Strict playlist validation
    if (!isPlayableInPlaylist(videoId)) {
      console.warn(`[YT Player Gate] Refused to load non-playlist video: ${videoId}`);
      setPlayerError(`Playback unavailable: "${currentSong.title}" is an archive reference not present in playlist PLfQdCQYpIfyQ.`);
      setPlayingState(false);
      setBufferingState(false);
      return;
    }

    setPlayerError(null);
    setPlayingState(false);
    setBufferingState(true);
    startBufferingTimeout();

    if (playerReadyRef.current && playerRef.current) {
      try {
        console.log(`[YT] LOAD VIDEO ${videoId} at ${startSeconds}s`);
        console.log("[player-call] loadVideoById called with:", videoId, "startSeconds:", startSeconds);
        playerRef.current.loadVideoById({
          videoId,
          startSeconds,
          endSeconds: currentSong.endTime,
        });
        console.log("[YT] PLAY REQUESTED");
        playerRef.current.playVideo();
        currentVideoIdRef.current = videoId;
      } catch (e) {
        console.error("Error loading video", e);
      }
    } else {
      pendingTrackRef.current = { videoId, startSeconds };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong?.id]);

  // Sync play/pause actions from context
  useEffect(() => {
    if (!playerRef.current || !playerReadyRef.current) return;

    try {
      const state = playerRef.current.getPlayerState();
      if (isPlaying && state !== 1) {
        console.log("[YT] PLAY REQUESTED (sync)");
        playerRef.current.playVideo();
      } else if (!isPlaying && state === 1) {
        console.log("[YT] PAUSE REQUESTED (sync)");
        playerRef.current.pauseVideo();
      }
    } catch {
      // ignore
    }
  }, [isPlaying]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "1px",
        height: "1px",
        opacity: 0.001,
        pointerEvents: "none",
        zIndex: -9999,
        overflow: "hidden",
      }}
    >
      {/* Official YouTube IFrame Player instance (invisible background playback provider) */}
      <div ref={containerRef} id="yt-iframe-container" />
    </div>
  );
};
