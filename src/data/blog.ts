
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "unlocking-youthful-skin-fish-collagen",
    title: "Unlocking Youthful Skin: The Power of Fish Collagen",
    excerpt: "Discover how fish collagen peptides can rejuvenate your skin, reduce wrinkles, and improve elasticity for a radiant glow.",
    image: "/image/skain-care.webp",
    date: "Jan 12, 2024",
    category: "Beauty & Skincare",
    author: "Dr. Emily Roberts"
  },
  {
    id: 2,
    slug: "fish-vs-bovine-collagen",
    title: "Fish Collagen vs. Bovine Collagen: Which is Better?",
    excerpt: "A comprehensive comparison of marine and bovine collagen to help you choose the right supplement for your health goals.",
    image: "/image/athos-slider-3.webp",
    date: "Dec 05, 2023",
    category: "Health & Wellness",
    author: "James Anderson"
  },
  {
    id: 3,
    slug: "sustainable-sourcing-marine-collagen",
    title: "Sustainable Sourcing: The Eco-Friendly Choice",
    excerpt: "Learn why our fish collagen is not only good for you but also environmentally responsible and sustainable.",
    image: "/image/athos-slider-4.webp",
    date: "Nov 20, 2023",
    category: "Sustainability",
    author: "Sarah Green"
  },
  {
    id: 4,
    slug: "collagen-for-joint-health",
    title: "Revitalize Your Movement: Collagen for Joint Health",
    excerpt: "Explore the benefits of fish collagen in supporting joint mobility, reducing pain, and promoting active living.",
    image: "/image/bones.webp",
    date: "Feb 15, 2024",
    category: "Joint Health",
    author: "Michael Chen"
  }
];
