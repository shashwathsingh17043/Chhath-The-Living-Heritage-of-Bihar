import React from "react";
import type { SourceReference } from "../../types/heritage";
import { BookOpen, Landmark, FileText, Globe } from "lucide-react";

interface SourceCitationProps {
  sources: SourceReference[];
}

export const SourceCitation: React.FC<SourceCitationProps> = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  const getIcon = (type: SourceReference["type"]) => {
    switch (type) {
      case "government":
        return <Landmark className="w-4 h-4 text-brand-terracotta" />;
      case "academic":
        return <BookOpen className="w-4 h-4 text-brand-orange" />;
      case "museum":
        return <Landmark className="w-4 h-4 text-brand-orange" />;
      case "archive":
        return <FileText className="w-4 h-4 text-brand-terracotta" />;
      default:
        return <Globe className="w-4 h-4 text-brand-ivory" />;
    }
  };

  const getTypeLabel = (type: SourceReference["type"]) => {
    switch (type) {
      case "government":
        return "शासकीय प्रलेख / Govt Record";
      case "academic":
        return "शोध / Academic Research";
      case "museum":
        return "संग्रहालय / Museum Collection";
      case "archive":
        return "अभिलेखागार / Archives";
      default:
        return "अन्य स्रोत / Other Source";
    }
  };

  return (
    <div className="mt-4 p-4 border border-brand-river bg-brand-river/30 rounded-lg backdrop-blur-sm">
      <h5 className="font-playfair text-xs tracking-wider text-brand-orange uppercase mb-2">
        References & Historical Sources
      </h5>
      <ul className="space-y-3">
        {sources.map((source) => (
          <li key={source.id} className="flex items-start gap-2.5 text-xs text-brand-ivory/80 leading-relaxed">
            <div className="mt-0.5">{getIcon(source.type)}</div>
            <div className="flex-1">
              <span className="font-noto italic text-brand-ivory">{source.title}</span>
              {" — "}
              <span className="font-inter text-[11px] text-brand-ivory/65">{source.publisher}</span>
              <span className="ml-2 inline-block px-1.5 py-0.5 text-[9px] bg-brand-indigo/60 text-brand-orange/90 rounded border border-brand-river/40 font-inter">
                {getTypeLabel(source.type)}
              </span>
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block ml-2 text-[10px] text-brand-orange hover:underline font-inter"
                >
                  Verify Source ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
