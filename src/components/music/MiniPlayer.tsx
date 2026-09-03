import React, { useState } from "react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, ListMusic, Check, X, Disc, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { songs } from "../../data/songs";
import { isPlayableInPlaylist } from "../../data/playlistMapping";

export const MiniPlayer: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    isBuffering,
    playerError,
    volume,
    isMuted,
    queue,
    history,
    currentTime,
    duration,
    pause,
    resume,
    skipToNext,
    skipToPrevious,
    seekTo,
    setVolume,
    toggleMute,
    clearQueue,
    removeFromQueue
  } = useAudioPlayer();

  const [showQueue, setShowQueue] = useState<boolean>(false);

  const playableCatalog = songs.filter((s) => s.playbackStatus === "playable" && isPlayableInPlaylist(s.youtubeVideoId));
  const currentIndex = playableCatalog.findIndex((s) => s.id === currentSong?.id);
  const hasNext = queue.length > 0 || (currentIndex !== -1 && currentIndex < playableCatalog.length - 1);
  const hasPrev = history.length > 0 || currentIndex > 0;

  if (!currentSong) return null;

  const handlePlayToggle = () => {
    if (isPlaying) {
      pause();
    } else {
      resume();
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const getDayLabel = (day?: string) => {
    switch (day) {
      case "nahay-khay": return "नहाय-खाय";
      case "kharna": return "खरना";
      case "sandhya-arghya": return "संध्या अर्घ्य";
      case "usha-arghya": return "उषा अर्घ्य";
      default: return "सामान्य";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="fixed bottom-0 inset-x-0 bg-[#FDFBF7]/98 border-t border-[#EADEC9] shadow-[0_-8px_30px_rgba(44,34,30,0.12)] z-50 backdrop-blur-lg text-[#2C221E] font-noto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col gap-2.5">
          
          {/* Progress Slider (Interactive & clickable!) */}
          <div className="w-full flex items-center gap-3 text-[10px] font-mono text-[#7D6B58]">
            <span>{formatTime(currentTime)}</span>
            <div className="flex-1 relative flex items-center group">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={(e) => seekTo(Number(e.target.value))}
                className="w-full h-1 bg-[#EADEC9] rounded-lg appearance-none cursor-pointer accent-[#8E4A23] group-hover:h-1.5 transition-all outline-none"
                aria-label="Track progress slider"
              />
              <div 
                className="absolute left-0 top-0 bottom-0 bg-[#8E4A23] pointer-events-none rounded-lg transition-all"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%`, height: '100%' }}
              />
            </div>
            <span>{formatTime(duration)}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            
            {/* LEFT SIDE: Album art, Title, Artist, Verification Badge */}
            <div className="flex items-center gap-3 min-w-0 flex-1 md:flex-initial">
              <div className="relative w-12 h-12 rounded-lg bg-white overflow-hidden flex-shrink-0 border border-[#EADEC9] flex items-center justify-center shadow-sm">
                {currentSong.thumbnail ? (
                  <img
                    src={currentSong.thumbnail}
                    alt={currentSong.title}
                    className={`w-full h-full object-cover ${isPlaying ? 'animate-[spin_20s_linear_infinite]' : ''}`}
                    style={{ borderRadius: '50%' }}
                    loading="lazy"
                  />
                ) : (
                  <Disc className="w-6 h-6 text-[#8E4A23] animate-spin" />
                )}
                <div className="absolute inset-0 border border-[#EADEC9] rounded-lg pointer-events-none" />
              </div>

              <div className="min-w-0 space-y-0.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="font-yatra text-sm sm:text-base text-[#2C221E] truncate max-w-[160px] sm:max-w-[220px] leading-tight">
                    {currentSong.hindiTitle || currentSong.title}
                  </h4>
                  {playerError ? (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 bg-rose-50 border border-rose-300 text-[8px] text-rose-700 font-semibold rounded">
                      <X className="w-2.5 h-2.5" />
                      <span>{playerError === "embedding restriction" ? "प्रतिबंधित / Restricted" : "त्रुटि / Error"}</span>
                    </span>
                  ) : isBuffering ? (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 bg-amber-50 border border-amber-300 text-[8px] text-amber-800 font-semibold rounded animate-pulse">
                      <span>लोड हो रहा है...</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 bg-emerald-50 border border-emerald-300 text-[8px] text-emerald-800 font-semibold rounded">
                      <Check className="w-2.5 h-2.5" />
                      <span>प्रमाणित</span>
                    </span>
                  )}
                </div>
                {playerError ? (
                  <p className="text-[10px] text-rose-600 font-semibold leading-none mt-0.5">
                    {playerError === "embedding restriction" ? "YouTube पर उपलब्ध (एम्बेड प्रतिबंधित)" : playerError}
                  </p>
                ) : (
                  <p className="text-[11px] text-[#8E4A23] font-semibold tracking-wide leading-none">
                    {currentSong.artist} <span className="font-noto text-[#7D6B58] font-normal">({getDayLabel(currentSong.ritualDay)})</span>
                  </p>
                )}
              </div>
            </div>

            {/* CENTER: Player Navigation Controls */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Prev Button */}
              <button
                onClick={skipToPrevious}
                disabled={!hasPrev}
                className={`p-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#8E4A23] ${
                  !hasPrev 
                    ? "text-[#C8B8A6] cursor-not-allowed" 
                    : "text-[#5C2E16] hover:text-[#8E4A23] hover:bg-[#F4EFE6]"
                } min-h-[44px] min-w-[44px] flex items-center justify-center`}
                aria-label="Previous song"
              >
                <SkipBack className="w-5 h-5 fill-current" />
              </button>

              {/* Play / Pause Toggle or Watch on YouTube */}
              {playerError && currentSong.youtubeUrl ? (
                <a
                  href={currentSong.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#8E4A23] text-white hover:bg-[#6E3214] rounded-lg text-xs font-semibold font-noto transition-all shadow min-h-[44px]"
                >
                  <span>YOUTUBE पर देखें</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={handlePlayToggle}
                  disabled={!!playerError}
                  className={`w-11 h-11 rounded-full ${playerError ? 'bg-[#D9C8AE] text-white cursor-not-allowed' : 'bg-[#8E4A23] text-white hover:scale-105 hover:bg-[#6E3214]'} active:scale-95 transition-all flex items-center justify-center shadow focus:outline-none focus:ring-2 focus:ring-[#8E4A23] min-h-[44px]`}
                  aria-label={isBuffering ? "Loading" : isPlaying ? "Pause" : "Play"}
                >
                  {isBuffering ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  )}
                </button>
              )}

              {/* Next Button */}
              <button
                onClick={skipToNext}
                disabled={!hasNext}
                className={`p-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#8E4A23] ${
                  !hasNext 
                    ? "text-[#C8B8A6] cursor-not-allowed" 
                    : "text-[#5C2E16] hover:text-[#8E4A23] hover:bg-[#F4EFE6]"
                } min-h-[44px] min-w-[44px] flex items-center justify-center`}
                aria-label="Next song"
              >
                <SkipForward className="w-5 h-5 fill-current" />
              </button>
            </div>

            {/* RIGHT SIDE: Volume, Mute, Queue, provided by YT watermark */}
            <div className="hidden md:flex items-center gap-5">
              {/* Volume sliders */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-2 text-[#5C2E16] hover:text-[#8E4A23] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E4A23] rounded"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20 h-1 bg-[#EADEC9] rounded-lg appearance-none cursor-pointer accent-[#8E4A23] focus:outline-none"
                  aria-label="Volume slider"
                />
              </div>

              {/* Queue Button */}
              <div className="relative">
                <button
                  onClick={() => setShowQueue(!showQueue)}
                  className={`p-2 rounded-lg border transition-all flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#8E4A23] min-h-[40px] ${
                    showQueue
                      ? "border-[#8E4A23] text-[#8E4A23] bg-[#FBEFEB]"
                      : "border-[#EADEC9] text-[#5C2E16] hover:border-[#8E4A23] hover:text-[#8E4A23] bg-white"
                  }`}
                  aria-label="Toggle Queue panel"
                >
                  <ListMusic className="w-5 h-5" />
                  {queue.length > 0 && (
                    <span className="bg-[#8E4A23] text-white font-bold font-mono text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center">
                      {queue.length}
                    </span>
                  )}
                </button>

                {/* Desktop Queue Overlay */}
                <AnimatePresence>
                  {showQueue && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute right-0 bottom-14 w-80 bg-[#FDFBF7] border border-[#EADEC9] shadow-2xl rounded-2xl p-4 space-y-3 z-50 text-left text-[#2C221E]"
                    >
                      <div className="flex items-center justify-between border-b border-[#EADEC9] pb-2">
                        <h5 className="font-yatra text-sm text-[#8E4A23]">प्रतीक्षा सूची · Queue</h5>
                        {queue.length > 0 && (
                          <button
                            onClick={clearQueue}
                            className="text-[10px] font-semibold text-[#7D6B58] hover:text-[#8E4A23] focus:outline-none"
                          >
                            सभी हटाएं / Clear
                          </button>
                        )}
                      </div>

                      <div className="max-h-48 overflow-y-auto space-y-2 pr-1 custom-scrollbar text-xs">
                        {queue.length === 0 ? (
                          <p className="text-[11px] text-[#7D6B58] italic py-4 text-center">
                            सूची खाली है / Queue is empty.
                          </p>
                        ) : (
                          queue.map((song, idx) => (
                            <div
                              key={`${song.id}-${idx}`}
                              className="flex items-center justify-between gap-3 p-2 hover:bg-[#F4EFE6] rounded-lg"
                            >
                              <div className="min-w-0">
                                <h6 className="font-bold text-[#2C221E] truncate">{song.hindiTitle || song.title}</h6>
                                <p className="text-[10px] text-[#8E4A23] leading-none mt-0.5">{song.artist}</p>
                              </div>
                              <button
                                onClick={() => removeFromQueue(song.id)}
                                className="text-[10px] text-rose-600 hover:text-rose-700 font-semibold focus:outline-none"
                              >
                                हटाएं
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Mobile Queue Slide-up Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setShowQueue(!showQueue)}
                className={`p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#8E4A23] min-h-[40px] ${
                  showQueue ? 'border-[#8E4A23] text-[#8E4A23] bg-[#FBEFEB]' : 'border-[#EADEC9] text-[#5C2E16] bg-white'
                }`}
                aria-label="Open mobile queue"
              >
                <ListMusic className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Attribution under controls */}
          <div className="text-[9px] text-[#7D6B58] text-center font-noto tracking-wide leading-none mt-0.5">
            प्रसारण स्रोत: YouTube • अधिकृत चैनल: <span className="text-[#8E4A23] font-semibold">{currentSong.sourceChannel || "Verified Channel"}</span>
          </div>

        </div>

        {/* Mobile slide-up bottom sheet queue list */}
        <AnimatePresence>
          {showQueue && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="md:hidden fixed inset-x-0 bottom-[120px] bg-[#FDFBF7] border-t border-[#EADEC9] shadow-2xl rounded-t-2xl p-5 z-40 space-y-4 max-h-[60vh] overflow-hidden flex flex-col text-[#2C221E]"
            >
              <div className="flex items-center justify-between border-b border-[#EADEC9] pb-3">
                <h5 className="font-yatra text-base text-[#8E4A23]">प्रतीक्षा सूची · Play Queue</h5>
                <div className="flex items-center gap-4">
                  {queue.length > 0 && (
                    <button
                      onClick={clearQueue}
                      className="text-xs font-bold text-[#8E4A23]"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    onClick={() => setShowQueue(false)}
                    className="p-1 rounded bg-[#F4EFE6] text-[#5C2E16] hover:text-[#8E4A23] focus:outline-none"
                    aria-label="Close queue"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto space-y-2.5 flex-1 custom-scrollbar text-xs">
                {queue.length === 0 ? (
                  <p className="text-xs text-[#7D6B58] italic py-8 text-center">
                    सूची खाली है / Queue is empty.
                  </p>
                ) : (
                  queue.map((song, idx) => (
                    <div
                      key={`${song.id}-mob-${idx}`}
                      className="flex items-center justify-between gap-3 p-3 bg-[#F4EFE6] rounded-xl border border-[#EADEC9]"
                    >
                      <div className="min-w-0">
                        <h6 className="font-bold text-[#2C221E] truncate text-sm">{song.hindiTitle || song.title}</h6>
                        <p className="text-[11px] text-[#8E4A23] leading-none mt-1">{song.artist}</p>
                      </div>
                      <button
                        onClick={() => removeFromQueue(song.id)}
                        className="text-xs text-rose-600 font-bold focus:outline-none min-h-[36px] px-2"
                      >
                        हटाएं
                      </button>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
