import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heritageObjects } from "../../data/heritage";
import { ArrowRight } from "lucide-react";
import { SourceMetadataCard } from "../ui/SourceMetadataCard";

export const HeritageMuseum: React.FC = () => {
  // Map array into explicit objects to assign unique layouts
  const soop = heritageObjects.find((o) => o.id === "soop");
  const daura = heritageObjects.find((o) => o.id === "daura");
  const thekua = heritageObjects.find((o) => o.id === "thekua");
  const kosi = heritageObjects.find((o) => o.id === "kosi");
  const diya = heritageObjects.find((o) => o.id === "diya");
  const sugarcane = heritageObjects.find((o) => o.id === "sugarcane");

  return (
    <section className="py-24 bg-[#FDFBF7] text-[#5C2E16] relative overflow-hidden font-inter">
      {/* Texture grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* Section Header */}
        <div className="border-b border-[#EADEC9] pb-6 max-w-2xl">
          <span className="text-xs text-[#8E4A23] font-semibold block mb-1">
            Material Exhibition Gallery · <span className="font-noto font-normal">सामग्री दीर्घा</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] leading-tight">
            Craftsmanship &amp; Elemental Objects · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">छठ की हस्तशिल्प विरासत</span>
          </h2>
          <p className="text-sm text-[#6B5B52] mt-2 leading-relaxed">
            The authentic material catalog of sacred implements utilized across Chhath Puja. This exhibition showcases the deep symbiosis between organic raw materials, domestic reverence, and rural artisan communities.
          </p>
        </div>

        {/* 1. SOOP — Asymmetric Split Screen */}
        {soop && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#EADEC9] bg-white rounded-2xl overflow-hidden p-6 md:p-8 shadow-sm">
            <div className="lg:col-span-7 relative group overflow-hidden rounded-xl border border-[#EADEC9] aspect-[4/3] lg:aspect-video bg-[#FAF7F0]">
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-white/95 border border-[#EADEC9] text-[10px] text-[#8E4A23] rounded-md font-semibold shadow-sm">
                Artifact: Soop · सूप
              </div>
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                src={soop.image}
                alt={soop.imageAlt || soop.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-[10px] text-white/90 font-mono">
                CREDIT: {soop.imageCredit}
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs text-[#8E4A23] font-semibold">Bamboo Weaving · बाँस शिल्प</span>
                <h3 className="text-2xl font-bold text-[#2C221E] mt-1">{soop.name}</h3>
                <span className="font-yatra text-lg text-[#8E4A23] block">{soop.hindiName} (Winnowing Tray)</span>
              </div>
              
              <p className="text-xs md:text-sm text-[#5C2E16] leading-relaxed font-medium">
                {soop.description}
              </p>

              <div className="space-y-2 border-t border-[#EADEC9] pt-4 text-xs">
                <div className="flex gap-2">
                  <span className="font-semibold text-[#8E4A23] flex-shrink-0">Material:</span>
                  <span className="text-[#2C221E]">{soop.material}</span>
                </div>
                <div className="flex gap-2 leading-relaxed">
                  <span className="font-semibold text-[#8E4A23] flex-shrink-0">Ritual Role:</span>
                  <span className="text-[#5C2E16]">{soop.ritualUse}</span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <SourceMetadataCard
                  claim="Soop is traditionally woven from bamboo and used to hold offerings during Arghya, though metal alternatives may be used."
                  hindiClaim="सूप का उपयोग अर्घ्य देने के लिए किया जाता है और यह पारंपरिक रूप से बाँस का बना होता है, यद्यपि आधुनिक संदर्भों में पीतल/तांबे के सूप का प्रयोग भी देखा गया है।"
                  classification="OBSERVED PRACTICE"
                  source="Bihar Tourism"
                  sourceType="government"
                  region="Bihar / Purvanchal"
                  verificationStatus="Government Sourced"
                  theme="light"
                />
                <Link
                  to="/heritage/soop"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold text-xs rounded-xl transition-colors shadow-sm"
                >
                  <span>Explore Artifact Details · विस्तार से समझें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2. DAURA — Large Overlapping Exhibition Card */}
        {daura && (
          <div className="relative border border-[#EADEC9] bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 relative rounded-xl overflow-hidden border border-[#EADEC9] aspect-[16/10] lg:aspect-[16/9] bg-[#FAF7F0]">
                <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-white/95 border border-[#EADEC9] text-[10px] text-[#8E4A23] rounded-md font-semibold shadow-sm">
                  Artifact: Daura · दउरा
                </div>
                <img
                  src={daura.image}
                  alt={daura.imageAlt || daura.name}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-[10px] text-white/90 font-mono">
                  CREDIT: {daura.imageCredit}
                </div>
              </div>

              <div className="lg:col-span-4 space-y-5 lg:pt-4">
                <div>
                  <span className="text-xs text-[#8E4A23] font-semibold">Woven Vessel · बुनाई कला</span>
                  <h3 className="text-2xl font-bold text-[#2C221E] mt-1">{daura.name}</h3>
                  <span className="font-yatra text-lg text-[#8E4A23] block">{daura.hindiName} (Processional Basket)</span>
                </div>

                <p className="text-xs md:text-sm text-[#5C2E16] leading-relaxed font-medium">
                  {daura.description}
                </p>

                <div className="space-y-2 border-t border-[#EADEC9] pt-4 text-xs">
                  <div className="flex gap-2">
                    <span className="font-semibold text-[#8E4A23] flex-shrink-0">Material:</span>
                    <span className="text-[#2C221E]">{daura.material}</span>
                  </div>
                  <div className="flex gap-2 leading-relaxed">
                    <span className="font-semibold text-[#8E4A23] flex-shrink-0">Ritual Role:</span>
                    <span className="text-[#5C2E16]">{daura.ritualUse}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <SourceMetadataCard
                    claim="Daura is typically carried on the head by family members (often male relatives, but variation exists by region)."
                    hindiClaim="दउरा में प्रसाद को रखकर घाट तक ले जाया जाता है। परिवार के सदस्य इसे सिर पर वहन करते हैं और व्यवहार में भिन्नता हो सकती है।"
                    classification="REGIONAL PRACTICE"
                    source="Bihar Tourism"
                    sourceType="government"
                    region="Bihar / Purvanchal"
                    verificationStatus="Government Sourced"
                    theme="light"
                  />
                  <Link
                    to="/heritage/daura"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold text-xs rounded-xl transition-colors shadow-sm"
                  >
                    <span>Explore Artifact Details · विस्तार से समझें</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3. THEKUA — Horizontal Culinary Gallery Grid */}
        {thekua && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#EADEC9] bg-white rounded-2xl overflow-hidden p-6 md:p-8 shadow-sm">
            
            <div className="lg:col-span-5 space-y-5 lg:order-1">
              <div>
                <span className="text-xs text-[#8E4A23] font-semibold">Sacred Culinary Offering · महाप्रसाद</span>
                <h3 className="text-2xl font-bold text-[#2C221E] mt-1">{thekua.name}</h3>
                <span className="font-yatra text-lg text-[#8E4A23] block">{thekua.hindiName} (Traditional Wheat Pastry)</span>
              </div>

              <p className="text-xs md:text-sm text-[#5C2E16] leading-relaxed font-medium">
                {thekua.description}
              </p>

              <div className="space-y-2 border-t border-[#EADEC9] pt-4 text-xs">
                <div className="flex gap-2">
                  <span className="font-semibold text-[#8E4A23] flex-shrink-0">Key Ingredients:</span>
                  <span className="text-[#2C221E]">{thekua.material}</span>
                </div>
                <div className="flex gap-2 leading-relaxed">
                  <span className="font-semibold text-[#8E4A23] flex-shrink-0">Ritual Role:</span>
                  <span className="text-[#5C2E16]">{thekua.ritualUse}</span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <SourceMetadataCard
                  claim="Thekua relies on coarse wheat flour, ghee, and jaggery or sugar as core ingredients, with dry fruits and coconut optional."
                  hindiClaim="ठेकुआ मुख्य रूप से गेहूं के आटे, घी और गुड़ या चीनी से बनाया जाता है; सूखा नारियल, सौंफ और इलायची इसके वैकल्पिक घटक हैं।"
                  classification="OBSERVED PRACTICE"
                  source="Bihar Tourism"
                  sourceType="government"
                  region="Bihar / Purvanchal"
                  verificationStatus="Government Sourced"
                  theme="light"
                />
                <Link
                  to="/heritage/thekua"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold text-xs rounded-xl transition-colors shadow-sm"
                >
                  <span>Culinary Method &amp; Recipe · विधि देखें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-2">
              <div className="relative rounded-xl overflow-hidden border border-[#EADEC9] aspect-square bg-[#FAF7F0]">
                <img
                  src={thekua.image}
                  alt={thekua.imageAlt || thekua.name}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-2 left-2 z-20 px-2.5 py-0.5 bg-white/95 border border-[#EADEC9] text-[10px] text-[#8E4A23] rounded-md font-semibold shadow-sm">
                  Sacred Offering Plate · थाली
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-[#EADEC9] aspect-square bg-[#FAF7F0]">
                <img
                  src="/assets/images/thekua2.jpg"
                  alt="Traditional cooking of Thekua"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-2 left-2 z-20 px-2.5 py-0.5 bg-white/95 border border-[#EADEC9] text-[10px] text-[#8E4A23] rounded-md font-semibold shadow-sm">
                  Packed in Daura Basket
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 4. KOSI — Split Atmospheric Card */}
        {kosi && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#EADEC9] bg-white rounded-2xl overflow-hidden shadow-sm">
            
            <div className="lg:col-span-5 bg-[#FAF7F0] p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-[#8E4A23] font-semibold">Votive Terracotta · मन्नत संकल्प</span>
                  <h3 className="text-2xl font-bold text-[#2C221E] mt-1">{kosi.name}</h3>
                  <span className="font-yatra text-lg text-[#8E4A23] block">{kosi.hindiName} (Ceramic Shrine)</span>
                </div>

                <p className="text-xs md:text-sm text-[#5C2E16] leading-relaxed font-medium">
                  {kosi.description}
                </p>

                <div className="space-y-2 border-t border-[#EADEC9] pt-4 text-xs">
                  <div className="flex gap-2">
                    <span className="font-semibold text-[#8E4A23] flex-shrink-0">Material:</span>
                    <span className="text-[#2C221E]">{kosi.material}</span>
                  </div>
                  <div className="flex gap-2 leading-relaxed">
                    <span className="font-semibold text-[#8E4A23] flex-shrink-0">Ritual Role:</span>
                    <span className="text-[#5C2E16]">{kosi.ritualUse}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <SourceMetadataCard
                  claim="Votive Kosi setups are conducted overnight under a sugarcane canopy with clay lamps and earthen pots."
                  hindiClaim="मन्नत के तहत गन्ने के तनों और मिट्टी के बरतनों व दीयों के साथ रातभर कोसी का अनुष्ठान किया जाता है।"
                  classification="FOLK TRADITION"
                  source="Bihar Tourism"
                  sourceType="government"
                  region="Bihar"
                  verificationStatus="Government Sourced"
                  theme="light"
                />
                <Link
                  to="/heritage/kosi"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold text-xs rounded-xl transition-colors shadow-sm"
                >
                  <span>Explore Artifact Details · विस्तार से समझें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto min-h-[250px] lg:min-h-full bg-[#FAF7F0] overflow-hidden">
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-white/95 border border-[#EADEC9] text-[10px] text-[#8E4A23] rounded-md font-semibold shadow-sm">
                Artifact: Kosi · कोसी
              </div>
              <img
                src={kosi.image}
                alt={kosi.imageAlt || kosi.name}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-[10px] text-white/90 font-mono">
                CREDIT: {kosi.imageCredit}
              </div>
            </div>

          </div>
        )}

        {/* 5. DIYA — Minimal Photographic Composition */}
        {diya && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#EADEC9] bg-white rounded-2xl overflow-hidden p-6 md:p-8 shadow-sm">
            
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-[#EADEC9] bg-[#FAF7F0]">
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-white/95 border border-[#EADEC9] text-[10px] text-[#8E4A23] rounded-md font-semibold shadow-sm">
                Artifact: Diya · माटी का दीया
              </div>
              <img
                src={diya.image}
                alt={diya.imageAlt || diya.name}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-[10px] text-white/90 font-mono">
                CREDIT: {diya.imageCredit}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs text-[#8E4A23] font-semibold">Pottery Craft · कुम्भकारी कला</span>
                <h3 className="text-2xl font-bold text-[#2C221E] mt-1">{diya.name}</h3>
                <span className="font-yatra text-lg text-[#8E4A23] block">{diya.hindiName} (Earthen Oil Lamp)</span>
              </div>

              <p className="text-xs md:text-sm text-[#5C2E16] leading-relaxed font-medium">
                {diya.description}
              </p>

              <div className="space-y-2 border-t border-[#EADEC9] pt-4 text-xs">
                <div className="flex gap-2">
                  <span className="font-semibold text-[#8E4A23] flex-shrink-0">Material:</span>
                  <span className="text-[#2C221E]">{diya.material}</span>
                </div>
                <div className="flex gap-2 leading-relaxed">
                  <span className="font-semibold text-[#8E4A23] flex-shrink-0">Ritual Role:</span>
                  <span className="text-[#5C2E16]">{diya.ritualUse}</span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <SourceMetadataCard
                  claim="Clay oil lamps (diyas) are lit by the riverbank and sugarcane canopies during evening and dawn rituals."
                  hindiClaim="घाटों पर शाम और सुबह प्रकाश करने तथा कोसी भरने के समय मिट्टी के दीये प्रज्ज्वलित किए जाते हैं।"
                  classification="OBSERVED PRACTICE"
                  source="Bihar Tourism"
                  sourceType="government"
                  region="Universal"
                  verificationStatus="Government Sourced"
                  theme="light"
                />
                <Link
                  to="/heritage/diya"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold text-xs rounded-xl transition-colors shadow-sm"
                >
                  <span>Explore Artifact Details · विस्तार से समझें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* 6. SUGARCANE — Wide Editorial Image Strip */}
        {sugarcane && (
          <div className="border border-[#EADEC9] bg-white rounded-2xl overflow-hidden shadow-sm">
            
            {/* Wide Banner Image */}
            <div className="relative h-[250px] md:h-[350px] bg-[#FAF7F0] overflow-hidden">
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-white/95 border border-[#EADEC9] text-[10px] text-[#8E4A23] rounded-md font-semibold shadow-sm">
                Artifact: Sugarcane · ईख
              </div>
              <img
                src={sugarcane.image}
                alt={sugarcane.imageAlt || sugarcane.name}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-[10px] text-white/90 font-mono">
                CREDIT: {sugarcane.imageCredit}
              </div>
            </div>

            {/* Banner Description */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <div>
                  <span className="text-xs text-[#8E4A23] font-semibold">Agrarian Abundance · कृषि समृद्धि</span>
                  <h3 className="text-2xl font-bold text-[#2C221E] mt-0.5">{sugarcane.name}</h3>
                  <span className="font-yatra text-lg text-[#8E4A23] block">{sugarcane.hindiName} (Whole Stalks with Leaves)</span>
                </div>
                <p className="text-xs md:text-sm text-[#5C2E16] leading-relaxed font-medium">
                  {sugarcane.description}
                </p>
              </div>

              <div className="md:col-span-4 text-left md:text-right space-y-4">
                <SourceMetadataCard
                  claim="Sugarcane stalks are used as offerings and to build canopy structures during the Kosi ritual."
                  hindiClaim="साबुत गन्ने का उपयोग अर्घ्य में और कोसी मंडप बनाने के लिए किया जाता है।"
                  classification="OBSERVED PRACTICE"
                  source="Bihar Tourism"
                  sourceType="government"
                  region="Bihar / Purvanchal"
                  verificationStatus="Government Sourced"
                  theme="light"
                />
                <Link
                  to="/heritage/sugarcane"
                  className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold text-xs rounded-xl transition-colors shadow-sm"
                >
                  <span>Agrarian Context · कृषि संदर्भ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
