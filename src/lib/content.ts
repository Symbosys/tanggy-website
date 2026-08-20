export const brand = {
  name: "tanggy",
  tagline: "Taste Beyond Ordinary",
  copyright: "© 2026 Tanggy — Taste Beyond Ordinary",
} as const;

export const navLinks = [
  { label: "Food", href: "#food" },
  { label: "Story", href: "#story" },
  { label: "Why Tanggy", href: "#experience" },
  { label: "Cities", href: "#cities" },
  { label: "FAQ", href: "#faq" },
] as const;

export const storeLinks = {
  googlePlay: "#",
  appStore: "#",
} as const;

export const hero = {
  kicker: "Taste Beyond Ordinary",
  headline: "Where familiar food feels",
  headlineAccent: "extraordinary.",
  description:
    "Tanggy is a modern food discovery destination for Biryani, Meat Bhaat, Chicken Bhaat, South Indian favourites and the local dishes people love.",
  primaryAction: "Explore Food",
  secondaryAction: "Order on Tanggy App →",
  badge: "TANGGY • FOOD STORIES",
  caption: "Real food. Real cravings.",
  image:
    "https://images.pexels.com/photos/9609848/pexels-photo-9609848.jpeg?auto=compress&cs=tinysrgb&w=1400",
} as const;

export type FoodMode = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  accentClass: string;
  examples: string[];
  screenItems: { name: string; price: string }[];
};

export const foodModes: FoodMode[] = [
  {
    id: "biryani",
    name: "All Types of Biryani",
    emoji: "🍛",
    description:
      "Chicken, Mutton, Egg, Fish and more — fragrant rice, spices and rich flavours.",
    accentClass: "border-brand-primary",
    examples: [
      "Chicken Biryani",
      "Mutton Biryani",
      "Egg Biryani",
      "Fish Biryani",
      "Hyderabadi Dum Biryani",
      "Special Handi Biryani",
    ],
    screenItems: [
      { name: "Hyderabadi Dum Biryani", price: "₹349" },
      { name: "Chicken Biryani", price: "₹249" },
      { name: "Mutton Biryani", price: "₹399" },
      { name: "Egg Biryani", price: "₹199" },
    ],
  },
  {
    id: "bhaat",
    name: "Meat Bhaat",
    emoji: "🍖",
    description:
      "Hearty meat and rice combinations inspired by traditional Indian kitchens.",
    accentClass: "border-brand-primary-dark",
    examples: [
      "Mutton Rice Combo",
      "Desi Mutton Curry",
      "Handi Meat Bhaat",
      "Gravy Rice Bowl",
    ],
    screenItems: [
      { name: "Desi Mutton Bhaat", price: "₹349" },
      { name: "Handi Meat Curry", price: "₹389" },
      { name: "Special Mutton Combo", price: "₹399" },
      { name: "Tari Gravy Rice", price: "₹229" },
    ],
  },
  {
    id: "chicken",
    name: "Chicken Bhaat",
    emoji: "🍗",
    description:
      "Chicken, curry and rice combinations made for everyday comfort.",
    accentClass: "border-brand-primary-light",
    examples: [
      "Home-style Chicken Bhaat",
      "Chicken Rice Combo",
      "Butter Chicken & Rice",
      "Tariwala Chicken",
    ],
    screenItems: [
      { name: "Chicken Bhaat Combo", price: "₹229" },
      { name: "Tariwala Chicken Rice", price: "₹249" },
      { name: "Home Style Chicken", price: "₹219" },
      { name: "Butter Chicken Bhaat", price: "₹279" },
    ],
  },
  {
    id: "south",
    name: "South Indian",
    emoji: "🥞",
    description:
      "Dosa, Idli, Vada, Uttapam and timeless South Indian favourites.",
    accentClass: "border-brand-accent",
    examples: [
      "Masala Dosa",
      "Idli Sambar",
      "Medu Vada",
      "Onion Uttapam",
      "Filter Coffee",
    ],
    screenItems: [
      { name: "Idli Sambar (2 pc)", price: "₹89" },
      { name: "Masala Dosa", price: "₹119" },
      { name: "Uttapam", price: "₹109" },
      { name: "Filter Coffee", price: "₹49" },
    ],
  },
];

export const occasions = {
  eyebrow: "For every kind of hunger",
  title: "Food for the moment.",
  items: [
    {
      title: "Weekend Biryani",
      subtitle: "Slow down. Eat well.",
      image:
        "https://images.pexels.com/photos/15059053/pexels-photo-15059053.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      title: "Morning South Indian",
      subtitle: "Start with something warm.",
      image:
        "https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      title: "Traditional Meal",
      subtitle: "Comfort that feels familiar.",
      image:
        "https://images.pexels.com/photos/35267280/pexels-photo-35267280.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
  ],
} as const;

export const storyContent = {
  eyebrow: "The Tanggy Story",
  title: "Simple food.",
  titleAccent: "Beautifully discovered.",
  paragraphs: [
    "Tanggy is built around a simple belief: the best food is often the food you already know and love. We bring familiar Indian flavours into one elegant discovery experience.",
    "From a fragrant biryani to a crisp dosa, Tanggy is designed to make discovering your next meal feel as good as eating it.",
  ],
  signature: "— Tanggy",
  image:
    "https://images.pexels.com/photos/35267280/pexels-photo-35267280.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const;

export const whyTanggyContent = {
  eyebrow: "Why Tanggy",
  title: "More than a menu.",
  description:
    "Tanggy can grow into a complete food discovery brand, not just an ordering interface.",
  features: [
    {
      number: "01",
      title: "Real Local Flavours",
      description:
        "Discover food people actually crave — from traditional meals to everyday favourites.",
    },
    {
      number: "02",
      title: "Great Value",
      description:
        "Highlight Tanggy's value proposition, offers and app-exclusive benefits without clutter.",
    },
    {
      number: "03",
      title: "Food Stories",
      description:
        "Tell the story behind dishes, cuisines, cities and local food culture.",
    },
    {
      number: "04",
      title: "Easy Ordering",
      description:
        "Keep this website elegant and informative, then move customers naturally to the app.",
    },
  ],
} as const;

export const journalContent = {
  eyebrow: "Tanggy Journal",
  title: "Stories behind the food.",
  description: "A future content engine for SEO, discovery and food lovers.",
  main: {
    title: "The art of a good biryani.",
    image:
      "https://images.pexels.com/photos/15059053/pexels-photo-15059053.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  side: [
    {
      title: "Crisp Masala Dosa",
      image:
        "https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      title: "South Indian Traditions",
      image:
        "https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
  ],
} as const;

export const citiesContent = {
  eyebrow: "Local discovery",
  title: "Discover food in your city.",
  description:
    "The final dynamic site can generate city-specific pages, food guides, restaurants and local SEO content.",
  cities: [
    {
      name: "Ranchi",
      details: "Biryani • Meat Bhaat • Chicken Bhaat • South Indian",
    },
    {
      name: "Jamshedpur",
      details: "Local food stories and Tanggy discovery pages.",
    },
    {
      name: "Dhanbad",
      details: "City-specific food guides and partner discovery.",
    },
  ],
} as const;

export const appContent = {
  eyebrow: "Your next meal is closer",
  title: "Discover here.",
  titleAccent: "Order on Tanggy.",
  description:
    "The website stays informative and brand-focused. Customers continue to the Tanggy app for availability, ordering and payment.",
  buttonText: "Download Tanggy App",
  storeNote: "App Store / Google Play links can be inserted when ready.",
} as const;

export const faqContent = {
  eyebrow: "FAQ",
  title: "Questions, simply answered.",
  items: [
    {
      question: "Can I order here?",
      answer:
        "No. The website is for information and discovery. Ordering and payment happen in the Tanggy app.",
    },
    {
      question: "What does Tanggy offer?",
      answer:
        "Biryani, Meat Bhaat, Chicken Bhaat, South Indian dishes and additional local favourites.",
    },
    {
      question: "Will the website be dynamic?",
      answer:
        "Yes. Categories, dishes, cities, blogs, FAQs, offers and SEO pages can be managed from an admin/CMS layer.",
    },
  ],
} as const;

export const promiseContent = {
  eyebrow: "The Tanggy Promise",
  title: "Good food shouldn't feel ordinary.",
  description:
    "Real food. Local flavours. Beautiful discovery. One simple destination — Tanggy.",
} as const;

export const trackingSteps = [
  { id: "placed", label: "Order Placed", time: "12:04 PM" },
  { id: "preparing", label: "Preparing", time: "12:18 PM" },
  { id: "delivery", label: "Out for Delivery", time: "12:42 PM" },
  { id: "delivered", label: "Delivered", time: "—" },
] as const;

export const trackingFeatures = [
  {
    title: "Real-time status updates",
    description: "Watch your order move from kitchen to doorstep, live.",
  },
  {
    title: "Accurate ETA",
    description: "Know exactly when your food arrives — no guessing.",
  },
  {
    title: "Delivery partner tracking",
    description: "See who's bringing your meal and where they are.",
  },
  {
    title: "Push notifications",
    description: "Get notified at every step so you never miss a beat.",
  },
] as const;

export const footerLinks = [
  { label: "Food", href: "#food" },
  { label: "Story", href: "#story" },
  { label: "Why Tanggy", href: "#experience" },
  { label: "Cities", href: "#cities" },
  { label: "FAQ", href: "#faq" },
] as const;
