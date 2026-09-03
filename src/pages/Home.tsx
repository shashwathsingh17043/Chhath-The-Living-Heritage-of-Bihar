import React from "react";
import { Hero } from "../components/hero/Hero";
import { Introduction } from "../components/introduction/Introduction";
import { HistoryPreview } from "../components/history/HistoryPreview";
import { RitualsPreview } from "../components/rituals/RitualsPreview";
import { HeritagePreview } from "../components/heritage/HeritagePreview";
import { MusicPreview } from "../components/music/MusicPreview";
import { BiharMapPreview } from "../components/map/BiharMapPreview";
import { StoriesPreview } from "../components/stories/StoriesPreview";

export const Home: React.FC = () => {
  return (
    <div className="relative bg-[#FDFBF7] text-[#2C221E]">
      {/* Mounting all sub-sections in order */}
      <Hero />
      <Introduction />
      <HistoryPreview />
      <RitualsPreview />
      <HeritagePreview />
      <MusicPreview />
      <BiharMapPreview />
      <StoriesPreview />
    </div>
  );
};
