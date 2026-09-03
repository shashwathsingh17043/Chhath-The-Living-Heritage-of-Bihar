import React from "react";
import { UserCheck, Shield, Heart } from "lucide-react";

export const VratiSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#FDFBF7] border-t border-[#EADEC9] text-[#2C221E]">
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content Column */}
          <div className="lg:col-span-7 space-y-6 font-inter">
            <div>
              <span className="text-xs text-[#8E4A23] font-semibold mb-2 block">
                Discipline of Austerity &amp; Pure Intent · <span className="font-noto font-normal text-[#7D6B58]">साधना, संकल्प और शुद्धि</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C221E] mb-3 leading-tight">
                The Vrati — The Sacred Practitioner · <span className="font-yatra text-2xl text-[#8E4A23] font-normal">व्रती</span>
              </h2>
              <p className="text-sm text-[#6B5B52] leading-relaxed max-w-xl">
                At the spiritual center of Chhath stands the Vrati (the devotee undertaking the sacred vow). This observance requires rigorous physical endurance and mental discipline, including an unyielding 36-hour waterless fast (Nirjala Vrat).
              </p>
            </div>

            <div className="space-y-4 text-xs leading-relaxed text-[#5C2E16]">
              <p className="font-medium text-[#2C221E]">
                Traditionally, the role of Vrati is open to any person regardless of gender, though women lead the sacred rites in the majority of families. The vow is not merely fasting; it encompasses sleeping on clean mats on the floor, observing periodic vows of silence, and adhering to strict sanitary standards.
              </p>
              <p>
                The vow is an experience of collective solidarity rather than lonely asceticism. While the Vrati remains in contemplative silence, the broader family and neighborhood actively mobilize—fetching well water, building fresh earthen chulhas, packing the Daura, and clearing pathways to the river.
              </p>
              <p className="font-noto text-[11px] text-[#7D6B58] border-l-2 border-[#8E4A23]/40 pl-3 leading-relaxed">
                * परिवार और क्षेत्र के अनुसार प्रथाओं में भिन्नता हो सकती है। कठोर शारीरिक अनुशासन और स्वच्छता के नियमों का पालन करने वाले किसी भी श्रद्धालु के लिए यह व्रत खुला है, जो इसकी समतामूलक प्रकृति को दर्शाता है।
              </p>
            </div>
          </div>

          {/* Feature display Column (Right side) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5 font-inter">
            <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#EADEC9] pb-2 text-[#8E4A23]">
                <Shield className="w-5 h-5" />
                <h3 className="font-bold text-sm text-[#2C221E]">
                  Physical Endurance · <span className="font-yatra text-xs text-[#8E4A23]">शारीरिक संयम</span>
                </h3>
              </div>
              <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                Devotees maintain an approximately 36-hour waterless fast (Nirjala) and rest upon simple floor mats, cultivating grounded physical purification.
              </p>
              <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1">
                लगभग 36 घंटे का निर्जला उपवास और भूमि-शयन, जो शरीर को आंतरिक शुद्धि और स्थिरता प्रदान करता है।
              </p>
            </div>

            <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#EADEC9] pb-2 text-[#8E4A23]">
                <UserCheck className="w-5 h-5" />
                <h3 className="font-bold text-sm text-[#2C221E]">
                  Mental Equanimity · <span className="font-yatra text-xs text-[#8E4A23]">मानसिक शुद्धि</span>
                </h3>
              </div>
              <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                Conscious renunciation of anger, pride, and worldly anxiety. During pivotal junctures like the evening of Kharna, the Vrati observes complete silence (Maun).
              </p>
              <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1">
                क्रोध और नकारात्मकता का त्याग। खरना की संध्या पर व्रती पूर्ण मौन साधना में प्रसाद ग्रहण करती हैं।
              </p>
            </div>

            <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#EADEC9] pb-2 text-[#8E4A23]">
                <Heart className="w-5 h-5" />
                <h3 className="font-bold text-sm text-[#2C221E]">
                  Community Solidarity · <span className="font-yatra text-xs text-[#8E4A23]">सामुदायिक सहयोग</span>
                </h3>
              </div>
              <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                The arduous demands of the vow are shared across the household and community. Family members prepare ghats, carry the Daura, and distribute prasad.
              </p>
              <p className="font-noto text-[11px] text-[#7D6B58] leading-relaxed border-t border-[#EADEC9] pt-1">
                कठिन व्रत का भार परिवार और समाज मिलकर उठाता है। घाटों की व्यवस्था और दउरा ढोने में सभी हाथ बंटाते हैं।
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
