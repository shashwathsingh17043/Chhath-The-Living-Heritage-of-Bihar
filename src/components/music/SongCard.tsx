import React from "react";
import { Play, Plus, Lock, BookOpen } from "lucide-react";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import type { Song } from "../../types/heritage";

interface SongCardProps {
  song: Song;
  layout?: "featured" | "traditional" | "modern" | "unavailable" | "research";
}

export const SongCard: React.FC<SongCardProps> = ({ song, layout }) => {
  const { playSong, addToQueue, currentSong } = useAudioPlayer();

  const isCurrent = currentSong?.id === song.id;

  const handlePlayClick = () => {
    console.log("[song-click] clicked track id:", song.id, "ytId:", song.youtubeVideoId);
    playSong(song, "now");
  };
  
  // Strict playability status derived from explicit playbackStatus
  const isPlayable = song.playbackStatus === "playable";
  const isExternalOnly = song.playbackStatus === "external-only";
  const isUnavailable = song.playbackStatus === "unavailable";

  // Determine layout fallback if none provided
  const activeLayout = layout || (
    isPlayable || isExternalOnly
      ? (song.category === "traditional" || song.category === "folk" ? "traditional" : "modern")
      : (isUnavailable ? "unavailable" : "research")
  );

  const getCategoryLabel = (cat?: string) => {
    switch (cat) {
      case "traditional": return "Traditional · पारंपरिक";
      case "folk": return "Folk · लोक";
      case "surya": return "Surya · सूर्य";
      case "chhathi-maiya": return "Chhathi Maiya · छठी मैया";
      case "arghya": return "Arghya · अर्घ्य";
      case "kosi": return "Kosi · कोसी";
      case "new-generation": return "Contemporary · नई पीढ़ी";
      case "aarti": return "Aarti · आरती";
      default: return "General · सामान्य";
    }
  };

  const getDayLabel = (day?: string) => {
    switch (day) {
      case "nahay-khay": return "Nahay-Khay · नहाय-खाय";
      case "kharna": return "Kharna · खरना";
      case "sandhya-arghya": return "Sandhya Arghya · संध्या अर्घ्य";
      case "usha-arghya": return "Usha Arghya · उषा अर्घ्य";
      default: return "General · सामान्य";
    }
  };

  // Render Layout 1: FEATURED (Large horizontal block, warm paper aesthetic)
  if (activeLayout === "featured") {
    return (
      <div className={`p-6 border rounded-2xl flex flex-col md:flex-row items-center gap-6 transition-all duration-300 relative overflow-hidden group font-inter ${
        isCurrent
          ? "border-[#8E4A23] bg-[#FBEFEB]/60 shadow-md ring-1 ring-[#8E4A23]/30"
          : "border-[#EADEC9] bg-white hover:border-[#8E4A23]/40 shadow-sm"
      }`}>
        {song.thumbnail && (
          <div className="w-full md:w-44 h-44 rounded-xl overflow-hidden flex-shrink-0 border border-[#EADEC9] relative shadow-sm">
            <img
              src={song.thumbnail}
              alt={song.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {isCurrent && (
              <div className="absolute inset-0 bg-[#2C221E]/60 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-wider text-white font-bold animate-pulse bg-[#8E4A23] px-2.5 py-1 rounded">
                  ▶ Now Playing · बज रहा है
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex-1 space-y-3.5 text-left w-full">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              {isPlayable ? (
                <span className="px-2 py-0.5 border border-emerald-300 bg-emerald-50 text-[9px] text-emerald-800 font-semibold rounded">
                  ✓ Verified &amp; Playable · प्रमाणित
                </span>
              ) : (
                <span className="px-2 py-0.5 border border-amber-300 bg-amber-50 text-[9px] text-amber-800 font-semibold rounded">
                  ✓ External Source · बाह्य स्रोत
                </span>
              )}
              <span className="text-[10px] text-[#7D6B58] font-mono">
                Source: {song.sourceChannel || "Official Channel"}
              </span>
            </div>
            <h3 className="font-bold text-2xl text-[#2C221E] leading-tight">
              {song.title}
            </h3>
            {song.hindiTitle && (
              <span className="font-yatra text-lg text-[#8E4A23] block -mt-1">
                {song.hindiTitle}
              </span>
            )}
            <h4 className="text-xs text-[#8E4A23] font-semibold">
              Vocals: {song.artist}
            </h4>
          </div>

          <p className="text-xs text-[#5C2E16] leading-relaxed max-w-xl font-medium">
            {song.description || "Archival cultural recording preserved for digital heritage documentation."}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2.5 border-t border-[#EADEC9]">
            <div className="flex flex-wrap gap-2 text-[10px] text-[#7D6B58]">
              <span className="bg-[#F4EFE6] px-2 py-0.5 rounded border border-[#EADEC9] font-medium">{getCategoryLabel(song.category)}</span>
              <span className="bg-[#F4EFE6] px-2 py-0.5 rounded border border-[#EADEC9] font-medium">{getDayLabel(song.ritualDay)}</span>
              {song.duration && (
                <span className="font-mono text-[#7D6B58] self-center">{song.duration} min</span>
              )}
            </div>

            {/* Play Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {isPlayable ? (
                <>
                  <button
                    onClick={handlePlayClick}
                    data-song-id={song.id}
                    aria-label={`Play ${song.title}`}
                    className="px-5 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold text-xs tracking-wide rounded-lg transition-all flex items-center gap-1.5 shadow focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[44px]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Play Track · सुनें</span>
                  </button>
                  <button
                    onClick={() => addToQueue(song)}
                    aria-label={`Queue ${song.title}`}
                    className="p-2.5 rounded-lg border border-[#EADEC9] text-[#5C2E16] hover:border-[#8E4A23] hover:text-[#8E4A23] bg-white transition-colors flex items-center justify-center focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[44px] min-w-[44px]"
                    title="Add to Queue · कतार में जोड़ें"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <a
                  href={song.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5 shadow min-h-[44px] text-center"
                >
                  <span>Watch on YouTube ↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Layout 2: TRADITIONAL (Warm heritage archival row style)
  if (activeLayout === "traditional") {
    return (
      <div className={`p-4 border rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 relative font-inter ${
        isCurrent
          ? "border-[#8E4A23] bg-[#FBEFEB]/70 shadow-sm"
          : "border-[#EADEC9] bg-white hover:border-[#8E4A23]/40"
      }`}>
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] border border-[#EADEC9] flex items-center justify-center text-[#8E4A23] flex-shrink-0 select-none font-bold text-xs">
            ♪
          </div>

          <div className="min-w-0 space-y-0.5">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base text-[#2C221E] truncate">
                {song.title}
              </h3>
              {song.hindiTitle && (
                <span className="font-yatra text-sm text-[#8E4A23] truncate hidden md:inline">
                  {song.hindiTitle}
                </span>
              )}
              <span className="px-1.5 py-0.2 border border-[#EADEC9] bg-[#F4EFE6] text-[9px] text-[#8E4A23] font-semibold rounded">
                Traditional
              </span>
            </div>
            <p className="text-xs text-[#8E4A23] font-medium">
              {song.artist} · <span className="text-[#7D6B58] text-[11px]">{getCategoryLabel(song.category)}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-end sm:justify-start flex-shrink-0">
          {isPlayable ? (
            <>
              <button
                onClick={handlePlayClick}
                data-song-id={song.id}
                aria-label={`Play ${song.title}`}
                className="p-2 bg-[#8E4A23] text-white hover:bg-[#6E3214] transition-all rounded-lg flex items-center justify-center focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[44px] min-w-[44px] shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
              </button>
              <button
                onClick={() => addToQueue(song)}
                aria-label={`Queue ${song.title}`}
                className="p-2 border border-[#EADEC9] text-[#5C2E16] hover:border-[#8E4A23] hover:text-[#8E4A23] bg-white transition-all rounded-lg flex items-center justify-center focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[44px] min-w-[44px]"
                title="Add to Queue · कतार में जोड़ें"
              >
                <Plus className="w-4 h-4" />
              </button>
            </>
          ) : (
            <a
              href={song.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#8E4A23] text-white hover:bg-[#6E3214] transition-all rounded-lg flex items-center justify-center font-semibold text-xs focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[44px]"
            >
              Watch on YouTube ↗
            </a>
          )}
        </div>
      </div>
    );
  }

  // Render Layout 3: MODERN (Compact clean list row style)
  if (activeLayout === "modern") {
    return (
      <div className={`p-3 border rounded-xl flex items-center justify-between gap-3 transition-all duration-200 relative font-inter ${
        isCurrent
          ? "border-[#8E4A23] bg-[#FBEFEB]/70 shadow-sm"
          : "border-[#EADEC9] bg-white hover:border-[#8E4A23]/30"
      }`}>
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {song.thumbnail ? (
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-[#EADEC9] relative">
              <img src={song.thumbnail} alt={song.title} className="w-full h-full object-cover" loading="lazy" />
              {isCurrent && <div className="absolute inset-0 bg-[#8E4A23]/40 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-white animate-ping" /></div>}
            </div>
          ) : (
            <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] flex-shrink-0 border border-[#EADEC9] flex items-center justify-center text-[#8E4A23] font-bold text-xs">
              ♪
            </div>
          )}

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-[#2C221E] truncate">
              {song.title}
            </h3>
            <p className="text-[11px] text-[#8E4A23] truncate">
              {song.artist} · <span className="text-[#7D6B58]">{getCategoryLabel(song.category)}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          {isPlayable ? (
            <>
              <button
                onClick={handlePlayClick}
                data-song-id={song.id}
                aria-label={`Play ${song.title}`}
                className="p-2 rounded-lg bg-[#8E4A23] text-white hover:bg-[#6E3214] transition-all flex items-center justify-center focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[40px] min-w-[40px] shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
              <button
                onClick={() => addToQueue(song)}
                aria-label={`Queue ${song.title}`}
                className="p-2 rounded-lg border border-[#EADEC9] text-[#5C2E16] hover:border-[#8E4A23] hover:text-[#8E4A23] bg-white transition-all flex items-center justify-center focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[40px] min-w-[40px]"
                title="Add to queue"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <a
              href={song.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#8E4A23] text-white hover:bg-[#6E3214] transition-all flex items-center justify-center font-semibold text-xs focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[40px] text-center"
            >
              YouTube ↗
            </a>
          )}
        </div>
      </div>
    );
  }

  // Render Layout 4: UNAVAILABLE (Muted offline archival entry)
  if (activeLayout === "unavailable") {
    return (
      <div className="p-4 border border-[#EADEC9] bg-[#FAF7F0] rounded-xl flex items-center justify-between gap-4 font-inter select-none shadow-sm">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="w-10 h-10 rounded-lg bg-[#EDE5D8] border border-[#EADEC9] flex items-center justify-center text-[#7D6B58] flex-shrink-0">
            <Lock className="w-4 h-4" />
          </div>

          <div className="min-w-0 space-y-0.5">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-[#2C221E] truncate">{song.title}</h3>
              {song.hindiTitle && (
                <span className="font-yatra text-xs text-[#8E4A23] truncate">
                  {song.hindiTitle}
                </span>
              )}
              <span className="px-1.5 py-0.2 border border-amber-300 bg-amber-50 text-[8px] text-amber-800 font-semibold rounded">
                Playback Unavailable
              </span>
            </div>
            <p className="text-[10px] text-[#7D6B58]">
              {song.artist} · <span className="italic">{song.verificationNote || "Verification pending"}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#EADEC9] bg-white text-[#7D6B58] text-[9px] font-semibold">
          Offline Record
        </div>
      </div>
    );
  }

  // Render Layout 5: RESEARCH (Museum catalogue format with archival description)
  return (
    <div className="p-5 border-l-4 border-l-[#8E4A23] border border-[#EADEC9] bg-white rounded-xl space-y-3 font-inter text-left shadow-sm">
      <div className="flex items-center justify-between border-b border-[#EADEC9] pb-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#8E4A23]" />
          <h4 className="font-bold text-sm text-[#2C221E] truncate max-w-[180px] sm:max-w-[240px]">
            {song.title}
          </h4>
        </div>
        <span className="px-2 py-0.5 border border-[#EADEC9] bg-[#F4EFE6] text-[8px] text-[#8E4A23] font-semibold rounded">
          Research Reference · शोध संदर्भ
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="text-[10px] text-[#8E4A23] font-semibold">
          Artist: {song.artist} · Ritual: {getDayLabel(song.ritualDay)}
        </div>
        <p className="text-xs text-[#5C2E16] leading-relaxed">
          <strong className="text-[#8E4A23]">Archival Context:</strong> {song.description || "Traditional liturgical recording cataloged for textual analysis."}
        </p>
      </div>
    </div>
  );
};
