import React from "react";
import { HistoryHero } from "../components/history/HistoryHero";
import { HistoricalOpening } from "../components/history/HistoricalOpening";
import { HistoricalTimeline } from "../components/history/HistoricalTimeline";
import { SunSection } from "../components/history/SunSection";
import { RiverSection } from "../components/history/RiverSection";
import { TraditionStory } from "../components/history/TraditionStory";
import { VratiSection } from "../components/history/VratiSection";
import { FourDaysHistoryFlow } from "../components/history/FourDaysHistoryFlow";
import { SunsetSection } from "../components/history/SunsetSection";
import { BiharConnection } from "../components/history/BiharConnection";
import { ModernChhathSection } from "../components/history/ModernChhathSection";
import { WhatWeKnowSection } from "../components/history/WhatWeKnowSection";
import { LivingHeritageSection } from "../components/history/LivingHeritageSection";
import { sources } from "../data/sources";
import { Landmark, Link2 } from "lucide-react";

export const HistoryPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#2C221E]">
      {/* Background grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none z-0" />

      {/* History Panels in order */}
      <HistoryHero />
      <HistoricalOpening />
      <HistoricalTimeline />
      <SunSection />
      <SunsetSection />
      <FourDaysHistoryFlow />
      <RiverSection />
      <TraditionStory />
      <VratiSection />
      <BiharConnection />
      <ModernChhathSection />
      <WhatWeKnowSection />
      <LivingHeritageSection />

      {/* Complete Scholarly Bibliography Register (Sources panel) */}
      <section className="relative py-20 bg-[#F4EFE6] border-t border-[#EADEC9] text-[#2C221E]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 border-b border-[#EADEC9] pb-4 mb-8 text-[#8E4A23]">
            <Landmark className="w-5 h-5" />
            <h2 className="font-inter font-bold text-xl md:text-2xl text-[#8E4A23]">
              Scholarly Bibliography & Sources · <span className="font-yatra font-normal text-lg text-[#5C2E16]">अकादमिक संदर्भ</span>
            </h2>
          </div>
          
          <p className="font-inter text-xs text-[#5C2E16] leading-relaxed mb-8">
            All historical, Vedic, and geographic assertions in this documentation are sourced directly from verified academic research, Archaeological Survey of India (ASI) field reports, and official heritage publications.
          </p>

          <div className="space-y-4">
            {sources.map((source) => (
              <div
                key={source.id}
                className="p-4 border border-[#EADEC9] bg-white rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-xs shadow-sm"
              >
                <div className="space-y-1">
                  <h4 className="font-inter font-semibold text-[#2C221E]">{source.title}</h4>
                  <p className="text-[11px] text-[#7D6B58] font-inter">
                    Publisher: {source.publisher} | Tier: {source.type.toUpperCase()}
                  </p>
                </div>
                {source.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-[#8E4A23] hover:underline font-semibold font-inter"
                  >
                    <span>Verify Source Record</span>
                    <Link2 className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
