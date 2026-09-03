import React from "react";
import { Link } from "react-router-dom";
import { Landmark, Compass, HelpCircle } from "lucide-react";
import { sources } from "../../data/sources";
import { SourceCitation } from "../ui/SourceCitation";

export const BiharConnection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 font-inter">
          <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
            Geographic Hubs &amp; Sacred Architecture · <span className="font-noto font-normal text-[#7D6B58]">धरोहर केंद्र</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] mb-3 leading-tight">
            Sun Temples &amp; Living Geography in Bihar · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">बिहार में छठ और सूर्य मंदिर</span>
          </h2>
          <p className="text-xs md:text-sm text-[#6B5B52] leading-relaxed max-w-2xl mx-auto">
            While Chhath is celebrated universally across every village pond and riverbank in Bihar, select historic centers stand as architectural monuments to unbroken solar devotion.
          </p>
        </div>

        {/* Feature grid: Deo Temple and regional zones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-inter">
          {/* Deo Sun Temple Exhibit (Left panel) */}
          <div className="lg:col-span-7 p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl flex flex-col justify-between shadow-sm relative">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 border-b border-[#EADEC9] pb-3">
                <div className="flex items-center gap-2 text-[#8E4A23]">
                  <Landmark className="w-5 h-5" />
                  <span className="text-xs font-semibold">
                    Living Sun Temple Exhibit · <span className="font-noto font-normal">मंदिर प्रदर्श</span>
                  </span>
                </div>
                <span className="px-2.5 py-0.5 bg-[#F4EFE6] border border-[#EADEC9] text-[10px] text-[#8E4A23] font-semibold rounded-md">
                  Aurangabad, Bihar · औरंगाबाद
                </span>
              </div>

              <h3 className="font-bold text-2xl text-[#2C221E] mb-1">
                Deo Sun Temple — Aurangabad
              </h3>
              <span className="font-yatra text-lg text-[#8E4A23] block mb-3">
                देव सूर्य मंदिर — औरंगाबाद
              </span>
              <p className="text-xs text-[#5C2E16] leading-relaxed mb-4 font-medium">
                Located in Aurangabad district, Bihar, the Deo Sun Temple is an active, celebrated living center of solar devotion. During Kartik and Chaitra Chhath, hundreds of thousands of devotees assemble at its ancient Surya Kunda to offer Arghya.
              </p>
              <div className="mb-6 text-left">
                <Link
                  to="/ghats/deo"
                  className="inline-flex items-center gap-1.5 text-xs text-[#8E4A23] hover:text-[#6E3214] font-semibold transition-colors"
                >
                  <span>Explore Deo Sun Temple Architecture · देव सूर्य मंदिर →</span>
                </Link>
              </div>

              {/* Strict historical framing alert */}
              <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl flex items-start gap-2.5 text-xs text-[#5C2E16] leading-relaxed">
                <Compass className="w-4 h-4 text-[#8E4A23] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-[#8E4A23]">Historiographical Context:</strong>
                  <p className="text-[#2C221E] font-medium">
                    Notable for its rare west-facing sanctum (aligned toward the setting sun), Deo Sun Temple is not the documented exclusive birthplace of Chhath Puja. Rather, it represents an outstanding architectural continuity of solar devotion and community reverence across centuries.
                  </p>
                  <p className="font-noto text-[11px] text-[#7D6B58] border-t border-[#EADEC9] pt-1.5">
                    देव सूर्य मंदिर छठ पूजा के उत्पत्ति स्थल का पुरातात्विक साक्ष्य नहीं है, बल्कि यह प्राचीन सूर्योपासना और गहरी जन-श्रद्धा की जीवंत निरंतरता का प्रतीक है।
                  </p>
                </div>
              </div>
            </div>

            {/* Citations for Deo */}
            <div className="border-t border-[#EADEC9] pt-4 mt-6">
              <SourceCitation sources={[sources[1], sources[2]]} />
            </div>
          </div>

          {/* Regional linguistics / zones (Right panel) */}
          <div className="lg:col-span-5 p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#8E4A23] border-b border-[#EADEC9] pb-3">
                <HelpCircle className="w-5 h-5" />
                <span className="text-xs font-semibold">
                  Regional Confluences · <span className="font-noto font-normal">क्षेत्रीय संगम</span>
                </span>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#2C221E] mb-1">
                  Linguistic &amp; Geographic Harmony
                </h3>
                <span className="font-yatra text-base text-[#8E4A23] block">
                  भाषाई और क्षेत्रीय विविधता
                </span>
              </div>
              
              <div className="space-y-4 text-xs text-[#5C2E16] leading-relaxed">
                <p className="font-medium text-[#2C221E]">
                  Chhath seamlessly weaves together the Bhojpuri, Magahi, and Maithili cultural heartlands of Bihar. Each linguistic zone enriches the festival through domestic variations and sacred songs—from the devotional legacy of Mahakavi Vidyapati in Mithila to Bhojpuri and Magahi folk traditions.
                </p>
                <p>
                  The vast riverbanks of the Ganges in Patna, the ancient reservoirs of Magadh (Aurangabad and Nalanda), and the community village ponds (pokhar) of Mithila adapt to regional topography. Chhath belongs to no single enclave or group; it forms the shared heritage bridge of Bihar.
                </p>
                <p className="font-noto text-[11px] text-[#7D6B58] border-t border-[#EADEC9] pt-2">
                  छठ पूजा की लोक संस्कृति में भोजपुरी, मगही और मैथिली अंचलों का अनुपम संगम है। यह संपूर्ण बिहार की साझा लोक-पहचान का प्रतीक है।
                </p>
              </div>
              <div className="pt-2 text-left">
                <Link
                  to="/ghats/kandaha"
                  className="inline-flex items-center gap-1.5 text-xs text-[#8E4A23] hover:text-[#6E3214] font-semibold transition-colors"
                >
                  <span>Explore Kandaha Sun Temple (Mithila) · कंधाहा मंदिर →</span>
                </Link>
              </div>
            </div>

            <div className="border-t border-[#EADEC9] pt-4 mt-6">
              <SourceCitation sources={[sources[0], sources[5]]} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
