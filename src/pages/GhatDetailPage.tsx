import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { featuredLocations } from "../data/locations";
import { rivers } from "../data/rivers";
import { ArrowLeft, ShieldAlert, Sparkles, AlertCircle, FileText, Music, Box } from "lucide-react";
import { SourceMetadataCard } from "../components/ui/SourceMetadataCard";

export const GhatDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const loc = featuredLocations.find((l) => l.id === id);

  // Set SEO tags on mount
  useEffect(() => {
    if (loc) {
      document.title = `${loc.name} (${loc.hindiName}) — Sacred Geography | Chhath Heritage Archive`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", loc.description);
      }
    }
  }, [loc]);

  if (!loc) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] text-[#5C2E16] flex flex-col items-center justify-center py-24 font-inter">
        <AlertCircle className="w-12 h-12 text-[#8E4A23] mb-4" />
        <h1 className="text-2xl font-bold text-[#2C221E]">Location Record Not Found</h1>
        <p className="text-xs text-[#7D6B58] mt-1 font-noto">अनुरोधित धरोहर केंद्र की प्रविष्टि उपलब्ध नहीं है।</p>
        <Link to="/ghats" className="text-xs text-[#8E4A23] hover:underline font-bold mt-6">
          ← Return to Geographic Archive · भौगोलिक सूची पर लौटें
        </Link>
      </div>
    );
  }

  // Get matching river data
  const riverData = rivers.find(
    (r) => r.name.toLowerCase() === loc.river?.toLowerCase() || r.hindiName === loc.river
  );

  // Background Gradient matching type
  const getGradient = (type: string) => {
    return type === "sun-temple"
      ? "from-[#8C527A] via-[#C87A53] to-[#F28C28]" // Solar Sunset-sunrise dawn
      : "from-[#142347] via-[#1E3A8A] to-[#C87A53]"; // River Ganga evening
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#5C2E16] pb-24 font-inter">
      {/* Hero Section */}
      <div className={`relative h-[300px] md:h-[350px] bg-gradient-to-tr ${getGradient(loc.type)} flex items-end p-6 md:p-12 text-white`}>
        {/* Grain texture overlay */}
        <div className="absolute inset-0 grain-overlay opacity-25 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />

        <div className="relative z-20 max-w-5xl mx-auto w-full space-y-2">
          {/* Breadcrumbs */}
          <Link
            to="/ghats"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Geographic Archive · <span className="font-noto font-normal">भौगोलिक संग्रह</span></span>
          </Link>

          <div>
            <span className="px-2.5 py-0.5 border border-white/40 bg-white/15 text-[10px] font-semibold rounded-md tracking-wider">
              {loc.type === "sun-temple" ? "Sun Temple · सूर्य मंदिर" : "Sacred River Ghat · पवित्र घाट"}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg text-white">
            {loc.name}
          </h1>
          <span className="font-yatra text-2xl md:text-3xl text-amber-200 block drop-shadow">
            {loc.hindiName}
          </span>
          <p className="text-xs md:text-sm text-white/90 font-medium">
            District: {loc.district} · Region: {loc.region || "Bihar"}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (Content & Stories) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* 1. Description */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#2C221E] border-b border-[#EADEC9] pb-2">
              Archival Overview · <span className="font-yatra text-lg text-[#8E4A23] font-normal">विवरण एवं महत्व</span>
            </h2>
            <p className="text-xs md:text-sm text-[#5C2E16] leading-relaxed font-medium">
              {loc.description}
            </p>
            <p className="font-noto text-xs text-[#7D6B58] leading-relaxed pt-1 bg-[#FAF7F0] p-3.5 rounded-xl border border-[#EADEC9]">
              {loc.hindiDescription}
            </p>
            
            <div className="pt-4">
              <SourceMetadataCard
                claim={
                  loc.type === "sun-temple"
                    ? `The sun temple at ${loc.name} is a historic late medieval structural complex associated with solar worship traditions.`
                    : `Chhath prayers at ${loc.name} are observed on a massive public scale along the river banks.`
                }
                hindiClaim={
                  loc.type === "sun-temple"
                    ? `${loc.hindiName} ऐतिहासिक स्थापत्य कला और उत्तर-मध्यकालीन सूर्य आराधना का एक प्रमुख पुरातात्विक/धार्मिक केंद्र है।`
                    : `${loc.hindiName} पर होने वाली सूर्य आराधना और घाटों का संचलन एक व्यापक समकालीन लोक आचरण है।`
                }
                classification={loc.type === "sun-temple" ? "HISTORICAL EVIDENCE" : "REGIONAL PRACTICE"}
                source={loc.type === "sun-temple" ? "ASI / Bihar Tourism" : "Bihar Tourism"}
                sourceType="government"
                region={loc.region || "Bihar"}
                verificationStatus="Government Documented"
                theme="light"
              />
            </div>
          </div>

          {/* 2. Chhath Connection (Observed Practice) */}
          {loc.chhathConnection && (
            <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
              <h3 className="font-bold text-base text-[#2C221E] flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-[#8E4A23]" />
                <span>Living Devotion &amp; Chhath Connection · <span className="font-yatra text-sm text-[#8E4A23] font-normal">छठ पूजा संबंध</span></span>
              </h3>
              <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                {loc.chhathConnection}
              </p>
            </div>
          )}

          {/* 3. River / Water body context */}
          {loc.river && (
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-[#2C221E] border-b border-[#EADEC9] pb-2">
                Sacred Water Body · <span className="font-yatra text-base text-[#8E4A23] font-normal">जलाशय एवं नदी</span>
              </h2>
              <div className="p-6 bg-white border border-[#EADEC9] rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#8E4A23]">
                    {loc.river}
                  </span>
                  {riverData && (
                    <span className="text-[11px] text-[#7D6B58] font-mono">
                      SOURCE: {riverData.source?.split("(")[0]}
                    </span>
                  )}
                </div>
                {riverData ? (
                  <div className="space-y-2">
                    <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                      {riverData.description}
                    </p>
                    <div className="p-3 bg-[#FAF7F0] text-xs text-[#7D6B58] border-l-2 border-[#8E4A23] leading-relaxed rounded-r-lg font-medium">
                      <strong className="text-[#8E4A23]">Ecological &amp; Cultural Role:</strong> {riverData.chhathConnection}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#7D6B58] font-medium">
                    This water body serves as the sacred focal point for ritual purification and solar Arghya offerings.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* 4. Local Traditions */}
          {loc.traditions && loc.traditions.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-[#2C221E] border-b border-[#EADEC9] pb-2">
                Customary Traditions &amp; Observances · <span className="font-yatra text-base text-[#8E4A23] font-normal">स्थानीय परंपराएं</span>
              </h2>
              <ul className="space-y-2.5">
                {loc.traditions.map((tradition, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-white border border-[#EADEC9] rounded-xl shadow-sm">
                    <span className="text-[#8E4A23] font-bold text-sm mt-0.5">•</span>
                    <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                      {tradition}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Historical Context & Archaeological Safety badge */}
          {loc.historicalContext && (
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-[#2C221E] border-b border-[#EADEC9] pb-2">
                Historical Evidence &amp; Research · <span className="font-yatra text-base text-[#8E4A23] font-normal">इतिहास और प्रमाण</span>
              </h2>
              <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-4">
                
                {/* Mythological caution indicator */}
                {loc.id === "kandaha" && (
                  <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] text-xs text-[#5C2E16] rounded-xl flex items-start gap-2.5 leading-relaxed font-medium">
                    <ShieldAlert className="w-4 h-4 text-[#8E4A23] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#8E4A23]">Mythological Lore vs. Archaeology:</strong> Oral folklore associating this site with Samba, son of Krishna, is preserved as popular devotional narrative rather than corroborated historical datum.
                    </div>
                  </div>
                )}

                {loc.id === "deo" && (
                  <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] text-xs text-[#5C2E16] rounded-xl flex items-start gap-2.5 leading-relaxed font-medium">
                    <ShieldAlert className="w-4 h-4 text-[#8E4A23] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#8E4A23]">Living Tradition Note:</strong> Deo Sun Temple is Bihar&apos;s premier active solar temple complex. While continuous local worship dates back centuries, no singular archaeological founder or genesis event defines the start of its Chhath congregations.
                    </div>
                  </div>
                )}

                <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                  {loc.historicalContext}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Right Column (Fact Sheet, Media & Sources) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Fact Sheet Card */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-4">
            <h3 className="font-bold text-base text-[#2C221E] border-b border-[#EADEC9] pb-2">
              Archive Fact Sheet · <span className="font-yatra text-sm text-[#8E4A23] font-normal">तथ्य पत्रक</span>
            </h3>
            
            <div className="text-xs space-y-2.5 text-[#7D6B58]">
              <div className="flex justify-between border-b border-[#EADEC9]/40 pb-1">
                <span>District · जिला:</span>
                <strong className="text-[#2C221E]">{loc.district || "N/A"}</strong>
              </div>
              <div className="flex justify-between border-b border-[#EADEC9]/40 pb-1">
                <span>Region · क्षेत्र:</span>
                <strong className="text-[#2C221E]">{loc.region || "N/A"}</strong>
              </div>
              <div className="flex justify-between border-b border-[#EADEC9]/40 pb-1">
                <span>Latitude · अक्षांश:</span>
                <strong className="text-[#2C221E] font-mono">{loc.latitude.toFixed(4)}° N</strong>
              </div>
              <div className="flex justify-between border-b border-[#EADEC9]/40 pb-1">
                <span>Longitude · रेखांश:</span>
                <strong className="text-[#2C221E] font-mono">{loc.longitude.toFixed(4)}° E</strong>
              </div>
              <div className="flex justify-between border-b border-[#EADEC9]/40 pb-1">
                <span>Classification:</span>
                <strong className="text-[#8E4A23]">{loc.type === "sun-temple" ? "Sun Temple" : "River Ghat"}</strong>
              </div>
              <div className="flex justify-between pt-1">
                <span>Status:</span>
                <span className="px-2 py-0.5 bg-[#F4EFE6] border border-[#EADEC9] text-[10px] text-[#8E4A23] font-semibold rounded-md">
                  {loc.verified ? "Verified Archive Record" : "Confirmed Coordinates"}
                </span>
              </div>
            </div>
          </div>

          {/* Illustrative/Context Image box — IMAGE CONTEXT DATA */}
          {loc.image && (
            <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2">
                Photographic Record · <span className="font-yatra text-xs text-[#8E4A23] font-normal">चित्र संदर्भ</span>
              </h3>
              
              <div className="space-y-2.5">
                {/* Clear label: context image vs verified photo */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#7D6B58]">
                    {loc.locationVerified ? "Location Photograph" : "Regional Context Photo"}
                  </span>
                  <span className="px-2 py-0.5 bg-[#F4EFE6] border border-[#EADEC9] text-[10px] text-[#8E4A23] font-semibold rounded-md">
                    {loc.locationVerified ? "Verified Site" : "Bihar Context"}
                  </span>
                </div>
                
                <img
                  src={loc.image}
                  alt={loc.imageAlt || `${loc.name} photographic reference`}
                  className={`w-full h-auto rounded-xl border border-[#EADEC9] shadow-sm ${loc.locationVerified ? "" : "opacity-90"}`}
                />
                
                {!loc.locationVerified && (
                  <p className="text-xs text-[#7D6B58] leading-relaxed bg-[#FAF7F0] border border-[#EADEC9] rounded-xl p-3 font-medium">
                    This photographic visual illustrates the living spirit of Chhath Puja in Bihar and serves as archival context.
                  </p>
                )}
                
                <div className="text-[11px] text-[#7D6B58] space-y-1 font-mono leading-relaxed pt-2 border-t border-[#EADEC9]">
                  {loc.imageCredit && <div>CREDIT: {loc.imageCredit}</div>}
                  {loc.imageSource && <div>SOURCE: {loc.imageSource}</div>}
                </div>
              </div>
            </div>
          )}

          {/* Related Songs Navigation */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#2C221E] flex items-center gap-2">
              <Music className="w-4.5 h-4.5 text-[#8E4A23]" />
              <span>Regional Folk Songs · <span className="font-yatra text-xs text-[#8E4A23] font-normal">लोकगीत</span></span>
            </h3>
            <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
              Listen to regional devotional geet celebrating the riparian journeys and morning arghya of this territory.
            </p>
            <Link
              to={loc.id === "kandaha" || loc.id === "simaria" ? "/songs?category=mithila" : "/songs?category=ganga"}
              className="text-xs text-[#8E4A23] font-semibold hover:text-[#6E3214] inline-flex items-center gap-1"
            >
              <span>Explore Sound Archive · गीत सुनें →</span>
            </Link>
          </div>

          {/* Related Memories Navigation */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#2C221E] flex items-center gap-2">
              <FileText className="w-4.5 h-4.5 text-[#8E4A23]" />
              <span>Oral Fieldwork &amp; Memories · <span className="font-yatra text-xs text-[#8E4A23] font-normal">संस्मरण</span></span>
            </h3>
            <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
              Read personal memoirs of families returning home, cleaning village riverbanks, and singing beside the water.
            </p>
            <Link
              to="/stories"
              className="text-xs text-[#8E4A23] font-semibold hover:text-[#6E3214] inline-flex items-center gap-1"
            >
              <span>Read Oral Histories · संस्मरण पढ़ें →</span>
            </Link>
          </div>

          {/* Related Objects Link */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#2C221E] flex items-center gap-2">
              <Box className="w-4.5 h-4.5 text-[#8E4A23]" />
              <span>Associated Material Culture · <span className="font-yatra text-xs text-[#8E4A23] font-normal">विरासत वस्तुएं</span></span>
            </h3>
            <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
              Discover the artisan craft of bamboo soops, dauras, and terracotta lamps carried to this ghat.
            </p>
            <Link
              to="/heritage"
              className="text-xs text-[#8E4A23] font-semibold hover:text-[#6E3214] inline-flex items-center gap-1"
            >
              <span>Explore Material Archive · विरासत देखें →</span>
            </Link>
          </div>

          {/* 6. Sources Display */}
          {loc.sources && loc.sources.length > 0 && (
            <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-[#2C221E] flex items-center gap-2">
                <FileText className="w-4.5 h-4.5 text-[#8E4A23]" />
                <span>Scholarly &amp; Archival Sources · <span className="font-yatra text-xs text-[#8E4A23] font-normal">संदर्भ</span></span>
              </h3>
              <ul className="space-y-2 text-xs text-[#7D6B58]">
                {loc.sources.map((source, idx) => (
                  <li key={idx} className="border-b border-[#EADEC9] pb-2 last:border-0 last:pb-0 font-medium">
                    <div className="font-semibold text-[#2C221E]">{source.title}</div>
                    <div>Publisher: {source.publisher || "Bihar Government Publication"}</div>
                    {source.url && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8E4A23] hover:text-[#6E3214] block pt-1 font-mono text-[10px] break-all"
                      >
                        {source.url}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
