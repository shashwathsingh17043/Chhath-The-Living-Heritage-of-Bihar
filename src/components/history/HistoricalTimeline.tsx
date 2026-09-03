import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { historyEntries } from "../../data/history";
import { EvidenceBadge } from "../ui/EvidenceBadge";
import { SourceCitation } from "../ui/SourceCitation";
import { ChevronDown, ChevronUp } from "lucide-react";

export const HistoricalTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getEvidenceRationale = (level: string) => {
    switch (level) {
      case "textual":
        return {
          rationale: "Classified as textual because early solar hymns are recorded in Sanskrit Vedas and Puranic manuscripts.",
          hindi: "वर्गीकरण का आधार: प्राचीन वेदों और पुराणों में सूर्य आराधना के लिखित सूक्त होने के कारण इसे साहित्यिक साक्ष्य माना गया है।"
        };
      case "interpreted":
        return {
          rationale: "Classified as interpreted because this reflects the seasonal significance of agricultural cycles.",
          hindi: "वर्गीकरण का आधार: कृषि, पर्यावरण और खगोलीय ऋतु चक्रों का अनुष्ठानों से समन्वय होने के कारण यह व्याख्यात्मक श्रेणी है।"
        };
      case "traditional":
        return {
          rationale: "Classified as religious tradition because it is passed down through epic folklore rather than archaeological proofs.",
          hindi: "वर्गीकरण का आधार: यह रामायण और महाभारत कालीन पात्रों की कथाओं से जुड़ी है जो लोक विश्वास में पूजनीय हैं, न कि पुरातात्विक इतिहास में।"
        };
      case "oral":
        return {
          rationale: "Classified as oral history/folk tradition as the customs are preserved through home songs and regional languages.",
          hindi: "वर्गीकरण का आधार: बिना किसी लिखित ग्रंथ के, यह परंपरा लोकगीतों, माटी के बरतनों और पारिवारिक नियमों में पीढ़ी-दर-पीढ़ी जीवित है।"
        };
      case "documented":
        return {
          rationale: "Classified as documented contemporary practice based on census records, municipal ghat logs, and official tourism files.",
          hindi: "वर्गीकरण का आधार: आधुनिक शहरों के घाटों, संगठित समितियों, और बिहार सरकार के पर्यटन दस्तावेजों के आधार पर यह प्रमाणित समकालीन आचरण है।"
        };
      default:
        return undefined;
    }
  };

  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-inter text-xs text-[#8E4A23] font-semibold mb-2 block">
            Archival Chronology & Evolution · <span className="font-noto font-normal text-[#7D6B58]">कालक्रम एवं इतिहास</span>
          </span>
          <h2 className="font-inter text-3xl md:text-4xl text-[#2C221E] font-bold mb-3 leading-tight">
            Stages of Historical Evolution · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">छठ का क्रमिक विकास</span>
          </h2>
          <p className="font-inter text-xs md:text-sm text-[#6B5B52] leading-relaxed max-w-2xl mx-auto">
            An evidence-based chronology tracing ancient solar traditions, agrarian cycles, and folk transmissions. Tap any evidence badge to inspect the academic classification rationale.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#EADEC9] -translate-x-1/2 hidden xl:block" />

          {/* Left Line (Mobile) */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#EADEC9] xl:hidden" />

          {/* Items stack */}
          <div className="space-y-12 font-inter">
            {historyEntries.map((entry, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedId === entry.id;
              const rationale = getEvidenceRationale(entry.evidenceLevel);

              return (
                <div
                  key={entry.id}
                  className={`flex flex-col xl:flex-row items-stretch gap-6 relative ${
                    isEven ? "xl:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node indicator */}
                  <div className="absolute left-[17px] xl:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#8E4A23] bg-white z-20 top-6 shadow-sm" />

                  {/* Left Side spacer / Content block */}
                  <div className="w-full xl:w-1/2 hidden xl:block" />

                  {/* Timeline Card */}
                  <motion.div
                    layout="position"
                    className="w-full xl:w-1/2 pl-10 pr-4 xl:px-8 relative z-10"
                  >
                    <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm hover:border-[#8E4A23]/50 transition-all duration-300">
                      {/* Evidence Badge row */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <EvidenceBadge
                          level={entry.evidenceLevel}
                          rationale={rationale?.rationale}
                          hindiRationale={rationale?.hindi}
                        />
                        {entry.period && (
                          <span className="px-2.5 py-0.5 border border-[#EADEC9] bg-[#F4EFE6] text-[10px] font-mono text-[#8E4A23] rounded-md font-semibold">
                            {entry.period}
                          </span>
                        )}
                      </div>

                      {/* Heading: English primary */}
                      <div className="space-y-1 mb-3">
                        <h3 className="font-inter font-bold text-xl text-[#2C221E] leading-snug">
                          {entry.title}
                        </h3>
                        <span className="font-yatra text-base text-[#8E4A23] block">
                          {entry.hindiTitle}
                        </span>
                      </div>

                      {/* Summary: English primary */}
                      <p className="text-xs text-[#5C2E16] leading-relaxed mb-2 font-medium">
                        {entry.summary}
                      </p>
                      <p className="text-[11px] text-[#7D6B58] font-noto leading-relaxed">
                        {entry.hindiSummary}
                      </p>

                      {entry.id === "ancient-solar-worship-timeline" && (
                        <div className="mt-4 p-3.5 bg-[#FAF7F0] border border-[#EADEC9] text-xs text-[#5C2E16] rounded-xl leading-relaxed text-left">
                          <strong className="text-[#8E4A23]">Archival Precaution:</strong> Evidence for ancient solar worship provides cultural context, but does not by itself prove the origin or exact contemporary liturgical form of the Chhath festival.
                          <span className="block mt-1 font-noto text-[11px] text-[#7D6B58]">
                            * सूर्योपासना के प्राचीन साक्ष्य छठ के लिए सांस्कृतिक संदर्भ प्रदान करते हैं, यह समकालीन पर्व के उद्गम को स्वतः सिद्ध नहीं करते।
                          </span>
                        </div>
                      )}

                      {/* Expand Button */}
                      <button
                        onClick={() => toggleExpand(entry.id)}
                        className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#8E4A23] hover:text-[#6E3214] transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <span>Close Detailed Exhibit · संक्षिप्त करें</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Expand Detailed Exhibit · विस्तृत विवरण</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      {/* Expanded Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden border-t border-[#EADEC9] mt-5 pt-5 space-y-4"
                          >
                            <div className="space-y-3 text-xs leading-relaxed text-[#2C221E]">
                              <p className="whitespace-pre-line leading-relaxed font-normal">{entry.content}</p>
                              <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-3">
                                {entry.hindiContent}
                              </p>
                            </div>

                            {/* Source Citations */}
                            <SourceCitation sources={entry.sources} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
