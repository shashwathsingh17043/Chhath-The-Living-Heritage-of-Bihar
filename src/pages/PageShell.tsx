import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, AlertCircle, Utensils, Calendar } from "lucide-react";
import { rituals } from "../data/rituals";
import { festivalYears } from "../data/calendar";

export const PageShell: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const year2026 = festivalYears.find((y) => y.year === 2026);
  const getRitualDate = (ritualId: string) => {
    if (!year2026) return "";
    const day = year2026.days.find((d) => d.ritualId === ritualId);
    return day ? day.date : "";
  };

  // Render content based on route matching
  const renderContent = () => {
    // 1. INDIVIDUAL RITUAL DAYS
    if (path.startsWith("/four-days/")) {
      const ritualId = path.split("/").pop();
      const ritual = rituals.find((r) => r.id === ritualId);

      if (!ritual) return renderNotFound();

      const dateStr = getRitualDate(ritual.id);

      return (
        <div className="space-y-8 font-inter">
          {/* Folio Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EADEC9] pb-3 text-[10px] font-mono text-[#7D6B58]">
            <div className="flex items-center gap-2">
              <span className="text-[#8E4A23] font-bold uppercase tracking-widest">
                LITURGICAL FOLIO 0{ritual.dayNumber}
              </span>
              <span>•</span>
              <span className="uppercase">RITUAL STAGE DOCUMENTATION</span>
            </div>
            {dateStr && (
              <div className="flex items-center gap-1.5 text-[#8E4A23] font-bold">
                <Calendar className="w-3 h-3" />
                <span>OBSERVED: {dateStr} (2026)</span>
              </div>
            )}
          </div>

          <div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C221E] tracking-tight leading-tight">
              {ritual.title}
            </h1>
            <span className="font-yatra text-2xl md:text-3xl text-[#8E4A23] block mt-1 font-normal">
              {ritual.hindiTitle}
            </span>
          </div>

          {ritual.imageMeta?.url && (
            <div className="border border-[#EADEC9] bg-[#FAF7F0] p-3 shadow-sm max-w-3xl">
              <div className="relative aspect-video overflow-hidden border border-[#EADEC9] bg-stone-100">
                <img
                  src={ritual.imageMeta.url}
                  alt={ritual.imageMeta.alt || ritual.title}
                  className="w-full h-full object-cover filter contrast-[1.02]"
                />
              </div>
              <div className="mt-2 px-1 text-[9px] font-mono text-[#7D6B58] flex justify-between items-center">
                <span>CREDIT: {ritual.imageMeta.credit}</span>
                <span>{ritual.imageMeta.imageSource}</span>
              </div>
            </div>
          )}

          <div className="p-5 border-l-2 border-[#8E4A23] bg-[#FAF7F0] border-y border-r border-[#EADEC9] text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
            <p className="font-serif italic font-medium">&ldquo;{ritual.tagline}&rdquo;</p>
            {ritual.hindiTagline && (
              <p className="font-noto text-xs text-[#7D6B58] mt-1 italic">&ldquo;{ritual.hindiTagline}&rdquo;</p>
            )}
          </div>

          <div className="text-xs sm:text-sm text-[#2C221E] leading-relaxed space-y-4 max-w-3xl">
            <p className="font-normal text-[#2C221E]">{ritual.description}</p>
            <p className="font-noto text-xs text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-3">
              {ritual.hindiDescription}
            </p>
          </div>

          {/* Prasad details */}
          {ritual.keyPrasad && (
            <div className="p-5 border border-[#EADEC9] bg-[#FAF7F0] space-y-3 max-w-xl">
              <h3 className="font-serif text-sm font-bold text-[#8E4A23] flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                <span>Primary Offerings &amp; Prasad · मुख्य महाप्रसाद</span>
              </h3>
              <ul className="list-disc list-inside text-xs text-[#5C2E16] space-y-1.5">
                {ritual.keyPrasad.map((p, i) => (
                  <li key={i} className="leading-relaxed">
                    <span className="font-semibold text-[#2C221E]">{p}</span>{" "}
                    {ritual.hindiKeyPrasad?.[i] && (
                      <span className="text-[11px] text-[#7D6B58] font-noto">
                        · {ritual.hindiKeyPrasad[i]}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links to kitchen and objects */}
          <div className="pt-4 border-t border-[#EADEC9] flex flex-wrap gap-4 text-xs font-mono">
            {ritual.id === "kharna" && (
              <Link
                to="/kitchen"
                className="text-[#8E4A23] hover:underline font-semibold"
              >
                Explore Sacred Kharna Kitchen · खरना रसोई →
              </Link>
            )}
            {ritual.id === "sandhya-arghya" && (
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/heritage/daura"
                  className="text-[#8E4A23] hover:underline font-semibold"
                >
                  Explore Daura Basket →
                </Link>
                <Link
                  to="/heritage/soop"
                  className="text-[#8E4A23] hover:underline font-semibold"
                >
                  Explore Soop Winnow →
                </Link>
                <Link
                  to="/ghats"
                  className="text-[#8E4A23] hover:underline font-semibold"
                >
                  Explore Sacred Ghats →
                </Link>
              </div>
            )}
            {ritual.id === "usha-arghya" && (
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/kitchen"
                  className="text-[#8E4A23] hover:underline font-semibold"
                >
                  Prasad &amp; Morning Tradition →
                </Link>
                <Link
                  to="/ghats"
                  className="text-[#8E4A23] hover:underline font-semibold"
                >
                  Ghats &amp; Dawn Celebration →
                </Link>
              </div>
            )}
          </div>
        </div>
      );
    }

    // 2. GENERAL RITUALS INDEX
    if (path === "/four-days") {
      return (
        <div className="space-y-8 font-inter">
          <div className="border-b border-[#EADEC9] pb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold block mb-1">
              THE 4-DAY LITURGICAL PROGRESSION · चार दिवसीय अनुक्रम
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C221E] tracking-tight leading-tight">
              The Four Days of Chhath
            </h1>
            <span className="font-yatra text-2xl text-[#8E4A23] block mt-1 font-normal">
              छठ के चार पावन दिन
            </span>
            <p className="text-xs sm:text-sm text-[#5C2E16] max-w-2xl mt-3 leading-relaxed font-normal">
              Chhath Puja is observed across four continuous days of physical purification, severe fasting vows, and unmediated solar devotion along the riverbanks of Bihar.
            </p>
          </div>

          <div className="space-y-4">
            {rituals.map((r) => {
              const dateStr = getRitualDate(r.id);
              return (
                <div
                  key={r.id}
                  className="p-6 border border-[#EADEC9] bg-[#FAF7F0] hover:border-[#8E4A23] transition-colors flex flex-col md:flex-row gap-6 items-start group"
                >
                  <div className="w-14 h-14 bg-white border border-[#EADEC9] flex items-center justify-center font-mono font-bold text-base text-[#8E4A23] flex-shrink-0">
                    0{r.dayNumber}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#EADEC9]/60 pb-1.5">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-serif font-bold text-xl text-[#2C221E] group-hover:text-[#8E4A23] transition-colors">
                          {r.title}
                        </h3>
                        <span className="font-yatra text-base text-[#8E4A23] font-normal">
                          {r.hindiTitle}
                        </span>
                      </div>
                      {dateStr && (
                        <span className="font-mono text-[10px] text-[#7D6B58] flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#8E4A23]" />
                          {dateStr}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5C2E16] leading-relaxed font-normal">
                      {r.description}
                    </p>
                    <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed italic">
                      {r.hindiDescription}
                    </p>
                    <div className="pt-2">
                      <Link
                        to={`/four-days/${r.id}`}
                        className="font-mono text-xs uppercase tracking-wider text-[#8E4A23] hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        <span>Examine Day 0{r.dayNumber} Liturgy →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // 3. ARCHIVAL CURATION SHELLS (Gallery, About)
    const shellTitles: Record<string, { hi: string; en: string; desc: string }> = {
      "/gallery": {
        hi: "चित्रशाला और दृश्य विरासत",
        en: "Visual Archive & Photographic Exhibition",
        desc: "A documentary photographic curation capturing the authentic atmosphere, craft traditions, and sunrise congregations of Chhath across Bihar."
      },
      "/about": {
        hi: "अभिलेख के बारे में",
        en: "About the Living Heritage Archive",
        desc: "A public digital museum established to preserve, contextualize, and share the profound unmediated devotion of Chhath for students, scholars, and global visitors."
      }
    };

    const curShell = shellTitles[path];
    if (curShell) {
      return (
        <div className="space-y-6 font-inter">
          <div className="border-b border-[#EADEC9] pb-3 text-[10px] font-mono text-[#7D6B58] flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#8E4A23]" />
            <span className="uppercase tracking-widest text-[#8E4A23] font-bold">
              DIGITAL CURATION FOLIO
            </span>
          </div>

          <div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C221E] tracking-tight leading-tight">
              {curShell.en}
            </h1>
            <span className="font-yatra text-2xl text-[#8E4A23] block mt-1 font-normal">
              {curShell.hi}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#5C2E16] leading-relaxed max-w-2xl">
            {curShell.desc}
          </p>

          <div className="p-5 border border-[#EADEC9] bg-[#FAF7F0] space-y-2">
            <div className="flex items-center gap-2 text-[#8E4A23]">
              <AlertCircle className="w-4 h-4" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider">
                Living Archive Notice · संकलन सूचना
              </h3>
            </div>
            <p className="text-xs text-[#5C2E16] leading-relaxed">
              This digital archive is curated continuously through academic field interviews, ethnographic photography, and public oral history submissions across Bihar.
            </p>
          </div>
        </div>
      );
    }

    return renderNotFound();
  };

  const renderNotFound = () => (
    <div className="text-center py-16 space-y-4 font-inter">
      <h1 className="font-serif text-2xl font-bold text-[#8E4A23]">
        Folio Not Cataloged · अनुभाग अप्राप्य
      </h1>
      <p className="text-xs text-[#7D6B58]">
        The requested exhibit entry does not exist in the digital museum directory.
      </p>
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-wider text-[#8E4A23] hover:underline inline-block font-semibold"
      >
        ← Return to Main Archive
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C221E] pt-28 pb-20 relative font-inter">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 space-y-6">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#8E4A23] hover:text-[#6E3214] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return to Archive Collection · मुख्यपृष्ठ</span>
          </Link>
        </div>

        {/* Archival Folio Presentation Plate */}
        <div className="bg-white border border-[#EADEC9] p-6 md:p-10 shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
