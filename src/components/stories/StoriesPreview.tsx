import React from "react";
import { Link } from "react-router-dom";
import { storiesData } from "../../data/stories";
import { ArrowRight } from "lucide-react";

export const StoriesPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#EADEC9] text-[#2C221E] font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EADEC9] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold block">
              ORAL TESTIMONIES &amp; FIELD MEMORIES · मौखिक इतिहास
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C221E] font-bold leading-tight">
              Voices of the Living Tradition
            </h2>
            <p className="text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
              Beyond canonical liturgical manuals, Chhath is preserved in the memories of village grandmothers, youths bearing heavy dauras, and families returning home across continents.
            </p>
          </div>

          <Link
            to="/stories"
            className="px-5 py-2.5 border border-[#EADEC9] hover:border-[#8E4A23] bg-white text-xs font-mono uppercase tracking-wider text-[#8E4A23] transition-colors inline-flex items-center gap-2 self-start md:self-end flex-shrink-0"
          >
            <span>All Oral Testimonies · संपूर्ण संस्मरण</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 12-Column Editorial Reading Room */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Quotation-Led Memoir Plates */}
          <div className="lg:col-span-7 space-y-4">
            <div className="border-b border-[#EADEC9] pb-3 flex justify-between items-center text-[10px] font-mono text-[#7D6B58]">
              <span>CURATED FIELD TESTIMONIES</span>
              <span>INDEX: 01 — 03</span>
            </div>

            <div className="space-y-4">
              {storiesData.slice(0, 3).map((story, idx) => (
                <div
                  key={story.id}
                  className="p-6 bg-white border border-[#EADEC9] hover:border-[#8E4A23] transition-colors space-y-3 relative group"
                >
                  <div className="flex justify-between items-center border-b border-[#EADEC9]/60 pb-2">
                    <span className="font-mono text-[10px] font-bold text-[#8E4A23]">
                      MEMOIR RECORD 0{idx + 1} · {story.language.toUpperCase()}
                    </span>
                    <span className="font-mono text-[9px] uppercase text-[#7D6B58]">
                      ACCESSION ID: MEM-{story.id.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2C221E] group-hover:text-[#8E4A23] transition-colors">
                      {story.title}
                    </h3>
                    <span className="font-yatra text-sm text-[#8E4A23] block mt-0.5 font-normal">
                      {story.hindiTitle}
                    </span>
                  </div>

                  <p className="font-serif italic text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
                    &ldquo;{story.description}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-[#EADEC9]/60 flex justify-between items-center text-xs">
                    <span className="font-mono text-[10px] text-[#7D6B58] uppercase">
                      DIALECT: {story.language}
                    </span>
                    <Link
                      to={`/stories/${story.id}`}
                      className="font-mono text-xs uppercase tracking-wider text-[#8E4A23] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Narrative →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Archival Methodology & Submission Invite */}
          <div className="lg:col-span-5 border border-[#EADEC9] bg-white p-6 md:p-8 space-y-6 shadow-sm">
            <div className="border-b border-[#EADEC9] pb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7D6B58]">
                ARCHIVE ETHICS &amp; PRESERVATION
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2C221E]">
              Oral History Preservation Charter
            </h3>

            <div className="space-y-3 text-xs text-[#5C2E16] leading-relaxed">
              <p>
                Our digital archive views personal and familial memories not as secondary anecdotes, but as primary living evidence of cultural continuity.
              </p>
              <p>
                We document how strict vows, fasting disciplines, and ancestral recipes are passed down without written textbooks across generations.
              </p>
            </div>

            <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] space-y-2 text-xs">
              <span className="font-mono text-[9px] uppercase text-[#8E4A23] font-bold block tracking-wider">
                COMMUNITY DEPOSIT POLICY
              </span>
              <p className="text-[11px] text-[#7D6B58] leading-relaxed">
                Families across Bihar and the global diaspora can submit oral memoirs, photographs of ancestral chulhas, and recordings of grandmother hymns.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/stories"
                className="w-full py-3 px-4 bg-[#8E4A23] hover:bg-[#6E3214] text-white font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-between"
              >
                <span>Deposit a Family Memory · संस्मरण दर्ज करें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
