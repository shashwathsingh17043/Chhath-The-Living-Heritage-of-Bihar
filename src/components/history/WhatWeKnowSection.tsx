import React from "react";
import { CheckCircle, HelpCircle } from "lucide-react";

export const WhatWeKnowSection: React.FC = () => {
  const whatWeKnow = [
    {
      en: "Chhath Puja is the foremost living festival of Bihar and eastern India (Purvanchal and Nepal's Terai regions).",
      hi: "छठ पूजा बिहार, पूर्वांचल और नेपाल के तराई क्षेत्रों का प्रमुख लोक पर्व है।"
    },
    {
      en: "Devotees observe a strict four-day ritual discipline: Nahay Khay, Kharna, Sandhya Arghya, and Usha Arghya.",
      hi: "चार दिवसीय अनुष्ठान: नहाय-खाय, खरना, संध्या अर्घ्य और उषा अर्घ्य का क्रमिक पालन।"
    },
    {
      en: "At its core is the direct, unmediated veneration of the visible Sun deity (Bhaskar · भगवान भास्कर).",
      hi: "बिना किसी पुरोहित मध्यस्थता के प्रत्यक्ष सूर्य देव की उपासना।"
    },
    {
      en: "It uniquely reveres both the setting (Sandhya) and the rising (Usha) solar transitions.",
      hi: "अस्तगामी और उदीयमान—दोनों सूर्य को अर्घ्य देने की विश्व-प्रसिद्ध अनूठी परंपरा।"
    },
    {
      en: "Sacred rivers, village ponds, and ghats serve as the democratic, community-wide ritual space.",
      hi: "पवित्र नदियाँ, तालाब और घाट इस पर्व के प्रमुख सामाजिक व धार्मिक आयोजन स्थल हैं।"
    },
    {
      en: "Oral folk songs, homemade Thekua (ठेकुआ), woven bamboo soop-daura (सूप-दउरा), and absolute domestic purity form its living pillars.",
      hi: "पारंपरिक लोकगीत, शुद्ध घी-गुड़ का ठेकुआ, बांस के सूप-दउरा और पारिवारिक शुद्धता इसके जीवंत स्तम्भ हैं।"
    }
  ];

  const questionsUnresolved = [
    {
      en: "The exact century when the four-day ritual sequence coalesced into its modern form remains undocumented by hard epigraphic dates.",
      hi: "समकालीन चार दिवसीय अनुष्ठान के विशिष्ट नियमों का क्रमिक विकास कब हुआ, इस पर कोई ठोस अभिलेखित तिथि नहीं है।"
    },
    {
      en: "How local variations across Magadh, Mithila, and Bhojpur heartlands evolved possesses limited early written documentation.",
      hi: "मगध, मिथिला और भोजपुर अंचलों की स्थानीय प्रथाओं में विविधता के प्रारंभिक लिखित साक्ष्य सीमित हैं।"
    },
    {
      en: "The historical standardization of standing waist-deep in water for Arghya offerings remains an active anthropological inquiry.",
      hi: "जल में खड़े होकर अर्घ्य देने के विशिष्ट नियम कब सार्वभौमिक रूप से मानकीकृत हुए, इस पर शोध जारी है।"
    },
    {
      en: "The historical transmission pathway connecting epic narratives (Karna, Sita, Draupadi) with generational women's folk song repertoires.",
      hi: "महाकाव्यों की कथाओं से जुड़ी जनश्रुतियाँ मौखिक लोकगीतों में किस प्रकार संकलित और प्रसारित हुईं।"
    }
  ];

  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-inter text-xs text-[#8E4A23] font-semibold mb-2 block">
            Academic Assessment & Research Boundaries · <span className="font-noto font-normal text-[#7D6B58]">अकादमिक समीक्षा</span>
          </span>
          <h2 className="font-inter text-3xl md:text-4xl font-bold text-[#2C221E] mb-3 leading-tight">
            What We Know &amp; What Remains Open · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">साक्ष्य एवं शोध</span>
          </h2>
          <p className="font-inter text-xs md:text-sm text-[#6B5B52] leading-relaxed max-w-2xl mx-auto">
            Intellectual honesty is the foundation of heritage archiving. We transparently separate validated historical-ethnographic facts from open scholarly questions.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch font-inter">
          {/* Column 1: What We Know */}
          <div className="p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl shadow-sm flex flex-col justify-between h-full hover:border-[#8E4A23]/50 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 text-[#2D6A4F] mb-6 border-b border-[#EADEC9] pb-3">
                <CheckCircle className="w-5 h-5" />
                <h3 className="font-inter font-bold text-lg text-[#2D6A4F]">
                  Documented &amp; Observed Realities · <span className="font-yatra font-normal text-base text-[#2C221E]">हम जानते हैं</span>
                </h3>
              </div>

              <ul className="space-y-4 text-xs text-[#2C221E]">
                {whatWeKnow.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#2D6A4F] mt-0.5 font-bold">•</span>
                    <div>
                      <p className="font-medium text-[#2C221E]">{item.en}</p>
                      <p className="text-[11px] text-[#7D6B58] font-noto mt-0.5">{item.hi}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <span className="text-xs text-[#2D6A4F] font-semibold block mt-8 border-t border-[#EADEC9] pt-3">
              Verified Contemporary & Historical Realities · प्रमाणित तथ्य
            </span>
          </div>

          {/* Column 2: Unresolved Questions */}
          <div className="p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl shadow-sm flex flex-col justify-between h-full hover:border-[#8E4A23]/50 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 text-[#B45309] mb-6 border-b border-[#EADEC9] pb-3">
                <HelpCircle className="w-5 h-5" />
                <h3 className="font-inter font-bold text-lg text-[#B45309]">
                  Questions Under Scholarly Inquiry · <span className="font-yatra font-normal text-base text-[#2C221E]">शोध जारी है</span>
                </h3>
              </div>

              <ul className="space-y-4 text-xs text-[#2C221E]">
                {questionsUnresolved.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#B45309] mt-0.5 font-bold">•</span>
                    <div>
                      <p className="font-medium text-[#2C221E]">{item.en}</p>
                      <p className="text-[11px] text-[#7D6B58] font-noto mt-0.5">{item.hi}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <span className="text-xs text-[#B45309] font-semibold block mt-8 border-t border-[#EADEC9] pt-3">
              Open Ethnographic & Historical Inquiries · शोध प्रश्न
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
