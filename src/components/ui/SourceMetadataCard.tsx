import React from "react";
import { Shield, MapPin } from "lucide-react";

export interface SourceMetadataProps {
  claim: string;
  hindiClaim?: string;
  classification:
    | "OBSERVED PRACTICE"
    | "HISTORICAL EVIDENCE"
    | "FOLK TRADITION"
    | "REGIONAL PRACTICE"
    | "MYTHOLOGICAL / RELIGIOUS TRADITION"
    | "CULTURAL INTERPRETATION"
    | "EDITORIAL / ARCHIVE CONCEPT";
  source: string;
  sourceType: "government" | "academic" | "traditional" | "primary" | "secondary";
  region: string;
  verificationStatus: string;
  theme?: "light" | "dark";
}

export const SourceMetadataCard: React.FC<SourceMetadataProps> = ({
  claim,
  hindiClaim,
  classification,
  source,
  sourceType,
  region,
  verificationStatus,
  theme = "dark"
}) => {
  const isLight = theme === "light";

  const bgClass = isLight
    ? "bg-[#EADEC9]/10 border-[#EADEC9] text-[#5C2E16]"
    : "bg-brand-river/10 border-brand-river/45 text-brand-ivory";

  const labelClass = isLight ? "text-[#8E4A23]/80" : "text-brand-orange/80";
  const valClass = isLight ? "text-[#5C2E16]" : "text-brand-ivory/90";
  const borderSubClass = isLight ? "border-[#EADEC9]/55" : "border-brand-river/35";

  return (
    <div className={`p-4 border rounded-xl text-xs space-y-3 font-noto leading-relaxed ${bgClass}`}>
      <div className={`flex items-center justify-between border-b pb-2 select-none ${borderSubClass}`}>
        <div className="flex items-center gap-1.5">
          <Shield className={`w-3.5 h-3.5 ${isLight ? "text-[#8E4A23]" : "text-[#8E4A23]"}`} />
          <span className="font-inter text-[10px] font-semibold text-[#8E4A23]">
            Cultural Source Documentation · <span className="font-noto text-[#7D6B58]">सांस्कृतिक प्रलेखन</span>
          </span>
        </div>
        <span className={`px-2 py-0.5 text-[9px] rounded-md font-semibold uppercase tracking-wider ${
          sourceType === "government" || sourceType === "academic"
            ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
            : "bg-amber-50 text-amber-800 border border-amber-300"
        }`}>
          {verificationStatus}
        </span>
      </div>

      <div className="space-y-1.5">
        <span className={`text-[10px] font-semibold block ${labelClass}`}>
          Asserted Claim · <span className="font-noto text-xs font-normal">मूल दावा</span>:
        </span>
        <p className={`font-inter text-xs leading-relaxed font-medium ${valClass}`}>{claim}</p>
        {hindiClaim && (
          <p className="font-noto text-xs text-[#7D6B58] border-l-2 border-[#EADEC9] pl-2.5 mt-1 leading-relaxed">
            {hindiClaim}
          </p>
        )}
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2.5 border-t ${borderSubClass}`}>
        <div>
          <span className={`text-[10px] font-semibold block ${labelClass}`}>
            Claim Type · <span className="font-noto font-normal">वर्गीकरण</span>:
          </span>
          <span className={`font-medium text-xs block mt-0.5 ${valClass}`}>{classification}</span>
        </div>

        <div>
          <span className={`text-[10px] font-semibold block ${labelClass}`}>
            Sourced From · <span className="font-noto font-normal">स्रोत</span>:
          </span>
          <span className={`text-xs block mt-0.5 font-medium ${valClass}`}>
            {source} <span className="opacity-75 uppercase text-[10px]">({sourceType})</span>
          </span>
        </div>

        <div>
          <span className={`text-[10px] font-semibold block ${labelClass}`}>
            Region · <span className="font-noto font-normal">क्षेत्र</span>:
          </span>
          <span className={`text-xs block mt-0.5 flex items-center gap-1 font-medium ${valClass}`}>
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#8E4A23]" />
            <span>{region}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
