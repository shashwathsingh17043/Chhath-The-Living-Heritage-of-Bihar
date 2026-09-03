import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sun, Moon, Sunrise, Compass } from "lucide-react";

export const SunriseSunsetInteraction: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: "sandhya",
      title: "Sandhya Arghya · संध्या अर्घ्य",
      shortTitle: "Sandhya (Sunset)",
      tagline: "First arghya offered to the setting sun",
      desc: "On the evening of Day 3, devotees stand chest-deep in running river water to honor the setting sun. This globally distinctive rite expresses heartfelt gratitude to fading twilight energy before celebrating the dawn.",
      gradient: "from-[#F35C2B] via-[#E97F36] to-[#1E254A]", // Sunset orange to night indigo
      icon: <Sun className="w-5 h-5" />,
      link: "/four-days/sandhya-arghya"
    },
    {
      id: "ratri",
      title: "Ratri Jagran · रात्रि जागरण",
      shortTitle: "Ratri (Vigil)",
      tagline: "Overnight vigil beneath the sugarcane Kosi canopy",
      desc: "During the night between Day 3 and Day 4, families assemble around pyramidal sugarcane canopies sheltering dozens of terracotta lamps. Choral devotional singing continues uninterrupted until the pre-dawn march.",
      gradient: "from-[#0E172F] via-[#142347] to-[#1B2956]", // Deep night sky indigo
      icon: <Moon className="w-5 h-5" />,
      link: "/four-days/sandhya-arghya"
    },
    {
      id: "bhor",
      title: "Pre-Dawn Twilight · भोर",
      shortTitle: "Bhor (Twilight)",
      tagline: "The movement from starlit darkness toward the first solar ray",
      desc: "Hours before dawn on Day 4, the riverbanks sparkle with thousands of earthen lamps. Devotees wade back into cold river water, standing in patient meditation waiting for the crimson horizon.",
      gradient: "from-[#312244] via-[#5F2C5A] to-[#8C527A]", // Twilight purple & violet
      icon: <Compass className="w-5 h-5" />,
      link: "/four-days/usha-arghya"
    },
    {
      id: "usha",
      title: "Usha Arghya · उषा अर्घ्य",
      shortTitle: "Usha (Sunrise)",
      tagline: "Final arghya to the rising sun & conclusion of the fast",
      desc: "As the golden solar orb ascends over the water, devotees offer milk and water arghya in celebratory triumph. The vrati sips sacred river water to break their 36-hour fast, distributing mahaprasad to all present.",
      gradient: "from-[#F28C28] via-[#E2583E] to-[#F7E79B]", // Sunrise gold & yellow
      icon: <Sunrise className="w-5 h-5" />,
      link: "/four-days/usha-arghya"
    }
  ];

  const currentStep = steps[activeStep];

  return (
    <div className="p-6 md:p-8 bg-white border border-[#EADEC9] rounded-xl shadow-lg font-inter space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#2C221E]">
            One Sacred River, Two Celestial Offerings
          </h3>
          <span className="font-yatra text-base text-[#8E4A23] block">
            एक ही नदी, दो अर्घ्य
          </span>
          <p className="text-xs text-[#7D6B58] mt-1 font-medium">
            The unique cosmological signature of Chhath: honoring twilight departure and dawn renewal in the very same flowing river.
          </p>
        </div>
      </div>

      {/* Interactive Tabs Slider */}
      <div className="flex border-b border-[#EADEC9] text-xs font-semibold overflow-x-auto pb-1 gap-2">
        {steps.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(idx)}
            className={`px-4 py-2 border-b-2 whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
              activeStep === idx
                ? "border-[#8E4A23] text-[#8E4A23]"
                : "border-transparent text-[#7D6B58] hover:text-[#8E4A23]"
            }`}
          >
            {step.icon}
            <span>{step.shortTitle}</span>
          </button>
        ))}
      </div>

      {/* Animated Card View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className={`p-6 md:p-8 rounded-2xl bg-gradient-to-r ${currentStep.gradient} text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative`}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          <div className="space-y-3 relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wider uppercase border border-white/30">
              {currentStep.icon}
              <span>{currentStep.title}</span>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold leading-tight drop-shadow">
              {currentStep.tagline}
            </h4>

            <p className="text-xs md:text-sm text-white/90 leading-relaxed font-medium drop-shadow-sm">
              {currentStep.desc}
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <Link
              to={currentStep.link}
              className="px-6 py-3 bg-white text-[#5C2E16] hover:bg-[#FDFBF7] font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg flex items-center gap-2 min-h-[44px]"
            >
              <span>Explore Ritual Day</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
