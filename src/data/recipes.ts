import type { Recipe } from "../types/heritage";

export const recipes: Recipe[] = [
  {
    id: "thekua",
    name: "Thekua",
    hindiName: "ठेकुआ",
    description: "The signature Prasad of Chhath Puja. The core recipe relies on whole wheat flour, ghee, and jaggery or sugar syrup. Optional ingredients such as chopped coconut, fennel, cardamom, or dry fruits are often added as household variations. Shaped using hand-carved wooden molds, then deep-fried in pure ghee.",
    servings: 15,
    preparationTime: "25 mins",
    cookingTime: "20 mins",
    ingredients: [
      { name: "गेहूं का आटा / Coarse Wheat Flour", quantity: "2 cups" },
      { name: "गुड़ या चीनी / Jaggery or Sugar", quantity: "1/2 cup", notes: "पारंपरिक तैयारियों में गुड़ का उपयोग अधिक प्रचलित है" },
      { name: "शुद्ध घी / Pure Ghee (for Moyan)", quantity: "3-4 tbsp", notes: "मोयन प्रसाद को खस्ता बनाने में सहायक होता है" },
      { name: "बारीक कटा सूखा नारियल / Chopped Dry Coconut", quantity: "2 tbsp", notes: "वैकल्पिक / Optional" },
      { name: "सौंफ / Fennel Seeds", quantity: "1 tsp", notes: "वैकल्पिक / Optional" },
      { name: "इलायची पाउडर / Cardamom Powder", quantity: "1/2 tsp", notes: "वैकल्पिक / Optional" },
      { name: "शुद्ध घी तलने के लिए / Ghee for deep frying", quantity: "As required" },
      { name: "पानी / Water", quantity: "Approx 1/4 cup", notes: "केवल आटा बांधने के लिए पर्याप्त पानी" }
    ],
    steps: [
      {
        title: "गुड़ का घोल / Jaggery Preparation",
        description: "गुड़ को थोड़े से गर्म पानी में घोलें ताकि गाढ़ा सिरप तैयार हो सके। घोलने के बाद इसे छान लें ताकि अशुद्धियाँ निकल जाएं।"
      },
      {
        title: "मोयन मिलाना / Adding Moyan",
        description: "गेहूं के आटे में सौंफ, कटा नारियल, इलायची और घी (मोयन) डालें। इसे दोनों हाथों से अच्छी तरह मिलाएँ ताकि आटा मुट्ठी में बांधने पर आकार लेने लगे।"
      },
      {
        title: "आटा गूंधना / Kneading",
        description: "तैयार गुड़ के घोल को आटे में धीरे-धीरे डालें। याद रखें, इस आटे को गूंथना नहीं है, बल्कि केवल आपस में बांधकर एक सख्त डो (dough) बनाना है।"
      },
      {
        title: "साँचे से आकार देना / Shaping with Saancha",
        description: "आटे की छोटी-छोटी लोइयाँ बनाएँ। लकड़ी के पारंपरिक साँचे (saancha) पर थोड़ा सा घी लगाएँ और लोई को साँचे पर रखकर दबाएँ ताकि उस पर सुंदर नक्काशीदार आकृति (पत्ता या चक्र) छप जाए।"
      },
      {
        title: "तलना / Frying",
        description: "कढ़ाई में शुद्ध घी मध्यम गरम करें। घी ज्यादा तेज गरम नहीं होना चाहिए, वरना ठेकुआ बाहर से लाल हो जाएगा और अंदर से कच्चा रहेगा। धीमी से मध्यम आँच पर सुनहरा होने तक तलें।"
      },
      {
        title: "ठंडा करना और अर्पण / Cooling & Offering",
        description: "तले हुए ठेकुआ को निकाल कर ठंडा होने दें। ठंडा होने पर यह खस्ता हो जाता है। इसके बाद इसे पवित्र दउरा में सजाकर भगवान भास्कर को अर्घ्य देने के लिए तैयार किया जाता है।"
      }
    ],
    variations: [
      "कुछ क्षेत्रों में गुड़ के स्थान पर चीनी के घोल का उपयोग किया जाता है।",
      "इलायची के अलावा कुछ घरों में कद्दूकस की गई सोंठ या चिरौंजी भी मिलाई जाती है।"
    ],
    culturalContext: "ठेकुआ को लोक आस्था के महान पर्व छठ का मुख्य महाप्रसाद माना जाता है। इसकी पवित्रता का ध्यान रखते हुए इसे केवल अर्घ्य के लिए साफ-सुथरी रसोई में ही तैयार किया जाता है।",
    ritualConnection: ["sandhya-arghya", "usha-arghya"],
    sources: [
      {
        id: "source-bihar-tourism",
        title: "Bihar Tourism Cultural Heritage Registry",
        publisher: "Department of Tourism, Government of Bihar",
        type: "government"
      }
    ],
    image: "/assets/images/thekua.jpg",
    imageType: "photograph",
    imageCredit: "Project Owner Archive / Location: Unverified / Bihar context",
    imageSource: "Local Photo Album",
    imageAlt: "Authentic homemade leaf-patterned fried Thekua cookies on a brass plate.",
    locationVerified: false
  },
  {
    id: "kharna-rasiaw",
    name: "Kharna Rasiaw",
    hindiName: "खरना रसियाव",
    description: "A sacred jaggery-based rice pudding cooked on the second day of Chhath (Kharna). It is prepared using newly harvested rice, milk, and organic jaggery, served with handmade roti and bananas. This meal is taken before starting the fast, which for many is a dry fast of approximately 36 hours.",
    servings: 10,
    preparationTime: "15 mins",
    cookingTime: "30 mins",
    ingredients: [
      { name: "नया अरवा चावल / Newly Harvested Rice", quantity: "1 cup", notes: "छठ पूजा के लिए स्वच्छ और बिना टूटे चावल" },
      { name: "दूध / Milk", quantity: "1.5 liters", notes: "गाय का ताजा शुद्ध दूध" },
      { name: "गुड़ / Organic Jaggery", quantity: "1 cup", notes: "सेंधा गुड़, मिठास के अनुसार" },
      { name: "इलायची / Cardamom Seeds", quantity: "4-5", notes: "हल्की कुटी हुई" },
      { name: "सूखे मेवे / Chopped Nuts", quantity: "2 tbsp", notes: "वैकल्पिक" }
    ],
    steps: [
      {
        title: "चावल धोना / Washing Rice",
        description: "चावल को पवित्र जल से तीन से चार बार अच्छी तरह धो लें और अतिरिक्त पानी को निकाल दें।"
      },
      {
        title: "दूध उबालना / Boiling Milk",
        description: "एक भारी तले के साफ बर्तन में दूध को मध्यम आँच पर उबालें। दूध के उबलने पर आँच धीमी कर दें।"
      },
      {
        title: "चावल पकाना / Cooking Rice",
        description: "दूध में धोया हुआ चावल डालें। चावल को धीमी आँच पर पकने दें और लगातार चलाते रहें ताकि वह तले में न लगे।"
      },
      {
        title: "गुड़ मिलाना / Adding Jaggery",
        description: "चावल के पूरी तरह से पक जाने और खीर के गाढ़े हो जाने पर आँच बंद कर दें। खीर को थोड़ा ठंडा होने दें (ताकि दूध फटे नहीं), फिर इसमें गुड़ का चूरा या सिरप डालें और अच्छी तरह मिलाएँ।"
      },
      {
        title: "रोटी और फल के साथ परोसना / Serving",
        description: "तैयार रसियाव को ताजी बनी सादी रोटियों और पके हुए केले के साथ मिट्टी के बरतनों या केले के पत्तों पर सजाकर भगवान सूर्य और छठी मैया को भोग लगाया जाता है।"
      }
    ],
    variations: [
      "कुछ परिवारों में खीर में सूखे मेवे (काजू, किशमिश) डाले जाते हैं, जबकि कुछ घरों में केवल सादी रसियाव की परंपरा है।",
      "रोटी के स्थान पर कुछ क्षेत्रों में पूरी या 'पूरी-पूरी' (बिना नमक की पूरी) बनाने का भी प्रचलन है।"
    ],
    culturalContext: "खरना की शाम को व्रती दिनभर के उपवास के बाद इस प्रसाद को ग्रहण करती हैं। इसके बाद ही कई व्रतियों का लगभग 36 घंटे का कठिन निर्जला व्रत प्रारंभ होता है।",
    ritualConnection: ["kharna"],
    sources: [
      {
        id: "source-bihar-tourism",
        title: "Bihar Tourism Cultural Heritage Registry",
        publisher: "Department of Tourism, Government of Bihar",
        type: "government"
      }
    ],
    image: "/assets/images/thekua2.jpg",
    imageType: "photograph",
    imageCredit: "Project Owner Archive / Location: Unverified / Bihar context",
    imageSource: "Local Photo Album",
    imageAlt: "Fried cookies placed inside a woven bamboo tray reflecting kitchen preparation.",
    locationVerified: false
  }
];
