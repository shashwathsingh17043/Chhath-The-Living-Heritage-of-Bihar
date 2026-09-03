import type { Song } from "../types/heritage";

const validDays = ["nahay-khay", "kharna", "sandhya-arghya", "usha-arghya", "general"];
const validCategories = [
  "traditional",
  "folk",
  "surya",
  "chhathi-maiya",
  "arghya",
  "kosi",
  "new-generation",
  "aarti",
  "other"
];
const validLanguages = ["bhojpuri", "maithili", "magahi", "hindi", "sanskrit", "other"];
const validSourceTypes = ["official_artist", "official_label", "authorized", "unverified"];

const validPlaybackStatuses = ["playable", "external-only", "unavailable", "research"];
const validVerificationStatuses = ["verified", "partial", "unverified"];

export function validateSong(song: Song): { isValid: boolean; warnings: string[] } {
  const warnings: string[] = [];
  let isValid = true;

  if (!song.id) {
    warnings.push("Missing ID field.");
    isValid = false;
  }
  if (!song.title) {
    warnings.push(`Song ID ${song.id || "unknown"}: Missing title.`);
    isValid = false;
  }
  if (!song.artist) {
    warnings.push(`Song "${song.title || song.id}": Missing primary artist.`);
    isValid = false;
  }

  // Verification and Playback checks
  if (song.playbackStatus === "playable" && !song.youtubeVideoId) {
    warnings.push(`Song "${song.title}": playbackStatus is "playable" but youtubeVideoId is missing.`);
  }

  if (song.playbackStatus === "playable" && song.verificationStatus !== "verified") {
    warnings.push(`Song "${song.title}": playbackStatus is "playable" but verificationStatus is not "verified".`);
  }

  // Enum validation
  if (song.ritualDay && !validDays.includes(song.ritualDay)) {
    warnings.push(`Song "${song.title}": Invalid ritualDay value "${song.ritualDay}".`);
  }
  if (song.category && !validCategories.includes(song.category)) {
    warnings.push(`Song "${song.title}": Invalid category value "${song.category}".`);
  }
  if (song.language && !validLanguages.includes(song.language)) {
    warnings.push(`Song "${song.title}": Invalid language value "${song.language}".`);
  }
  if (song.sourceType && !validSourceTypes.includes(song.sourceType)) {
    warnings.push(`Song "${song.title}": Invalid sourceType value "${song.sourceType}".`);
  }
  if (song.playbackStatus && !validPlaybackStatuses.includes(song.playbackStatus)) {
    warnings.push(`Song "${song.title}": Invalid playbackStatus value "${song.playbackStatus}".`);
  }
  if (song.verificationStatus && !validVerificationStatuses.includes(song.verificationStatus)) {
    warnings.push(`Song "${song.title}": Invalid verificationStatus value "${song.verificationStatus}".`);
  }

  // URL safety
  if (song.youtubeUrl && !song.youtubeUrl.includes("youtube.com") && !song.youtubeUrl.includes("youtu.be")) {
    warnings.push(`Song "${song.title}": youtubeUrl "${song.youtubeUrl}" is not a safe YouTube domain.`);
  }

  return { isValid, warnings };
}

export function auditSongsCollection(songs: Song[]): void {
  let warningCount = 0;
  
  songs.forEach((song) => {
    const { isValid, warnings } = validateSong(song);
    if (!isValid || warnings.length > 0) {
      warnings.forEach((warn) => {
        console.warn(`[Song Validation Warning]: ${warn}`);
        warningCount++;
      });
    }
  });

  if (warningCount > 0) {
    console.warn(`[Song Audit]: Audit finished with ${warningCount} warnings across ${songs.length} song entries.`);
  } else {
    console.log(`[Song Audit]: Successfully verified all ${songs.length} song entries.`);
  }
}
