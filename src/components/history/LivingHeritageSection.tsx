import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Music, Utensils, Box, Waves, MessageSquare } from "lucide-react";

export const LivingHeritageSection: React.FC = () => {
  const links = [
    {
      label: "गीत अभिलेखागार",
      englishLabel: "Sound Archive",
      path: "/songs",
      icon: <Music className="w-5 h-5" />,
      desc: "Sacred folk songs transmitting ritual sequence and emotional memory."
    },
    {
      label: "विरासत वस्तुएं",
      englishLabel: "Material Culture",
      path: "/heritage",
      icon: <Box className="w-5 h-5" />,
      desc: "Woven bamboo soop, daura, clay lamps, and organic ritual crafts."
    },
    {
      label: "पवित्र रसोई",
      englishLabel: "Sacred Kitchen",
      path: "/kitchen",
      icon: <Utensils className="w-5 h-5" />,
      desc: "Traditional wood-fired preparations of Thekua, Rasiyaav, and Kharna."
    },
    {
      label: "घाट एवं भूगोल",
      englishLabel: "Ghats & Waters",
      path: "/ghats",
      icon: <Waves className="w-5 h-5" />,
      desc: "Sacred riverbanks, temple kundas, and historic waterbodies across Bihar."
    },
    {
      label: "मौखिक संस्मरण",
      englishLabel: "Oral Histories",
      path: "/stories",
      icon: <MessageSquare className="w-5 h-5" />,
      desc: "Living family memories, maternal recollections, and household traditions."
    }
  ];

  return (
    <section className="relative py-28 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 font-inter">
        
        {/* Main central message */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
            Living Continuity · <span className="font-noto font-normal text-[#7D6B58]">जीवंत परंपरा और निरंतरता</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            Chhath Lives Today · <span className="font-yatra text-3xl md:text-4xl text-[#8E4A23] font-normal">छठ आज भी जीवित है</span>
          </h2>
          <p className="text-sm md:text-base text-[#5C2E16] leading-relaxed max-w-2xl mx-auto pt-3">
            Heritage does not reside merely in archived manuscripts; it breathes in the living conduct of the people who observe it year after year. Chhath endures through its melodies, handcrafted prasad, woven bamboo baskets, and the quiet dignity of prayer in river waters.
          </p>
          <div className="h-[2px] w-20 bg-[#8E4A23] mx-auto mt-6" />
        </div>

        {/* Dynamic transition board grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group p-6 border border-[#EADEC9] bg-white hover:border-[#8E4A23]/50 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative h-full"
            >
              <div>
                {/* Icon box */}
                <div className="w-11 h-11 rounded-xl bg-[#F4EFE6] border border-[#EADEC9] flex items-center justify-center text-[#8E4A23] group-hover:text-white group-hover:bg-[#8E4A23] transition-colors mb-5">
                  {link.icon}
                </div>

                <h3 className="font-bold text-base text-[#2C221E] group-hover:text-[#8E4A23] transition-colors">
                  {link.englishLabel}
                </h3>
                <span className="font-yatra text-sm text-[#8E4A23] block mb-3 font-normal">
                  {link.label}
                </span>

                <p className="text-xs text-[#5C2E16] leading-relaxed mb-6 font-normal">
                  {link.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8E4A23] group-hover:text-[#6E3214] transition-colors">
                <span>Explore Section · अन्वेषण करें</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
