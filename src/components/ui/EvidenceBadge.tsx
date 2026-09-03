import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Landmark, BookOpen, AlertCircle, HelpCircle, MessageSquare, X } from "lucide-react";
import type { HistoricalEntry } from "../../types/heritage";

interface EvidenceBadgeProps {
  level: HistoricalEntry["evidenceLevel"];
  rationale?: string;
  hindiRationale?: string;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ level, rationale, hindiRationale }) => {
  const [isOpen, setIsOpen] = useState(false);

  const config = {
    documented: {
      label: "अभिलेखित साक्ष्य / DOCUMENTED EVIDENCE",
      shortLabel: "DOCUMENTED",
      icon: <FileText className="w-3.5 h-3.5" />,
      colorClass: "bg-emerald-950/40 border-emerald-500/60 text-emerald-300",
      definition: "Factual information backed by direct administrative, contemporary historical logs or verified official records.",
      hindiDefinition: "समकालीन ऐतिहासिक अभिलेखों, सरकारी रिकॉर्डों या सत्यापित प्रशासनिक प्रलेखों द्वारा प्रमाणित तथ्य।"
    },
    archaeological: {
      label: "पुरातात्विक संदर्भ / ARCHAEOLOGICAL CONTEXT",
      shortLabel: "ARCHAEOLOGICAL CONTEXT",
      icon: <Landmark className="w-3.5 h-3.5" />,
      colorClass: "bg-amber-950/40 border-amber-600/60 text-amber-300",
      definition: "Physical artifacts, stone inscriptions, structural ruins, and ancient carvings showing historical practices of sun worship.",
      hindiDefinition: "प्राचीन सूर्य मंदिरों, शिलापट्टों या रथ-मूर्तियों के रूप में उपलब्ध भौतिक साक्ष्य जो सूर्य उपासना के इतिहास को दर्शाते हैं।"
    },
    textual: {
      label: "साहित्यिक साक्ष्य / TEXTUAL",
      shortLabel: "TEXTUAL",
      icon: <BookOpen className="w-3.5 h-3.5" />,
      colorClass: "bg-blue-950/40 border-blue-500/60 text-blue-300",
      definition: "Hymns, chants, or written passages preserved in ancient sacred manuscripts, Vedas, and Puranas.",
      hindiDefinition: "प्राचीन हस्तलिपियों, वेदों या संस्कृत पुराणों में लिखित रूप से सुरक्षित सूक्त, श्लोक या धार्मिक विवरण।"
    },
    interpreted: {
      label: "सांस्कृतिक व्याख्या / INTERPRETATION",
      shortLabel: "INTERPRETATION",
      icon: <HelpCircle className="w-3.5 h-3.5" />,
      colorClass: "bg-sky-950/40 border-sky-500/60 text-sky-300",
      definition: "Logical and historical deduction connecting natural agricultural, astronomical, and social patterns to ritual structures.",
      hindiDefinition: "प्राकृतिक कृषि चक्रों, खगोलीय घटनाओं या सामाजिक संरचनाओं का अनुष्ठानों से तार्किक व ऐतिहासिक समन्वय।"
    },
    traditional: {
      label: "धार्मिक परंपरा / RELIGIOUS TRADITION",
      shortLabel: "RELIGIOUS TRADITION",
      icon: <AlertCircle className="w-3.5 h-3.5" />,
      colorClass: "bg-rose-950/40 border-rose-500/60 text-rose-300",
      definition: "Narratives and epic lore passed down through religious texts and epic traditions.",
      hindiDefinition: "धार्मिक ग्रंथों और महाकाव्यों (रामायण व महाभारत) के माध्यम से संचरित पौराणिक आख्यान और विश्वास।"
    },
    oral: {
      label: "मौखिक इतिहास / ORAL HISTORY",
      shortLabel: "ORAL HISTORY",
      icon: <MessageSquare className="w-3.5 h-3.5" />,
      colorClass: "bg-purple-950/40 border-purple-500/60 text-purple-300",
      definition: "Customs, family rules, and songs passed down through spoken memory across generations without written manuals.",
      hindiDefinition: "पीढ़ियों से परिवारों में बिना किसी लिखित रिकॉर्ड के, केवल सुनकर और आचरण करके संजोए गए लोक नियम और लोकगीत।"
    }
  };

  const active = config[level];

  return (
    <>
      {/* Badge Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 border rounded text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-102 ${active.colorClass}`}
        title="View Evidence Level Definition"
      >
        {active.icon}
        <span>{active.shortLabel}</span>
      </button>

      {/* Accessible Detail Dialog Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-indigo/80 backdrop-blur-sm">
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md bg-brand-indigo border border-brand-river rounded-xl shadow-2xl p-6 relative overflow-hidden"
            >
              {/* Vellum texture overlay inside modal */}
              <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full text-brand-ivory/60 hover:text-brand-orange hover:bg-brand-river/30 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2 border-b border-brand-river pb-3 text-brand-orange">
                  {active.icon}
                  <span className="font-playfair text-xs uppercase tracking-widest font-bold">
                    Evidence Level Classification
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-yatra text-lg text-brand-orange leading-snug">{active.label}</h4>
                </div>

                {/* Definition */}
                <div className="space-y-3 pt-2">
                  <p className="font-noto text-xs text-brand-ivory leading-relaxed">
                    {active.hindiDefinition}
                  </p>
                  <p className="font-inter text-[11px] text-brand-ivory/70 leading-relaxed italic border-t border-brand-river/35 pt-2.5">
                    {active.definition}
                  </p>
                </div>

                {/* Specific Rationale for this entry if provided */}
                {(rationale || hindiRationale) && (
                  <div className="mt-4 p-3.5 bg-brand-river/25 border border-brand-river rounded-lg space-y-2">
                    <h5 className="font-playfair text-[9px] uppercase tracking-widest text-brand-orange font-bold">
                      Classification Rationale / वर्गीकरण का आधार
                    </h5>
                    {hindiRationale && (
                      <p className="font-noto text-[11px] text-brand-ivory/90 leading-relaxed">
                        {hindiRationale}
                      </p>
                    )}
                    {rationale && (
                      <p className="font-inter text-[10px] text-brand-ivory/60 italic leading-relaxed">
                        {rationale}
                      </p>
                    )}
                  </div>
                )}

                {/* Footer close option */}
                <div className="pt-2 text-right">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border border-brand-river hover:border-brand-orange text-brand-ivory hover:text-brand-orange font-semibold text-[10px] uppercase tracking-wider transition-colors rounded bg-brand-river/15"
                  >
                    Close Verification
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
