import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-end justify-center overflow-hidden font-sans border-b border-[#D8C5AF]">
      {/* Background Documentary Photograph */}
      <img
        src="/assets/images/chhath-puja-1730718298.webp"
        alt="Devotees offering Arghya at dawn standing in river waters with bamboo soop offerings"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] md:object-[center_30%] scale-102 transition-transform duration-1000"
        loading="eager"
      />

      {/* Restrained cinematic gradient overlay for high text contrast while preserving image luminance */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#173E4F] via-[#2B1B16]/75 to-[#173E4F]/35 z-10" />

      {/* Subtle tactile grain */}
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none z-10" />

      {/* Ambient sunrise radial glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#E97824]/20 via-[#F1B84B]/10 to-transparent rounded-full blur-3xl pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full pt-32 pb-16 md:pb-20">
        <div className="max-w-4xl space-y-6">
          
          {/* Documentary Folio Metadata Plate */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#2B1B16]/80 backdrop-blur-sm border border-[#D8C5AF]/40 text-[#FFF8EC] text-xs font-mono rounded-sm">
            <span className="w-2 h-2 rounded-full bg-[#E97824] animate-pulse" />
            <span className="text-[#F1B84B] font-bold uppercase tracking-widest text-[11px]">
              DOCUMENTARY FOLIO 01
            </span>
            <span className="text-[#D8C5AF]/50">•</span>
            <span className="text-[#FFF8EC]/90 text-[11px] font-hindi">
              कार्तिक शुक्ल षष्ठी · Living Riparian Heritage
            </span>
          </div>

          {/* Bilingual Title Copy */}
          <div className="space-y-2">
            <span className="font-hindi text-xl sm:text-2xl md:text-3xl text-[#F1B84B] font-semibold block leading-normal py-1 tracking-normal">
              छठ — सूर्य, जल और सामूहिक आस्था का महापर्व
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFF8EC] tracking-tight leading-[1.05]">
              Chhath — A Living Celebration of Sun, Water and Devotion
            </h1>
          </div>

          {/* Concise Curatorial Introduction */}
          <p className="text-base sm:text-lg md:text-xl text-[#FFF8EC]/90 max-w-2xl font-normal leading-relaxed">
            A living digital heritage archive dedicated to Bihar’s ancient solar pilgrimage, sacred riparian ghats, austere fasting vows, and priestless, democratic devotion.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
            <Link
              to="/four-days"
              className="px-6 py-3.5 bg-[#E97824] hover:bg-[#F1B84B] text-[#2B1B16] font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-[#E97824]/20 border border-[#E97824] hover:border-[#F1B84B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173E4F] rounded-sm min-h-[44px]"
            >
              <span>Experience the Four Days · चार दिन</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#introduction"
              className="px-6 py-3.5 bg-[#FFF8EC]/10 hover:bg-[#FFF8EC]/20 text-[#FFF8EC] font-semibold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2 border border-[#FFF8EC]/50 hover:border-[#FFF8EC] backdrop-blur-xs focus-visible:ring-2 focus-visible:ring-[#E97824] rounded-sm min-h-[44px]"
            >
              <span>Explore the Living Archive · पुरालेख</span>
            </a>
          </div>

          {/* Archival documentary image caption */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#FFF8EC]/20 text-[11px] font-mono text-[#FFF8EC]/75">
            <div>
              <span>DOCUMENTARY IMAGE: Devotees offering Arghya at dawn in river waters</span>
            </div>
            <div className="hidden sm:block">
              <span>LOCATION CONTEXT: BIHAR RIPARIAN BASIN</span>
            </div>
          </div>

        </div>

        {/* Subtle Scroll Indicator */}
        <div className="pt-8 flex justify-center">
          <a
            href="#introduction"
            className="flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest text-[#FFF8EC]/70 hover:text-[#FFF8EC] transition-colors focus-visible:ring-2 focus-visible:ring-[#E97824] p-1 rounded"
            aria-label="Scroll down to Introduction section"
          >
            <span className="uppercase text-[10px]">Scroll to Begin Journey · नीचे देखें</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
