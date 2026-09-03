/**
 * Chhath Sound Archive - Dedicated YouTube Playlist Mapping
 * Playlist ID: PLfQdCQYpIfyQ
 * Playlist URL: https://youtube.com/playlist?list=PLfQdCQYpIfyQ
 *
 * For the PLAYABLE SOUND ARCHIVE:
 * The YouTube Playlist PLfQdCQYpIfyQ is the authoritative playback collection.
 * Only recordings explicitly present in this playlist are permitted to play.
 */

export const CHHATH_PLAYLIST_ID = "PLfQdCQYpIfyQ";

export interface PlaylistEntry {
  playlistPosition: number;
  youtubeVideoId: string;
  youtubeTitle: string;
  youtubeChannel: string;
  websiteSongId: string;
  websiteTitle: string;
  artist: string;
  startTime: number;
  matchStatus: "MATCH";
}

/**
 * The Authoritative 9 Verified Recordings in YouTube Playlist PLfQdCQYpIfyQ
 */
export const PLAYLIST_MAPPING: PlaylistEntry[] = [
  {
    playlistPosition: 1,
    youtubeVideoId: "BKoD7bTLc2k",
    youtubeTitle: "पवन सिंह का सबसे ज्यादा बजने वाला छठ गीत - जोड़े जोड़े फलवा T-Series #chhathpuja Jode Jode Falwa",
    youtubeChannel: "T-Series Hamaar Bhojpuri",
    websiteSongId: "jode-jode-falwa-pawan",
    websiteTitle: "Jode Jode Falwa",
    artist: "Pawan Singh",
    startTime: 0,
    matchStatus: "MATCH",
  },
  {
    playlistPosition: 2,
    youtubeVideoId: "j74EcjyN1WQ",
    youtubeTitle: "Ho Deenanath By Sharda Sinha Bhojpuri Chhath Pooja Geet [Full HD Song] I CHHATHI MAIYA",
    youtubeChannel: "T-Series Bhakti Sagar",
    websiteSongId: "ho-deenanath-sharda",
    websiteTitle: "Ho Deenanath",
    artist: "Sharda Sinha",
    startTime: 33,
    matchStatus: "MATCH",
  },
  {
    playlistPosition: 3,
    youtubeVideoId: "x9_3sARy_Kw",
    youtubeTitle: "Hey Chhathi Maiya Sharda Sinha Bhojpuri Chhath Songs [Full HD Song] I Chhathi Maiya",
    youtubeChannel: "T-Series Bhakti Sagar",
    websiteSongId: "hey-chhathi-maiya-sharda",
    websiteTitle: "Hey Chhathi Maiya",
    artist: "Sharda Sinha",
    startTime: 18,
    matchStatus: "MATCH",
  },
  {
    playlistPosition: 4,
    youtubeVideoId: "y7hrM7PouQM",
    youtubeTitle: "SHARDA SINHA |🙏शारदा सिन्हा🙏 | Kelwa Ke Paat Par with Lyrics | Kelva Ke Paat Par🙏🙏 | Lyrical Video",
    youtubeChannel: "T-Series Bhakti Sagar",
    websiteSongId: "kelwa-ke-paat-sharda",
    websiteTitle: "Kelwa Ke Paat Par",
    artist: "Sharda Sinha",
    startTime: 28,
    matchStatus: "MATCH",
  },
  {
    playlistPosition: 5,
    youtubeVideoId: "4B7Epg85nfI",
    youtubeTitle: "Hey Ganga Maiya By Sharda Sinha Bhojpuri Chhath Songs [Full HD Song] Chhathi Maiya",
    youtubeChannel: "T-Series Bhakti Sagar",
    websiteSongId: "hey-ganga-maiya-sharda",
    websiteTitle: "Hey Ganga Maiya",
    artist: "Sharda Sinha",
    startTime: 20,
    matchStatus: "MATCH",
  },
  {
    playlistPosition: 6,
    youtubeVideoId: "6e6Hp6R5SVU",
    youtubeTitle: "छठ पूजा Special उगs हे सूरज देव Uga Hai Suraj Dev,ANURADHA PAUDWAL,Hindi English Lyrics,Chhath Puja",
    youtubeChannel: "T-Series Bhakti Sagar",
    websiteSongId: "uga-hai-suraj-dev-anuradha",
    websiteTitle: "Uga Hai Suraj Dev",
    artist: "Anuradha Paudwal",
    startTime: 36,
    matchStatus: "MATCH",
  },
  {
    playlistPosition: 7,
    youtubeVideoId: "2Uh-rMxhBLY",
    youtubeTitle: "Jode Jode Falwa Suruj dev || Swati Mishra || Chath Geet",
    youtubeChannel: "Swati Mishra",
    websiteSongId: "jode-jode-falwa-swati",
    websiteTitle: "Jode Jode Falwa Suruj Dev",
    artist: "Swati Mishra",
    startTime: 12,
    matchStatus: "MATCH",
  },
  {
    playlistPosition: 8,
    youtubeVideoId: "OrlnX9zM5-k",
    youtubeTitle: "Chhathi Maiya Bulaye - Vishal Mishra | Kaushal Kishore | Desh Unplugged | Chhath Song 2021",
    youtubeChannel: "CLIK RECORDS",
    websiteSongId: "chhathi-maiya-bulaye-vishal",
    websiteTitle: "Chhathi Maiya Bulaye",
    artist: "Vishal Mishra",
    startTime: 15,
    matchStatus: "MATCH",
  },
  {
    playlistPosition: 9,
    youtubeVideoId: "Eyq7vfxu4iA",
    youtubeTitle: "छठ पूजा: काँच ही बाँस के बहंगिया WITH LYRICS I Kaanch Hi Baans Ke Bahangiya I ANURADHA PAUDWAL",
    youtubeChannel: "T-Series Bhakti Sagar",
    websiteSongId: "kaanch-hi-baans-anuradha",
    websiteTitle: "Kaanch Hi Baans Ke Bahangiya",
    artist: "Anuradha Paudwal",
    startTime: 18,
    matchStatus: "MATCH",
  },
];

/**
 * Set of all verified playlist video IDs. Any recording outside this set is blocked from playback.
 */
export const PLAYLIST_VIDEO_IDS = new Set<string>(PLAYLIST_MAPPING.map((m) => m.youtubeVideoId));

/**
 * Validates if a video ID is permitted to play in the Sound Archive.
 */
export function isPlayableInPlaylist(videoId?: string): boolean {
  if (!videoId) return false;
  return PLAYLIST_VIDEO_IDS.has(videoId);
}

/**
 * Resolves the playlist mapping for a given website song ID
 */
export function getPlaylistEntryForSong(songId: string): PlaylistEntry | undefined {
  return PLAYLIST_MAPPING.find((entry) => entry.websiteSongId === songId);
}

/**
 * Resolves a playlist entry from a YouTube Video ID
 */
export function getPlaylistEntryByVideoId(videoId: string): PlaylistEntry | undefined {
  return PLAYLIST_MAPPING.find((entry) => entry.youtubeVideoId === videoId);
}
