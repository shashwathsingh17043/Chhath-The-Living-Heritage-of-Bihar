import React from "react";
import { Globe, Users, Tv, Youtube } from "lucide-react";
import { sources } from "../../data/sources";
import { SourceCitation } from "../ui/SourceCitation";

export const ModernChhathSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 font-inter">
          <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
            Contemporary Observance &amp; Global Diaspora · <span className="font-noto font-normal text-[#7D6B58]">समकालीन स्वरूप</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] mb-3 leading-tight">
            Modern Chhath on the Global Horizon · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">आधुनिक छठ</span>
          </h2>
          <p className="text-xs md:text-sm text-[#6B5B52] leading-relaxed max-w-xl mx-auto">
            In the modern era, Chhath has expanded far beyond its regional heartland, evolving into an immense civic celebration and global diaspora tradition.
          </p>
        </div>

        {/* 4 Cards Grid of Modern Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto font-inter">
          {/* Card 1: Urban Ghats */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-2 shadow-sm hover:border-[#8E4A23]/50 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-[#EADEC9] pb-2 text-[#8E4A23]">
              <Users className="w-5 h-5" />
              <h3 className="font-bold text-sm text-[#2C221E]">
                Civic Ghats &amp; Urban Spaces · <span className="font-yatra text-xs text-[#8E4A23]">शहरी घाट</span>
              </h3>
            </div>
            <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
              In metropolitan cities like Delhi, Mumbai, Kolkata, and Bengaluru, municipal administrations organize large-scale civic ghats and clean artificial reservoirs to host hundreds of thousands of worshipping devotees.
            </p>
            <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1">
              महानगरों में स्थानीय प्रशासन और नागरिक समितियों द्वारा बड़े पैमाने पर घाटों की व्यवस्था की जाती है।
            </p>
          </div>

          {/* Card 2: Migration/Diaspora */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-2 shadow-sm hover:border-[#8E4A23]/50 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-[#EADEC9] pb-2 text-[#8E4A23]">
              <Globe className="w-5 h-5" />
              <h3 className="font-bold text-sm text-[#2C221E]">
                Migration &amp; Global Diaspora · <span className="font-yatra text-xs text-[#8E4A23]">वैश्विक प्रसार</span>
              </h3>
            </div>
            <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
              The vibrant Bihari diaspora has brought Chhath to international waterways. From the plains of Nepal's Terai to rivers and lakes across the United States, the UK, Mauritius, Fiji, and Australia, devotees gather to offer collective Arghya.
            </p>
            <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1">
              प्रवासी समुदायों ने नेपाल, मॉरीशस, अमेरिका और ब्रिटेन की नदियों और सरोवरों पर सामूहिक अर्घ्य देकर इसे वैश्विक पहचान दी है।
            </p>
          </div>

          {/* Card 3: Digital Media */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-2 shadow-sm hover:border-[#8E4A23]/50 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-[#EADEC9] pb-2 text-[#8E4A23]">
              <Tv className="w-5 h-5" />
              <h3 className="font-bold text-sm text-[#2C221E]">
                Digital Connectivity &amp; Streaming · <span className="font-yatra text-xs text-[#8E4A23]">डिजिटल जुड़ाव</span>
              </h3>
            </div>
            <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
              Live streaming, video calls, and social networks connect diaspora families with their ancestral village ghats in real time, dissolving geographic separation during the sacred sunset and dawn hours.
            </p>
            <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1">
              लाइव स्ट्रीमिंग और वीडियो कॉलिंग ने विदेशों में रहने वाले प्रवासियों को अपने पुश्तैनी घाटों से सीधे जोड़ दिया है।
            </p>
          </div>

          {/* Card 4: YouTube Songs */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-2 shadow-sm hover:border-[#8E4A23]/50 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-[#EADEC9] pb-2 text-[#8E4A23]">
              <Youtube className="w-5 h-5 text-red-600" />
              <h3 className="font-bold text-sm text-[#2C221E]">
                YouTube &amp; Living Sound Heritage · <span className="font-yatra text-xs text-[#8E4A23]">लोकगीत एवं नई पीढ़ी</span>
              </h3>
            </div>
            <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
              Iconic recordings by Padma awardee Sharda Sinha, Anuradha Paudwal, and regional folk artists command hundreds of millions of views, instilling in younger generations a love for ritual simplicity, folk melodies, and ecological purity.
            </p>
            <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1">
              यूट्यूब पर शारदा सिन्हा और लोक कलाकारों के गीतों ने नई पीढ़ी को पर्व के लोक-संस्कारों और पर्यावरण मूल्यों से जोड़े रखा है।
            </p>
          </div>
        </div>

        {/* Source citation for Modern Chhath */}
        <div className="mt-16 max-w-4xl mx-auto">
          <SourceCitation sources={[sources[0], sources[6]]} />
        </div>

      </div>
    </section>
  );
};
