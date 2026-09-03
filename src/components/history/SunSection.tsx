import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Leaf, Heart } from "lucide-react";
import { sources } from "../../data/sources";
import { SourceCitation } from "../ui/SourceCitation";

export const SunSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up scroll tracking for scroll-linked Sun rise
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to Sun Y translation (rises as user scrolls down)
  const sunY = useTransform(scrollYProgress, [0, 0.85], [140, -100]);
  // Sun scale and glow pulse based on scroll depth
  const sunScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1]);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0, 0.85, 0.85, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E] overflow-hidden"
    >
      {/* Texture grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Scroll-linked Rising Sun Panel (Left side on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[350px] md:min-h-[450px] border border-[#EADEC9] bg-white rounded-2xl p-6 shadow-sm overflow-hidden order-1 lg:order-1">
            {/* Grid coordinate lines decoration */}
            <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-20">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border-r border-[#EADEC9]" />
              ))}
            </div>

            {/* Title / Compass */}
            <div className="absolute top-4 left-4 text-[10px] font-mono text-[#7D6B58]">
              SOLAR ELEVATION INDEX
            </div>

            {/* The Animating Sun Disk */}
            <motion.div
              style={{
                y: sunY,
                scale: sunScale,
                opacity: sunOpacity,
              }}
              className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full bg-[#D97706]/90 border border-[#D97706]/30 shadow-[0_0_100px_30px_rgba(217,119,6,0.3)] z-0"
            />

            {/* Vector Ganges river waves block (Sun rises behind this) */}
            <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-white via-[#FAF7F0] to-transparent z-10 pointer-events-none">
              <svg
                className="absolute bottom-0 w-full h-full opacity-60 text-[#8E4A23]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
              >
                <path
                  fill="none"
                  stroke="#D9C8AE"
                  strokeWidth="0.8"
                  d="M0,130 C300,180 600,80 900,150 C1200,220 1350,110 1440,140"
                />
                <path
                  fill="none"
                  stroke="#8E4A23"
                  strokeWidth="0.8"
                  d="M0,160 C400,120 700,200 1000,140 C1300,80 1380,180 1440,160"
                />
              </svg>
            </div>

            {/* Interactive Badge Indicator */}
            <div className="relative z-20 text-center space-y-1 mt-auto">
              <span className="font-inter font-bold text-xl text-[#2C221E] block">
                Solar Dawn · <span className="font-yatra font-normal text-lg text-[#8E4A23]">उदय</span>
              </span>
              <span className="font-inter text-xs text-[#7D6B58] block">
                Interactive Dawn Simulation · Scroll to Rise
              </span>
            </div>
          </div>

          {/* Three Dimensions Content (Right side on desktop) */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-2 font-inter">
            <div>
              <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
                Philosophical &amp; Ecological Foundations · <span className="font-noto font-normal text-[#7D6B58]">आध्यात्मिक विवेचना</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] mb-3">
                Why Venerate the Sun? · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">सूर्य क्यों?</span>
              </h2>
              <p className="text-xs md:text-sm text-[#6B5B52] leading-relaxed max-w-xl">
                In Chhath, Surya is not worshipped as an abstract idol, but as the directly visible cosmic force sustaining life (Pratyaksha Devata). This veneration manifests across three key dimensions:
              </p>
            </div>

            {/* Three Dimensions Cards */}
            <div className="space-y-4">
              {/* 1. Religious */}
              <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl flex gap-4 items-start shadow-sm">
                <div className="p-2.5 bg-[#F4EFE6] border border-[#EADEC9] text-[#8E4A23] rounded-xl flex-shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-bold text-base text-[#2C221E]">
                    Devotional Dimension · <span className="font-yatra text-sm text-[#8E4A23] font-normal">धार्मिक आयाम</span>
                  </h3>
                  <p className="text-xs text-[#5C2E16] leading-relaxed">
                    Surya is venerated as the &ldquo;Pratyaksha Devata&rdquo; (the directly visible deity). Vedic philosophy recognizes the Sun as the vitality of the cosmic order. In Chhath, no priests, idols, or intermediaries are required; the devotee stands waist-deep in open water, establishing direct, democratic dialogue with the divine.
                  </p>
                  <p className="text-[11px] text-[#7D6B58] font-noto leading-relaxed border-t border-[#EADEC9] pt-1.5">
                    भगवान सूर्य प्रत्यक्ष देव हैं। बिना किसी पुरोहित या मूर्ति के, भक्त जल में खड़े होकर सीधे सूर्यदेव से संवाद स्थापित करता है।
                  </p>
                </div>
              </div>

              {/* 2. Cultural/Agricultural */}
              <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl flex gap-4 items-start shadow-sm">
                <div className="p-2.5 bg-[#F4EFE6] border border-[#EADEC9] text-[#8E4A23] rounded-xl flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-bold text-base text-[#2C221E]">
                    Agrarian &amp; Seasonal Dimension · <span className="font-yatra text-sm text-[#8E4A23] font-normal">कृषि आयाम</span>
                  </h3>
                  <p className="text-xs text-[#5C2E16] leading-relaxed">
                    In traditional agrarian societies, solar energy governs seasonal cycles and crop productivity. Following the post-monsoon harvest, farming households offer sugarcane, ginger roots, turmeric stalks, and freshly made Thekua in collective gratitude for life-sustaining ecology.
                  </p>
                  <p className="text-[11px] text-[#7D6B58] font-noto leading-relaxed border-t border-[#EADEC9] pt-1.5">
                    धान और गन्ने की कटाई के बाद, किसान नई फसल और फलों का अर्घ्य देकर प्रकृति और सौर ऊर्जा के प्रति सामूहिक कृतज्ञता व्यक्त करते हैं।
                  </p>
                </div>
              </div>

              {/* 3. Symbolic/Ecological */}
              <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl flex gap-4 items-start shadow-sm">
                <div className="p-2.5 bg-[#F4EFE6] border border-[#EADEC9] text-[#8E4A23] rounded-xl flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-bold text-base text-[#2C221E]">
                    Ecological &amp; Philosophical Dimension · <span className="font-yatra text-sm text-[#8E4A23] font-normal">पारिस्थितिक आयाम</span>
                  </h3>
                  <p className="text-xs text-[#5C2E16] leading-relaxed">
                    Solar rays embody purity, photosynthesis, and natural renewal. By offering Arghya to both the setting and rising sun, Chhath expresses profound philosophical maturity: honoring completion as gracefully as initiation, and dusk as tenderly as dawn.
                  </p>
                  <p className="text-[11px] text-[#7D6B58] font-noto leading-relaxed border-t border-[#EADEC9] pt-1.5">
                    डूबते और उगते सूर्य दोनों को नमन करना जीवन के पूर्ण चक्र—अवसान और पुनरुत्थान—को समान श्रद्धा से स्वीकार करने का सर्वोच्च दर्शन है।
                  </p>
                </div>
              </div>
            </div>

            {/* Authoritative Citation for Solar devotion */}
            <SourceCitation sources={[sources[0], sources[4]]} />
          </div>

        </div>
      </div>
    </section>
  );
};
