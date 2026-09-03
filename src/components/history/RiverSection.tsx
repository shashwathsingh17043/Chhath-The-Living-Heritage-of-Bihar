import React from "react";
import { Home, Flame, ShoppingBag, Waves, Sun, Compass, ArrowRight } from "lucide-react";
import { sources } from "../../data/sources";
import { SourceCitation } from "../ui/SourceCitation";

interface SpatialStep {
  label: string;
  englishLabel: string;
  title: string;
  hindiTitle: string;
  description: string;
  hindiDescription: string;
  icon: React.ReactNode;
}

export const RiverSection: React.FC = () => {
  const journeySteps: SpatialStep[] = [
    {
      label: "home",
      englishLabel: "Household",
      title: "Preparation at Home",
      hindiTitle: "घर की शुद्धि",
      description: "The ritual begins in the domestic sphere with absolute purification of the home, cleaning and dedicating space.",
      hindiDescription: "व्रत का आरंभ पारिवारिक घेरे में घर की पूर्ण सफाई, पुताई और शुद्धि से होता है जहाँ प्रत्येक कोना सात्विक बनाया जाता है।",
      icon: <Home className="w-5 h-5" />
    },
    {
      label: "kitchen",
      englishLabel: "Sacred Kitchen",
      title: "Earthen Baking",
      hindiTitle: "रसोई और चूल्हा",
      description: "Moving to the kitchen, cooking Prasad (Thekua, Kheer) on clay stoves using mango wood.",
      hindiDescription: "पवित्र रसोई में मिट्टी का नया चूल्हा बनाया जाता है और आम की सूखी लकड़ियों पर पूर्ण मौन रहकर रसियाव व ठेकुआ का निर्माण होता है।",
      icon: <Flame className="w-5 h-5" />
    },
    {
      label: "daura",
      englishLabel: "The Basket",
      title: "Packing the Offerings",
      hindiTitle: "दउरा सजाना",
      description: "Prasad and harvest fruits are arranged into split-bamboo baskets (daura), carried on the head in a silent march.",
      hindiDescription: "सभी प्रसाद और ऋतु फलों को बांस के नए दउरा में सजाया जाता है, जिसे परिवार के सदस्य अपने सिर पर रखकर घाट की ओर प्रस्थान करते हैं।",
      icon: <ShoppingBag className="w-5 h-5" />
    },
    {
      label: "ghat",
      englishLabel: "Riverbank",
      title: "Arrival at the Ghat",
      hindiTitle: "घाट पर प्रवेश",
      description: "Arriving at the communal riverbank. The private family space merges with the grand public gathering.",
      hindiDescription: "गंगा या अन्य नदियों के तट पर पहुँचकर परिवार का निजी अनुष्ठान एक विराट सामाजिक जन-समूह का रूप ले लेता है।",
      icon: <Waves className="w-5 h-5" />
    },
    {
      label: "water",
      englishLabel: "The Stream",
      title: "Standing in Water",
      hindiTitle: "जल में प्रवेश",
      description: "The devotee steps chest-deep into the cold water, connecting directly to the earth and river currents.",
      hindiDescription: "व्रती बहती शीतल धारा में कंठ या छाती तक गहरे उतरती हैं, जो जल तत्व (जीवन के आधार) से सीधे जुड़ाव को प्रदर्शित करता है।",
      icon: <Compass className="w-5 h-5" />
    },
    {
      label: "arghya",
      englishLabel: "The Offering",
      title: "Arghya Presentation",
      hindiTitle: "अर्घ्य समर्पण",
      description: "Holding the bamboo Soop filled with offerings, the devotee presents the Arghya accompanied by traditional prayers.",
      hindiDescription: "बांस के सूप में दीया जलाकर अर्घ्य सामग्री को दोनों हाथों से उठाकर सूर्य मंत्रों और पारंपरिक गीतों के बीच सूर्य देव को अर्पित किया जाता है।",
      icon: <Waves className="w-5 h-5" />
    },
    {
      label: "sun",
      englishLabel: "Solar Union",
      title: "Dawn & Sunset Blessings",
      hindiTitle: "सूर्य सायुज्य",
      description: "The final offering to the rising sun completes the journey, returning the blessings of peace to the home.",
      hindiDescription: "उगते हुए सूर्य देव को अंतिम अर्घ्य देकर यह आध्यात्मिक यात्रा पूर्ण होती है, जिसके उपरांत प्रसाद वितरण कर व्रत समाप्त होता है।",
      icon: <Sun className="w-5 h-5" />
    }
  ];

  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 font-inter">
          <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
            Sacred Spatial Geography · <span className="font-noto font-normal text-[#7D6B58]">भौगोलिक एवं आध्यात्मिक यात्रा</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] mb-3 leading-tight">
            From Home to the Sacred River · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">घर से घाट तक</span>
          </h2>
          <p className="text-xs md:text-sm text-[#6B5B52] leading-relaxed max-w-xl mx-auto">
            A defining attribute of Chhath is its continuous spatial journey: an unbroken spiritual movement flowing from domestic solitude to collective riverbank communion.
          </p>
        </div>

        {/* Advisory Warning: local water source variations */}
        <div className="max-w-3xl mx-auto mb-12 p-4 border border-[#EADEC9] bg-[#FAF7F0] rounded-xl text-xs text-[#5C2E16] font-inter leading-relaxed text-center shadow-sm">
          &ldquo;Rivers, village ponds, local streams, and dedicated waterbodies are utilized according to regional geography and family custom. The core requirement is offering Arghya within living water.&rdquo;
          <span className="font-noto text-[11px] text-[#7D6B58] block mt-1">
            * नदी, तालाब, पोखर और अन्य जलाशय — स्थान और परंपरा के अनुसार।
          </span>
        </div>

        {/* Spatial Progression Roadmap */}
        <div className="relative mt-8 font-inter">
          {/* Timeline Path Line (Desktop) */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#EADEC9] -translate-y-1/2 hidden xl:block z-0" />
          
          {/* Timeline Path Line (Mobile) */}
          <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-[#EADEC9] xl:hidden z-0" />

          {/* Steps Cards Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-7 gap-6 relative z-10">
            {journeySteps.map((step, idx) => (
              <div
                key={step.label}
                className="flex xl:flex-col items-start xl:items-center text-left xl:text-center group p-4 border border-[#EADEC9] bg-white rounded-2xl shadow-sm hover:border-[#8E4A23]/50 transition-all duration-300"
              >
                {/* Visual Step Marker */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[#F4EFE6] border border-[#EADEC9] text-[#8E4A23] shadow-sm z-10 flex-shrink-0">
                  {step.icon}
                  {/* Arrow Indicator between nodes (Desktop only) */}
                  {idx < journeySteps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-[#8E4A23]/60 hidden xl:block z-20">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="ml-4 xl:ml-0 xl:mt-3 flex-1">
                  <div className="flex xl:flex-col xl:items-center items-baseline gap-1">
                    <span className="font-bold text-sm text-[#2C221E]">
                      {step.title}
                    </span>
                    <span className="font-yatra text-xs text-[#8E4A23]">
                      {step.hindiTitle}
                    </span>
                  </div>
                  <p className="text-xs text-[#5C2E16] mt-1.5 leading-relaxed max-w-[220px] xl:mx-auto font-medium">
                    {step.description}
                  </p>
                  <p className="font-noto text-[10px] text-[#7D6B58] mt-1 leading-relaxed max-w-[220px] xl:mx-auto">
                    {step.hindiDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification citation for water/river structures */}
        <div className="mt-16 max-w-4xl mx-auto">
          <SourceCitation sources={[sources[0]]} />
        </div>

      </div>
    </section>
  );
};
