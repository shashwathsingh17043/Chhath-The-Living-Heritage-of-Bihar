import React from "react";
import { Link } from "react-router-dom";
import { rituals } from "../../data/rituals";
import { festivalYears } from "../../data/calendar";
import { ArrowRight, Calendar } from "lucide-react";

export const RitualsPreview: React.FC = () => {
  // Extract 2026 calendar dates
  const year2026 = festivalYears.find((y) => y.year === 2026);

  const getRitualDate = (ritualId: string) => {
    if (!year2026) return "";
    const day = year2026.days.find((d) => d.ritualId === ritualId);
    return day ? day.date : "";
  };

  const getTithi = (dayNum: number) => {
    switch (dayNum) {
      case 1:
        return "Kartik Shukla Chaturthi · चतुर्थी";
      case 2:
        return "Kartik Shukla Panchami · पंचमी";
      case 3:
        return "Kartik Shukla Shashthi · षष्ठी";
      case 4:
        return "Kartik Shukla Saptami · सप्तमी";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#EADEC9] text-[#2C221E] font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EADEC9] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold block">
              THE LITURGICAL SEQUENCE · चार दिवसीय अनुक्रम
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C221E] font-bold leading-tight">
              The Four Days of Chhath
            </h2>
            <p className="text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
              A continuous 4-day pilgrimage moving from domestic self-purification to cosmic communion with the setting and rising sun.
            </p>
          </div>

          <Link
            to="/four-days"
            className="px-5 py-2.5 border border-[#EADEC9] hover:border-[#8E4A23] bg-white text-xs font-mono uppercase tracking-wider text-[#8E4A23] transition-colors inline-flex items-center gap-2 self-start md:self-end flex-shrink-0"
          >
            <span>Complete 4-Day Guide · संपूर्ण अनुक्रम</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Continuous Horizontal Editorial Progression (Not generic card grids) */}
        <div className="border border-[#EADEC9] bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#EADEC9]">
            {rituals.map((ritual) => {
              const dateStr = getRitualDate(ritual.id);
              const tithiStr = getTithi(ritual.dayNumber);

              return (
                <div
                  key={ritual.id}
                  className="p-6 md:p-8 flex flex-col justify-between space-y-6 hover:bg-[#FAF7F0] transition-colors group"
                >
                  <div className="space-y-4">
                    
                    {/* Header meta */}
                    <div className="flex justify-between items-baseline border-b border-[#EADEC9] pb-2">
                      <span className="font-mono text-[11px] font-bold text-[#8E4A23]">
                        DAY 0{ritual.dayNumber}
                      </span>
                      {dateStr && (
                        <span className="font-mono text-[10px] text-[#7D6B58] flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#8E4A23]" />
                          {dateStr}
                        </span>
                      )}
                    </div>

                    {/* Tithi */}
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#7D6B58] block">
                      {tithiStr}
                    </span>

                    {/* Ritual Title */}
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#2C221E] group-hover:text-[#8E4A23] transition-colors">
                        {ritual.title}
                      </h3>
                      <span className="font-yatra text-base text-[#8E4A23] block mt-0.5">
                        {ritual.hindiTitle}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="font-serif italic text-xs text-[#5C2E16] leading-relaxed">
                      &ldquo;{ritual.tagline}&rdquo;
                    </p>

                    {/* Curatorial summary */}
                    <p className="text-xs text-[#5C2E16] leading-relaxed font-normal">
                      {ritual.description}
                    </p>

                    {/* Sacred Prasad Note */}
                    {ritual.keyPrasad && ritual.keyPrasad.length > 0 && (
                      <div className="p-3 bg-[#FDFBF7] border border-[#EADEC9] text-[11px] text-[#5C2E16] space-y-1">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E4A23] font-bold block">
                          SACRED PRASAD
                        </span>
                        <span>{ritual.keyPrasad.join(", ")}</span>
                      </div>
                    )}

                  </div>

                  {/* Editorial Link to Subpage */}
                  <div className="pt-4 border-t border-[#EADEC9]">
                    <Link
                      to={`/four-days/${ritual.id}`}
                      className="text-xs font-mono uppercase tracking-wider text-[#8E4A23] group-hover:text-[#6E3214] font-semibold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Day 0{ritual.dayNumber}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
