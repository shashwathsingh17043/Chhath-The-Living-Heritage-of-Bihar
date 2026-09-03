import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { songs } from "../../data/songs";
import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { ArrowRight, Play, Youtube, Disc } from "lucide-react";
import type { Song } from "../../types/heritage";

export const MusicPreview: React.FC = () => {
  const { playSong } = useAudioPlayer();
  const navigate = useNavigate();

  // Highlight the first verified playlist song as the featured archive track
  const verifiedSongs = songs.filter((s) => s.playbackStatus === "playable");
  const featuredSong = verifiedSongs[0];

  const handlePlaySong = (song: Song) => {
    playSong(song, "now");
    navigate("/songs");
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#EADEC9] text-[#2C221E] font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EADEC9] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold block">
              THE LIVING SOUND ARCHIVE · स्वर धरोहर
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C221E] font-bold leading-tight">
              Devotional Folk Hymns of the Riverbanks
            </h2>
            <p className="text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
              Preserved orally for centuries, Chhath songs (geet) are unhurried, melancholic, and deeply devotional hymns sung primarily in collective choral unison.
            </p>
          </div>

          <Link
            to="/songs"
            className="px-5 py-2.5 border border-[#EADEC9] hover:border-[#8E4A23] bg-white text-xs font-mono uppercase tracking-wider text-[#8E4A23] transition-colors inline-flex items-center gap-2 self-start md:self-end flex-shrink-0"
          >
            <span>Full Sound Archive · संपूर्ण संगीत पुरालेख</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 12-Column Ink-on-Paper Sound Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (7 cols): Featured Archival Record */}
          {featuredSong && (
            <div className="lg:col-span-7 border border-[#EADEC9] bg-white p-6 md:p-8 flex flex-col justify-between shadow-sm space-y-6">
              <div className="space-y-4">
                
                {/* Accession header */}
                <div className="flex justify-between items-center border-b border-[#EADEC9] pb-3 text-[10px] font-mono text-[#7D6B58]">
                  <span className="font-bold text-[#8E4A23]">CATALOG NO: ARCH-GEET-01</span>
                  <span>RECORDING CONTEXT: DEVOTIONAL CLASSIC</span>
                </div>

                {/* Track details */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Stylized Archival Reel Icon */}
                  <div className="w-20 h-20 border border-[#8E4A23] bg-[#FAF7F0] flex items-center justify-center text-[#8E4A23] flex-shrink-0">
                    <Disc className="w-10 h-10 stroke-1" />
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#7D6B58]">
                      FEATURED RECORDING
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2C221E] leading-snug">
                      {featuredSong.title}
                    </h3>
                    {featuredSong.hindiTitle && (
                      <span className="font-yatra text-base text-[#8E4A23] block">
                        {featuredSong.hindiTitle}
                      </span>
                    )}
                    <p className="text-xs text-[#5C2E16] font-semibold">
                      Vocals: {featuredSong.artist}
                    </p>
                  </div>
                </div>

                {/* Curatorial commentary on the recording */}
                <p className="text-xs text-[#5C2E16] leading-relaxed pt-2">
                  {featuredSong.description}
                </p>

                {/* Archival transcription snippet */}
                <div className="p-4 bg-[#FAF7F0] border-l-2 border-[#8E4A23] text-xs space-y-1 text-[#5C2E16]">
                  <span className="font-mono text-[9px] uppercase text-[#8E4A23] font-bold block tracking-wider">
                    POETIC LYRIC TRANSCRIPTION
                  </span>
                  <p className="font-noto italic text-xs leading-relaxed">
                    &ldquo;पहिलहिल हम कयनी, छठी मईया बरत तोहार... करिहा क्षमा छठी मईया, भूल चूक गलती हमार...&rdquo;
                  </p>
                </div>

              </div>

              {/* Playback action bar */}
              <div className="pt-4 border-t border-[#EADEC9] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => handlePlaySong(featuredSong)}
                  className="px-6 py-3 bg-[#8E4A23] hover:bg-[#6E3214] text-white font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Listen in Sound Console · गीत सुनें</span>
                </button>

                <div className="flex items-center gap-2 text-[10px] font-mono text-[#7D6B58]">
                  <Youtube className="w-3.5 h-3.5 text-red-600" />
                  <span>VALIDATED OFFICIAL STREAM</span>
                </div>
              </div>

            </div>
          )}

          {/* Right Column (5 cols): Ethnomusicology Context */}
          <div className="lg:col-span-5 border border-[#EADEC9] bg-white p-6 md:p-8 flex flex-col justify-between shadow-sm space-y-6">
            <div className="space-y-4">
              <div className="border-b border-[#EADEC9] pb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#7D6B58]">
                  ETHNOMUSICOLOGY FIELD NOTES
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#2C221E]">
                The Acoustic Purity of Chhath
              </h3>

              <div className="space-y-3 text-xs text-[#5C2E16] leading-relaxed">
                <p>
                  In traditional domestic settings, Chhath songs are performed without harsh synthetic beats or digital equalization. Women sit together in circles around the earthen stove, their voices blending in natural unadorned polyphony.
                </p>
                <p>
                  The slow, majestic tempo reflects the quiet patience of the fasting vow (tapasya) and the gentle lapping of river waves at twilight and dawn.
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] space-y-2 text-xs">
                <span className="font-mono text-[9px] uppercase text-[#8E4A23] font-bold block tracking-wider">
                  ACOUSTIC TAXONOMY
                </span>
                <div className="space-y-1 text-[11px] text-[#5C2E16]">
                  <div>• <strong>Nahay-Khay Geets:</strong> Cleanliness &amp; vow dedication</div>
                  <div>• <strong>Kharna Geets:</strong> Hearth preparation &amp; quietude</div>
                  <div>• <strong>Ghat March Geets:</strong> Carrying the bamboo daura</div>
                  <div>• <strong>Arghya Geets:</strong> Sun adoration &amp; cosmic prayer</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EADEC9]">
              <Link
                to="/songs"
                className="text-xs font-mono uppercase tracking-wider text-[#8E4A23] hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Enter Musicology Catalog →</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
