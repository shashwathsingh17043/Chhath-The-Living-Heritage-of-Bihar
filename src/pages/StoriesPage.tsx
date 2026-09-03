import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { storiesData } from "../data/stories";
import { ArrowRight, ArrowLeft, Compass, AlertCircle, Send, Check } from "lucide-react";
import type { MemoryStory } from "../types/heritage";

export const StoriesPage: React.FC = () => {
  // Filters state
  const [activeSubject, setActiveSubject] = useState<string>("all");
  const [activeLanguage, setActiveLanguage] = useState<string>("all");

  // User submitted stories in-memory state
  const [userStories, setUserStories] = useState<MemoryStory[]>([]);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  // Form states
  const [formTitle, setFormTitle] = useState("");
  const [formMemory, setFormMemory] = useState("");
  const [formLanguage, setFormLanguage] = useState("hindi");
  const [formLocation, setFormLocation] = useState("");
  const [formRitual, setFormRitual] = useState("general");
  const [formNamePref, setFormNamePref] = useState("anonymous");
  const [formLocPref, setFormLocPref] = useState("anonymous");
  const [formConsent, setFormConsent] = useState(false);
  const [formError, setFormError] = useState("");

  // Set SEO tags
  useEffect(() => {
    document.title = "Oral History Archive — Living Memories of Chhath | Chhath Heritage Archive";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Step into the oral history archive of Chhath Puja. Explore memories across generations, family kitchens, and regional migration stories."
      );
    }
  }, []);

  // Filter logic
  const filteredStories = useMemo(() => {
    return storiesData.filter((story) => {
      // 1. Subject filter
      let matchSubject = true;
      if (activeSubject !== "all") {
        if (activeSubject === "childhood") matchSubject = story.id === "pehli-baar-arghya";
        if (activeSubject === "family") matchSubject = story.id === "dadi-ka-chhath";
        if (activeSubject === "kitchen") matchSubject = story.id === "thekua-ki-khushboo";
        if (activeSubject === "ghat") matchSubject = story.id === "gaon-ka-ghat";
        if (activeSubject === "songs") matchSubject = story.ritualDays?.includes("sandhya-arghya") || false;
        if (activeSubject === "migration") matchSubject = story.id === "shahar-me-chhath";
      }

      // 2. Language filter
      let matchLanguage = true;
      if (activeLanguage !== "all") {
        matchLanguage = story.language === activeLanguage;
      }

      return matchSubject && matchLanguage;
    });
  }, [activeSubject, activeLanguage]);

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Validate inputs
    if (!formTitle.trim()) {
      setFormError("Please provide a memory title. / कृपया शीर्षक भरें।");
      return;
    }
    if (!formMemory.trim()) {
      setFormError("Please write your memory narrative. / कृपया संस्मरण लिखें।");
      return;
    }
    if (!formConsent) {
      setFormError("Consent to the archive review policy is required. / सहमति आवश्यक है।");
      return;
    }

    // Prepare pending entry
    const newEntry: MemoryStory = {
      id: `user-${Date.now()}`,
      title: formTitle,
      hindiTitle: formTitle,
      story: formMemory,
      description: formMemory.substring(0, 140) + "...",
      memoryType: "community-memory",
      language: formLanguage,
      contributorName: formNamePref === "anonymous" ? "Anonymous Devotee" : formNamePref === "firstname" ? "Contributor" : "Verified Contributor",
      contributorLocation: formLocPref === "anonymous" ? "Bihar / Diaspora" : formLocation,
      consentStatus: formConsent,
      publicationStatus: "pending"
    };

    // Save to userStories state
    setUserStories((prev) => [newEntry, ...prev]);
    setSubmissionSuccess(true);

    // Reset Form
    setFormTitle("");
    setFormMemory("");
    setFormLocation("");
    setFormConsent(false);
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#5C2E16] pb-24 pt-28 font-inter">
      {/* Texture grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADEC9] pb-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#8E4A23] hover:text-[#6E3214] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return Home · मुखपृष्ठ</span>
          </Link>
          <span className="text-xs text-[#7D6B58] font-semibold">
            Oral History Archive · <span className="font-noto font-normal">लोक स्मृति संग्रह</span>
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs text-[#8E4A23] font-semibold block">
            Oral Histories &amp; Living Memories · <span className="font-noto font-normal">लोक स्मृति एवं संस्मरण</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            Living Memories of Chhath
          </h1>
          <span className="font-yatra text-2xl text-[#8E4A23] block -mt-1">
            यादों की धरोहर — पीढ़ियों के स्वर
          </span>
          <p className="text-base md:text-lg text-[#2C221E] leading-relaxed font-medium">
            Chhath Puja is not solely an unbending ritual script; it is an intimate living tapestry woven from childhood recollections, village riverbanks, fragrant kitchen chulhas, and the return journeys of migrants across vast geographies.
          </p>
        </div>

        {/* Editorial Principle Panel */}
        <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-4">
          <div className="flex items-start gap-3">
            <Compass className="w-5 h-5 text-[#8E4A23] flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <span className="text-xs text-[#8E4A23] font-semibold block">Editorial Principle · <span className="font-noto font-normal">संपादकीय सिद्धांत</span></span>
              <p className="text-base font-semibold text-[#8E4A23] italic">
                &ldquo;Memory is not empirical history — but it illuminates the human heart of tradition.&rdquo;
              </p>
              <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                This repository curates personal, familial, and community testimonies. These oral accounts are treated with anthropological care: not as dry archaeological evidence, but as authentic human expressions of living cultural heritage.
              </p>
            </div>
          </div>

          {/* Classification grid definitions */}
          <div className="border-t border-[#EADEC9] pt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-[#5C2E16] leading-relaxed">
            <div className="p-3 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl">
              <span className="font-bold text-[#8E4A23] block mb-1">History · इतिहास</span>
              Documented textual and archaeological records
            </div>
            <div className="p-3 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl">
              <span className="font-bold text-[#8E4A23] block mb-1">Folk Tradition · परंपरा</span>
              Generational community customs and family vows
            </div>
            <div className="p-3 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl">
              <span className="font-bold text-[#8E4A23] block mb-1">Oral Testimonies · संस्मरण</span>
              Authentic recorded accounts and eyewitness memoirs
            </div>
            <div className="p-3 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl">
              <span className="font-bold text-[#8E4A23] block mb-1">Museum Concept · प्रलेख</span>
              Curated ethnographic reconstructions of ritual life
            </div>
          </div>
        </div>

        {/* Filters Drawer Section */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EADEC9] pb-3">
            <h3 className="font-bold text-lg text-[#2C221E]">
              Oral History Register · <span className="font-yatra text-base text-[#8E4A23] font-normal">स्मृति संग्रह</span>
            </h3>
            <span className="text-xs text-[#7D6B58] font-medium">{filteredStories.length} entries indexed</span>
          </div>

          <div className="flex flex-col gap-4">
            {/* Subject Filters */}
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <span className="font-semibold text-[#7D6B58]">Subject:</span>
              {[
                { id: "all", label: "All Subjects" },
                { id: "childhood", label: "Childhood · बचपन" },
                { id: "family", label: "Family Matriarchs · परिवार" },
                { id: "kitchen", label: "Sacred Kitchen · रसोई" },
                { id: "ghat", label: "Village Ghats · घाट" },
                { id: "songs", label: "Folk Songs · गीत" },
                { id: "migration", label: "Diaspora & Migration · प्रवास" }
              ].map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubject(sub.id)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all min-h-[36px] ${
                    activeSubject === sub.id
                      ? "bg-[#8E4A23] text-white border-[#8E4A23] shadow-sm"
                      : "bg-white text-[#5C2E16] border-[#EADEC9] hover:border-[#8E4A23]"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>

            {/* Language Filters */}
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <span className="font-semibold text-[#7D6B58]">Language:</span>
              {[
                { id: "all", label: "All Languages" },
                { id: "hindi", label: "Hindi · हिंदी" },
                { id: "bhojpuri", label: "Bhojpuri · भोजपुरी" },
                { id: "magahi", label: "Magahi · मगही" },
                { id: "maithili", label: "Maithili · मैथिली" },
                { id: "mixed", label: "Mixed Dialects · मिश्रित" }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveLanguage(lang.id)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all min-h-[36px] ${
                    activeLanguage === lang.id
                      ? "bg-[#8E4A23] text-white border-[#8E4A23] shadow-sm"
                      : "bg-white text-[#5C2E16] border-[#EADEC9] hover:border-[#8E4A23]"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Varied Editorial Composition Memory Grid Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredStories.map((story, index) => {
            if (index === 0) {
              return (
                <div
                  key={story.id}
                  className="col-span-1 md:col-span-2 lg:col-span-2 border border-[#EADEC9] bg-white rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-sm hover:border-[#8E4A23]/60 transition-all duration-300 group"
                >
                  {story.image && (
                    <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-[#FAF7F0] flex-shrink-0">
                      <img
                        src={story.image}
                        alt={`Chhath context -- ${story.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 border border-[#8E4A23]/30 bg-[#FBEFEB] text-[#8E4A23] text-[10px] font-semibold rounded-md">
                          Archive Concept · संग्रहालयीय प्रलेख
                        </span>
                        <span className="text-xs text-[#7D6B58] font-semibold uppercase">
                          {story.language}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-2xl sm:text-3xl font-bold text-[#2C221E] mb-1 leading-snug">
                          {story.title}
                        </h4>
                        <span className="font-yatra text-lg text-[#8E4A23] block">
                          {story.hindiTitle}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-[#5C2E16] leading-relaxed font-medium">
                        {story.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#EADEC9] flex items-center justify-between">
                      <span className="text-xs text-[#7D6B58] font-medium capitalize">
                        {story.memoryType.replace(/-/g, " ")}
                      </span>
                      <Link
                        to={`/stories/${story.id}`}
                        className="text-xs text-[#8E4A23] font-semibold hover:text-[#6E3214] inline-flex items-center gap-1.5 min-h-[44px] px-2"
                      >
                        <span>Read Full Narrative · संस्मरण पढ़ें</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            if (index === 1) {
              return (
                <div
                  key={story.id}
                  className="col-span-1 border border-[#EADEC9] border-l-4 border-l-[#8E4A23] bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-[#8E4A23]/60 transition-all duration-300 min-h-[320px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 border border-[#8E4A23]/30 bg-[#FBEFEB] text-[#8E4A23] text-[10px] font-semibold rounded-md">
                        Concept Narrative · प्रलेख
                      </span>
                      <span className="text-xs text-[#7D6B58] uppercase font-semibold">
                        {story.language}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-[#2C221E] leading-snug">
                        {story.title}
                      </h4>
                      <span className="font-yatra text-base text-[#8E4A23] block">
                        {story.hindiTitle}
                      </span>
                      <p className="text-xs text-[#5C2E16] leading-relaxed pt-1 font-medium">
                        {story.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EADEC9] flex items-center justify-between mt-4">
                    <span className="text-xs text-[#7D6B58] font-medium capitalize">
                      {story.memoryType.replace(/-/g, " ")}
                    </span>
                    <Link
                      to={`/stories/${story.id}`}
                      className="text-xs text-[#8E4A23] font-semibold hover:text-[#6E3214] inline-flex items-center gap-1 min-h-[44px]"
                    >
                      <span>Read Narrative · पढ़ें</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            }

            if (index === 2) {
              return (
                <div
                  key={story.id}
                  className="col-span-1 border border-[#EADEC9] bg-white rounded-2xl overflow-hidden shadow-sm hover:border-[#8E4A23]/60 transition-all duration-300 flex flex-col justify-between min-h-[350px] group"
                >
                  {story.image && (
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#FAF7F0] flex-shrink-0">
                      <img
                        src={story.image}
                        alt={`Chhath context -- ${story.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 border border-[#8E4A23]/30 bg-[#FBEFEB] text-[#8E4A23] text-[10px] font-semibold rounded-md">
                          Archive Concept
                        </span>
                        <span className="text-xs text-[#7D6B58] font-semibold uppercase">
                          {story.language}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#2C221E] leading-snug">
                          {story.title}
                        </h4>
                        <span className="font-yatra text-base text-[#8E4A23] block">
                          {story.hindiTitle}
                        </span>
                      </div>
                      <p className="text-xs text-[#5C2E16] leading-relaxed line-clamp-3 font-medium">
                        {story.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EADEC9] flex items-center justify-between mt-auto">
                      <span className="text-xs text-[#7D6B58] font-medium capitalize">
                        {story.memoryType.replace(/-/g, " ")}
                      </span>
                      <Link
                        to={`/stories/${story.id}`}
                        className="text-xs text-[#8E4A23] font-semibold hover:text-[#6E3214] inline-flex items-center gap-1 min-h-[44px]"
                      >
                        <span>Read Narrative · पढ़ें</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // Default premium cards for other indexes
            return (
              <div
                key={story.id}
                className="col-span-1 border border-[#EADEC9] bg-white rounded-2xl shadow-sm hover:border-[#8E4A23]/60 transition-all duration-300 flex flex-col overflow-hidden group min-h-[350px]"
              >
                {story.image && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#FAF7F0] flex-shrink-0">
                    <img
                      src={story.image}
                      alt={`Chhath context -- ${story.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 border border-[#8E4A23]/30 bg-[#FBEFEB] text-[#8E4A23] text-[10px] font-semibold rounded-md">
                        Concept Narrative
                      </span>
                      <span className="text-xs text-[#7D6B58] font-semibold uppercase">
                        {story.language}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2C221E] leading-snug">
                        {story.title}
                      </h4>
                      <span className="font-yatra text-base text-[#8E4A23] block">
                        {story.hindiTitle}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                      {story.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#EADEC9] flex items-center justify-between mt-auto">
                    <span className="text-xs text-[#7D6B58] font-medium capitalize">
                      {story.memoryType.replace(/-/g, " ")}
                    </span>
                    <Link
                      to={`/stories/${story.id}`}
                      className="text-xs text-[#8E4A23] font-semibold hover:text-[#6E3214] inline-flex items-center gap-1 min-h-[44px]"
                    >
                      <span>Read Narrative · पढ़ें</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* User Submitted Pending Review Stories */}
          {userStories.map((story) => (
            <div
              key={story.id}
              className="p-5 border border-dashed border-[#EADEC9] bg-white rounded-xl shadow opacity-85 relative overflow-hidden flex flex-col justify-between min-h-[280px]"
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-[#2C221E] font-bold text-[9px] uppercase tracking-wider">
                Pending Review · समीक्षाधीन
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#EADEC9] pb-2 mt-2">
                  <span className="px-1.5 py-0.5 bg-[#8E4A23]/10 border border-[#8E4A23]/30 text-[#8E4A23] text-[9px] uppercase font-bold tracking-wider rounded">
                    Community Memory
                  </span>
                  <span className="text-[10px] text-[#7D6B58] uppercase font-mono tracking-widest">
                    {story.language}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-[#2C221E] mb-1 leading-snug">
                  {story.title}
                </h4>
                <p className="text-xs text-[#5C2E16] leading-relaxed mb-4 font-medium">
                  {story.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EADEC9]/55 flex items-center justify-between mt-4">
                <span className="text-[10px] text-[#7D6B58] font-medium">
                  Contributor: {story.contributorName}
                </span>
                <span className="text-[10px] text-amber-700 font-bold">
                  Pending Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION: SHARE YOUR MEMORY SUBMISSION FORM */}
        <section className="p-6 md:p-10 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-6 max-w-3xl mx-auto relative">
          
          <div className="space-y-2 border-b border-[#EADEC9] pb-4">
            <h2 className="text-2xl font-bold text-[#2C221E]">
              Share Your Family Memory · <span className="font-yatra text-xl text-[#8E4A23] font-normal">अपनी स्मृति साझा करें</span>
            </h2>
            <p className="text-xs text-[#6B5B52] font-medium">
              Preserve your family's oral traditions, ancestral chulha recipes, or riverbank memories in this living digital heritage archive.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-900 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4.5 h-4.5 text-red-600 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {submissionSuccess && (
              <div className="p-4 bg-[#F4EFE6] border border-[#EADEC9] text-[#2C221E] rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#8E4A23]">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Submission Received! · प्रविष्टि सुरक्षित</span>
                </div>
                <p className="text-xs leading-relaxed text-[#5C2E16]">
                  Thank you. Your memory will be reviewed according to our archival community guidelines before public indexing.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title field */}
              <div className="space-y-1.5">
                <label className="font-semibold text-[#2C221E]" htmlFor="title">
                  Memory Title · शीर्षक *
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="e.g. Grandma's Earthen Stove / हमारे घर की बहंगिया"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full p-3 border border-[#EADEC9] rounded-xl bg-[#FAF7F0] focus:outline-none focus:border-[#8E4A23] text-xs text-[#2C221E]"
                />
              </div>

              {/* Language field */}
              <div className="space-y-1.5">
                <label className="font-semibold text-[#2C221E]" htmlFor="language">
                  Language of Memory · भाषा *
                </label>
                <select
                  id="language"
                  value={formLanguage}
                  onChange={(e) => setFormLanguage(e.target.value)}
                  className="w-full p-3 border border-[#EADEC9] rounded-xl bg-[#FAF7F0] focus:outline-none focus:border-[#8E4A23] text-xs text-[#2C221E]"
                >
                  <option value="hindi">Hindi · हिंदी</option>
                  <option value="bhojpuri">Bhojpuri · भोजपुरी</option>
                  <option value="magahi">Magahi · मगही</option>
                  <option value="maithili">Maithili · मैथिली</option>
                  <option value="english">English</option>
                  <option value="mixed">Mixed Dialects · मिश्रित</option>
                </select>
              </div>
            </div>

            {/* Memory long text */}
            <div className="space-y-1.5">
              <label className="font-semibold text-[#2C221E]" htmlFor="memory">
                Memory Narrative · संस्मरण विवरण *
              </label>
              <textarea
                id="memory"
                rows={5}
                placeholder="Share the sights, sounds, family elders, or personal significance of Chhath in your household..."
                value={formMemory}
                onChange={(e) => setFormMemory(e.target.value)}
                className="w-full p-3 border border-[#EADEC9] rounded-xl bg-[#FAF7F0] focus:outline-none focus:border-[#8E4A23] text-xs text-[#2C221E] leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Location field */}
              <div className="space-y-1.5">
                <label className="font-semibold text-[#2C221E]" htmlFor="location">
                  Location (District / City / Diaspora)
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="e.g. Patna, Saharsa, New Jersey, Bengaluru"
                  value={formLocation}
                  onChange={(e) => setFormLocation(e.target.value)}
                  className="w-full p-3 border border-[#EADEC9] rounded-xl bg-[#FAF7F0] focus:outline-none focus:border-[#8E4A23] text-xs text-[#2C221E]"
                />
              </div>

              {/* Ritual Connection */}
              <div className="space-y-1.5">
                <label className="font-semibold text-[#2C221E]" htmlFor="ritual">
                  Related Ritual Day · संबंधित दिन
                </label>
                <select
                  id="ritual"
                  value={formRitual}
                  onChange={(e) => setFormRitual(e.target.value)}
                  className="w-full p-3 border border-[#EADEC9] rounded-xl bg-[#FAF7F0] focus:outline-none focus:border-[#8E4A23] text-xs text-[#2C221E]"
                >
                  <option value="general">General Observance · सामान्य संदर्भ</option>
                  <option value="nahay-khay">Day 01: Nahay Khay · नहाय-खाय</option>
                  <option value="kharna">Day 02: Kharna · खरना</option>
                  <option value="sandhya">Day 03: Sandhya Arghya · संध्या अर्घ्य</option>
                  <option value="usha">Day 04: Usha Arghya · उषा अर्घ्य</option>
                </select>
              </div>
            </div>

            {/* Privacy preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl">
              <div className="space-y-1.5">
                <label className="font-semibold text-[#2C221E]" htmlFor="name-pref">
                  Name Display Preference · नाम गोपनीयता
                </label>
                <select
                  id="name-pref"
                  value={formNamePref}
                  onChange={(e) => setFormNamePref(e.target.value)}
                  className="w-full p-2.5 border border-[#EADEC9] bg-white rounded-lg focus:outline-none text-xs"
                >
                  <option value="anonymous">Keep Anonymous · नाम गुप्त रखें</option>
                  <option value="firstname">Display First Name Only</option>
                  <option value="fullname">Display Full Name</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-[#2C221E]" htmlFor="loc-pref">
                  Location Display Preference · स्थान गोपनीयता
                </label>
                <select
                  id="loc-pref"
                  value={formLocPref}
                  onChange={(e) => setFormLocPref(e.target.value)}
                  className="w-full p-2.5 border border-[#EADEC9] bg-white rounded-lg focus:outline-none text-xs"
                >
                  <option value="anonymous">Keep Anonymous · स्थान गुप्त रखें</option>
                  <option value="district">Display District / City Only</option>
                </select>
              </div>
            </div>

            {/* Privacy Caution note */}
            <div className="p-3 bg-[#FAF7F0] border border-[#EADEC9] text-[#6B5B52] rounded-xl leading-relaxed text-[11px] font-medium">
              * Privacy Guarantee: We never collect phone numbers, government ID numbers, or private home addresses.
            </div>

            {/* Consent checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input
                id="consent"
                type="checkbox"
                checked={formConsent}
                onChange={(e) => setFormConsent(e.target.checked)}
                className="mt-1 accent-[#8E4A23] h-4 w-4"
              />
              <label htmlFor="consent" className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                I agree to share this family memory under the archive's digital preservation and public curation policy. *
              </label>
            </div>

            {/* Submit button */}
            <div className="pt-2 text-right">
              <button
                type="submit"
                className="px-6 py-3 bg-[#8E4A23] text-white hover:bg-[#6E3214] transition-colors font-semibold rounded-xl shadow-sm inline-flex items-center gap-2 min-h-[44px] text-xs"
              >
                <span>Submit Family Memory · स्मृति साझा करें</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </form>

        </section>

      </div>
    </div>
  );
};
