import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { Song } from "../types/heritage";
import { songs } from "../data/songs";
import { isPlayableInPlaylist } from "../data/playlistMapping";

interface AudioPlayerContextType {
  currentSong: Song | null;
  queue: Song[];
  history: Song[];
  isPlaying: boolean;
  isBuffering: boolean;
  volume: number;
  isMuted: boolean;
  playerReady: boolean;
  playerError: string | null;
  autoplayBlocked: boolean;
  currentTime: number;
  duration: number;
  
  playSong: (song: Song, mode?: "now" | "next" | "queue") => void;
  pause: () => void;
  resume: () => void;
  skipToNext: () => void;
  skipToPrevious: () => void;
  seekTo: (seconds: number) => void;
  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: string) => void;
  clearQueue: () => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  
  // API Bridge refs
  playerInstance: any;
  registerPlayerInstance: (instance: any) => void;
  setPlayingState: (playing: boolean) => void;
  setBufferingState: (buffering: boolean) => void;
  setPlayerReady: (ready: boolean) => void;
  setPlayerError: (err: string | null) => void;
  setAutoplayBlocked: (blocked: boolean) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [queue, setQueue] = useState<Song[]>([]);
  const [history, setHistory] = useState<Song[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playerReady, setPlayerReady] = useState<boolean>(false);
  const [playerError, setPlayerError] = useState<string | null>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState<boolean>(false);
  
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  
  const [playerInstance, setPlayerInstance] = useState<any>(null);
  const location = useLocation();

  // Policy Enforcement: Pause if leaving the Songs interface
  useEffect(() => {
    if (location.pathname !== "/songs" && isPlaying) {
      pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, isPlaying]);

  // Poll YouTube Player IFrame API for current play time and total duration (relative to startTime)
  useEffect(() => {
    let interval: any;
    if (isPlaying && playerInstance && playerReady) {
      interval = setInterval(() => {
        try {
          if (playerInstance.getCurrentTime) {
            const rawTime = playerInstance.getCurrentTime();
            const start = currentSong?.startTime || 0;
            const end = currentSong?.endTime;

            // Compilation boundary check
            if (end && rawTime >= end) {
              skipToNext();
              return;
            }

            const relativeTime = Math.max(0, rawTime - start);
            setCurrentTime(relativeTime);
          }
          if (playerInstance.getDuration) {
            const rawDur = playerInstance.getDuration();
            const start = currentSong?.startTime || 0;
            const end = currentSong?.endTime;
            const effectiveDur = end ? (end - start) : Math.max(0, rawDur - start);
            setDuration(effectiveDur);
          }
        } catch {
          // ignore
        }
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playerInstance, playerReady, currentSong]);

  // Reset progress when song changes
  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
  }, [currentSong?.id]);

  const registerPlayerInstance = (instance: any) => {
    setPlayerInstance(instance);
    if (instance) {
      // Sync initial states
      try {
        instance.setVolume(volume);
        if (isMuted) instance.mute();
        else instance.unMute();
      } catch (e) {
        console.error("Error syncing states to player instance", e);
      }
    }
  };

  const setPlayingState = (playing: boolean) => {
    setIsPlaying(playing);
  };

  const setBufferingState = (buffering: boolean) => {
    setIsBuffering(buffering);
  };

  const playSong = (song: Song, mode: "now" | "next" | "queue" = "now") => {
    // AUTHORITATIVE PLAYLIST GUARD: Reject any recording not present in playlist PLfQdCQYpIfyQ
    if (song.playbackStatus !== "playable" || !isPlayableInPlaylist(song.youtubeVideoId)) {
      console.warn(`[Player Gate] Playback blocked: "${song.title}" (${song.id}) is an archive reference not present in playlist PLfQdCQYpIfyQ.`);
      setPlayerError(`Playback unavailable: "${song.title}" is an archive reference record not present in Sound Archive playlist PLfQdCQYpIfyQ.`);
      return;
    }

    setPlayerError(null);
    setAutoplayBlocked(false);

    console.log("[song-click]", song.id, song.title, song.youtubeVideoId);
    console.log("[player-load]", song.id, song.youtubeVideoId);

    if (mode === "now") {
      if (currentSong && currentSong.id === song.id) {
        if (playerInstance && playerReady && playerInstance.getPlayerState) {
          try {
            const state = playerInstance.getPlayerState();
            if (state === 1) { // PLAYING
              playerInstance.pauseVideo();
            } else if (state === 2) { // PAUSED
              playerInstance.playVideo();
            } else {
              playerInstance.loadVideoById({
                videoId: song.youtubeVideoId,
                startSeconds: song.startTime || 0,
                endSeconds: song.endTime,
              });
              playerInstance.playVideo();
            }
          } catch {
            if (isPlaying) pause();
            else resume();
          }
        } else {
          if (isPlaying) pause();
          else resume();
        }
        return;
      }

      if (currentSong && currentSong.id !== song.id) {
        setHistory((prev) => [...prev, currentSong]);
      }
      setCurrentSong(song);
      setIsPlaying(false);
      setIsBuffering(true);
      setCurrentTime(0);
    } else if (mode === "next") {
      // Put at start of queue
      setQueue((prev) => [song, ...prev.filter((s) => s.id !== song.id)]);
    } else {
      // Append to queue
      setQueue((prev) => [...prev.filter((s) => s.id !== song.id), song]);
    }
  };

  const pause = () => {
    if (playerInstance && playerReady) {
      try {
        playerInstance.pauseVideo();
      } catch (e) {
        console.error("Error calling pauseVideo", e);
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const resume = () => {
    if (playerInstance && playerReady) {
      try {
        playerInstance.playVideo();
      } catch (e) {
        console.error("Error calling playVideo", e);
      }
    } else {
      if (currentSong) {
        setIsPlaying(true);
      }
    }
  };

  const skipToNext = () => {
    if (queue.length > 0) {
      const nextSong = queue[0];
      setQueue((prev) => prev.slice(1));
      if (currentSong) {
        setHistory((prev) => [...prev, currentSong]);
      }
      setCurrentSong(nextSong);
      setIsPlaying(false);
      setIsBuffering(true);
      setPlayerError(null);
    } else {
      // Advance to next song in the verified playlist catalog
      const playableCatalog = songs.filter((s) => s.playbackStatus === "playable" && isPlayableInPlaylist(s.youtubeVideoId));
      const currentIndex = playableCatalog.findIndex((s) => s.id === currentSong?.id);
      if (currentIndex !== -1 && currentIndex < playableCatalog.length - 1) {
        const nextSong = playableCatalog[currentIndex + 1];
        if (currentSong) {
          setHistory((prev) => [...prev, currentSong]);
        }
        playSong(nextSong, "now");
      } else {
        if (currentSong) {
          setHistory((prev) => [...prev, currentSong]);
        }
        setIsPlaying(false);
        setIsBuffering(false);
      }
    }
  };

  const skipToPrevious = () => {
    if (history.length > 0) {
      const prevSong = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      
      // Put current song back at start of queue
      if (currentSong) {
        setQueue((prev) => [currentSong, ...prev]);
      }
      
      setCurrentSong(prevSong);
      setIsPlaying(false);
      setIsBuffering(true);
      setPlayerError(null);
    } else {
      // Step back in the verified playlist catalog
      const playableCatalog = songs.filter((s) => s.playbackStatus === "playable" && isPlayableInPlaylist(s.youtubeVideoId));
      const currentIndex = playableCatalog.findIndex((s) => s.id === currentSong?.id);
      if (currentIndex > 0) {
        const prevSong = playableCatalog[currentIndex - 1];
        playSong(prevSong, "now");
      }
    }
  };

  const seekTo = (relativeSeconds: number) => {
    if (playerInstance && playerReady && playerInstance.seekTo) {
      try {
        const start = currentSong?.startTime || 0;
        const rawTarget = start + relativeSeconds;
        playerInstance.seekTo(rawTarget, true);
        setCurrentTime(relativeSeconds);
      } catch (e) {
        console.error("Error seeking video", e);
      }
    }
  };

  const addToQueue = (song: Song) => {
    if (song.playbackStatus !== "playable" || !song.youtubeVideoId) return;
    if (currentSong?.id === song.id) return;
    setQueue((prev) => {
      if (prev.some((s) => s.id === song.id)) return prev;
      return [...prev, song];
    });
  };

  const removeFromQueue = (songId: string) => {
    setQueue((prev) => prev.filter((s) => s.id !== songId));
  };

  const clearQueue = () => {
    setQueue([]);
  };

  const setVolume = (vol: number) => {
    const clamped = Math.max(0, Math.min(100, vol));
    setVolumeState(clamped);
    if (playerInstance && playerReady) {
      try {
        playerInstance.setVolume(clamped);
      } catch (e) {
        console.error("Error setting volume", e);
      }
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (playerInstance && playerReady) {
      try {
        if (nextMute) {
          playerInstance.mute();
        } else {
          playerInstance.unMute();
        }
      } catch (e) {
        console.error("Error toggling mute", e);
      }
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentSong,
        queue,
        history,
        isPlaying,
        isBuffering,
        volume,
        isMuted,
        playerReady,
        playerError,
        autoplayBlocked,
        currentTime,
        duration,
        playSong,
        pause,
        resume,
        skipToNext,
        skipToPrevious,
        seekTo,
        addToQueue,
        removeFromQueue,
        clearQueue,
        setVolume,
        toggleMute,
        
        playerInstance,
        registerPlayerInstance,
        setPlayingState,
        setBufferingState,
        setPlayerReady,
        setPlayerError,
        setAutoplayBlocked,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
  }
  return context;
};
