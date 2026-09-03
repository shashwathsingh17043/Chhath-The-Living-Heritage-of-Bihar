import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { storiesData } from "../data/stories";
import { ArrowLeft, ShieldAlert, AlertCircle, Volume2 } from "lucide-react";

export const StoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const story = storiesData.find((s) => s.id === id);

  // Set SEO tags
  useEffect(() => {
    if (story) {
      document.title = `${story.title} (${story.hindiTitle}) — Oral Histories Archive | Chhath Heritage Archive`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", story.description);
      }
    }
  }, [story]);

  if (!story) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] text-[#5C2E16] flex flex-col items-center justify-center py-24 font-inter">
        <AlertCircle className="w-12 h-12 text-[#8E4A23] mb-4" />
        <h1 className="text-2xl font-bold text-[#2C221E]">Memory Entry Not Found</h1>
        <p className="text-xs text-[#7D6B58] mt-1 font-noto">अनुरोधित स्मृति प्रविष्टि डिजिटल संग्रह में उपलब्ध नहीं है।</p>
        <Link to="/stories" className="text-xs text-[#8E4A23] hover:underline font-bold mt-6">
          ← Return to Oral Histories Archive · लोक स्मृति संग्रह पर लौटें
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#5C2E16] pb-24 pt-28 font-inter">
      {/* Texture grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center justify-between border-b border-[#EADEC9] pb-4">
          <Link
            to="/stories"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#8E4A23] hover:text-[#6E3214] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Oral Histories Archive · <span className="font-noto font-normal">लोक स्मृति संग्रह</span></span>
          </Link>
          <span className="text-xs text-[#7D6B58] font-semibold">
            Exhibit: {story.id}
          </span>
        </div>

        {/* Story Title & Meta */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 border border-[#8E4A23]/30 bg-[#FBEFEB] text-[#8E4A23] text-[10px] font-semibold rounded-md">
              Archive Concept · संग्रहालयीय प्रलेख
            </span>
            <span className="px-2.5 py-0.5 border border-[#EADEC9] bg-white text-[#7D6B58] text-[10px] font-semibold rounded-md uppercase">
              Language: {story.language}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            {story.title}
          </h1>
          <span className="font-yatra text-2xl md:text-3xl text-[#8E4A23] block">
            {story.hindiTitle}
          </span>
          <p className="text-xs text-[#7D6B58] font-medium">
            Documented Oral Memory &amp; Cultural Field Narrative
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main story scroll */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Museum editorial disclaimer */}
            <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] text-xs text-[#5C2E16] rounded-2xl flex items-start gap-2.5 leading-relaxed shadow-sm font-medium">
              <ShieldAlert className="w-4.5 h-4.5 text-[#8E4A23] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#8E4A23]">Archive Concept Reconstruction:</strong> This narrative represents an ethnographic reconstruction assembled from living familial accounts across Bihar, illustrating generational ritual transmission.
              </div>
            </div>

            {/* Long text scroll */}
            <div className="p-6 md:p-8 bg-white border border-[#EADEC9] rounded-2xl shadow-sm space-y-4">
              <div className="text-xs md:text-sm text-[#2C221E] leading-relaxed whitespace-pre-line font-medium first-letter:text-3xl first-letter:font-bold first-letter:text-[#8E4A23] first-letter:mr-1">
                {story.story}
              </div>
            </div>

            {/* General Archive Disclaimer */}
            <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] text-xs text-[#6B5B52] rounded-2xl flex items-start gap-2.5 leading-relaxed font-medium">
              <AlertCircle className="w-4 h-4 text-[#8E4A23] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#8E4A23]">Archival Notice:</strong> This material documents subjective oral memories and community customs. It should be recognized as qualitative folk narrative rather than empirical historiography.
              </div>
            </div>

          </div>

          {/* Related metadata column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Location & classification */}
            <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
              <h3 className="font-bold text-base text-[#2C221E] border-b border-[#EADEC9] pb-2">
                Exhibit Metadata · <span className="font-yatra text-xs text-[#8E4A23] font-normal">स्मृति विवरण</span>
              </h3>
              <div className="text-xs space-y-2 text-[#7D6B58] leading-relaxed">
                <div className="flex justify-between border-b border-[#EADEC9]/40 pb-1">
                  <span>Class:</span>
                  <span className="font-semibold text-[#2C221E]">Concept Reconstruction</span>
                </div>
                <div className="flex justify-between border-b border-[#EADEC9]/40 pb-1">
                  <span>Consent:</span>
                  <span className="text-emerald-700 font-semibold">Verified</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span>Status:</span>
                  <span className="text-[#8E4A23] font-semibold">Indexed</span>
                </div>
              </div>
            </div>

            {/* Visual illustration box */}
            {story.image && (
              <div className="p-4 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-2">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-auto rounded-xl border border-[#EADEC9]"
                />
                <div className="text-[10px] text-[#7D6B58] font-mono leading-relaxed pt-1">
                  <div>SOURCE: {story.imageSource || "Archive Visual"}</div>
                  <div className="text-[#8E4A23] font-semibold">
                    * Cultural Reference Image · संदर्भ चित्र
                  </div>
                </div>
              </div>
            )}

            {/* Oral History simulated architecture parameters (Audio placeholder) */}
            {story.audioUrl && (
              <div className="p-4 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl space-y-2 text-xs font-medium">
                <div className="flex items-center gap-1.5 font-bold text-[#8E4A23]">
                  <Volume2 className="w-4 h-4" />
                  <span>Audio Testimonial · ऑडियो रिकॉर्डिंग</span>
                </div>
                <p className="text-xs text-[#7D6B58]">
                  Oral recordings and spoken excerpts from field research will be linked here in future updates.
                </p>
              </div>
            )}

            {/* Connections: Days */}
            {story.ritualDays && story.ritualDays.length > 0 && (
              <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-2.5">
                <h4 className="font-bold text-xs text-[#2C221E] border-b border-[#EADEC9] pb-1.5">
                  Related Ritual Days · <span className="font-yatra text-[#8E4A23] font-normal">अनुष्ठान</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {story.ritualDays.map((day) => (
                    <Link
                      key={day}
                      to={`/four-days/${day}`}
                      className="px-2.5 py-1 bg-[#FAF7F0] border border-[#EADEC9] text-xs text-[#8E4A23] font-semibold rounded-md hover:border-[#8E4A23] transition-colors capitalize"
                    >
                      {day.replace("-", " ")}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Connections: Objects */}
            {story.relatedObjects && story.relatedObjects.length > 0 && (
              <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-2.5">
                <h4 className="font-bold text-xs text-[#2C221E] border-b border-[#EADEC9] pb-1.5">
                  Associated Artifacts · <span className="font-yatra text-[#8E4A23] font-normal">विरासत वस्तुएं</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {story.relatedObjects.map((obj) => (
                    <Link
                      key={obj}
                      to={`/heritage/${obj}`}
                      className="px-2.5 py-1 bg-[#FAF7F0] border border-[#EADEC9] text-xs text-[#8E4A23] font-semibold rounded-md hover:border-[#8E4A23] transition-colors capitalize"
                    >
                      {obj}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Connections: Songs */}
            {story.relatedSongs && story.relatedSongs.length > 0 && (
              <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-2.5">
                <h4 className="font-bold text-xs text-[#2C221E] border-b border-[#EADEC9] pb-1.5">
                  Associated Folk Songs · <span className="font-yatra text-[#8E4A23] font-normal">लोकगीत</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {story.relatedSongs.map((song) => (
                    <Link
                      key={song}
                      to="/songs"
                      className="px-2.5 py-1 bg-[#FAF7F0] border border-[#EADEC9] text-xs text-[#8E4A23] font-semibold rounded-md hover:border-[#8E4A23] transition-colors capitalize"
                    >
                      {song.replace("-", " ")}
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
