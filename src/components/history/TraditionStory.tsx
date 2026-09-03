import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { exhibitStories } from "../../data/history";
import { BookOpen, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

interface StoryDetail {
  significance: string;
  hindiSignificance: string;
  uncertainty: string;
  hindiUncertainty: string;
}

export const TraditionStory: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const storyDetails: Record<string, StoryDetail> = {
    "exhibit-rama-sita": {
      significance: "Reflects the moral themes of self-purification, devotion, and family reconciliation after overcoming severe crises.",
      hindiSignificance: "लंका विजय और वनवास के पश्चात आत्म-शुद्धि, कठिन तपस्या और दांपत्य व पारिवारिक कल्याण का सर्वोच्च प्रतीक।",
      uncertainty: "This is a sacred narrative tied to the pilgrimage culture of Munger (Kasta Harani Ghat) and is treated as a folk and religious tradition rather than an archaeologically confirmed timeline.",
      hindiUncertainty: "यह मुंगेर के कष्टहरणी घाट की स्थानीय लोक-तीर्थ परंपरा से जुड़ा है। इसे अकादमिक इतिहास के बजाय पारंपरिक विश्वास माना जाता है।"
    },
    "exhibit-karna": {
      significance: "Represents absolute devotion and charity. The act of standing in water to offer Arghya is folklorically tied to Karna's daily discipline.",
      hindiSignificance: "अंगराज कर्ण की अदम्य दानवीरता और सूर्यदेव के प्रति उनके अनन्य समर्पण का प्रतीक। जल में खड़े होकर अर्घ्य देने की शुरुआत इन्हीं से मानी जाती है।",
      uncertainty: "While Bhagalpur (Anga Desh) holds strong traditions linking Karna to the local river banks, there are no independent contemporary inscriptions or archaeological artifacts to prove this as the singular origin of Chhath Puja.",
      hindiUncertainty: "महाभारत कालीन राजा कर्ण से जुड़े होने के कारण भागलपुर में इसकी गहरी मान्यता है, परंतु इसके समकालीन पुरातात्विक साक्ष्य अनुपलब्ध हैं।"
    },
    "exhibit-draupadi": {
      significance: "Symbolizes the power of strict vows (Vrat) to resolve family distress, food crises, and regain lost honor and status.",
      hindiSignificance: "कठिन उपवास (व्रत) की शक्ति द्वारा पारिवारिक संकट निवारण, अन्न संकट का समाधान और खोए हुए मान-सम्मान की पुनर्प्राप्ति का आख्यान।",
      uncertainty: "This legend is preserved in Puranic and Epic scriptures, serving as a theological lesson regarding Solar boons rather than an empirical record of social history.",
      hindiUncertainty: "महाभारत के वनपर्व के धार्मिक आख्यानों में उल्लेखित यह कथा सौर वरदानों की महिमा का लोक-पाठ है, न कि कोई सामाजिक ऐतिहासिक रिकॉर्ड।"
    },
    "exhibit-chhathi-maiya": {
      significance: "Along with the worship of the Sun God, Chhathi Maiya is also worshipped during Chhath. She is addressed as the sister of Surya in folk songs.",
      hindiSignificance: "छठ में सूर्य देव की उपासना के साथ छठी मैया की पूजा भी की जाती है। लोकगीतों में इन्हें प्रेमपूर्वक 'सूर्य की बहन' कहकर पुकारा जाता है।",
      uncertainty: "Folk addresses Chhathi Maiya as Surya's sister. Theological associations overlap with Katyayani (Navratri's 6th form) or Skanda Sashti. The exact mythological identity varies by region.",
      hindiUncertainty: "लोकगीतों की परंपरा में इन्हें प्रेमपूर्वक सूर्य देव की बहन माना गया है, जबकि संस्कृत पुराणों में इन्हें कार्तिकेय की पत्नी देवसेना (षष्ठी देवी) के रूप में निरूपित किया गया है।"
    }
  };

  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 font-inter">
          <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
            Religious Lore &amp; Oral Epics · <span className="font-noto font-normal text-[#7D6B58]">धार्मिक एवं लोक आख्यान</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] mb-3 leading-tight">
            Narratives Sustained Through Generations · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">छठ की लोककथाएं</span>
          </h2>
          <p className="text-xs md:text-sm text-[#6B5B52] leading-relaxed max-w-2xl mx-auto">
            These sacred stories are cherished across family generations. Rather than single historical origin events, they illuminate the moral, devotional, and emotional fabric of Chhath.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-inter">
          {exhibitStories.map((story) => {
            const isExpanded = expandedId === story.id;
            const extra = storyDetails[story.id];

            return (
              <div
                key={story.id}
                className="p-6 border border-[#EADEC9] bg-white rounded-2xl flex flex-col justify-between shadow-sm hover:border-[#8E4A23]/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div>
                  {/* Exhibit Header Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5 border-b border-[#EADEC9] pb-3">
                    <span className="px-2.5 py-0.5 border border-[#EADEC9] bg-[#F4EFE6] text-[10px] text-[#8E4A23] font-semibold rounded-md">
                      Folk &amp; Epic Lore · धार्मिक परंपरा
                    </span>
                    {story.region && (
                      <span className="text-xs text-[#7D6B58]">
                        Region: {story.region} · <span className="font-noto">{story.hindiRegion}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-[#2C221E] mb-1">
                    {story.title}
                  </h3>
                  <span className="font-yatra text-base text-[#8E4A23] block mb-4">
                    {story.hindiTitle}
                  </span>

                  {/* Summary */}
                  <p className="text-xs text-[#5C2E16] leading-relaxed mb-2 font-medium">
                    {story.summary}
                  </p>
                  <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed mb-4">
                    {story.hindiSummary}
                  </p>
                </div>

                {/* Details toggle buttons */}
                <div className="border-t border-[#EADEC9] pt-4 mt-4">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : story.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#8E4A23] hover:text-[#6E3214] transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>Close Exhibit · संक्षिप्त करें</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Read Exhibit Narrative · कथा पढ़ें</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-[#EADEC9] space-y-4 text-xs text-[#5C2E16] leading-relaxed"
                      >
                        {/* Legend text */}
                        <div className="space-y-3">
                          <p className="font-medium text-[#2C221E] leading-relaxed">{story.content}</p>
                          <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-2">
                            {story.hindiContent}
                          </p>
                        </div>

                        {/* Cultural Significance box */}
                        {extra && (
                          <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl space-y-1.5">
                            <h4 className="font-bold text-xs text-[#8E4A23] flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Cultural Significance · सांस्कृतिक महत्व</span>
                            </h4>
                            <p className="text-[#2C221E] font-medium">{extra.significance}</p>
                            <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1.5">
                              {extra.hindiSignificance}
                            </p>
                          </div>
                        )}

                        {/* Academic uncertainty advisory */}
                        {extra && (
                          <div className="p-4 bg-[#FFF8F5] border border-[#EADEC9] rounded-xl space-y-1.5 flex items-start gap-3">
                            <AlertTriangle className="w-4 h-4 text-[#8E4A23] mt-0.5 flex-shrink-0" />
                            <div className="space-y-1">
                              <h4 className="font-bold text-xs text-[#8E4A23]">
                                Historiographical Note · ऐतिहासिक सीमा
                              </h4>
                              <p className="text-[#2C221E] font-medium">{extra.uncertainty}</p>
                              <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1.5">
                                {extra.hindiUncertainty}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Transition link to Chhathi Maiya songs */}
                        {story.id === "exhibit-chhathi-maiya" && (
                          <div className="pt-2 flex justify-start">
                            <Link
                              to="/songs?category=chhathi-maiya"
                              className="inline-flex items-center gap-1.5 text-xs text-[#8E4A23] hover:text-[#6E3214] transition-colors font-semibold"
                            >
                              <span>Listen to Chhathi Maiya Folk Songs · छठी मैया के गीत →</span>
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
