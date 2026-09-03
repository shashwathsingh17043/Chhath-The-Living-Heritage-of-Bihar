import React, { useState, useEffect, useRef } from "react";
import { songs } from "../data/songs";

interface TestResult {
  id: string;
  title: string;
  artist: string;
  youtubeVideoId: string;
  status: "idle" | "testing" | "playable" | "external-only" | "unavailable" | "error" | "timeout";
  stepTitle: string;
  artistOk: boolean;
  videoUrlOk: boolean;
  iframeLoaded: boolean;
  playingEventReached: boolean;
  durationVal: number;
  timeProgressionOk: boolean;
  pauseOk: boolean;
  resumeOk: boolean;
  seekOk: boolean;
  errorCode?: number;
  errorMessage?: string;
}

export const VerifySongsPage: React.FC = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTestIndex, setCurrentTestIndex] = useState(-1);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);

  // Initialize tests array
  useEffect(() => {
    const initial = songs.map((s) => ({
      id: s.id,
      title: s.title,
      artist: s.artist,
      youtubeVideoId: s.youtubeVideoId || "",
      status: s.playbackStatus === "unavailable" ? "unavailable" as const : (s.playbackStatus === "research" ? "unavailable" as const : "idle" as const),
      stepTitle: s.playbackStatus === "unavailable" ? "Static: Unavailable" : (s.playbackStatus === "research" ? "Static: Research" : "Queued"),
      artistOk: !!s.artist,
      videoUrlOk: s.playbackStatus === "playable" || s.playbackStatus === "external-only" ? !!s.youtubeVideoId : true,
      iframeLoaded: false,
      playingEventReached: false,
      durationVal: 0,
      timeProgressionOk: false,
      pauseOk: false,
      resumeOk: false,
      seekOk: false,
    }));
    setTestResults(initial);
  }, []);

  const runAllTests = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentTestIndex(0);
  };

  useEffect(() => {
    if (!isRunning || currentTestIndex === -1 || currentTestIndex >= testResults.length) {
      if (currentTestIndex >= testResults.length) {
        setIsRunning(false);
        setCurrentTestIndex(-1);
      }
      return;
    }

    const currentSongResult = testResults[currentTestIndex];
    // If song is marked unavailable/research, skip automatic playback test
    if (currentSongResult.youtubeVideoId === "") {
      setCurrentTestIndex((prev) => prev + 1);
      return;
    }

    testSongPlayback(currentTestIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, currentTestIndex]);

  const updateResult = (index: number, updates: Partial<TestResult>) => {
    setTestResults((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], ...updates };
      return copy;
    });
  };

  const cleanUpPlayer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (playerRef.current) {
      try {
        playerRef.current.destroy();
      } catch (e) {
        console.error("Error destroying player:", e);
      }
      playerRef.current = null;
    }
    if (iframeContainerRef.current) {
      iframeContainerRef.current.innerHTML = '<div id="verify-iframe-placeholder"></div>';
    }
  };

  const testSongPlayback = (index: number) => {
    const result = testResults[index];
    updateResult(index, { status: "testing", stepTitle: "Loading Player API..." });

    // Ensure YT is loaded
    const loadYT = (): Promise<void> => {
      return new Promise((resolve) => {
        if ((window as any).YT && (window as any).YT.Player) {
          resolve();
        } else {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          const firstScriptTag = document.getElementsByTagName("script")[0];
          firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
          (window as any).onYouTubeIframeAPIReady = () => {
            resolve();
          };
        }
      });
    };

    loadYT().then(() => {
      cleanUpPlayer();
      let hasCompleted = false;
      let step = 0; // 0: init, 1: playing check, 2: pause check, 3: seek check, 4: resume check
      let time1 = 0;

      // Safety timeout: 15s max per song
      timeoutRef.current = setTimeout(() => {
        if (hasCompleted) return;
        hasCompleted = true;
        cleanUpPlayer();
        updateResult(index, {
          status: "timeout",
          stepTitle: "Timeout exceeded (15s)",
        });
        setCurrentTestIndex((prev) => prev + 1);
      }, 15000);

      try {
        playerRef.current = new (window as any).YT.Player("verify-iframe-placeholder", {
          height: "180",
          width: "320",
          videoId: result.youtubeVideoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            origin: window.location.origin,
            enablejsapi: 1,
          },
          events: {
            onReady: (event: any) => {
              updateResult(index, { iframeLoaded: true, stepTitle: "Player ready, playing..." });
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              if (hasCompleted) return;
              const state = event.data;

              if (state === 1) { // PLAYING
                updateResult(index, { playingEventReached: true });
                if (step === 0) {
                  step = 1;
                  const dur = event.target.getDuration();
                  time1 = event.target.getCurrentTime();
                  updateResult(index, {
                    durationVal: dur,
                    stepTitle: `Playing. Duration: ${Math.floor(dur)}s. Checking progression...`,
                  });

                  // Check progression after 1.5s
                  setTimeout(() => {
                    if (hasCompleted) return;
                    try {
                      const time2 = event.target.getCurrentTime();
                      const progressionOk = time2 > time1;
                      updateResult(index, {
                        timeProgressionOk: progressionOk,
                        stepTitle: `Progression: ${progressionOk ? "OK" : "Failed"}. Pausing...`,
                      });
                      step = 2;
                      event.target.pauseVideo();
                    } catch {
                      // ignore
                    }
                  }, 15000 / 10); // 1.5s delay
                } else if (step === 4) {
                  // Resume checked
                  updateResult(index, {
                    resumeOk: true,
                    status: "playable",
                    stepTitle: "Verified Playable!",
                  });
                  hasCompleted = true;
                  cleanUpPlayer();
                  setCurrentTestIndex((prev) => prev + 1);
                }
              } else if (state === 2) { // PAUSED
                if (step === 2) {
                  updateResult(index, {
                    pauseOk: true,
                    stepTitle: "Paused. Seeking to 15s...",
                  });
                  step = 3;
                  event.target.seekTo(15, true);
                  
                  setTimeout(() => {
                    if (hasCompleted) return;
                    try {
                      const current = event.target.getCurrentTime();
                      const seekOk = Math.abs(current - 15) < 3;
                      updateResult(index, {
                        seekOk: seekOk,
                        stepTitle: `Seeked to ${Math.floor(current)}s. Resuming...`,
                      });
                      step = 4;
                      event.target.playVideo();
                    } catch {
                      // ignore
                    }
                  }, 800);
                }
              }
            },
            onError: (event: any) => {
              if (hasCompleted) return;
              hasCompleted = true;
              const code = event.data;
              let statusVal: TestResult["status"] = "error";
              let msg = `Error code: ${code}`;

              if (code === 101 || code === 150) {
                statusVal = "external-only";
                msg = "embedding restriction";
              } else if (code === 2 || code === 5 || code === 100) {
                statusVal = "unavailable";
                msg = code === 100 ? "video unavailable" : "player error";
              }

              updateResult(index, {
                status: statusVal,
                errorCode: code,
                errorMessage: msg,
                stepTitle: `Failed: ${msg}`,
              });
              cleanUpPlayer();
              setCurrentTestIndex((prev) => prev + 1);
            },
          },
        });
      } catch (err: any) {
        if (hasCompleted) return;
        hasCompleted = true;
        updateResult(index, {
          status: "error",
          stepTitle: `Failed to init: ${err?.message || err}`,
        });
        cleanUpPlayer();
        setCurrentTestIndex((prev) => prev + 1);
      }
    });
  };

  // Compile exact statistics
  const stats = testResults.reduce(
    (acc, curr) => {
      acc.total++;
      if (curr.status === "playable") acc.playable++;
      else if (curr.status === "external-only") acc.externalOnly++;
      else if (curr.status === "unavailable" || curr.status === "error" || curr.status === "timeout") acc.unavailable++;
      else acc.idle++; // Still queued or testing
      return acc;
    },
    { total: 0, playable: 0, externalOnly: 0, unavailable: 0, idle: 0 }
  );

  return (
    <div className="p-6 md:p-10 bg-[#FDFBF7] min-h-screen text-[#2C221E] font-noto">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#EADEC9] pb-5">
          <div>
            <span className="text-xs font-semibold text-[#8E4A23] block mb-1">
              ध्वनि सत्यापन पुरालेख · Audio Acceptance & Playback Audit
            </span>
            <h1 className="font-yatra text-3xl text-[#8E4A23]">लोकगीत अभिलेख परीक्षण कक्ष</h1>
            <p className="text-xs text-[#6B5B52] mt-1">
              Development-only validation tool for actual browser playback and uploader embedding restrictions.
            </p>
          </div>
          <button
            onClick={runAllTests}
            disabled={isRunning}
            className={`px-5 py-2.5 font-semibold text-xs rounded-xl shadow-sm transition-all ${
              isRunning
                ? "bg-[#EADEC9] text-[#7D6B58] cursor-not-allowed"
                : "bg-[#8E4A23] text-white hover:bg-[#6E3214]"
            }`}
          >
            {isRunning ? "परीक्षण जारी है... · Running..." : "परीक्षण प्रारंभ करें · Start Audit"}
          </button>
        </div>

        {/* Hidden Iframe Mountpoint */}
        <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-[#8E4A23]">Active Playback Test Target:</h3>
            <p className="text-xs text-[#6B5B52]">
              Testing occurs below. Iframe is muted to avoid audio disturbance.
            </p>
          </div>
          <div ref={iframeContainerRef} className="border border-[#EADEC9] rounded-xl overflow-hidden bg-black w-[320px] h-[180px] shadow-inner">
            <div id="verify-iframe-placeholder"></div>
          </div>
        </div>

        {/* Live Counts Card */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="p-4 bg-white border border-[#EADEC9] rounded-2xl shadow-sm text-center">
            <span className="text-xs text-[#7D6B58] font-semibold">Total Songs</span>
            <div className="text-2xl font-bold font-mono text-[#2C221E] mt-1">{stats.total}</div>
          </div>
          <div className="p-4 bg-white border border-[#EADEC9] rounded-2xl shadow-sm text-center">
            <span className="text-xs text-emerald-700 font-semibold">Playable</span>
            <div className="text-2xl font-bold font-mono text-emerald-700 mt-1">{stats.playable}</div>
          </div>
          <div className="p-4 bg-white border border-[#EADEC9] rounded-2xl shadow-sm text-center">
            <span className="text-xs text-amber-700 font-semibold">External-only</span>
            <div className="text-2xl font-bold font-mono text-amber-700 mt-1">{stats.externalOnly}</div>
          </div>
          <div className="p-4 bg-white border border-[#EADEC9] rounded-2xl shadow-sm text-center">
            <span className="text-xs text-rose-700 font-semibold">Unavailable</span>
            <div className="text-2xl font-bold font-mono text-rose-700 mt-1">{stats.unavailable}</div>
          </div>
          <div className="p-4 bg-white border border-[#EADEC9] rounded-2xl shadow-sm text-center">
            <span className="text-xs text-[#7D6B58] font-semibold">Queued</span>
            <div className="text-2xl font-bold font-mono text-[#7D6B58] mt-1">{stats.idle}</div>
          </div>
        </div>

        {/* Results table */}
        <div className="overflow-x-auto border border-[#EADEC9] bg-white rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#FAF7F0] border-b border-[#EADEC9] text-[#8E4A23] font-semibold">
                <th className="p-3.5">ID</th>
                <th className="p-3.5">Title</th>
                <th className="p-3.5">Artist</th>
                <th className="p-3.5">YT ID</th>
                <th className="p-3.5 text-center">Artist / Link</th>
                <th className="p-3.5 text-center">iframe</th>
                <th className="p-3.5 text-center">PLAYING Event</th>
                <th className="p-3.5 text-center">Duration</th>
                <th className="p-3.5 text-center">Progress</th>
                <th className="p-3.5 text-center">Playback Events</th>
                <th className="p-3.5">Status</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((res, _i) => (
                <tr key={res.id} className="border-b border-[#EADEC9]/50 hover:bg-[#FAF7F0]/50 transition-colors">
                  <td className="p-3.5 font-mono text-[11px] text-[#7D6B58]">{res.id}</td>
                  <td className="p-3.5 font-semibold text-[#2C221E]">{res.title}</td>
                  <td className="p-3.5 text-[#5C2E16]">{res.artist}</td>
                  <td className="p-3.5 font-mono text-[11px] text-[#7D6B58]">{res.youtubeVideoId || "N/A"}</td>
                  <td className="p-3.5 text-center font-mono font-bold">
                    {res.artistOk && res.videoUrlOk ? (
                      <span className="text-emerald-700">✓</span>
                    ) : (
                      <span className="text-rose-700">✗</span>
                    )}
                  </td>
                  <td className="p-3.5 text-center font-mono text-[11px]">
                    {res.youtubeVideoId ? (res.iframeLoaded ? <span className="text-emerald-700 font-bold">✓</span> : <span className="text-[#7D6B58]">Waiting</span>) : "-"}
                  </td>
                  <td className="p-3.5 text-center font-mono text-[11px]">
                    {res.youtubeVideoId ? (res.playingEventReached ? <span className="text-emerald-700 font-bold">✓</span> : <span className="text-[#7D6B58]">Waiting</span>) : "-"}
                  </td>
                  <td className="p-3.5 text-center font-mono text-[11px]">
                    {res.youtubeVideoId ? (res.durationVal > 0 ? `${Math.floor(res.durationVal)}s` : <span className="text-[#7D6B58]">Waiting</span>) : "-"}
                  </td>
                  <td className="p-3.5 text-center font-mono text-[11px]">
                    {res.youtubeVideoId ? (res.timeProgressionOk ? <span className="text-emerald-700 font-bold">✓</span> : <span className="text-[#7D6B58]">Waiting</span>) : "-"}
                  </td>
                  <td className="p-3.5 text-center font-mono text-[11px]">
                    {res.youtubeVideoId ? (
                      `${res.pauseOk ? "✓" : "—"} / ${res.resumeOk ? "✓" : "—"} / ${res.seekOk ? "✓" : "—"}`
                    ) : "-"}
                  </td>
                  <td className="p-3.5 font-semibold">
                    {res.status === "testing" && (
                      <span className="px-2.5 py-1 bg-amber-50 border border-amber-300 text-amber-800 rounded-md text-[11px] animate-pulse">⚙ {res.stepTitle}</span>
                    )}
                    {res.status === "idle" && (
                      <span className="px-2.5 py-1 bg-[#FAF7F0] border border-[#EADEC9] text-[#7D6B58] rounded-md text-[11px]">Queued</span>
                    )}
                    {res.status === "playable" && (
                      <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-md text-[11px]">Playable</span>
                    )}
                    {res.status === "external-only" && (
                      <span className="px-2.5 py-1 bg-amber-50 border border-amber-300 text-amber-800 rounded-md text-[11px]">External-Only</span>
                    )}
                    {res.status === "unavailable" && (
                      <span className="px-2.5 py-1 bg-rose-50 border border-rose-300 text-rose-800 rounded-md text-[11px]">{res.errorMessage || "Unavailable"}</span>
                    )}
                    {res.status === "error" && (
                      <span className="px-2.5 py-1 bg-rose-50 border border-rose-300 text-rose-800 rounded-md text-[11px]">Error: {res.errorMessage}</span>
                    )}
                    {res.status === "timeout" && (
                      <span className="px-2.5 py-1 bg-orange-50 border border-orange-300 text-orange-800 rounded-md text-[11px]">Timeout</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
