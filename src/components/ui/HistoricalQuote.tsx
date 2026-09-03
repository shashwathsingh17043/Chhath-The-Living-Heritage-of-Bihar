import React from "react";
import { Quote } from "lucide-react";

interface HistoricalQuoteProps {
  quote: string;
  hindiQuote?: string;
  citation?: string;
  sourceUrl?: string;
}

export const HistoricalQuote: React.FC<HistoricalQuoteProps> = ({
  quote,
  hindiQuote,
  citation,
  sourceUrl,
}) => {
  return (
    <div className="relative my-8 p-6 md:p-8 border border-brand-river/50 bg-brand-river/10 rounded-xl overflow-hidden backdrop-blur-sm max-w-3xl mx-auto">
      {/* Decorative Quote Icon */}
      <Quote className="absolute top-4 left-4 w-12 h-12 text-brand-river/35 -z-0 pointer-events-none transform -rotate-12" />

      <div className="relative z-10 space-y-4">
        {hindiQuote && (
          <p className="font-noto text-base md:text-lg text-brand-ivory font-medium leading-relaxed italic text-center text-glow">
            &ldquo;{hindiQuote}&rdquo;
          </p>
        )}
        
        <p className="font-inter text-xs md:text-sm text-brand-ivory/70 leading-relaxed italic text-center font-light">
          &ldquo;{quote}&rdquo;
        </p>

        {citation && (
          <div className="text-center pt-2">
            <span className="font-playfair text-[10px] uppercase tracking-widest text-brand-orange font-bold">
              — {citation}
            </span>
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-2 text-[9px] text-brand-orange hover:underline font-mono"
              >
                [source ↗]
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
