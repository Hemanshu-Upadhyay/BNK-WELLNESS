const products = [
  // Sexual Wellness
  {
    id: 1,
    name: "Vitality Max Tablets",
    category: "sexual-wellness",
    price: 1499,
    originalPrice: 2499,
    image:
      "https://www.cureveda.com/cdn/shop/files/CopyofMaleMate-Packof03_24935794-89c8-4ade-8e5a-28c70662a37c.jpg?v=1763973912&width=1000",
    description:
      "Unlock your full potential with our premium Ayurvedic vitality blend.",
    details:
      "Crafted with the purest form of Himalayan Shilajit, Safed Musli, and Ashwagandha. This potent formula is designed to enhance stamina, boost energy levels, and support overall vitality. Clinically tested and safe for long-term use.",
    ingredients: ["Shilajit", "Ashwagandha", "Safed Musli", "Gokshura"],
    faqs: [
      {
        q: "How to consume?",
        a: "Take 1 tablet twice a day with warm milk or water.",
      },
      {
        q: "Is it safe?",
        a: "Yes, it is 100% Ayurvedic and free from harmful chemicals.",
      },
      {
        q: "When will I see results?",
        a: "Most users experience benefits within 2-4 weeks of regular use.",
      },
    ],
  },
  {
    id: 2,
    name: "Stamina Gold Resin",
    category: "sexual-wellness",
    price: 1899,
    originalPrice: 2999,
    image:
      "https://herbalplanet.in/cdn/shop/files/71mpnV-OG4L._SL1500.jpg?v=1755153475",
    description:
      "Pure, unadulterated Himalayan Shilajit resin for peak performance.",
    details:
      "Sourced from 18,000 ft in the Himalayas, our Gold Resin is rich in Fulvic acid and over 80 essential minerals. It improves recovery, boosts testosterone naturally, and fights fatigue.",
    ingredients: ["Pure Shilajit Resin"],
    faqs: [
      {
        q: "How to use?",
        a: "Dissolve a pea-sized amount in warm water/milk and drink daily.",
      },
      {
        q: "Is this purified?",
        a: "Yes, it goes through a 7-step purification process.",
      },
    ],
  },

  // Hair Grow
  {
    id: 3,
    name: "Kesh Veda Hair Oil",
    category: "hair-care",
    price: 699,
    originalPrice: 999,
    image:
      "data:image/jpeg;base64,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",
    description: "Ancient secret for luscious, strong, and thick hair.",
    details:
      "A powerful blend of Bhringraj, Amla, and 10 other rare herbs prepared using the traditional 'Kshir Pak Vidhi'. It penetrates deep into the roots to reduce hair fall and stimulate new growth.",
    ingredients: ["Bhringraj", "Amla", "Neem", "Coconut Oil"],
    faqs: [
      {
        q: "Can I leave it overnight?",
        a: "Yes, leaving it overnight yields the best results.",
      },
      {
        q: "Does it help with dandruff?",
        a: "Yes, the neem extract helps combat dandruff effectively.",
      },
    ],
  },
  {
    id: 4,
    name: "Hair Growth Biotin Tabs",
    category: "hair-care",
    price: 899,
    originalPrice: 1299,
    image: "https://m.media-amazon.com/images/I/71vM9HpmGrL._SL1500_.jpg",
    description: "Plant-based Biotin for stronger hair and glowing skin.",
    details:
      "100% plant-based Biotin derived from Sesbania Extract. Supports keratin production, reduces hair thinning, and promotes healthy nail growth.",
    ingredients: ["Sesbania Extract", "Bamboo Shoot", "Amla"],
    faqs: [
      {
        q: "Is it vegan?",
        a: "Yes, it is 100% plant-based and vegan friendly.",
      },
    ],
  },

  // Diabetic
  {
    id: 5,
    name: "Dia-Control Powder",
    category: "diabetic-care",
    price: 1050,
    originalPrice: 1450,
    image:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/f2szsfpx0nlaroryfg4w.jpg",
    description:
      "Manage blood sugar naturally with the power of Karela & Jamun.",
    details:
      "A synergistic blend of Karela, Jamun, and Methi seeds designed to regulate carbohydrate metabolism and improve insulin sensitivity.",
    ingredients: ["Karela", "Jamun Seeds", "Methi", "Gudmar"],
    faqs: [
      {
        q: "When to take?",
        a: "Take 1 scoop (5g) empty stomach in the morning.",
      },
    ],
  },

  // Energy
  {
    id: 7,
    name: "Turbo Charge Energy",
    category: "energy",
    price: 299,
    originalPrice: 499,
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/04/UPDATE-2148932-The-10-Best-Natural-Energy-Drinks-of-2022-1200x628-Facebook-1200x628.jpg",
    description: "Clean, sustained energy without the crash.",
    details:
      "A natural energy drink mix infused with Green Tea, Guarana, and Ginseng. Provides a steady boost of focus and stamina for your workouts or busy workdays.",
    ingredients: ["Green Tea Extract", "Guarana", "Ginseng"],
    faqs: [
      { q: "Does it contain sugar?", a: "No, it is sweetened with Stevia." },
    ],
  },

  // Multivitamin
  {
    id: 8,
    name: "Daily Vital Men",
    category: "multivitamin",
    price: 799,
    originalPrice: 1199,
    image:
      "https://m.media-amazon.com/images/I/71696XINb5L._AC_UF1000,1000_QL80_.jpg",
    description: "Comprehensive daily nutrition for the modern man.",
    details:
      "Formulated to bridge the nutritional gap in your diet. Packed with 25 essential vitamins and minerals plus a testosterone support blend.",
    ingredients: ["Vitamin A-Z", "Zinc", "Magnesium", "Ashwagandha"],
    faqs: [],
  },
  {
    id: 9,
    name: "Daily Vital Women",
    category: "multivitamin",
    price: 799,
    originalPrice: 1199,
    image:
      "https://images-static.nykaa.com/media/catalog/product/9/d/9d775a6MUSXP231_1.jpg",
    description: "Tailored nutrition for women's health and vitality.",
    details:
      "Supports energy, bone health, and hormonal balance. Includes Iron, Folic Acid, and Calcium specifically dosed for women's needs.",
    ingredients: ["Iron", "Calcium", "Vitamin D", "Shatavari"],
    faqs: [],
  },

  // Blood Pressure
  {
    id: 10,
    name: "BP Care Tablets",
    category: "bp-care",
    price: 650,
    originalPrice: 850,
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800",
    description: "Natural support for healthy heart function.",
    details:
      "Arjun Chhal is a legendary herb for heart health. This formula combines it with Garlic and Guggul to help maintain healthy cholesterol and blood pressure levels.",
    ingredients: ["Arjun Chhal", "Garlic", "Guggul"],
    faqs: [],
  },

  // Soap and Shampoo
  {
    id: 12,
    name: "Neem & Tulsi Body Bar",
    category: "personal-care",
    price: 199,
    originalPrice: 299,
    image:
      "https://m.media-amazon.com/images/I/71jSV-29nDL._AC_UF1000,1000_QL80_.jpg",
    description: "Purifying Ayurvedic soap for clear, healthy skin.",
    details:
      "Handcrafted with cold-pressed oils and fresh herbs. Neem fights bacteria while Tulsi soothes inflammation.",
    ingredients: ["Neem Oil", "Tulsi Extract", "Coconut Oil"],
    faqs: [],
  },
  {
    id: 13,
    name: "Amla Reetha Shampoo",
    category: "personal-care",
    price: 499,
    originalPrice: 799,
    image:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
    description: "Gentle, sulphate-free cleanser for all hair types.",
    details:
      "The traditional trio of Amla, Reetha, and Shikakai cleanses the scalp without stripping natural oils.",
    ingredients: ["Amla", "Reetha", "Shikakai"],
    faqs: [],
  },
];

const categories = [
  {
    id: "sexual-wellness",
    name: "Sexual Wellness",
    image:
      "https://www.cureveda.com/cdn/shop/files/CopyofMaleMate-Packof03_24935794-89c8-4ade-8e5a-28c70662a37c.jpg?v=1763973912&width=1000",
  },
  {
    id: "hair-care",
    name: "Hair Care",
    image: "https://m.media-amazon.com/images/I/71vM9HpmGrL._SL1500_.jpg",
  },
  {
    id: "diabetic-care",
    name: "Diabetic Care",
    image:
      "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/f2szsfpx0nlaroryfg4w.jpg",
  },
  {
    id: "energy",
    name: "Energy Boosters",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2022/04/UPDATE-2148932-The-10-Best-Natural-Energy-Drinks-of-2022-1200x628-Facebook-1200x628.jpg",
  },
  {
    id: "multivitamin",
    name: "Multivitamins",
    image:
      "https://m.media-amazon.com/images/I/71696XINb5L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "bp-care",
    name: "Heart Care",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "personal-care",
    name: "Personal Care",
    image:
      "https://m.media-amazon.com/images/I/71jSV-29nDL._AC_UF1000,1000_QL80_.jpg",
  },
];
