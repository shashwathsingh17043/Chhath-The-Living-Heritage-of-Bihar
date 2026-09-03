import type { River } from "../types/heritage";
import { sources } from "./sources";

export const rivers: River[] = [
  {
    id: "ganga",
    name: "Ganga",
    hindiName: "गंगा",
    description: "The primary and most sacred river of Bihar, flowing from west to east through the center of the state. It serves as the primary congregational space for Chhath Puja, hosting millions of devotees along its expansive sandy banks.",
    source: "Devprayag (Confluence of Alaknanda and Bhagirathi), Uttarakhand, India",
    regions: ["Buxar", "Patna", "Begusarai", "Munger", "Bhagalpur"],
    chhathConnection: "गंगा के पवित्र जल का उपयोग छठ व्रत के महाप्रसाद (ठेकुआ) को बनाने के लिए घर लाने में किया जाता है। इसके विशाल घाट लाखों व्रतियों को एक साथ अर्घ्य अर्पित करने के लिए सार्वजनिक स्थान प्रदान करते हैं।",
    locations: ["patna", "simaria"],
    sources: [sources[0]]
  },
  {
    id: "kosi",
    name: "Kosi",
    hindiName: "कोसी",
    description: "A major transboundary river flowing from the Himalayas of Nepal through north-eastern Bihar, forming a vast alluvial basin rich in local agricultural traditions and solar folklore.",
    source: "Confluence of Sun Kosi, Arun, and Tamur Rivers at Tribeni, Nepal",
    regions: ["Supaul", "Saharsa", "Madhepura", "Khagaria"],
    chhathConnection: "कोसी प्रमंडल के क्षेत्रों में कोसी भरने (गन्ने के मंडप में दीप जलाकर मन्नत मांगना) की विशेष परंपरा है। यह नदी और इसके बहाव क्षेत्र कृषि और जल संभरण के मुख्य स्रोत होने के कारण पूजनीय हैं।",
    locations: ["kandaha"],
    sources: [sources[0]]
  },
  {
    id: "son",
    name: "Son",
    hindiName: "सोन",
    description: "The principal southern tributary of the Ganges in Bihar, originating in Madhya Pradesh and flowing through a sandy basin. It is renowned for its golden-colored sands and clear waters during the autumn season.",
    source: "Amarkantak, Anuppur District, Madhya Pradesh, India",
    regions: ["Rohtas", "Aurangabad", "Arwal", "Patna"],
    chhathConnection: "सोन नदी के स्वच्छ रेतीले किनारे छठ पूजा की वेदियों और अस्थायी झोपड़ियों के निर्माण के लिए आदर्श माने जाते हैं। औरंगाबाद और रोहतास के लोग इसके किनारों पर अर्घ्य अर्पित करते हैं।",
    locations: ["deo"],
    sources: [sources[0]]
  }
];
