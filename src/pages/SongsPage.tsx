import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { songs } from "../data/songs";
import { isPlayableInPlaylist } from "../data/playlistMapping";
import { SongCard } from "../components/music/SongCard";
import { YouTubePlayer } from "../components/music/YouTubePlayer";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { 
  Search, SlidersHorizontal, Sparkles, Compass, 
  X, Play, Pause, SkipBack, SkipForward, Award, HelpCircle 
} from "lucide-react";

// Format seconds into MM:SS display
const formatTime = (secs: number) => {
  if (isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

// Define the 8 Cultural Listening Journey stages
const journeyStages = [
  { id: "ghar", name: "Domestic Sanctity", hindiName: "घर", ritual: "Home purification & sacred vow", description: "Sanitizing household, dedication of chulhas" },
  { id: "taiyari", name: "Preparation", hindiName: "तैयारी", ritual: "Assembling soop and daura", description: "Handcrafting bamboo baskets and clay lamps" },
  { id: "nahay-khay", name: "Nahay-Khay", hindiName: "नहाय-खाय", ritual: "Day 01 cleansing bath & meal", description: "Bottle gourd, rock salt, and arwa rice" },
  { id: "kharna", name: "Kharna", hindiName: "खरना", ritual: "Day 02 evening silence & kheer", description: "Nirjala fast, jaggery kheer, and prayer" },
  { id: "ghat-ki-or", name: "March to the Ghat", hindiName: "घाट प्रस्थान", ritual: "Devotional procession with daura", description: "Bearing baskets on head with folk choruses" },
  { id: "sandhya-arghya", name: "Sandhya Arghya", hindiName: "संध्या अर्घ्य", ritual: "Day 03 sunset solar offering", description: "Standing chest-deep in water honoring the setting sun" },
  { id: "ratri-jagran", name: "Night Vigil", hindiName: "रात्रि जागरण", ritual: "Kosi sugarcane canopy & earthen lamps", description: "Night-long devotional singing around illuminated kosi" },
  { id: "usha-arghya", name: "Usha Arghya", hindiName: "उषा अर्घ्य", ritual: "Day 04 dawn solar renewal", description: "Welcoming the rising sun and sharing mahaprasad" }
];

export const SongsPage: React.FC = () => {
  const { 
    playSong, 
    currentSong,
    isPlaying,
    isBuffering,
    currentTime,
    duration,
    pause,
    resume,
    skipToNext,
    skipToPrevious,
    seekTo,
    playerError
  } = useAudioPlayer();
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDay, setActiveDay] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLanguage, setActiveLanguage] = useState("all");
  const [activeArtist, setActiveArtist] = useState("all");
  const [activeStage, setActiveStage] = useState<string | null>(null);

  // Responsive mobile drawer
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);

  // Set page SEO metadata
  useEffect(() => {
    document.title = "घर से घाट तक — Digital Chhath Music Archive | Bihar Ki Jeevit Virasat";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Experience the authentic musical heritage of Chhath Puja. Listen to verified recordings from Sharda Sinha, Anuradha Paudwal, and explore the cultural listening journey."
      );
    }
  }, []);

  // Sync url param for artist search
  useEffect(() => {
    const artistParam = searchParams.get("artist");
    if (artistParam) {
      const artistsList = Array.from(new Set(songs.map((s) => s.artist)));
      const matchedArtist = artistsList.find(
        (a) => a.toLowerCase().replace(/\s+/g, "-") === artistParam.toLowerCase()
      );
      if (matchedArtist) setActiveArtist(matchedArtist);
      else setActiveArtist(artistParam);
    }
  }, [searchParams]);

  // Extract unique artists for filters
  const artistsList = useMemo(() => {
    return Array.from(new Set(songs.map((s) => s.artist))).filter(Boolean);
  }, []);

  // Filter groups: Split into Verified Playlist Playable, Offline Unavailable, and Research
  const verifiedSongs = useMemo(() => {
    return songs.filter((s) => s.playbackStatus === "playable" && isPlayableInPlaylist(s.youtubeVideoId));
  }, []);

  const unavailableSongs = useMemo(() => {
    return songs.filter((s) => s.playbackStatus === "unavailable");
  }, []);

  const researchSongs = useMemo(() => {
    return songs.filter((s) => s.playbackStatus === "research");
  }, []);

  // 1. Process Filterable Playable List
  const filteredPlayableSongs = useMemo(() => {
    return verifiedSongs.filter((song) => {
      // Search matching
      const matchesSearch =
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (song.hindiTitle && song.hindiTitle.includes(searchQuery)) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Dropdown matching
      const matchesDay = activeDay === "all" || song.ritualDay === activeDay;
      const matchesCategory = activeCategory === "all" || song.category === activeCategory;
      const matchesLanguage = activeLanguage === "all" || song.language === activeLanguage;
      const matchesArtist = activeArtist === "all" || song.artist === activeArtist;

      // Cultural listening journey matching
      let matchesStage = true;
      if (activeStage) {
        if (activeStage === "ghar") {
          matchesStage = song.category === "traditional" || song.category === "folk" || song.ritualDay === "general";
        } else if (activeStage === "taiyari") {
          matchesStage = song.tags?.some(t => ["classic", "compilation", "sharda-sinha", "combined"].includes(t)) || false;
        } else if (activeStage === "nahay-khay") {
          matchesStage = song.ritualDay === "nahay-khay";
        } else if (activeStage === "kharna") {
          matchesStage = song.ritualDay === "kharna";
        } else if (activeStage === "ghat-ki-or") {
          matchesStage = song.category === "arghya" || song.category === "new-generation" || song.category === "folk";
        } else if (activeStage === "sandhya-arghya") {
          matchesStage = song.ritualDay === "sandhya-arghya";
        } else if (activeStage === "ratri-jagran") {
          matchesStage = song.category === "kosi" || song.category === "surya";
        } else if (activeStage === "usha-arghya") {
          matchesStage = song.ritualDay === "usha-arghya";
        }
      }

      return matchesSearch && matchesDay && matchesCategory && matchesLanguage && matchesArtist && matchesStage;
    });
  }, [verifiedSongs, searchQuery, activeDay, activeCategory, activeLanguage, activeArtist, activeStage]);

  // Select a default featured song from the verified playlist collection
  const featuredSong = useMemo(() => {
    return verifiedSongs.find(s => s.id === "ho-deenanath-sharda") || verifiedSongs[0];
  }, [verifiedSongs]);

  const currentTrackIndex = verifiedSongs.findIndex((s) => s.id === currentSong?.id);
  const hasNextTrack = currentTrackIndex !== -1 && currentTrackIndex < verifiedSongs.length - 1;
  const hasPrevTrack = currentTrackIndex > 0;

  const handleFilterChange = (type: string, value: string) => {
    setActiveStage(null); // Clear journey stage if manual filters changed
    if (type === "day") setActiveDay(value);
    if (type === "cat") setActiveCategory(value);
    if (type === "lang") setActiveLanguage(value);
    if (type === "artist") {
      setActiveArtist(value);
      if (value === "all") {
        setSearchParams({});
      } else {
        setSearchParams({ artist: value.toLowerCase().replace(/\s+/g, "-") });
      }
    }
  };

  const handleStageSelect = (stageId: string) => {
    // Toggle active stage
    if (activeStage === stageId) {
      setActiveStage(null);
    } else {
      setActiveStage(stageId);
      // Reset dropdowns to avoid conflict
      setActiveDay("all");
      setActiveCategory("all");
      setActiveLanguage("all");
      setActiveArtist("all");
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setActiveDay("all");
    setActiveCategory("all");
    setActiveLanguage("all");
    setActiveArtist("all");
    setActiveStage(null);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C221E] pt-24 pb-36 relative overflow-hidden">
      {/* Invisible persistent YouTube Player (Official IFrame Provider) */}
      <YouTubePlayer />
      
      {/* Soft warm ambient background glow */}
      <div className="absolute top-[30%] right-[10%] w-72 h-72 rounded-full bg-[#8E4A23]/5 filter blur-3xl pointer-events-none z-0" />

      {/* Fine-grained page texture grain */}
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 8 COLUMNS: Cultural Archive Content */}
          <main className="lg:col-span-8 space-y-12 font-inter">
            
            {/* HERO TITLE HEADER */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#F4EFE6] border border-[#EADEC9] text-xs text-[#8E4A23] font-semibold rounded-lg">
                  Living Sound Archive · <span className="font-noto font-normal">श्रव्य धरोहर</span>
                </span>
                
                {/* Visual audio wave representation */}
                <div className="flex items-end gap-[3px] h-5 px-1">
                  <span className="w-[3px] bg-[#8E4A23] rounded-full" style={{ animation: 'waveGlow 1.2s ease-in-out infinite alternate' }} />
                  <span className="w-[3px] bg-[#8E4A23] rounded-full" style={{ animation: 'waveGlow 0.8s ease-in-out infinite alternate 0.2s' }} />
                  <span className="w-[3px] bg-[#8E4A23] rounded-full" style={{ animation: 'waveGlow 1.5s ease-in-out infinite alternate 0.4s' }} />
                  <span className="w-[3px] bg-[#8E4A23] rounded-full" style={{ animation: 'waveGlow 1s ease-in-out infinite alternate 0.6s' }} />
                </div>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#2C221E] leading-tight select-none">
                  From Home to the Ghat — Chhath Geet
                </h1>
                <span className="font-yatra text-2xl sm:text-3xl text-[#8E4A23] block mt-1">
                  घर से घाट तक — छठ के गीत
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#6B5B52] max-w-xl leading-relaxed">
                A verified acoustic archive honoring legendary vocalist Padma awardee Sharda Sinha and traditional folk bards. Every recording is indexed with validated metadata and source rights.
              </p>
            </div>

            {/* EDITORIAL FEATURED GEET BLOCK */}
            {featuredSong && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#EADEC9] pb-2">
                  <Sparkles className="w-4 h-4 text-[#8E4A23]" />
                  <h2 className="font-bold text-base text-[#8E4A23]">
                    Featured Archive Selection · <span className="font-yatra font-normal text-sm">विशेष संगीत प्रस्तुति</span>
                  </h2>
                </div>

                <div className="relative border border-[#EADEC9] bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 overflow-hidden shadow-sm">
                  {featuredSong.thumbnail && (
                    <div className="w-full md:w-44 h-44 rounded-xl overflow-hidden flex-shrink-0 border border-[#EADEC9] relative shadow z-10">
                      <img
                        src={featuredSong.thumbnail}
                        alt={featuredSong.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1 text-left space-y-3.5 z-10 w-full">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-emerald-300 bg-emerald-50 text-[9px] text-emerald-800 font-semibold rounded">
                        ✓ Verified YouTube Source · अधिकृत स्रोत
                      </span>
                      <h3 className="font-bold text-2xl sm:text-3xl text-[#2C221E] leading-tight">
                        {featuredSong.title}
                      </h3>
                      {featuredSong.hindiTitle && (
                        <span className="font-yatra text-lg text-[#8E4A23] block -mt-1">
                          {featuredSong.hindiTitle}
                        </span>
                      )}
                      <p className="text-xs text-[#8E4A23] font-semibold">
                        Vocals: {featuredSong.artist}
                      </p>
                    </div>

                    <p className="text-xs text-[#5C2E16] leading-relaxed max-w-xl font-medium">
                      {featuredSong.description || "This revered traditional melody embodies the domestic spirit of Chhath, narrating the devotional care of preparing the bamboo soop and daura."}
                    </p>

                    <div className="pt-3 border-t border-[#EADEC9] flex items-center justify-between gap-4">
                      <span className="text-[10px] text-[#7D6B58]">Source: Official YouTube Partner</span>
                      <button
                        onClick={() => playSong(featuredSong, "now")}
                        className="px-6 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] transition-all font-semibold text-xs tracking-wide rounded-lg shadow flex items-center gap-1.5 min-h-[44px]"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Listen Now · गीत सुनें</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* INTERACTIVE CULTURAL LISTENING JOURNEY */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EADEC9] pb-2">
                <div className="flex items-center gap-2">
                  <Compass className="w-4.5 h-4.5 text-[#8E4A23]" />
                  <h2 className="font-bold text-base text-[#8E4A23]">
                    Cultural Listening Journey · <span className="font-yatra font-normal text-sm">सांस्कृतिक श्रवण यात्रा</span>
                  </h2>
                </div>
                {activeStage && (
                  <button 
                    onClick={() => setActiveStage(null)}
                    className="text-[10px] text-[#8E4A23] font-semibold tracking-wide hover:underline"
                  >
                    View All / Reset
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {journeyStages.map((stage) => {
                  const isActive = activeStage === stage.id;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => handleStageSelect(stage.id)}
                      className={`p-3.5 border text-left rounded-xl transition-all flex flex-col justify-between gap-2 min-h-[85px] focus:outline-none focus:ring-2 focus:ring-[#8E4A23] ${
                        isActive
                          ? "border-2 border-[#8E4A23] bg-[#FBEFEB] shadow-sm"
                          : "border-[#EADEC9] bg-white hover:border-[#8E4A23]/50 shadow-sm"
                      }`}
                    >
                      <div>
                        <span className={`font-bold text-xs leading-none block ${isActive ? 'text-[#8E4A23]' : 'text-[#2C221E]'}`}>
                          {stage.name}
                        </span>
                        <span className="font-yatra text-[11px] text-[#8E4A23]">
                          {stage.hindiName}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-[#2C221E] font-medium block leading-tight">
                          {stage.ritual}
                        </span>
                        <span className="text-[9px] text-[#7D6B58] block leading-tight">
                          {stage.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ARCHIVE SEARCH AND DISCOVERY FILTERS */}
            <section className="space-y-4 bg-[#F4EFE6] border border-[#EADEC9] p-5 rounded-2xl shadow-sm">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {/* Search Bar */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7D6B58]" />
                  <input
                    id="search-songs"
                    type="text"
                    placeholder="Search songs, artists, or raga... (e.g. Sharda Sinha, बहंगिया)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EADEC9] rounded-xl text-xs text-[#2C221E] focus:ring-2 focus:ring-[#8E4A23] focus:outline-none transition-all placeholder:text-[#7D6B58]/70 min-h-[44px] shadow-sm"
                    aria-label="Search songs or artists"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {/* Filters button on mobile */}
                  <button
                    onClick={() => setShowFiltersDrawer(true)}
                    className="sm:hidden flex items-center justify-center gap-1.5 px-4 py-2.5 border border-[#EADEC9] bg-white text-[#2C221E] rounded-xl text-xs w-full min-h-[44px] shadow-sm font-semibold"
                    aria-label="Open filter menu"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-[#8E4A23]" />
                    <span>Filters · फ़िल्टर</span>
                  </button>

                  {/* Reset button */}
                  {(searchQuery || activeDay !== "all" || activeCategory !== "all" || activeLanguage !== "all" || activeArtist !== "all" || activeStage) && (
                    <button
                      onClick={clearAllFilters}
                      className="px-4 py-2.5 border border-[#EADEC9] bg-white text-[#8E4A23] rounded-xl text-xs font-semibold hover:bg-[#FBEFEB] transition-all flex items-center justify-center gap-1 min-h-[44px] shadow-sm"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Reset Filters</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Desktop Filters Selection Row */}
              <div className="hidden sm:grid grid-cols-4 gap-4 text-xs">
                {/* Day filter */}
                <div className="space-y-1.5">
                  <label htmlFor="day-select" className="text-[10px] text-[#6B5B52] font-semibold block">Ritual Day · चार दिन</label>
                  <select
                    id="day-select"
                    value={activeDay}
                    onChange={(e) => handleFilterChange("day", e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#EADEC9] rounded-lg text-[#2C221E] focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[38px] transition-all shadow-sm"
                  >
                    <option value="all">All Ritual Days</option>
                    <option value="nahay-khay">Day 01: Nahay Khay · नहाय-खाय</option>
                    <option value="kharna">Day 02: Kharna · खरना</option>
                    <option value="sandhya-arghya">Day 03: Sandhya Arghya · संध्या अर्घ्य</option>
                    <option value="usha-arghya">Day 04: Usha Arghya · उषा अर्घ्य</option>
                    <option value="general">General Devotional · सामान्य</option>
                  </select>
                </div>

                {/* Category filter */}
                <div className="space-y-1.5">
                  <label htmlFor="cat-select" className="text-[10px] text-[#6B5B52] font-semibold block">Tradition · परंपरा</label>
                  <select
                    id="cat-select"
                    value={activeCategory}
                    onChange={(e) => handleFilterChange("cat", e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#EADEC9] rounded-lg text-[#2C221E] focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[38px] transition-all shadow-sm"
                  >
                    <option value="all">All Traditions</option>
                    <option value="traditional">Traditional · पारंपरिक</option>
                    <option value="folk">Folk · लोकगीत</option>
                    <option value="surya">Surya Vandana · सूर्य</option>
                    <option value="chhathi-maiya">Chhathi Maiya · छठी मैया</option>
                    <option value="arghya">Arghya Samarpan · अर्घ्य</option>
                    <option value="kosi">Kosi Jagran · कोसी</option>
                    <option value="new-generation">Contemporary · नई पीढ़ी</option>
                    <option value="aarti">Aarti · आरती</option>
                  </select>
                </div>

                {/* Language filter */}
                <div className="space-y-1.5">
                  <label htmlFor="lang-select" className="text-[10px] text-[#6B5B52] font-semibold block">Language · भाषा</label>
                  <select
                    id="lang-select"
                    value={activeLanguage}
                    onChange={(e) => handleFilterChange("lang", e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#EADEC9] rounded-lg text-[#2C221E] focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[38px] transition-all shadow-sm"
                  >
                    <option value="all">All Languages</option>
                    <option value="bhojpuri">Bhojpuri · भोजपुरी</option>
                    <option value="maithili">Maithili · मैथिली</option>
                    <option value="magahi">Magahi · मगही</option>
                    <option value="hindi">Hindi · हिंदी</option>
                  </select>
                </div>

                {/* Artist filter */}
                <div className="space-y-1.5">
                  <label htmlFor="artist-select" className="text-[10px] text-[#6B5B52] font-semibold block">Vocalist · गायक</label>
                  <select
                    id="artist-select"
                    value={activeArtist}
                    onChange={(e) => handleFilterChange("artist", e.target.value)}
                    className="w-full p-2.5 bg-white border border-[#EADEC9] rounded-lg text-[#2C221E] focus:ring-2 focus:ring-[#8E4A23] focus:outline-none min-h-[38px] transition-all shadow-sm"
                  >
                    <option value="all">All Artists</option>
                    {artistsList.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>
            </section>

            {/* PLAYABLE VERIFIED SECTION (Editorial compositions) */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#EADEC9] pb-2">
                <div>
                  <h3 className="font-bold text-lg text-[#2C221E]">
                    Verified Folk Archive · <span className="font-yatra text-base text-[#8E4A23]">प्रमाणित लोकगीत</span>
                  </h3>
                </div>
                <span className="text-xs text-[#7D6B58] font-medium">{filteredPlayableSongs.length} tracks available</span>
              </div>

              {filteredPlayableSongs.length === 0 ? (
                <div className="p-8 border border-[#EADEC9] bg-white text-center text-[#7D6B58] rounded-xl text-sm shadow-sm">
                  No verified tracks found matching your selection. Please adjust or reset filters.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredPlayableSongs.map((song, index) => {
                    const assignedLayout = index === 0 && !activeStage && !searchQuery
                      ? "featured"
                      : (song.category === "traditional" || song.category === "folk" ? "traditional" : "modern");

                    return (
                      <SongCard
                        key={song.id}
                        song={song}
                        layout={assignedLayout}
                      />
                    );
                  })}
                </div>
              )}
            </section>

            {/* UNVERIFIED / PLAYBACK UNAVAILABLE SECTION */}
            <section className="space-y-6 p-6 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 border-b border-[#EADEC9] pb-2">
                <Award className="w-5 h-5 text-[#8E4A23]" />
                <h3 className="font-bold text-base text-[#2C221E]">
                  Playback Restricted Records · <span className="font-yatra text-sm text-[#8E4A23]">अपुष्ट एवं कॉपीराइट संरक्षित</span>
                </h3>
              </div>
              <p className="text-xs text-[#5C2E16] max-w-2xl leading-relaxed font-medium">
                The recordings below are documented in our cultural discography, but direct streaming rights or clean public audio feeds are unavailable. To maintain archival compliance and playback integrity, interactive playback is disabled.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {unavailableSongs.map((song) => (
                  <SongCard
                    key={song.id}
                    song={song}
                    layout="unavailable"
                  />
                ))}
              </div>
            </section>

            {/* RESEARCH ARCHIVE SECTION */}
            <section className="space-y-6 p-6 border border-[#EADEC9] bg-[#F4EFE6] rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 border-b border-[#EADEC9] pb-2">
                <HelpCircle className="w-5 h-5 text-[#8E4A23]" />
                <h3 className="font-bold text-base text-[#2C221E]">
                  Academic &amp; Ethnomusicology Archive · <span className="font-yatra text-sm text-[#8E4A23]">शोध पुरालेख</span>
                </h3>
              </div>
              <p className="text-xs text-[#5C2E16] max-w-2xl leading-relaxed font-medium">
                Historical and textual references preserved for research into folk meter, Bhojpuri and Maithili dialect poetry, and ritual evolution. While not published across mainstream streaming platforms, their lyrical structure is archived here.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {researchSongs.map((song) => (
                  <SongCard
                    key={song.id}
                    song={song}
                    layout="research"
                  />
                ))}
              </div>
            </section>

          </main>

          {/* RIGHT 4 COLUMNS: Custom Archival Playback Console */}
          <aside className="hidden md:block lg:col-span-4 lg:sticky lg:top-24 space-y-6 font-inter">
            <div className="p-5 md:p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm flex flex-col gap-5 relative overflow-hidden">
              
              {/* Console Header */}
              <div className="border-b border-[#EADEC9] pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xs text-[#8E4A23] uppercase tracking-wider">
                    NOW PLAYING · <span className="font-yatra text-sm">बज रहा है</span>
                  </h3>
                  <span className="text-[10px] text-[#7D6B58] block mt-0.5">Living Heritage Archive Console</span>
                </div>
                <span className="px-2 py-0.5 bg-[#FBEFEB] border border-[#8E4A23]/20 text-[#8E4A23] rounded text-[9px] font-semibold">
                  Official Audio
                </span>
              </div>

              {/* Custom Console Body */}
              {currentSong ? (
                <div className="space-y-4 text-left">
                  {/* Artwork & Track Information */}
                  <div className="space-y-3">
                    {currentSong.thumbnail && (
                      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#EADEC9] relative shadow-sm bg-[#FAF7F0]">
                        <img
                          src={currentSong.thumbnail}
                          alt={currentSong.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white rounded text-[9px] font-mono">
                          PLAYLIST POS {currentSong.playlistPosition || "•"}
                        </div>
                      </div>
                    )}

                    <div className="space-y-1">
                      <h4 className="font-bold text-lg text-[#2C221E] leading-snug">{currentSong.title}</h4>
                      {currentSong.hindiTitle && (
                        <span className="font-yatra text-base text-[#8E4A23] block -mt-0.5">{currentSong.hindiTitle}</span>
                      )}
                      <p className="text-xs text-[#8E4A23] font-semibold">{currentSong.artist}</p>
                      {currentSong.ritual && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-[#F4EFE6] border border-[#EADEC9] rounded text-[10px] text-[#7D6B58]">
                          {currentSong.ritual}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Custom Progress Slider */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-[#7D6B58] w-9 text-right">{formatTime(currentTime)}</span>
                      <input
                        type="range"
                        min="0"
                        max={duration || 100}
                        value={currentTime}
                        onChange={(e) => seekTo(Number(e.target.value))}
                        className="flex-1 h-1.5 bg-[#EADEC9] rounded-lg appearance-none cursor-pointer accent-[#8E4A23] focus:outline-none"
                        aria-label="Seek track position"
                      />
                      <span className="text-[11px] font-mono text-[#7D6B58] w-9">{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Custom Controls Bar */}
                  <div className="flex items-center justify-center gap-5 py-2 border-y border-[#EADEC9]">
                    {/* Previous Button */}
                    <button
                      onClick={skipToPrevious}
                      disabled={!hasPrevTrack}
                      className={`p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#8E4A23] ${
                        !hasPrevTrack
                          ? "text-[#C8B8A6] cursor-not-allowed"
                          : "text-[#5C2E16] hover:text-[#8E4A23] hover:bg-[#F4EFE6]"
                      } min-h-[40px] min-w-[40px] flex items-center justify-center`}
                      aria-label="Previous recording"
                      title="Previous recording"
                    >
                      <SkipBack className="w-5 h-5 fill-current" />
                    </button>

                    {/* Play / Pause Toggle */}
                    <button
                      onClick={() => isPlaying ? pause() : resume()}
                      disabled={!!playerError}
                      className={`w-12 h-12 rounded-full ${
                        playerError
                          ? "bg-[#D9C8AE] text-white cursor-not-allowed"
                          : "bg-[#8E4A23] text-white hover:scale-105 hover:bg-[#6E3214]"
                      } active:scale-95 transition-all flex items-center justify-center shadow focus:outline-none focus:ring-2 focus:ring-[#8E4A23] min-h-[48px]`}
                      aria-label={isBuffering ? "Loading audio" : isPlaying ? "Pause audio" : "Play audio"}
                    >
                      {isBuffering ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      )}
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={skipToNext}
                      disabled={!hasNextTrack}
                      className={`p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#8E4A23] ${
                        !hasNextTrack
                          ? "text-[#C8B8A6] cursor-not-allowed"
                          : "text-[#5C2E16] hover:text-[#8E4A23] hover:bg-[#F4EFE6]"
                      } min-h-[40px] min-w-[40px] flex items-center justify-center`}
                      aria-label="Next recording"
                      title="Next recording"
                    >
                      <SkipForward className="w-5 h-5 fill-current" />
                    </button>
                  </div>

                  {/* Cultural Context */}
                  <div className="space-y-1 p-3.5 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl text-[11px] leading-relaxed text-[#5C2E16]">
                    <div>
                      <strong className="text-[#8E4A23]">Cultural Context:</strong> {currentSong.culturalContext || "Traditional devotional geet performed during the four sacred days of Chhath."}
                    </div>
                  </div>

                  {/* Respectful & Honest Attribution */}
                  <div className="pt-2 text-[10px] text-[#7D6B58] border-t border-[#EADEC9] space-y-0.5">
                    <div>Playback source: <span className="font-semibold text-[#5C2E16]">YouTube</span> (Official Sound Archive Playlist)</div>
                    <div>Official recording: <span className="font-semibold text-[#5C2E16]">{currentSong.sourceChannel || "Official Label Release"}</span></div>
                  </div>
                </div>
              ) : (
                <div className="p-8 border border-dashed border-[#D9C8AE] bg-[#FAF7F0] rounded-xl text-center text-[#7D6B58] text-xs select-none space-y-2">
                  <p className="font-semibold text-[#8E4A23]">Archive Player Standby</p>
                  <p>Click on any verified track from the 9 playlist selections below to begin playback.</p>
                </div>
              )}
            </div>
          </aside>

        </div>
      </div>

      {/* FULL SCREEN FILTERS DRAWER ON MOBILE */}
      {showFiltersDrawer && (
        <div className="sm:hidden fixed inset-0 bg-[#FDFBF7] z-[100] p-6 flex flex-col justify-between overflow-y-auto text-[#2C221E] font-inter">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#EADEC9] pb-3">
              <h4 className="font-bold text-lg text-[#2C221E]">
                Archive Filters · <span className="font-yatra text-base text-[#8E4A23]">गीत फ़िल्टर</span>
              </h4>
              <button
                onClick={() => setShowFiltersDrawer(false)}
                className="p-2 rounded-lg bg-[#F4EFE6] text-[#5C2E16] focus:outline-none"
                aria-label="Close filters menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Day filter */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-[#6B5B52] font-semibold block">Ritual Day · चार दिन</label>
                <select
                  value={activeDay}
                  onChange={(e) => handleFilterChange("day", e.target.value)}
                  className="w-full p-3 bg-white border border-[#EADEC9] rounded-xl text-[#2C221E] outline-none min-h-[44px] shadow-sm"
                >
                  <option value="all">All Ritual Days</option>
                  <option value="nahay-khay">Day 01: Nahay Khay · नहाय-खाय</option>
                  <option value="kharna">Day 02: Kharna · खरना</option>
                  <option value="sandhya-arghya">Day 03: Sandhya Arghya · संध्या अर्घ्य</option>
                  <option value="usha-arghya">Day 04: Usha Arghya · उषा अर्घ्य</option>
                  <option value="general">General · सामान्य</option>
                </select>
              </div>

              {/* Category filter */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-[#6B5B52] font-semibold block">Tradition · परंपरा</label>
                <select
                  value={activeCategory}
                  onChange={(e) => handleFilterChange("cat", e.target.value)}
                  className="w-full p-3 bg-white border border-[#EADEC9] rounded-xl text-[#2C221E] outline-none min-h-[44px] shadow-sm"
                >
                  <option value="all">All Traditions</option>
                  <option value="traditional">Traditional · पारंपरिक</option>
                  <option value="folk">Folk · लोकगीत</option>
                  <option value="surya">Surya Vandana · सूर्य</option>
                  <option value="chhathi-maiya">Chhathi Maiya · छठी मैया</option>
                  <option value="arghya">Arghya Samarpan · अर्घ्य</option>
                  <option value="kosi">Kosi Jagran · कोसी</option>
                  <option value="new-generation">Contemporary · नई पीढ़ी</option>
                  <option value="aarti">Aarti · आरती</option>
                </select>
              </div>

              {/* Language filter */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-[#6B5B52] font-semibold block">Language · भाषा</label>
                <select
                  value={activeLanguage}
                  onChange={(e) => handleFilterChange("lang", e.target.value)}
                  className="w-full p-3 bg-white border border-[#EADEC9] rounded-xl text-[#2C221E] outline-none min-h-[44px] shadow-sm"
                >
                  <option value="all">All Languages</option>
                  <option value="bhojpuri">Bhojpuri · भोजपुरी</option>
                  <option value="maithili">Maithili · मैथिली</option>
                  <option value="magahi">Magahi · मगही</option>
                  <option value="hindi">Hindi · हिंदी</option>
                </select>
              </div>

              {/* Artist filter */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-[#6B5B52] font-semibold block">Vocalist · गायक</label>
                <select
                  value={activeArtist}
                  onChange={(e) => handleFilterChange("artist", e.target.value)}
                  className="w-full p-3 bg-white border border-[#EADEC9] rounded-xl text-[#2C221E] outline-none min-h-[44px] shadow-sm"
                >
                  <option value="all">All Artists</option>
                  {artistsList.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowFiltersDrawer(false)}
            className="w-full py-3.5 bg-[#8E4A23] text-white font-semibold rounded-xl text-xs tracking-wide hover:bg-[#6E3214] transition-all text-center min-h-[44px] shadow"
          >
            Apply Filters · लागू करें
          </button>
        </div>
      )}

    </div>
  );
};
