import React from "react";
import { Link } from "react-router-dom";
import { Compass, Heart, Moon } from "lucide-react";
import { sources } from "../../data/sources";
import { SourceCitation } from "../ui/SourceCitation";

export const SunsetSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 font-inter">
          <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
            Homage to the Setting Sun · <span className="font-noto font-normal text-[#7D6B58]">अस्ताचलगामी सूर्य पूजा</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] mb-3 leading-tight">
            Arghya to the Setting Sun · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">डूबते सूर्य को अर्घ्य</span>
          </h2>
          <p className="text-xs md:text-sm text-[#6B5B52] leading-relaxed">
            Chhath is unique among world traditions in offering its principal community Arghya to the setting sun (Astachalgami Surya) before the rising sun. Rather than a single dogma, this custom carries layered philosophical, agrarian, and folklore significance:
          </p>
        </div>

        {/* 3 Interpretations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto font-inter">
          {/* Interpretation 1 */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[#8E4A23] mb-4 border-b border-[#EADEC9] pb-2">
                <Moon className="w-4 h-4" />
                <h3 className="font-bold text-base text-[#2C221E]">
                  Living Folklore · <span className="font-yatra text-sm text-[#8E4A23] font-normal">लोक आस्था</span>
                </h3>
              </div>
              <p className="text-xs text-[#5C2E16] leading-relaxed mb-2 font-medium">
                In folk songs and domestic oral traditions, the setting sun is honored alongside Pratyusha (the divine final solar ray). Devotees offer Arghya to request protection throughout the darkness of night, anticipating the arrival of Usha (dawn).
              </p>
              <p className="text-[11px] text-[#7D6B58] font-noto leading-relaxed border-t border-[#EADEC9] pt-2">
                लोकगीतों में माना जाता है कि डूबता सूर्य सांध्य देवी (प्रत्युषा) का प्रतीक है। व्रती रात्रि की सुरक्षा और परिवार की सुख-शांति की प्रार्थना करते हैं।
              </p>
            </div>
            <span className="px-2.5 py-0.5 bg-[#F4EFE6] border border-[#EADEC9] text-[10px] text-[#8E4A23] font-semibold rounded-md w-fit mt-6">
              Folk Lore &amp; Oral Tradition
            </span>
          </div>

          {/* Interpretation 2 */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[#8E4A23] mb-4 border-b border-[#EADEC9] pb-2">
                <Compass className="w-4 h-4" />
                <h3 className="font-bold text-base text-[#2C221E]">
                  Philosophical Wholeness · <span className="font-yatra text-sm text-[#8E4A23] font-normal">दार्शनिक संदेश</span>
                </h3>
              </div>
              <p className="text-xs text-[#5C2E16] leading-relaxed mb-2 font-medium">
                It embodies reverence for the full cycle of existence. While conventional societies celebrate only ascending success, Chhath honors sunset, completion, and decline with equal tenderness and humility.
              </p>
              <p className="text-[11px] text-[#7D6B58] font-noto leading-relaxed border-t border-[#EADEC9] pt-2">
                यह जीवन के पूर्ण चक्र को सम्मान देने का संदेश है। ढलती हुई ऊर्जा को नमन करना कृतज्ञता और विनम्रता की पराकाष्ठा है।
              </p>
            </div>
            <span className="px-2.5 py-0.5 bg-[#F4EFE6] border border-[#EADEC9] text-[10px] text-[#8E4A23] font-semibold rounded-md w-fit mt-6">
              Philosophical Interpretation
            </span>
          </div>

          {/* Interpretation 3 */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[#8E4A23] mb-4 border-b border-[#EADEC9] pb-2">
                <Heart className="w-4 h-4" />
                <h3 className="font-bold text-base text-[#2C221E]">
                  Devotional Serenity · <span className="font-yatra text-sm text-[#8E4A23] font-normal">सौम्य भक्ति</span>
                </h3>
              </div>
              <p className="text-xs text-[#5C2E16] leading-relaxed mb-2 font-medium">
                At twilight, the fierce solar heat subsides into a gentle amber glow. Devotees standing waist-deep in cool river water can gaze steadily into the radiant orb, engaging in calm, unhurried personal prayer.
              </p>
              <p className="text-[11px] text-[#7D6B58] font-noto leading-relaxed border-t border-[#EADEC9] pt-2">
                संध्या काल में सूर्य सौम्य और शांत रूप में प्रकट होते हैं, जिससे भक्त जल में खड़े होकर श्रद्धापूर्वक ध्यान केंद्रित कर पाते हैं।
              </p>
            </div>
            <span className="px-2.5 py-0.5 bg-[#F4EFE6] border border-[#EADEC9] text-[10px] text-[#8E4A23] font-semibold rounded-md w-fit mt-6">
              Devotional Narrative
            </span>
          </div>
        </div>

        {/* Verification citation (Bihar Tourism confirms sunset and sunrise offerings) */}
        <div className="mt-16 max-w-4xl mx-auto font-inter">
          <div className="p-5 border-l-4 border-[#8E4A23] bg-[#FAF7F0] border border-[#EADEC9] rounded-r-2xl text-xs text-[#5C2E16] mb-6 shadow-sm leading-relaxed">
            &ldquo;Official cultural documentation from the Department of Tourism, Government of Bihar confirms that on Kartik Shukla Shashthi evening, devotees offer Arghya to the setting sun (Sandhya Arghya), followed on Saptami morning by the concluding Arghya to the rising dawn (Usha Arghya).&rdquo;
          </div>
          
          <div className="mb-6 flex justify-center">
            <Link
              to="/songs?ritual=sandhya-arghya"
              className="group flex items-center gap-1.5 text-xs text-[#8E4A23] hover:text-[#6E3214] font-semibold transition-colors"
            >
              <span>Listen to Traditional Sandhya Arghya Melodies · संध्या अर्घ्य के गीत →</span>
            </Link>
          </div>

          <SourceCitation sources={[sources[0]]} />
        </div>

      </div>
    </section>
  );
};
