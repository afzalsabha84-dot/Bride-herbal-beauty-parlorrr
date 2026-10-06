export interface ServiceItem {
  name: string;
  desc: string;
  price: number; // INR, number taaki cart me total jud sake
  duration: string;
  img: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  services: ServiceItem[];
}

export interface Combo {
  name: string;
  tagline: string;
  price: number;
  mrp: number;
  img: string;
  includes: string[];
}

export interface Post {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
}

export interface Testimonial {
  name: string;
  text: string;
  service: string;
}

export interface Award {
  title: string;
  org: string;
  year: string;
}

export const SITE = {
  brand: 'Bride Herbal',
  tagline: 'Beauty Perlor',
  fullName: 'Bride Herbal Beauty Perlor',

  phoneDisplay: '+91 95591 70513',
  phoneIntl: '919559170513',

  email: 'herbelhenna@gmail.com',
  instagram: 'https://www.instagram.com/herbal_henna.7/',
  youtube: 'https://www.youtube.com/@herbal_henna.7',

  hoursShort: 'Mon – Sat · 8:00 AM – 5:00 PM',
  hoursLong: 'Open Monday – Saturday, 8:00 AM – 5:00 PM. Each appointment is 60 minutes.',

  // TODO: client se asli address leke yahan likho — website + map pe dikhega
  address: 'Chaman Nagar, Bilariyaganj, ',

  categories: [
    {
      id: 'facial',
      label: 'Facial',
      services: [
        { name: 'Fruits Facial', desc: 'Fresh fruit extracts cleanse, exfoliate and brighten tired skin.', price: 600, duration: '45 mins', img: 'assets/svc-facial-fruit.jpg' },
        { name: 'Gold Facial', desc: '24k gold glow treatment for instant radiance and even tone.', price: 800, duration: '60 mins', img: 'assets/svc-facial-gold.jpg' },
        { name: 'Shahnaz Gold Facial', desc: 'The classic Shahnaz Husain gold ritual for luminous skin.', price: 1000, duration: '60 mins', img: 'assets/svc-facial-3.jpg' },
        { name: 'Diamond Facial', desc: 'Diamond-dust polish for a jewel-like glow and firmer skin.', price: 1000, duration: '60 mins', img: 'assets/svc-facial-4.jpg' },
        { name: 'O3 Facial', desc: 'Professional O3+ brightening facial for a deep, lasting glow.', price: 1500, duration: '60 mins', img: 'assets/svc-facial-5.jpg' },
        { name: 'Bridal Facial', desc: 'Pre-wedding radiance facial, customised to your skin type.', price: 1200, duration: '60 mins', img: 'assets/svc-facial-bridal.jpg' },
        { name: 'O3 Bridal Facial', desc: 'Luxury O3+ bridal glow for your big day.', price: 2500, duration: '75 mins', img: 'assets/svc-facial-2.jpg' },
      ],
    },
    {
      id: 'bleach',
      label: 'Bleach & Cleanup',
      services: [
        { name: 'Fruit Bleach + Massage', desc: 'Gentle fruit bleach with a relaxing face massage.', price: 200, duration: '30 mins', img: 'assets/svc-bleach.jpg' },
        { name: 'Gold Bleach', desc: 'Gold bleach for instant brightness and glow.', price: 300, duration: '30 mins', img: 'assets/svc-bleach-2.jpg' },
        { name: 'Diamond Clean Up', desc: 'Deep clean-up with diamond polish for clear, fresh skin.', price: 500, duration: '40 mins', img: 'assets/svc-cleanup.jpg' },
      ],
    },
    {
      id: 'threading',
      label: 'Threading',
      services: [
        { name: 'Eyebrow Threading', desc: 'Perfectly shaped brows with precise threading.', price: 30, duration: '10 mins', img: 'assets/svc-threading-brow.jpg' },
        { name: 'Forehead Threading', desc: 'Quick, neat forehead clean-up.', price: 10, duration: '5 mins', img: 'assets/svc-threading-2.jpg' },
        { name: 'Upper Lip Threading', desc: 'Gentle upper-lip threading, no redness.', price: 20, duration: '5 mins', img: 'assets/svc-threading-3.jpg' },
        { name: 'Side Look (Sideburns)', desc: 'Neat sideburn shaping for a clean hairline.', price: 50, duration: '10 mins', img: 'assets/svc-threading-face.jpg' },
        { name: 'Full Face Threading', desc: 'Complete facial threading for silky-smooth skin.', price: 150, duration: '20 mins', img: 'assets/svc-threading-4.jpg' },
      ],
    },
    {
      id: 'waxing',
      label: 'Waxing',
      services: [
        { name: 'Half Hand Waxing', desc: 'Smooth, hair-free arms up to the elbow.', price: 150, duration: '20 mins', img: 'assets/svc-waxing-hand.jpg' },
        { name: 'Half Leg Waxing', desc: 'Silky legs up to the knee.', price: 300, duration: '25 mins', img: 'assets/svc-waxing-leg.jpg' },
        { name: 'Full Hand Waxing', desc: 'Complete arm waxing for long-lasting smoothness.', price: 250, duration: '30 mins', img: 'assets/svc-waxing-2.jpg' },
        { name: 'Full Leg Waxing', desc: 'Full-leg waxing for weeks of smoothness.', price: 550, duration: '35 mins', img: 'assets/svc-waxing-3.jpg' },
        { name: 'Under Arms Waxing', desc: 'Quick, hygienic underarm waxing.', price: 100, duration: '10 mins', img: 'assets/svc-waxing-6.jpg' },
        { name: 'Full Face Waxing', desc: 'Gentle full-face wax for fuzz-free, glowing skin.', price: 200, duration: '20 mins', img: 'assets/svc-waxing-4.jpg' },
        { name: 'Upper Lip Waxing', desc: 'Quick upper-lip wax, soft finish.', price: 50, duration: '5 mins', img: 'assets/svc-waxing-6.jpg' },
      ],
    },
    {
      id: 'henna',
      label: 'Henna Artistry',
      services: [
        { name: 'Simple / Minimal Mehndi', desc: 'Delicate minimal patterns for everyday elegance. ₹300 onwards.', price: 300, duration: '20 mins', img: 'assets/svc-henna-simple.jpg' },
        { name: 'Floral Mehndi', desc: 'Beautiful flower-inspired motifs on hands. ₹400 onwards.', price: 400, duration: '30 mins', img: 'assets/svc-henna-4.jpg' },
        { name: 'Arabic Mehndi', desc: 'Bold Arabic-style trails and paisleys. ₹500 onwards.', price: 500, duration: '45 mins', img: 'assets/svc-henna-3.jpg' },
        { name: 'Arabic Full Hand', desc: 'Full-hand Arabic design, wrist to fingertips. ₹700 onwards.', price: 700, duration: '1 hr', img: 'assets/svc-henna-2.jpg' },
        { name: 'Indian Traditional Mehndi', desc: 'Classic dense Indian bridal-style patterns. ₹800 onwards.', price: 800, duration: '1–2 hrs', img: 'assets/svc-henna-bridal.jpg' },
        { name: 'Indo-Arabic Fusion', desc: 'The best of both worlds — Indian detail with Arabic flow. ₹900 onwards.', price: 900, duration: '1–2 hrs', img: 'assets/svc-henna-4.jpg' },
        { name: 'Heavy / Detailed Mehndi', desc: 'Intricate full-coverage designs for special occasions. ₹1,200 onwards.', price: 1200, duration: '2–3 hrs', img: 'assets/svc-henna-bridal.jpg' },
        { name: 'Engagement / Sangeet Mehndi', desc: 'Festive mehndi for your ring ceremony & sangeet night. ₹1,500 onwards.', price: 1500, duration: '2 hrs', img: 'assets/svc-henna-3.jpg' },
        { name: 'Simple Bridal Mehndi', desc: 'Elegant bridal mehndi, full hands with traditional motifs. ₹3,000 onwards.', price: 3000, duration: '2–3 hrs', img: 'assets/svc-henna-2.jpg' },
      ],

    },
  ] as ServiceCategory[],

  // single extras — nail ka sirf ek service, ek hi jagah
  extras: [
    { name: 'Haircut', desc: 'A fresh cut, styled to suit your face.', price: 200, duration: '30 mins', img: 'assets/svc-haircut.jpg' },
    { name: 'Nail Art', desc: 'Beautiful nail art & polish for your hands.', price: 499, duration: '45 mins', img: 'assets/svc-nailart.jpg' },
  ] as ServiceItem[],

  combos: [
    {
      name: 'Complete Bridal Package',
      tagline: 'A to Z bridal transformation — everything included',
      price: 40000,
      mrp: 48000,
      img: 'assets/combo-bridal.jpg',
      includes: [
        'HD bridal makeup with hairstyling',
        'Full bridal mehndi (hands + legs)',
        'O3+ bridal facial',
        'Haircut, hair spa & styling',
        'Nail art',
        'Bleach + diamond clean-up',
        'Full-body waxing & threading',
        'Pre-bridal glow consultation',
      ],
    },
    {
      name: 'Everyday Glow Package',
      tagline: 'The 5 little rituals you get done every month — one price',
      price: 499,
      mrp: 600,
      img: 'assets/combo-glow.jpg',
      includes: [
        'Eyebrow threading',
        'Upper-lip threading',
        'Fruit bleach + relaxing massage',
        'Half-hand waxing',
        'Haircut & styling',
      ],
    },
  ] as Combo[],

  gallery: [
    { src: 'assets/gallery-henna.webp', alt: 'Intricate bridal henna design on hands', label: 'Bridal Henna' },
    { src: 'assets/gallery-bridal.webp', alt: 'Bridal makeup look', label: 'Bridal Looks' },
    { src: 'assets/gallery-interior.webp', alt: 'Bride Herbal Beauty Perlor interior', label: 'Our Perlor' },
    { src: 'assets/gallery-nails.webp', alt: 'Elegant nail art', label: 'Nail Art' },
    { src: 'assets/gallery-5.jpg', alt: 'Salon interior', label: 'Our Perlor' },
    { src: 'assets/gallery-6.jpg', alt: 'Makeup application', label: 'Makeup' },
    { src: 'assets/gallery-7.jpg', alt: 'Hair styling session', label: 'Hair Styling' },
    { src: 'assets/gallery-8.jpg', alt: 'Facial treatment in progress', label: 'Facials' },
    { src: 'assets/gallery-9.jpg', alt: 'Pedicure and foot care', label: 'Pedicure' },
    { src: 'assets/gallery-10.jpg', alt: 'Bride getting ready', label: 'Bridal Prep' },
    { src: 'assets/gallery-11.jpg', alt: 'Spa towels and ambience', label: 'Ambience' },
    { src: 'assets/gallery-12.jpg', alt: 'Cosmetics and products', label: 'Products' },
    { src: 'assets/gallery-13.jpg', alt: 'Hair wash at the basin', label: 'Hair Spa' },
    { src: 'assets/gallery-14.jpg', alt: 'Hair coloring session', label: 'Hair Color' },

{ src: 'assets/IMG_9527.JPG.jpeg', alt: 'Bride getting ready', label: 'Bridal Prep' },
{ src: 'assets/IMG_9528.JPG.jpeg', alt: 'Parlor work in progress', label: 'Our Work' },
{ src: 'assets/IMG_9529.JPG.jpeg', alt: 'Beauty treatment session', label: 'Our Perlor' },
{ src: 'assets/IMG_9533.PNG', alt: 'Salon service showcase', label: 'Our Work' },
{ src: 'assets/IMG_9534.PNG', alt: 'Happy client moment', label: 'Client Diaries' },



  ],

  posts: [
    {
      category: 'Facial Guide',
      title: 'Fruits, Gold, Diamond or O3 — which facial does your skin actually need?',
      excerpt: 'Oily skin loves fruit enzymes, dull skin glows with gold, and brides swear by O3+. Here is how our artists match the facial to your skin type.',
      date: 'Oct 02, 2026', readTime: '5 min read', img: 'assets/blog-facial-guide.jpg',
    },
    {
      category: 'Waxing Care',
      title: '7 aftercare rules for silky, bump-free skin after waxing',
      excerpt: 'No hot showers for 24 hours, loose cotton clothes, gentle exfoliation after 3 days — small rules, big difference.',
      date: 'Sep 20, 2026', readTime: '4 min read', img: 'assets/blog-waxing-care.jpg',
    },
    {
      category: 'Hair Removal Guide',
      title: 'Threading vs waxing for facial hair — what suits you best?',
      excerpt: 'Sensitive skin? Threading is gentler. In a hurry? Waxing is quicker. Our quick guide helps you pick right every time.',
      date: 'Sep 05, 2026', readTime: '4 min read', img: 'assets/blog-threading-guide.jpg',
    },
  ] as Post[],

  testimonials: [
    { name: 'Azka', text: 'My bridal facial gave me such a glow — everyone at the wedding kept asking what I had done! Twenty years of experience truly shows.', service: 'Bridal Facial' },
    { name: 'Zikra', text: 'Best threading and waxing in town. Hygienic, quick and completely painless. I never go anywhere else now.', service: 'Waxing' },
    { name: 'Sabiha', text: 'Took the complete bridal package for my wedding — makeup, mehndi, facial, everything was perfect. I felt like a queen.', service: 'Bridal Package' },
  ] as Testimonial[],

  // TODO: asli award names/certificates client se leke yahan badal dena (dummy abhi)
  awards: [
    { title: 'Best Beauty Perlor of the Year', org: 'City Beauty Awards', year: '2023' },
    { title: 'Excellence in Bridal Makeup', org: 'Glamour Beauty Awards', year: '2022' },
    { title: 'Trusted Skin Care Studio', org: 'Herbal Beauty Council', year: '2021' },
    { title: 'Customer Choice Award', org: 'Local Business Honors', year: '2020' },
  ] as Award[],
};
