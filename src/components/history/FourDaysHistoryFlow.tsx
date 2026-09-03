import React from "react";
import { Sparkles, Ban, Flame, Sun } from "lucide-react";

interface RitualDayStage {
  dayNum: string;
  hindiTitle: string;
  englishTitle: string;
  meaning: string;
  hindiMeaning: string;
  culturalContext: string;
  hindiCulturalContext: string;
  icon: React.ReactNode;
}

export const FourDaysHistoryFlow: React.FC = () => {
  const stages: RitualDayStage[] = [
    {
      dayNum: "०१",
      hindiTitle: "नहाय-खाय",
      englishTitle: "Nahay-Khay",
      meaning: "शुद्धि और आरंभ / Purification & Beginning",
      hindiMeaning: "व्रत के संकल्प से पूर्व व्रती और संपूर्ण परिवेश की भौतिक व आत्मिक शुद्धि का दिन।",
      culturalContext: "Focuses on external sanitation. Preparing the household and grains in pristine environments to establish a sacred sphere.",
      hindiCulturalContext: "बाह्य स्वच्छता पर ध्यान। पूजा के अनाज और रसोईघर को पूर्णतः पवित्र कर व्रत के लिए सात्विक आधार तैयार करना।",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      dayNum: "०२",
      hindiTitle: "खरना",
      englishTitle: "Kharna",
      meaning: "संयम और प्रसाद / Austerity & Silence",
      hindiMeaning: "निर्जला उपवास के उपरांत संध्या समय गुड़-खीर के भोग द्वारा आंतरिक शुद्धि का चरण।",
      culturalContext: "Represents internal silence and mental focus. Devotees break the fast alone in absolute quietude before starting the dry fast (which for many is an approximately 36-hour nirjala fast).",
      hindiCulturalContext: "आंतरिक शुद्धि और मौन साधना। लगभग 36 घंटे के निर्जला उपवास (जो कि कई व्रतियों द्वारा रखा जाता है) की शुरुआत से पहले व्रती द्वारा एकांत में प्रसाद ग्रहण करना।",
      icon: <Ban className="w-5 h-5" />
    },
    {
      dayNum: "०३",
      hindiTitle: "संध्या अर्घ्य",
      englishTitle: "Sandhya Arghya",
      meaning: "डूबते सूर्य को अर्घ्य / Sunset Gratitude",
      hindiMeaning: "अस्ताचलगामी सूर्य को सूप में महाप्रसाद सजाकर अर्घ्य देने का सामूहिक उत्सव।",
      culturalContext: "Symbolizes collective gratitude to the life-sustainer. Standing in the river, families unite on the banks to worship the setting sun.",
      hindiCulturalContext: "सृष्टि के पालनकर्ता के प्रति सामूहिक कृतज्ञता। डूबते सूर्य देव को नदी की धारा में खड़े होकर अर्घ्य अर्पित करना।",
      icon: <Flame className="w-5 h-5" />
    },
    {
      dayNum: "०४",
      hindiTitle: "उषा अर्घ्य",
      englishTitle: "Usha Arghya",
      meaning: "उगते सूर्य को अर्घ्य / Sunrise Renewal",
      hindiMeaning: "उदीयमान उषा को अर्घ्य देकर व्रत की पूर्णता और लोक-कल्याण की प्रार्थना।",
      culturalContext: "Welcoming new cycles and new beginnings. Breaking the fast and sharing the sanctified Prasad with the community.",
      hindiCulturalContext: "सृष्टि के पुनरुत्थान और नव-प्रकाश का स्वागत। उगते सूर्य देव को अर्घ्य देकर व्रत का समापन करना (जो कि कई व्रतियों के लिए खरना के बाद लगभग 36 घंटे का निर्जला व्रत होता है)।",
      icon: <Sun className="w-5 h-5" />
    }
  ];

  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 font-inter">
          <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
            Sequential Ritual Progression · <span className="font-noto font-normal text-[#7D6B58]">अनुष्ठान की क्रमिक यात्रा</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] mb-3 leading-tight">
            The Four Days — A Sacred Journey · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">चार दिन — एक यात्रा</span>
          </h2>
          <p className="text-xs md:text-sm text-[#6B5B52] leading-relaxed max-w-xl mx-auto">
            The four days of Chhath represent a rigorous spiritual discipline, progressing from domestic purification to universal cosmic communion.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-4xl mx-auto relative font-inter">
          {/* Connecting Vertical Line (Desktop only) */}
          <div className="absolute left-[35px] top-6 bottom-6 w-0.5 bg-[#EADEC9] z-0 hidden md:block" />

          {stages.map((stage) => (
            <div
              key={stage.englishTitle}
              className="p-6 border border-[#EADEC9] bg-white rounded-2xl flex flex-col md:flex-row gap-6 items-start relative z-10 shadow-sm hover:border-[#8E4A23]/50 transition-all duration-300"
            >
              {/* Node Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] border border-[#EADEC9] flex items-center justify-center text-[#8E4A23] flex-shrink-0 shadow-sm relative z-20">
                {stage.icon}
              </div>

              {/* Text Block */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs text-[#8E4A23] bg-[#FBEFEB] border border-[#8E4A23]/30 px-2.5 py-0.5 rounded-md font-semibold">
                    Day {stage.dayNum === "०१" ? "01" : stage.dayNum === "०२" ? "02" : stage.dayNum === "०३" ? "03" : "04"} · दिन {stage.dayNum}
                  </span>
                  <h3 className="font-bold text-xl text-[#2C221E]">
                    {stage.englishTitle}
                  </h3>
                  <span className="font-yatra text-lg text-[#8E4A23]">
                    {stage.hindiTitle}
                  </span>
                </div>

                <div className="text-xs text-[#8E4A23] font-semibold pb-1.5 border-b border-[#EADEC9]">
                  {stage.meaning}
                </div>

                {/* Cultural explanation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                  <p className="text-[#2C221E] leading-relaxed font-medium">
                    {stage.culturalContext}
                  </p>
                  <p className="font-noto text-[#7D6B58] leading-relaxed border-t md:border-t-0 md:border-l border-[#EADEC9] pt-2 md:pt-0 md:pl-4">
                    {stage.hindiCulturalContext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
