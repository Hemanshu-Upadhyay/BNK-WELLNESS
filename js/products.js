const products = [
    // Sexual Wellness
    {
        id: 1,
        name: "Vitality Max Tablets",
        category: "sexual-wellness",
        price: 1499,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=800",
        description: "Unlock your full potential with our premium Ayurvedic vitality blend.",
        details: "Crafted with the purest form of Himalayan Shilajit, Safed Musli, and Ashwagandha. This potent formula is designed to enhance stamina, boost energy levels, and support overall vitality. Clinically tested and safe for long-term use.",
        ingredients: ["Shilajit", "Ashwagandha", "Safed Musli", "Gokshura"],
        faqs: [
            { q: "How to consume?", a: "Take 1 tablet twice a day with warm milk or water." },
            { q: "Is it safe?", a: "Yes, it is 100% Ayurvedic and free from harmful chemicals." },
            { q: "When will I see results?", a: "Most users experience benefits within 2-4 weeks of regular use." }
        ]
    },
    {
        id: 2,
        name: "Stamina Gold Resin",
        category: "sexual-wellness",
        price: 1899,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
        description: "Pure, unadulterated Himalayan Shilajit resin for peak performance.",
        details: "Sourced from 18,000 ft in the Himalayas, our Gold Resin is rich in Fulvic acid and over 80 essential minerals. It improves recovery, boosts testosterone naturally, and fights fatigue.",
        ingredients: ["Pure Shilajit Resin"],
        faqs: [
            { q: "How to use?", a: "Dissolve a pea-sized amount in warm water/milk and drink daily." },
            { q: "Is this purified?", a: "Yes, it goes through a 7-step purification process." }
        ]
    },

    // Hair Grow
    {
        id: 3,
        name: "Kesh Veda Hair Oil",
        category: "hair-care",
        price: 699,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1528740561666-dc24705f08a7?auto=format&fit=crop&q=80&w=800",
        description: "Ancient secret for luscious, strong, and thick hair.",
        details: "A powerful blend of Bhringraj, Amla, and 10 other rare herbs prepared using the traditional 'Kshir Pak Vidhi'. It penetrates deep into the roots to reduce hair fall and stimulate new growth.",
        ingredients: ["Bhringraj", "Amla", "Neem", "Coconut Oil"],
        faqs: [
            { q: "Can I leave it overnight?", a: "Yes, leaving it overnight yields the best results." },
            { q: "Does it help with dandruff?", a: "Yes, the neem extract helps combat dandruff effectively." }
        ]
    },
    {
        id: 4,
        name: "Hair Growth Biotin Tabs",
        category: "hair-care",
        price: 899,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
        description: "Plant-based Biotin for stronger hair and glowing skin.",
        details: "100% plant-based Biotin derived from Sesbania Extract. Supports keratin production, reduces hair thinning, and promotes healthy nail growth.",
        ingredients: ["Sesbania Extract", "Bamboo Shoot", "Amla"],
        faqs: [
            { q: "Is it vegan?", a: "Yes, it is 100% plant-based and vegan friendly." }
        ]
    },

    // Diabetic
    {
        id: 5,
        name: "Dia-Control Powder",
        category: "diabetic-care",
        price: 1050,
        originalPrice: 1450,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800",
        description: "Manage blood sugar naturally with the power of Karela & Jamun.",
        details: "A synergistic blend of Karela, Jamun, and Methi seeds designed to regulate carbohydrate metabolism and improve insulin sensitivity.",
        ingredients: ["Karela", "Jamun Seeds", "Methi", "Gudmar"],
        faqs: [
            { q: "When to take?", a: "Take 1 scoop (5g) empty stomach in the morning." }
        ]
    },

    // Energy
    {
        id: 7,
        name: "Turbo Charge Energy",
        category: "energy",
        price: 299,
        originalPrice: 499,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
        description: "Clean, sustained energy without the crash.",
        details: "A natural energy drink mix infused with Green Tea, Guarana, and Ginseng. Provides a steady boost of focus and stamina for your workouts or busy workdays.",
        ingredients: ["Green Tea Extract", "Guarana", "Ginseng"],
        faqs: [
            { q: "Does it contain sugar?", a: "No, it is sweetened with Stevia." }
        ]
    },

    // Multivitamin
    {
        id: 8,
        name: "Daily Vital Men",
        category: "multivitamin",
        price: 799,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&q=80&w=800",
        description: "Comprehensive daily nutrition for the modern man.",
        details: "Formulated to bridge the nutritional gap in your diet. Packed with 25 essential vitamins and minerals plus a testosterone support blend.",
        ingredients: ["Vitamin A-Z", "Zinc", "Magnesium", "Ashwagandha"],
        faqs: []
    },
    {
        id: 9,
        name: "Daily Vital Women",
        category: "multivitamin",
        price: 799,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1593037515494-3b50db57be76?auto=format&fit=crop&q=80&w=800",
        description: "Tailored nutrition for women's health and vitality.",
        details: "Supports energy, bone health, and hormonal balance. Includes Iron, Folic Acid, and Calcium specifically dosed for women's needs.",
        ingredients: ["Iron", "Calcium", "Vitamin D", "Shatavari"],
        faqs: []
    },

    // Blood Pressure
    {
        id: 10,
        name: "BP Care Tablets",
        category: "bp-care",
        price: 650,
        originalPrice: 850,
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800",
        description: "Natural support for healthy heart function.",
        details: "Arjun Chhal is a legendary herb for heart health. This formula combines it with Garlic and Guggul to help maintain healthy cholesterol and blood pressure levels.",
        ingredients: ["Arjun Chhal", "Garlic", "Guggul"],
        faqs: []
    },

    // Soap and Shampoo
    {
        id: 12,
        name: "Neem & Tulsi Body Bar",
        category: "personal-care",
        price: 199,
        originalPrice: 299,
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba66e94?auto=format&fit=crop&q=80&w=800",
        description: "Purifying Ayurvedic soap for clear, healthy skin.",
        details: "Handcrafted with cold-pressed oils and fresh herbs. Neem fights bacteria while Tulsi soothes inflammation.",
        ingredients: ["Neem Oil", "Tulsi Extract", "Coconut Oil"],
        faqs: []
    },
    {
        id: 13,
        name: "Amla Reetha Shampoo",
        category: "personal-care",
        price: 499,
        originalPrice: 799,
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
        description: "Gentle, sulphate-free cleanser for all hair types.",
        details: "The traditional trio of Amla, Reetha, and Shikakai cleanses the scalp without stripping natural oils.",
        ingredients: ["Amla", "Reetha", "Shikakai"],
        faqs: []
    }
];

const categories = [
    { id: "sexual-wellness", name: "Sexual Wellness", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" },
    { id: "hair-care", name: "Hair Care", image: "https://images.unsplash.com/photo-1528740561666-dc24705f08a7?auto=format&fit=crop&q=80&w=400" },
    { id: "diabetic-care", name: "Diabetic Care", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400" },
    { id: "energy", name: "Energy Boosters", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
    { id: "multivitamin", name: "Multivitamins", image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&q=80&w=400" },
    { id: "bp-care", name: "Heart Care", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400" },
    { id: "personal-care", name: "Personal Care", image: "https://images.unsplash.com/photo-1600857062241-98e5dba66e94?auto=format&fit=crop&q=80&w=400" }
];
