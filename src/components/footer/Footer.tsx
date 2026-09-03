import React from "react";
import { Link } from "react-router-dom";
import { Landmark } from "lucide-react";

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: "इतिहास", englishLabel: "History", path: "/history" },
    { label: "चार दिन", englishLabel: "4 Days", path: "/four-days" },
    { label: "गीत", englishLabel: "Songs", path: "/songs" },
    { label: "विरासत", englishLabel: "Heritage", path: "/heritage" },
    { label: "घाट", englishLabel: "Ghats", path: "/ghats" },
    { label: "रसोई", englishLabel: "Kitchen", path: "/kitchen" },
    { label: "कहानियाँ", englishLabel: "Stories", path: "/stories" },
    { label: "गैलरी", englishLabel: "Gallery", path: "/gallery" },
  ];

  return (
    <footer className="relative bg-[#FAF7F0] border-t border-[#EADEC9] pt-16 pb-12 text-[#2C221E] font-inter">
      {/* Texture grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        {/* Main Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#EADEC9] pb-12">
          
          {/* Institutional Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 select-none group">
              <div className="w-8 h-8 border border-[#8E4A23] flex items-center justify-center bg-white text-[#8E4A23] font-yatra text-base">
                छ
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-[#2C221E] tracking-tight leading-none group-hover:text-[#8E4A23] transition-colors">
                  CHHATH
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#7D6B58] mt-0.5">
                  Living Heritage Archive · Bihar
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#5C2E16] leading-relaxed max-w-sm">
              A scholarly, living cultural museum documenting the four-day solar pilgrimage, ritual material culture, sacred riparian geography, and oral memory of Bihar and Purvanchal.
            </p>

            <p className="font-noto text-xs text-[#7D6B58] leading-relaxed italic max-w-sm">
              बिहार की जीवित छठ परंपरा को समझने, सुनने और संजोने का एक प्रामाणिक एवं सार्वजनिक पुरालेख।
            </p>
          </div>

          {/* Archival Index Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold block">
              ARCHIVAL COLLECTIONS · अनुक्रमणिका
            </span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex flex-col py-1 text-[#2C221E] hover:text-[#8E4A23] transition-colors"
                >
                  <span className="font-semibold text-xs">{link.englishLabel}</span>
                  <span className="font-noto text-[10px] text-[#7D6B58] group-hover:text-[#8E4A23]">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Archival Metadata & Standards (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-[#8E4A23]">
              <Landmark className="w-4 h-4" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                Digital Living Museum
              </span>
            </div>

            <div className="p-4 bg-white border border-[#EADEC9] text-[10px] font-mono text-[#7D6B58] space-y-1.5">
              <div>COLLECTION EDITION: 2026.1</div>
              <div>VERIFICATION: ETHNOGRAPHIC &amp; FIELD</div>
              <div>STANDARDS: ENGLISH-FIRST SCHOLARLY</div>
              <div className="text-[#8E4A23] pt-1 border-t border-[#EADEC9]">ACCESSION ID: CH-LHA-BIHAR</div>
            </div>
          </div>

        </div>

        {/* Ethnographic Advisory Note */}
        <div className="p-5 border border-[#EADEC9] bg-white space-y-2">
          <div className="flex items-center gap-2 border-b border-[#EADEC9] pb-2 text-[10px] font-mono uppercase tracking-widest text-[#8E4A23] font-bold">
            <span>ETHNOGRAPHIC ADVISORY &amp; DIVERSITY CHARTER · सांस्कृतिक प्रलेखन परामर्श</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <p className="text-[#5C2E16] leading-relaxed">
              &ldquo;Chhath traditions and culinary nuances vary naturally across regions (Mithila, Magadh, Bhojpuri belt), families, and generations. This archive documents living cultural heritage respectfully without claiming a single monolithic standard for the entire state.&rdquo;
            </p>
            <p className="font-noto text-[#7D6B58] leading-relaxed italic">
              &ldquo;छठ की परंपराएँ परिवार, क्षेत्र और पीढ़ी के अनुसार स्वाभाविक रूप से भिन्न हो सकती हैं। यह अभिलेख किसी एक परंपरा को पूरे क्षेत्र की एकमात्र परंपरा के रूप में प्रस्तुत नहीं करता।&rdquo;
            </p>
          </div>
        </div>

        {/* Legal & Colophon Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#7D6B58] pt-2">
          <span>© 2026 Chhath Digital Heritage Archive. All rights reserved.</span>
          <div className="flex gap-6 mt-3 sm:mt-0 text-xs">
            <Link to="/about" className="hover:text-[#8E4A23] transition-colors">Curatorial Methodology</Link>
            <Link to="/gallery" className="hover:text-[#8E4A23] transition-colors">Visual Archive</Link>
            <a href="https://www.asi.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#8E4A23] transition-colors">Archaeological Survey of India</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
