import React from "react";
import { Link } from "react-router-dom";
import { heritageObjects } from "../../data/heritage";
import { ArrowRight, Box } from "lucide-react";

export const HeritagePreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#EADEC9] text-[#2C221E] font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EADEC9] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold block">
              MUSEUM ACCESSION &amp; MATERIAL CULTURE · सामग्री दीर्घा
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C221E] font-bold leading-tight">
              Craftsmanship, Earth &amp; Sacred Harvest
            </h2>
            <p className="text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
              Every ceremonial vessel in Chhath is organic, biodegradable, and tied to rural agrarian guilds — from Dom community bamboo weavers to Kumhar terracotta potters.
            </p>
          </div>

          <Link
            to="/heritage"
            className="px-5 py-2.5 border border-[#EADEC9] hover:border-[#8E4A23] bg-white text-xs font-mono uppercase tracking-wider text-[#8E4A23] transition-colors inline-flex items-center gap-2 self-start md:self-end flex-shrink-0"
          >
            <span>Full Artifact Gallery · संपूर्ण दीर्घा</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Museum Exhibition Catalog Plates (3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritageObjects.slice(0, 3).map((obj) => (
            <div
              key={obj.id}
              className="border border-[#EADEC9] bg-white hover:border-[#8E4A23] transition-colors flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Catalog accession number bar */}
                <div className="p-3 bg-[#FAF7F0] border-b border-[#EADEC9] flex justify-between items-center text-[10px] font-mono text-[#7D6B58]">
                  <span className="font-bold text-[#8E4A23]">CAT. REF: CH-{obj.id.toUpperCase()}</span>
                  <span className="uppercase">{obj.category || "CRAFT"}</span>
                </div>

                {/* Museum Display Case Image */}
                <div className="relative aspect-[4/3] bg-[#FDFBF7] border-b border-[#EADEC9] overflow-hidden flex items-center justify-center">
                  {obj.image ? (
                    <img
                      src={obj.image}
                      alt={obj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <Box className="w-12 h-12 text-[#8E4A23]/30" />
                  )}
                  {obj.material && (
                    <div className="absolute bottom-2 left-2 bg-[#2C221E]/80 text-white px-2 py-0.5 text-[9px] font-mono tracking-wider">
                      {obj.material}
                    </div>
                  )}
                </div>

                {/* Narrative & Specifications */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2C221E] group-hover:text-[#8E4A23] transition-colors">
                      {obj.name}
                    </h3>
                    <span className="font-yatra text-sm text-[#8E4A23] block mt-0.5 font-normal">
                      {obj.hindiName}
                    </span>
                  </div>

                  <p className="text-xs text-[#5C2E16] leading-relaxed font-normal">
                    {obj.description.length > 150
                      ? `${obj.description.substring(0, 148)}...`
                      : obj.description}
                  </p>
                </div>
              </div>

              {/* Action link */}
              <div className="p-4 bg-[#FAF7F0] border-t border-[#EADEC9] flex justify-between items-center text-xs">
                <span className="font-mono text-[10px] text-[#7D6B58] uppercase">
                  EXHIBIT RECORD
                </span>
                <Link
                  to={`/heritage/${obj.id}`}
                  className="font-mono text-xs uppercase tracking-wider text-[#8E4A23] group-hover:text-[#6E3214] font-semibold inline-flex items-center gap-1"
                >
                  <span>Examine Plate →</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
