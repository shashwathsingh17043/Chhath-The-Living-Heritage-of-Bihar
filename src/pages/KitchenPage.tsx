import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";
import { ArrowRight, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";
import { SourceMetadataCard } from "../components/ui/SourceMetadataCard";

export const KitchenPage: React.FC = () => {
  const [activeRecipeId, setActiveRecipeId] = useState<string>("thekua");

  const activeRecipe = recipes.find((r) => r.id === activeRecipeId) || recipes[0];

  const visualSteps = [
    { name: "Purification", hindi: "सफाई", desc: "Thorough washing and sanitization of the cooking area." },
    { name: "Preparation", hindi: "तैयारी", desc: "Sun-drying stone-ground wheat, preparing warm jaggery syrup." },
    { name: "Slow Frying", hindi: "पकाना", desc: "Pressing dough on wooden saancha and slow-frying in pure ghee." },
    { name: "Offering", hindi: "प्रसाद", desc: "Carefully arranging golden sweet offerings in woven bamboo soops." },
    { name: "Procession", hindi: "दउरा", desc: "Bearing nested baskets atop head toward the riverbank." },
    { name: "The Ghat", hindi: "घाट", desc: "Presenting consecrated offerings to the setting and rising sun." }
  ];

  // Set SEO tags on mount
  useEffect(() => {
    document.title = "The Sacred Kitchen — Prasad & Culinary Ethics | Chhath Heritage Archive";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Step into the traditional kitchen of Chhath Puja. Explore the preparation of Thekua and Kharna Rasiaw, kitchen ethics, and clean food traditions."
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#5C2E16] pb-24 pt-20 font-inter">

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs text-[#8E4A23] font-semibold block">
            The Sacred Kitchen · <span className="font-noto font-normal">अनुष्ठानिक पाकशाला</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            The Sacred Kitchen of Chhath
          </h1>
          <span className="font-yatra text-2xl text-[#8E4A23] block -mt-1">
            छठ की रसोई
          </span>
          <p className="text-base text-[#2C221E] leading-relaxed">
            Where sacred prasad is prepared, the spiritual pilgrimage of Chhath begins.
          </p>
          <span className="text-xs text-[#7D6B58] block italic font-noto">
            जहाँ प्रसाद बनता है, वहीं से छठ की पवित्र साधना शुरू होती है।
          </span>
        </div>

        {/* Visual Preparation Sequence */}
        <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-6">
          <h3 className="font-bold text-base text-[#2C221E] border-b border-[#EADEC9] pb-2 text-center">
            Culinary Sequence from Kitchen to River · <span className="font-yatra text-sm text-[#8E4A23] font-normal">रसोई से घाट तक का मार्ग</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-xs">
            {visualSteps.map((step, idx) => (
              <div key={idx} className="space-y-2 p-3.5 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[10px] font-bold text-[#8E4A23] block mb-1">
                    Step 0{idx + 1}
                  </span>
                  <h4 className="font-bold text-[#2C221E]">{step.name}</h4>
                  <span className="font-yatra text-[11px] text-[#8E4A23] block">
                    {step.hindi}
                  </span>
                </div>
                <p className="text-[11px] text-[#5C2E16] leading-normal mt-1 font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kitchen Ethics Block */}
        <div className="p-6 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl space-y-4 text-xs leading-relaxed shadow-sm">
          <h3 className="font-bold text-base text-[#2C221E] flex items-center gap-2 border-b border-[#EADEC9] pb-2">
            <ShieldAlert className="w-5 h-5 text-[#8E4A23]" />
            <span>Kitchen Ethics &amp; Ceremonial Purity · <span className="font-yatra text-sm text-[#8E4A23] font-normal">पाक शुचिता और पारिवारिक नियम</span></span>
          </h3>

          <div className="space-y-3 text-[#5C2E16] font-medium">
            <p>
              Ritual purity in the Chhath kitchen is observed with uncompromising devotion. Before any prasad is cooked, the domestic hearth undergoes thorough scrub-washing with fresh river or clean water. Devotees and family assistants bathe and wear clean, unstitched cotton garments before stepping into the preparation area.
            </p>
            <p>
              <strong>Living Traditions &amp; Variations:</strong> 
              <em> &ldquo;Cooking customs and hearth arrangements naturally vary across families, regions, and generations.&rdquo;</em> 
              While some households cook exclusively over newly sculpted clay stoves (mitti ka chulha) fueled with dried mango firewood, others designate specialized brass or copper pans reserved solely for the puja. Furthermore, food is never tasted during cooking to preserve unblemished ritual sanctification.
            </p>
          </div>
        </div>

        {/* Dynamic Recipe Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Recipe Selector Tabs */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2">
              Sacred Prasad Menu · <span className="font-yatra text-xs text-[#8E4A23] font-normal">प्रसाद सूची</span>
            </h3>

            <div className="space-y-2">
              {recipes.map((recipe) => (
                <button
                  key={recipe.id}
                  onClick={() => setActiveRecipeId(recipe.id)}
                  className={`w-full p-4 border rounded-xl flex items-center justify-between text-left transition-all duration-300 ${
                    activeRecipeId === recipe.id
                      ? "border-[#8E4A23] bg-[#FBEFEB] shadow-sm"
                      : "border-[#EADEC9] bg-white hover:border-[#8E4A23]/50"
                  }`}
                >
                  <div>
                    <h4 className="font-bold text-sm text-[#2C221E]">{recipe.name}</h4>
                    <span className="font-yatra text-xs text-[#8E4A23] block">
                      {recipe.hindiName}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-[#8E4A23] transition-transform ${activeRecipeId === recipe.id ? "translate-x-1" : ""}`} />
                </button>
              ))}
            </div>

            {/* Kharna Section Connection */}
            <div className="p-4 border border-[#EADEC9] bg-white rounded-xl space-y-3 text-xs shadow-sm">
              <h4 className="font-bold text-xs text-[#2C221E] border-b border-[#EADEC9] pb-1.5">
                The Kharna Hearth · <span className="font-yatra text-[#8E4A23] font-normal">खरना की रसोई</span>
              </h4>
              <p className="leading-relaxed text-[#5C2E16] font-medium">
                On the evening of Day 2 (Kharna), vrati prepares jaggery rice kheer (rasiaw) and handmade rotis over mango-wood embers in solitary meditative silence before breaking their fast.
              </p>
              <Link
                to="/four-days/kharna"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E4A23] hover:text-[#6E3214]"
              >
                <span>Explore Kharna Ritual · खरना विवरण →</span>
              </Link>
            </div>
          </div>

          {/* Right panel: Active Recipe Details */}
          <div className="lg:col-span-8 p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-6 text-xs leading-relaxed">
            
            {activeRecipe.image && (
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#EADEC9] mb-6 shadow-sm">
                <img
                  src={activeRecipe.image}
                  alt={activeRecipe.imageAlt || activeRecipe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-[10px] text-white/90 font-mono">
                  CREDIT: {activeRecipe.imageCredit} | {activeRecipe.imageSource}
                </div>
              </div>
            )}

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 border border-[#8E4A23]/30 bg-[#FBEFEB] text-[10px] text-[#8E4A23] rounded-md font-semibold">
                  {activeRecipe.id === "thekua" ? "Documented Heritage Method · प्रामाणिक विधि" : "Sacred Kharna Offering · खरना महाप्रसाद"}
                </span>
                {activeRecipe.preparationTime && (
                  <span className="text-[11px] text-[#7D6B58] font-mono">
                    Time: {activeRecipe.preparationTime} prep + {activeRecipe.cookingTime} cook
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C221E]">
                {activeRecipe.name} Preparation Guide
              </h2>
              <span className="font-yatra text-base text-[#8E4A23] block">
                {activeRecipe.hindiName} बनाने की विधि
              </span>
              <p className="text-[#5C2E16] leading-relaxed font-medium pt-1">
                {activeRecipe.description}
              </p>
            </div>

            {/* Ingredients */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-1">
                Sacred Ingredients · <span className="font-yatra text-xs text-[#8E4A23] font-normal">सामग्री की सूची</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {activeRecipe.ingredients.map((ing, idx) => (
                  <div key={idx} className="p-3 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl flex items-center justify-between shadow-sm">
                    <div>
                      <span className="font-semibold text-[#2C221E] block">{ing.name}</span>
                      {ing.notes && <span className="text-[11px] text-[#7D6B58] block italic mt-0.5">{ing.notes}</span>}
                    </div>
                    {ing.quantity && <span className="font-bold text-[#8E4A23] font-mono">{ing.quantity}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Step by step Process */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-1">
                Step-by-Step Preparation · <span className="font-yatra text-xs text-[#8E4A23] font-normal">बनाने की प्रक्रिया</span>
              </h3>

              <div className="relative border-l border-[#EADEC9] ml-2 pl-6 space-y-6">
                {activeRecipe.steps.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Step indicator */}
                    <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#8E4A23] border-4 border-white text-white font-mono text-[10px] flex items-center justify-center font-bold shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#8E4A23] text-sm">{step.title}</h4>
                      <p className="text-[#5C2E16] font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Variations */}
            {activeRecipe.variations && (
              <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl space-y-2 shadow-sm">
                <h4 className="font-bold text-xs text-[#8E4A23] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Documented Variations · <span className="font-yatra font-normal">पारंपरिक विविधताएँ</span></span>
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-[#5C2E16] text-[11px] font-medium">
                  {activeRecipe.variations.map((v, idx) => (
                    <li key={idx}>{v}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cultural accuracy warning block */}
            <div className="p-3.5 bg-white border border-[#EADEC9]/65 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#C87A53] flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h4 className="font-bold text-[11px] text-[#C87A53]">Archival Authenticity Notice</h4>
                <p className="text-[10px] text-[#7D6B58] leading-relaxed">
                  This culinary method reflects documented ethnographic field studies across Bihar and Purvanchal. Generational households honor nuanced differences in texture, spices, and dough ratios.
                </p>
              </div>
            </div>

            {/* Source Verification Metadata */}
            <div className="pt-2">
              <SourceMetadataCard
                claim={
                  activeRecipe.id === "thekua"
                    ? "Thekua relies on coarse wheat flour, ghee, and jaggery or sugar as core ingredients, with dry fruits and coconut optional."
                    : "Kharna Rasiaw is a sacred jaggery rice pudding prepared in complete silence on a clay stove on the second day."
                }
                hindiClaim={
                  activeRecipe.id === "thekua"
                    ? "ठेकुआ मुख्य रूप से गेहूं के आटे, घी और गुड़ या चीनी से बनाया जाता है; सूखा नारियल, सौंफ और इलायची इसके वैकल्पिक घटक हैं।"
                    : "खरना के दिन नए अरवा चावल, दूध और गुड़ से बने रसियाव का भोग सूर्य देव और छठी मैया को लगाया जाता है।"
                }
                classification={activeRecipe.id === "thekua" ? "OBSERVED PRACTICE" : "FOLK TRADITION"}
                source="Bihar Tourism"
                sourceType="government"
                region="Bihar"
                verificationStatus="Government Sourced"
                theme="light"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
