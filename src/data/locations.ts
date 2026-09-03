import type { HeritageLocation } from "../types/heritage";
import { sources } from "./sources";

export const featuredLocations: HeritageLocation[] = [
  {
    id: "patna",
    name: "Patna Ghats",
    hindiName: "पटना घाट",
    district: "Patna",
    region: "Magadh",
    latitude: 25.6200,
    longitude: 85.1700,
    type: "ghat",
    description: "Famous for the massive scale of celebrations along the bank of the Ganges, featuring historic ghats like Gandhi Ghat, Collectorate Ghat, and Bhadra Ghat.",
    hindiDescription: "गंगा नदी के तट पर विशाल पैमाने पर होने वाले उत्सवों के लिए प्रसिद्ध। यहाँ गांधी घाट, कलेक्ट्री घाट और भद्र घाट जैसे गंगा तट के अनेक घाट हैं जहाँ लाखों श्रद्धालु आते हैं।",
    chhathConnection: "पटना के घाट शहरी क्षेत्र में छठ पूजा के वृहद आयोजन और सामुदायिक सेवा का बेजोड़ उदाहरण हैं। यहाँ नगर प्रशासन और स्वयंसेवी समितियों द्वारा घाटों का सुदृढ़ीकरण, जल स्तर बैरिकेडिंग और व्रतियों के लिए मार्गों की सफाई की जाती है, ताकि डूबते और उगते सूर्य को सुरक्षित रूप से अर्घ्य दिया जा सके।",
    river: "Ganga",
    traditions: [
      "सामुदायिक घाट सफाई (Community cleaning and visual pathways)",
      "नावों से अर्घ्य निगरानी (Boat patrol for safety monitoring)"
    ],
    historicalContext: "पटना के नदी तट पर छठ पूजा के सामूहिक आयोजन का उल्लेख 20वीं शताब्दी के प्रशासनिक रजिस्टरों और तत्कालीन समाचार-पत्रों में मिलता है, जो यह दर्शाता है कि गंगा तट सदैव से ही लोक जीवन और आस्था का प्रमुख केंद्र रहा है।",
    image: "/assets/images/images (1).jpg",
    imageType: "photograph",
    imageSource: "Local Photo Album",
    imageCredit: "Project Owner Archive / Location: Unverified / Bihar context",
    imageAlt: "Devotee holding winnowing tray (soop) containing offerings at a Ganga riverbank.",
    locationVerified: false,
    sources: [sources[0]],
    verified: true
  },
  {
    id: "deo",
    name: "Deo Sun Temple",
    hindiName: "देव सूर्य मंदिर",
    district: "Aurangabad",
    region: "Magadh",
    latitude: 24.6560,
    longitude: 84.3980,
    type: "sun-temple",
    description: "An ancient sun temple in Aurangabad district, exhibiting unique stone carving architecture and hosting one of the oldest living Chhath pilgrimage congregations.",
    hindiDescription: "औरंगाबाद जिले में स्थित एक ऐतिहासिक सूर्य मंदिर, जो अद्वितीय स्थापत्य कला प्रदर्शित करता है और छठ पर्व के सबसे पुराने जीवित तीर्थ सम्मेलनों में से एक की मेजबानी करता है।",
    chhathConnection: "देव सूर्य मंदिर बिहार में सूर्य आराधना और छठ की आस्था से जुड़ा एक महत्वपूर्ण जीवित धार्मिक केंद्र है। छठ के अवसर पर देश भर से श्रद्धालु यहाँ के पवित्र 'सूर्य कुंड' (तालाब) में स्नान करने और मंदिर के पश्चिमाभिमुख द्वार के सामने खड़े होकर सूर्यदेव को अर्घ्य अर्पित करने आते हैं।",
    river: "Surya Kund (Sacred Tank)",
    traditions: [
      "सूर्य कुंड में पवित्र स्नान (Holy dip in Surya Kund)",
      "मन्नत दंडवत प्रणाम (Devotional prostrations up to the temple gate)"
    ],
    historicalContext: "मंदिर का स्थापत्य नागर शैली और देर मध्ययुगीन पत्थर की नक्काशी का उत्कृष्ट मिश्रण दर्शाता है। भारतीय पुरातत्व सर्वेक्षण और पुरातत्व रजिस्टरों के अनुसार, यद्यपि इस स्थान पर सूर्य पूजा की जड़ें बहुत पुरानी हैं, वर्तमान मंदिर संरचना को मध्यकाल के उत्तरार्ध में सुदृढ़ किया गया था।",
    image: "/assets/images/Chhath-Puja-2025-A.jpeg",
    imageType: "photograph",
    imageSource: "Local Photo Album",
    imageCredit: "Project Owner Archive / Location: Unverified / Bihar context",
    imageAlt: "Devotees conducting Arghya offerings at sunset using a brass tray and Kalash pot.",
    locationVerified: false,
    sources: [sources[0], sources[1]],
    verified: true
  },
  {
    id: "kandaha",
    name: "Kandaha Sun Temple",
    hindiName: "कंधाहा सूर्य मंदिर",
    district: "Saharsa",
    region: "Koshi",
    latitude: 25.9180,
    longitude: 86.5360,
    type: "sun-temple",
    description: "A historical sun temple located in Saharsa district, known for its archaeological inscriptions and connection to early medieval solar devotion in Mithila.",
    hindiDescription: "सहरसा जिले में स्थित एक ऐतिहासिक सूर्य मंदिर, जो अपने पुरालेखीय शिलालेखों और उत्तर-मध्यकालीन सूर्य आराधना के अकादमिक साक्ष्यों के लिए जाना जाता है।",
    chhathConnection: "कंधाहा में छठ पर्व के दौरान आसपास के ग्रामीण क्षेत्रों के लोग मंदिर के जलाशय और पास की कोसी नदी की नहरों के किनारे एकत्र होकर अर्घ्य अर्पित करते हैं। कोसी प्रमंडल में यह सूर्य उपासना की ऐतिहासिक निरंतरता का मुख्य प्रतीक है।",
    river: "Kandaha Pokhar (Sacred Pond)",
    traditions: [
      "कोसी भराई मन्नत पूजन (Canopy clay lamps setups)",
      "मैथिली भाषा के पारंपरिक गीत (Recitation of Maithili Chhath lyrics)"
    ],
    historicalContext: "इस मंदिर के प्रवेश द्वार के शिलालेख से पता चलता है कि इसका जीर्णोद्धार 14वीं शताब्दी में ओइनवार वंश के राजा नरसिंहदेव के काल में हुआ था। यह शिलालेख मिथिलांचल में सूर्य पूजा की ऐतिहासिक प्राचीनता का ठोस लिखित प्रमाण है। पौराणिक कथाओं में इसे साम्ब (कृष्ण के पुत्र) की कुष्ठ रोग मुक्ति कथा से भी जोड़ा जाता है, जिसे 'पौराणिक परंपरा' माना जाता है।",
    image: "/assets/images/images.jpg",
    imageType: "photograph",
    imageSource: "Local Photo Album",
    imageCredit: "Project Owner Archive / Location: Unverified / Bihar context",
    imageAlt: "Close-up of devotee pouring Arghya offering from a brass pot to the sun over water.",
    locationVerified: false,
    sources: [sources[0], sources[1]],
    verified: true
  },
  {
    id: "simaria",
    name: "Simaria Ghat",
    hindiName: "सिमरिया घाट",
    district: "Begusarai",
    region: "Mithila",
    latitude: 25.2930,
    longitude: 86.0020,
    type: "ghat",
    description: "A famous Ganga-side ghat in Begusarai district, renowned for its river pilgrimage, Kalpavas traditions, and widespread Chhath rituals.",
    hindiDescription: "बेगूसराय जिले में स्थित एक प्रसिद्ध गंगा घाट, जो अपनी नदी तीर्थयात्रा, कल्पवास परंपराओं और व्यापक छठ अनुष्ठानों के लिए जाना जाता है।",
    chhathConnection: "सिमरिया घाट पर उत्तर बिहार के कई जिलों के ग्रामीण परिवार छठ पूजा करने आते हैं। यहाँ गंगा के विशाल बहाव क्षेत्र में व्रती सीधे पानी में खड़े होकर अर्घ्य देती हैं, जहाँ नदी की धारा को साक्षात ऊर्जा का स्रोत मानकर लोक आस्था व्यक्त की जाती है।",
    river: "Ganga",
    traditions: [
      "कल्पवास साधना (Traditional temporary river bank camps)",
      "सामूहिक गंगा आरती एवं अर्घ्य (Mass prayers by the river bank)"
    ],
    historicalContext: "सिमरिया घाट प्राचीन काल से ही मिथिलांचल और मगध के मध्य गंगा नदी का एक प्रमुख ऐतिहासिक घाट (Crossing Point) रहा है। यहाँ कल्पवास की प्राचीन परंपरा के साथ-साथ नदी किनारे छठ की लोक आस्था की निरंतरता देखी जाती है।",
    image: "/assets/images/images (2).jpg",
    imageType: "photograph",
    imageSource: "Local Photo Album",
    imageCredit: "Project Owner Archive / Location: Unverified / Bihar context",
    imageAlt: "Devotees seated by the riverbank with offerings and folded hands in prayer.",
    locationVerified: false,
    sources: [sources[0]],
    verified: true
  }
];
