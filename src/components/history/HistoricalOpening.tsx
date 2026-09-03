import React from "react";
import { Info } from "lucide-react";

export const HistoricalOpening: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="p-8 md:p-10 border border-[#EADEC9] bg-white rounded-2xl relative shadow-sm">
          {/* Heading */}
          <h2 className="font-inter font-bold text-2xl md:text-3xl text-[#2C221E] mb-6 text-center leading-tight">
            Chhath Has No Single Origin Date · <span className="font-yatra font-normal text-xl text-[#8E4A23]">छठ की शुरुआत एक तारीख से नहीं</span>
          </h2>

          {/* Advisory Box */}
          <div className="space-y-6">
            <p className="font-inter text-sm md:text-base text-[#2C221E] leading-relaxed text-center font-medium">
              &ldquo;Chhath cannot responsibly be reduced to one exact historical date or a single origin event. Its present form is understood through layered traditions of solar reverence, epic narratives, agrarian cycles, and practices transmitted across generations.&rdquo;
            </p>
            
            <p className="font-noto text-xs md:text-sm text-[#7D6B58] leading-relaxed text-center border-t border-[#EADEC9] pt-4 max-w-3xl mx-auto">
              &ldquo;छठ की ऐतिहासिक यात्रा को किसी एक तारीख या एक घटना में सीमित करना कठिन है। इसकी वर्तमान परंपरा को समझने के लिए सूर्य उपासना, धार्मिक परंपराओं, लोक आस्था और क्षेत्रीय प्रथाओं को अलग-अलग देखना आवश्यक है।&rdquo;
            </p>
          </div>

          {/* Credibility statement */}
          <div className="mt-8 pt-6 border-t border-[#EADEC9] flex flex-col md:flex-row items-start gap-4 text-xs text-[#5C2E16] leading-relaxed bg-[#FAF7F0] p-5 rounded-xl border">
            <div className="p-2 rounded-lg bg-white border border-[#EADEC9] flex-shrink-0">
              <Info className="w-5 h-5 text-[#8E4A23]" />
            </div>
            <div className="space-y-2 font-inter">
              <p className="text-xs text-[#2C221E] font-medium leading-relaxed">
                Chhath connects with longstanding solar traditions of the Indian subcontinent, but the exact evolutionary path of the contemporary festival is complex. Where historical evidence is incomplete, acknowledging historical nuance preserves the scholarly credibility of this archive.
              </p>
              <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1.5">
                छठ पूजा का प्राचीन सूर्योपासना के ग्रंथों से गहरा संबंध है, परंतु समकालीन जन-उत्सव के रूप में इसके क्रमिक विकास की कोई एक सर्वसम्मत तिथि खोजना असंभव है। इतिहास और नृवंशविज्ञान में जहाँ साक्ष्य सीमित हैं, वहाँ इस अनिश्चितता को स्वीकार करना इस प्रलेखन की प्रामाणिकता को सुदृढ़ करता है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
