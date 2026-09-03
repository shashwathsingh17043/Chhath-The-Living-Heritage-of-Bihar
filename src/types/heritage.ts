export type ImageType = "photograph" | "illustration" | "generated" | "archival";

export interface ImageMetadata {
  url: string;
  alt: string;
  credit?: string;
  photographer?: string;
  type: ImageType;
  licenseUrl?: string;
  locationVerified?: boolean;
  imageSource?: string;
}

export interface SourceReference {
  id: string;
  title: string;
  publisher: string;
  url?: string;
  type: "government" | "academic" | "museum" | "archive" | "other";
}

export interface HistoricalEntry {
  id: string;
  title: string;
  hindiTitle: string;
  period?: string;
  summary: string;
  hindiSummary: string;
  content: string;
  hindiContent: string;
  category:
    | "historical_context"
    | "archaeological_context"
    | "textual"
    | "interpreted"
    | "religious_tradition"
    | "folk_tradition"
    | "oral_history"
    | "regional_practice"
    | "modern_cultural_practice";
  evidenceLevel:
    | "documented"
    | "archaeological"
    | "textual"
    | "interpreted"
    | "traditional"
    | "oral";
  sources: SourceReference[];
  relatedLocations?: string[];
  relatedRituals?: string[];
}

export interface Song {
  id: string;

  title: string;
  hindiTitle?: string;

  artist: string;
  artists?: string[];

  youtubeVideoId?: string;
  youtubeUrl?: string;
  youtubePlaylistId?: string;
  playlistPosition?: number;

  youtubeChannel?: string;
  channelUrl?: string;

  thumbnail?: string;

  ritualDay?:
    | "nahay-khay"
    | "kharna"
    | "sandhya-arghya"
    | "usha-arghya"
    | "general";

  ritual?: string;

  category?:
    | "traditional"
    | "folk"
    | "surya"
    | "chhathi-maiya"
    | "arghya"
    | "kosi"
    | "new-generation"
    | "aarti"
    | "other";

  language?:
    | "bhojpuri"
    | "maithili"
    | "magahi"
    | "hindi"
    | "sanskrit"
    | "other";

  region?: string;

  description?: string;

  culturalContext?: string;

  sourceVerified: boolean;

  sourceType?:
    | "official_artist"
    | "official_label"
    | "authorized"
    | "unverified";

  duration?: string;

  year?: number;

  tags?: string[];

  playbackStatus?: "playable" | "external-only" | "unavailable" | "research";

  verificationStatus?: "verified" | "partial" | "unverified";

  sourceChannel?: string;

  verificationNote?: string;
  startTime?: number; // seconds where vocals/song starts, skipping video intro
  endTime?: number; // optional, for multi-song compilation videos
}

export interface FestivalYear {
  year: number;
  days: {
    date: string;
    ritualId: string;
  }[];
}

export interface Ritual {
  id: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  hindiTagline: string;
  description: string;
  hindiDescription: string;
  dayNumber: number;
  atmosphereTheme: "earth" | "evening" | "sunset" | "sunrise";
  imageMeta?: ImageMetadata;
  keyPrasad?: string[];
  hindiKeyPrasad?: string[];
}

export interface Artisan {
  id: string;
  name?: string;
  craft: string;
  region?: string;
  description: string;
  image?: string;
  source?: SourceReference[];
  verified: boolean;
}

export interface Recipe {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  servings?: number;
  preparationTime?: string;
  cookingTime?: string;
  ingredients: {
    name: string;
    quantity?: string;
    notes?: string;
  }[];
  steps: {
    title: string;
    description: string;
    image?: string;
  }[];
  variations?: string[];
  culturalContext?: string;
  ritualConnection?: string[];
  sources?: SourceReference[];
  image?: string;
  imageType?: ImageType;
  imageCredit?: string;
  imageSource?: string;
  imageAlt?: string;
  locationVerified?: boolean;
}

export interface HeritageObject {
  id: string;
  name: string;
  hindiName: string;
  alternateNames?: string[];
  category:
    | "bamboo"
    | "food"
    | "ritual"
    | "clay"
    | "plant"
    | "offering";
  material?: string;
  description: string;
  hindiDescription: string;
  culturalContext?: string;
  ritualUse?: string;
  preparation?: string;
  region?: string[];
  image?: string;
  imageType?: ImageType;
  imageCredit?: string;
  imageSource?: string;
  imageAlt?: string;
  locationVerified?: boolean;
  sources?: SourceReference[];
  variations?: string[];
  relatedRituals?: string[];
  relatedSongs?: string[];
  relatedStories?: string[];
}

export interface River {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  source?: string;
  regions?: string[];
  chhathConnection?: string;
  locations?: string[];
  sources?: SourceReference[];
}

export interface HeritageLocation {
  id: string;
  name: string;
  hindiName: string;
  district?: string;
  region?: string;
  latitude: number;
  longitude: number;
  type:
    | "ghat"
    | "sun-temple"
    | "river"
    | "town"
    | "pilgrimage-site"
    | "heritage-site";
  description: string;
  hindiDescription: string;
  chhathConnection?: string;
  river?: string;
  traditions?: string[];
  historicalContext?: string;
  image?: string;
  imageType?: ImageType;
  imageSource?: string;
  imageCredit?: string;
  imageAlt?: string;
  locationVerified?: boolean;
  sources?: SourceReference[];
  verified: boolean;
}

export interface Story {
  id: string;
  title: string;
  hindiTitle: string;
  narrator?: string;
  age?: number;
  region?: string;
  hindiRegion?: string;
  summary: string;
  hindiSummary: string;
  content?: string;
  hindiContent?: string;
  dateCollected?: string;
  isConcept: boolean; // True for mock stories that are archive categories
  imageMeta?: ImageMetadata;
}

export interface MemoryStory {
  id: string;
  title: string;
  hindiTitle: string;
  story: string;
  description: string;
  memoryType: "archive-concept" | "community-memory" | "oral-history" | "folk-memory";
  language: string;
  locationId?: string;
  ritualDays?: string[];
  relatedObjects?: string[];
  relatedSongs?: string[];
  contributorName?: string;
  contributorLocation?: string;
  consentStatus: boolean;
  publicationStatus: "pending" | "published" | "rejected";
  audioUrl?: string;
  image?: string;
  imageType?: ImageType;
  imageSource?: string;
  imageCredit?: string;
}
