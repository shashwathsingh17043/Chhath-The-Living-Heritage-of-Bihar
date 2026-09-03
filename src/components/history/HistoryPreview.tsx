import React from "react";
import { Link } from "react-router-dom";
import { historyEntries } from "../../data/history";
import { SourceCitation } from "../ui/SourceCitation";
import { ArrowRight } from "lucide-react";

export const HistoryPreview: React.FC = () => {
  const getEvidenceBadge = (level: string) => {
    switch (level) {
      case "documented":
        return "DOCUMENTED ARCHIVAL RECORD";
      case "traditional":
        return "LIVING RELIGIOUS TRADITION";
      case "oral":
        return "ORAL HISTORY & FOLKLORE";
      default:
        return "HERITAGE RECORD";
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#EADEC9] text-[#2C221E] font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Asymmetric Header and Overview (12-Column Spread) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* Left Column (5 cols): Historiographical Thesis */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-b border-[#EADEC9] pb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold block">
                HISTORICAL EVIDENCE &amp; ORAL CONTINUITY · इतिहास और परंपरा
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C221E] font-bold leading-tight">
              A Tradition Sustained Across Millennia
            </h2>

            <p className="text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
              Unlike dynastic festivals established by royal decrees, Chhath has no single origin date. It represents an organic syncretism of Vedic solar hymns, nature veneration, and indigenous folk practices preserved through uninterrupted maternal transmission across Bihar and Purvanchal.
            </p>

            <div className="p-5 bg-white border border-[#EADEC9] space-y-2 text-xs">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#8E4A23] font-bold block">
                ARCHIVAL METHODOLOGY NOTE
              </span>
              <p className="text-[#5C2E16] italic leading-relaxed">
                &ldquo;Our archive maintains strict scholarly honesty: distinguishing corroborated epigraphic and archaeological records from beloved devotional mythology.&rdquo;
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/history"
                className="px-6 py-3 bg-[#2C221E] hover:bg-[#8E4A23] text-white font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Read Full History · संपूर्ण इतिहास</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column (7 cols): Documented Historical Milestone Plates */}
          <div className="lg:col-span-7 space-y-4">
            <div className="border-b border-[#EADEC9] pb-3 flex justify-between items-center text-[10px] font-mono text-[#7D6B58]">
              <span>CHRONOLOGICAL FIELD RECORDS</span>
              <span>INDEX: 01 — 03</span>
            </div>

            <div className="space-y-4">
              {historyEntries.slice(0, 3).map((entry, idx) => (
                <div
                  key={entry.id}
                  className="p-6 bg-white border border-[#EADEC9] space-y-4 hover:border-[#8E4A23] transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EADEC9]/60 pb-2">
                    <span className="font-mono text-[10px] font-bold text-[#8E4A23]">
                      PLATE 0{idx + 1} · {entry.period || "ANCIENT ERA"}
                    </span>
                    <span className="font-mono text-[9px] px-2 py-0.5 bg-[#FAF7F0] border border-[#EADEC9] text-[#7D6B58] uppercase">
                      {getEvidenceBadge(entry.evidenceLevel)}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2C221E]">
                      {entry.title}
                    </h3>
                    <span className="font-yatra text-sm text-[#8E4A23] block mt-0.5">
                      {entry.hindiTitle}
                    </span>
                  </div>

                  <p className="text-xs text-[#5C2E16] leading-relaxed">
                    {entry.summary}
                  </p>

                  <div className="pt-2 border-t border-[#EADEC9]/60">
                    <SourceCitation sources={entry.sources} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
