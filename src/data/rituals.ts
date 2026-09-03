import type { Ritual } from "../types/heritage";

export const rituals: Ritual[] = [
  {
    id: "nahay-khay",
    title: "Nahay-Khay",
    hindiTitle: "नहाय-खाय",
    tagline: "The ritual of purification and physical preparation.",
    hindiTagline: "शुद्धि, सात्विकता और व्रत का पहला संकल्प।",
    dayNumber: 1,
    atmosphereTheme: "earth",
    description: "The first day of Chhath Puja begins with purification. Devotees take a ritual bath, usually in the holy river Ganga, clean their homes, and prepare a simple, satvik meal consisting of rice, pumpkin (kaddu), and Bengal gram lentils cooked in earthen or bronze utensils using stone-ground rock salt.",
    hindiDescription: "नहाय-खाय के दिन व्रती स्नान करके पवित्र होती हैं और सात्विक आहार ग्रहण करती हैं। इस दिन विशेष रूप से कद्दू की सब्जी, चने की दाल और अरवा चावल का भोग बनाया जाता है, जिसमें शुद्धता का पूरा ध्यान रखा जाता है। यह पूरे व्रत के लिए आत्म-शुद्धि का पहला चरण है।",
    keyPrasad: ["Kaddu Bhaat (Pumpkin & Rice)", "Chana Dal cooked in ghee"],
    hindiKeyPrasad: ["कद्दू-भात", "घी में बनी चने की दाल"],
    imageMeta: {
      url: "/assets/images/chhath-puja-lake.webp",
      alt: "Sacred cleansing bath and preparations on the first day of Chhath",
      type: "photograph",
      credit: "Project Owner Archive / Location: Unverified / Bihar context",
      locationVerified: false,
      imageSource: "Local Photo Album"
    }
  },
  {
    id: "kharna",
    title: "Kharna",
    hindiTitle: "खरना",
    tagline: "The sacred evening meal of absolute silence.",
    hindiTagline: "मन की एकाग्रता और संध्या काल का निर्जला व्रत।",
    dayNumber: 2,
    atmosphereTheme: "evening",
    description: "Many devotees observe a dry fast during the day. In the evening, after sunset, a special Prasad of jaggery rice kheer (rasiao) and hand-rolled rotis is prepared on a clay stove. The devotee breaks the fast alone, in complete silence, after which the house guests and family partake in the Prasad.",
    hindiDescription: "खरना के दिन कई व्रती दिन भर उपवास रखती हैं और इसके बाद लगभग 36 घंटे का निर्जला व्रत रखती हैं। संध्या समय मिट्टी के नए चूल्हे पर गुड़ और अरवा चावल की खीर (रसियाव) तथा हाथ से बेली हुई सादी रोटियां बनाई जाती हैं। व्रती एकांत और पूर्ण शांति में इस प्रसाद को ग्रहण करती हैं, जिसके बाद ही परिवार के लोग इसे ग्रहण करते हैं।",
    keyPrasad: ["Gur ki Kheer (Jaggery Rice Pudding)", "Wheat Rotis baked on clay stove"],
    hindiKeyPrasad: ["गुड़ की खीर (रसियाव)", "मिट्टी के चूल्हे पर सिकी रोटी"],
    imageMeta: {
      url: "/assets/images/thekua2.jpg",
      alt: "Traditional cookies arranged inside a bamboo tray reflecting domestic setup",
      type: "photograph",
      credit: "Project Owner Archive / Location: Unverified / Bihar context",
      locationVerified: false,
      imageSource: "Local Photo Album"
    }
  },
  {
    id: "sandhya-arghya",
    title: "Sandhya Arghya",
    hindiTitle: "संध्या अर्घ्य",
    tagline: "The evening offering of gratitude to the setting Sun.",
    hindiTagline: "अस्ताचलगामी सूर्य को अर्घ्य और गंगा तट पर प्रार्थना।",
    dayNumber: 3,
    atmosphereTheme: "sunset",
    description: "The third day is marked by the grand evening prayers. Devotees and their families walk in procession carrying the decorated daura (bamboo baskets) filled with Prasad (including Thekua and seasonal fruits) to the riverbanks. Standing chest-deep in water, the devotee offers Arghya to the setting Sun amid traditional folk songs.",
    hindiDescription: "तीसरे दिन शाम के समय व्रती परिवार सहित घाट पर पहुँचती हैं। सूप और दउरा में प्रसाद सजाकर डूबते हुए सूर्य को अर्घ्य दिया जाता है। इस दिन चारों तरफ पारंपरिक छठ गीत गूंजते हैं और नदियों के किनारे दीपकों की रोशनी से जगमगा उठते हैं।",
    keyPrasad: ["Thekua (Earthen wheat cookies)", "Seasonal fruits (Sugarcane, Banana, Sweet Lime)", "Coconut"],
    hindiKeyPrasad: ["ठेकुआ (गेहूँ और गुड़ का पकवान)", "ऋतु फल (ईख, केला, डाभ)", "नारियल"],
    imageMeta: {
      url: "/assets/images/Chhath-Puja-2025-A.jpeg",
      alt: "Devotees offering Arghya at sunset on a river bank",
      type: "photograph",
      credit: "Project Owner Archive / Location: Unverified / Bihar context",
      locationVerified: false,
      imageSource: "Local Photo Album"
    }
  },
  {
    id: "usha-arghya",
    title: "Usha Arghya",
    hindiTitle: "उषा अर्घ्य",
    tagline: "The morning greeting to the rising Sun of new beginnings.",
    hindiTagline: "उदीयमान सूर्य को अर्घ्य और लोक-कल्याण का आशीष।",
    dayNumber: 4,
    atmosphereTheme: "sunrise",
    description: "On the final morning, devotees return to the riverbank before dawn to welcome the rising Sun (Usha). An offering of Arghya is presented to the rising Sun. The devotees then distribute Prasad to everyone present, break their fast (which for many is an approximately 36-hour dry fast starting after Kharna), and seek the blessings of elders, concluding the sacred cycle.",
    hindiDescription: "चौथे दिन सुबह सूर्योदय से पहले व्रती फिर से घाट पर उपस्थित होती हैं। उगते हुए सूर्य देव (उषा) को अर्घ्य देकर व्रत की पूर्णता होती है। इसके बाद व्रती (जो कई व्रतियों के लिए खरना के बाद लगभग 36 घंटे का निर्जला व्रत होता है) समाप्त कर प्रसाद बांटती हैं और बड़ों का आशीर्वाद लेती हैं।",
    keyPrasad: ["Thekua", "Sprouted chickpeas", "Ginger and holy water"],
    hindiKeyPrasad: ["ठेकुआ", "अंकुरित चना", "अदरक और गंगाजल"],
    imageMeta: {
      url: "/assets/images/chhath-puja-1730718298.webp",
      alt: "Rising sun highlighting the final day of Chhath prayers at dawn",
      type: "photograph",
      credit: "Project Owner Archive / Location: Unverified / Bihar context",
      locationVerified: false,
      imageSource: "Local Photo Album"
    }
  }
];
