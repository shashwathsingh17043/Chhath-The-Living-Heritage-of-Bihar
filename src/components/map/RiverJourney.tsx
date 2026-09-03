import React from "react";
import { Home, Compass, MapPin, Droplets, Sun } from "lucide-react";

export const RiverJourney: React.FC = () => {
  const journeySteps = [
    {
      title: "1. Home · घर",
      desc: "Strict domestic sanctification, vows, and the slow preparation of prasad in pure cow ghee.",
      icon: <Home className="w-5 h-5" />
    },
    {
      title: "2. Lane Procession · गली",
      desc: "Family members bearing the heavy bamboo daura atop their heads, singing hymns through village paths.",
      icon: <Compass className="w-5 h-5" />
    },
    {
      title: "3. The Ghat · घाट",
      desc: "Assembling along public riverbanks decorated with sugarcane canopies and glowing earthen lamps.",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      title: "4. Sacred Water · जल",
      desc: "The vrati stepping chest-deep into the cold riparian current, standing in motionless meditation.",
      icon: <Droplets className="w-5 h-5" />
    },
    {
      title: "5. The Sun · सूर्य",
      desc: "Offering consecrated Arghya to the setting and rising sun, invoking universal planetary well-being.",
      icon: <Sun className="w-5 h-5" />
    }
  ];

  return (
    <div className="p-6 md:p-8 bg-white border border-[#EADEC9] rounded-xl shadow-lg font-inter space-y-6">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#2C221E]">
          From Domestic Hearth to the Sun: A Sacred Continuum
        </h3>
        <span className="font-yatra text-base text-[#8E4A23] block">
          घर से सूर्य तक: एक यात्रा
        </span>
        <p className="text-xs text-[#7D6B58] mt-1 font-medium">
          * An illustrative spatial visualization depicting the ritual movement from domestic intimacy to public cosmic communion.
        </p>
      </div>

      {/* Horizontal Steps on Desktop, Vertical on Mobile */}
      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* Connection line for desktop */}
        <div className="absolute top-[26px] left-[5%] right-[5%] h-0.5 bg-[#EADEC9] hidden lg:block z-0" />

        {journeySteps.map((step, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center text-center space-y-3 relative z-10">
            {/* Step circle */}
            <div className="w-12 h-12 rounded-full bg-[#FDFBF7] border-2 border-[#8E4A23] flex items-center justify-center text-[#8E4A23] shadow-md hover:bg-[#8E4A23] hover:text-white transition-colors duration-300">
              {step.icon}
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-xs text-[#2C221E]">{step.title}</h4>
              <p className="text-[11px] text-[#5C2E16] leading-relaxed max-w-xs mx-auto font-medium">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
