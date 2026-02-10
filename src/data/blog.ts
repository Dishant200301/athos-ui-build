
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  rating: number; // 1-5 stars
  featured: boolean; // Featured article badge
}

export const blogCategories = [
  "All",
  "Ingredient",
  "Manufacturing",
  "Comparison",
  "Technical",
  "Market Insight",
  "Authority",
  "Application",
  "Commercial"
];

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "what-is-collagen",
    title: "What is Collagen? Understanding the Body's Most Abundant Protein",
    excerpt: "Discover the fundamental role of collagen in human health, its types, and why it's essential for skin, bones, and connective tissues.",
    image: "/images/all_blog_images/Blog_1_What_is_Collagen/what-is-collagen-main.png",
    date: "Jan 28, 2026",
    category: "Ingredient",
    author: "Dr. Sarah Mitchell",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    slug: "marine-collagen-overview",
    title: "Marine Collagen: The Ocean's Gift to Health and Beauty",
    excerpt: "Explore the unique benefits of marine collagen, its superior bioavailability, and why it's becoming the preferred choice for health-conscious consumers.",
    image: "/images/all_blog_images/Blog_2_Marine_Collagen/marine-collagen-main.png",
    date: "Jan 27, 2026",
    category: "Ingredient",
    author: "Dr. Emily Roberts",
    rating: 5,
    featured: true
  },
  {
    id: 3,
    slug: "fish-collagen-benefits",
    title: "Fish Collagen: Superior Absorption and Health Benefits",
    excerpt: "Learn why fish collagen stands out with its Type I collagen content and exceptional absorption rate for maximum health benefits.",
    image: "/images/all_blog_images/Blog_3_Fish_Collagen/fish-collagen-main.png",
    date: "Jan 26, 2026",
    category: "Ingredient",
    author: "James Anderson",
    rating: 4.5,
    featured: true
  },
  {
    id: 4,
    slug: "collagen-peptides-explained",
    title: "Collagen Peptides: The Science of Bioavailability",
    excerpt: "Understand how collagen peptides are created through hydrolysis and why their smaller molecular size makes them more effective.",
    image: "/images/all_blog_images/Blog_4_Collagen_Peptides/collagen-peptides-main.png",
    date: "Jan 25, 2026",
    category: "Technical",
    author: "Dr. Michael Chen",
    rating: 4.5,
    featured: false
  },
  {
    id: 5,
    slug: "gelatin-properties-uses",
    title: "Gelatin: From Collagen to Culinary and Medical Applications",
    excerpt: "Discover the transformation of collagen into gelatin and its diverse applications in food, pharmaceuticals, and cosmetics.",
    image: "/images/all_blog_images/Blog_5_Gelatin/gelatin-overview-main.png",
    date: "Jan 24, 2026",
    category: "Ingredient",
    author: "Sarah Green",
    rating: 4,
    featured: false
  },
  {
    id: 6,
    slug: "what-is-marine-collagen-made-of",
    title: "What Is Marine Collagen Made Of? Composition and Amino Acid Profile",
    excerpt: "A detailed look at the composition of marine collagen, from fish scales and skin to the final purified product.",
    image: "/images/all_blog_images/Blog_6_What_Is_Marine_Collagen_Made_Of/blog_6_what_is_marine_collagen_made_of-1.png",
    date: "Jan 23, 2026",
    category: "Manufacturing",
    author: "Dr. Robert Kumar",
    rating: 4.5,
    featured: false
  },
  {
    id: 7,
    slug: "what-is-fish-collagen-made-of",
    title: "What Is Fish Collagen Made Of? Amino Acids and Functional Properties",
    excerpt: "Explore the specific fish species and parts used in collagen production and how quality sourcing impacts the final product.",
    image: "/images/all_blog_images/Blog_7_What_Is_Fish_Collagen_Made_Of/blog_7_what_is_fish_collagen_made_of-7.png",
    date: "Jan 22, 2026",
    category: "Manufacturing",
    author: "Dr. Lisa Wang",
    rating: 4,
    featured: false
  },
  {
    id: 8,
    slug: "how-is-fish-collagen-made",
    title: "How Is Fish Collagen Made? Step-by-Step Manufacturing Process",
    excerpt: "Step-by-step breakdown of the extraction, purification, and processing methods used to create premium fish collagen.",
    image: "/images/all_blog_images/Blog_8_How_Is_Fish_Collagen_Made/blog_8_how_is_fish_collagen_made-11.png",
    date: "Jan 21, 2026",
    category: "Manufacturing",
    author: "Dr. Thomas Lee",
    rating: 4.5,
    featured: true
  },
  {
    id: 9,
    slug: "marine-collagen-peptides-production",
    title: "How Are Marine Collagen Peptides Produced? Process and Quality Control",
    excerpt: "Understand the enzymatic hydrolysis process that breaks down collagen into highly bioavailable peptides.",
    image: "/images/all_blog_images/Blog_9_Marine_Collagen_Peptides_Produced/blog_9_marine_collagen_peptides_produced-15.png",
    date: "Jan 20, 2026",
    category: "Technical",
    author: "Dr. Jennifer Park",
    rating: 4.5,
    featured: false
  },
  {
    id: 10,
    slug: "how-is-gelatin-made-from-fish",
    title: "How Is Gelatin Made From Fish Sources? Production Process, Quality Standards, and Applications",
    excerpt: "Learn about the thermal extraction and processing techniques used to convert fish collagen into high-quality gelatin.",
    image: "/images/all_blog_images/Blog_10_How_Is_Gelatin_Made_From_Fish/collagen-vs-gelatin-structure.png",
    date: "Jan 19, 2026",
    category: "Manufacturing",
    author: "Dr. David Martinez",
    rating: 4,
    featured: false
  },
  {
    id: 11,
    slug: "fish-collagen-powder-vs-peptides",
    title: "Fish Collagen Powder vs Collagen Peptides: Composition, Absorption, and Use Cases",
    excerpt: "Compare the differences between collagen powder and peptides in terms of absorption, effectiveness, and best use cases.",
    image: "/images/all_blog_images/Blog_11_Fish_Collagen_Powder_vs_Peptides/fish-collagen-powder-vs-collagen-peptides.png",
    date: "Jan 18, 2026",
    category: "Comparison",
    author: "Dr. Amanda Foster",
    rating: 5,
    featured: true
  },
  {
    id: 12,
    slug: "marine-vs-bovine-collagen",
    title: "Marine Collagen vs Bovine Collagen: Key Differences Manufacturers Must Know",
    excerpt: "A comprehensive analysis of marine and bovine collagen sources, benefits, sustainability, and which is right for you.",
    image: "/images/all_blog_images/Blog_12_Marine_vs_Bovine_Collagen/blog_12_marine_vs_bovine_collagen-30.png",
    date: "Jan 17, 2026",
    category: "Comparison",
    author: "Dr. Rachel Thompson",
    rating: 5,
    featured: true
  },
  {
    id: 13,
    slug: "collagen-powder-explained",
    title: "Collagen Powder Explained: Types, Benefits, and Usage",
    excerpt: "Everything you need to know about collagen powder supplements, from types and benefits to proper dosage and timing.",
    image: "/images/all_blog_images/Blog_13_Collagen_Powder_Explained/blog_13_collagen_powder_explained-33.png",
    date: "Jan 16, 2026",
    category: "Authority",
    author: "Dr. Kevin Brown",
    rating: 4.5,
    featured: false
  },
  {
    id: 14,
    slug: "collagen-from-fish-global-demand",
    title: "Collagen From Fish: Meeting Global Demand Sustainably",
    excerpt: "Analyze the growing global demand for fish collagen and how sustainable practices are shaping the industry.",
    image: "/images/all_blog_images/Blog_14_Collagen_From_Fish_Global_Demand/collagen-from-fish-global-demand.png",
    date: "Jan 15, 2026",
    category: "Market Insight",
    author: "Dr. Patricia Wilson",
    rating: 4.5,
    featured: false
  },
  {
    id: 15,
    slug: "marine-collagen-reviews",
    title: "Marine Collagen Reviews: What Science and Users Say",
    excerpt: "Evidence-based review of marine collagen effectiveness, backed by clinical studies and real user experiences.",
    image: "/images/all_blog_images/Blog_15_Marine_Collagen_Reviews/marine-collagen-quality-factors.png",
    date: "Jan 14, 2026",
    category: "Authority",
    author: "Dr. Christopher Davis",
    rating: 4.5,
    featured: false
  },
  {
    id: 16,
    slug: "marine-collagen-anti-aging",
    title: "Marine Collagen for Anti-Aging: Science-Backed Benefits",
    excerpt: "Discover how marine collagen fights aging at the cellular level, reducing wrinkles and improving skin elasticity.",
    image: "/images/all_blog_images/Blog_16_Marine_Collagen_Anti_Aging/collagen-and-skin-aging-process.png",
    date: "Jan 13, 2026",
    category: "Application",
    author: "Dr. Sophia Martinez",
    rating: 5,
    featured: true
  },
  {
    id: 17,
    slug: "collagen-bone-joint-health",
    title: "Collagen for Bone and Joint Health: Clinical Evidence",
    excerpt: "Explore how collagen supplementation supports bone density, joint mobility, and reduces osteoarthritis symptoms.",
    image: "/images/all_blog_images/Blog_17_Collagen_Bone_Joint_Health/collagen-for-bones-and-joints.png",
    date: "Jan 12, 2026",
    category: "Application",
    author: "Dr. Daniel Kim",
    rating: 4.5,
    featured: false
  },
  {
    id: 18,
    slug: "fish-collagen-hair-health",
    title: "Role of Fish Collagen in Hair Health and Beauty-From-Within Products",
    excerpt: "Learn how fish collagen peptides strengthen hair follicles, promote growth, and improve overall hair quality.",
    image: "/images/all_blog_images/Blog_18_Fish_Collagen_Hair_Health/collagen-support-for-hair-follicles.png",
    date: "Jan 11, 2026",
    category: "Application",
    author: "Dr. Michelle Taylor",
    rating: 4,
    featured: false
  },
  {
    id: 19,
    slug: "marine-collagen-skincare",
    title: "Marine Collagen in Skincare: Topical vs Oral Benefits",
    excerpt: "Compare the effectiveness of topical marine collagen products versus oral supplements for skin health.",
    image: "/images/all_blog_images/Blog_19_Marine_Collagen_Skincare/collagen-skin-hydration-mechanism.png",
    date: "Jan 10, 2026",
    category: "Application",
    author: "Dr. Laura Anderson",
    rating: 4.5,
    featured: false
  },
  {
    id: 20,
    slug: "collagen-nail-strength",
    title: "Collagen for Nail Strength: Clinical Studies and Results",
    excerpt: "Discover how collagen supplementation can reduce brittleness and promote faster, stronger nail growth.",
    image: "/images/all_blog_images/Blog_20_Collagen_Nail_Strength/collagen-for-nail-strength.png",
    date: "Jan 09, 2026",
    category: "Application",
    author: "Dr. Brian White",
    rating: 4,
    featured: false
  },
  {
    id: 21,
    slug: "collagen-wound-healing",
    title: "Collagen in Wound Healing: Medical Applications",
    excerpt: "Explore the role of collagen in tissue repair, wound dressings, and accelerated healing processes.",
    image: "/images/all_blog_images/Blog_21_Collagen_Wound_Healing/collagen-in-wound-healing-applications.png",
    date: "Jan 08, 2026",
    category: "Application",
    author: "Dr. Elizabeth Moore",
    rating: 4.5,
    featured: false
  },
  {
    id: 22,
    slug: "best-marine-collagen",
    title: "Best Marine Collagen: What Manufacturers Should Look For Before Sourcing",
    excerpt: "This commercial-focused guide outlines what manufacturers should look for when selecting the best marine collagen supplier.",
    image: "/images/all_blog_images/Blog_22_Best_Marine_Collagen/best-marine-collagen-for-manufacturers.jpeg",
    date: "Jan 07, 2026",
    category: "Commercial",
    author: "Dr. Andrew Jackson",
    rating: 5,
    featured: true
  },
  {
    id: 23,
    slug: "fish-collagen-manufacturer",
    title: "Choosing a Reliable Fish Collagen Manufacturer: Key Quality Factors",
    excerpt: "This authority-focused guide outlines the key quality factors buyers should evaluate when choosing a reliable fish collagen manufacturer.",
    image: "/images/all_blog_images/Blog_23_Fish_Collagen_Manufacturer/fish-collagen-manufacturer-quality-standards.jpeg",
    date: "Jan 06, 2026",
    category: "Authority",
    author: "Dr. Maria Garcia",
    rating: 4.5,
    featured: false
  },
  {
    id: 24,
    slug: "collagen-manufacturers-india",
    title: "Collagen Manufacturers in India: Capabilities, Certifications, and Export Strength",
    excerpt: "This authority-focused guide explores the capabilities, certifications, and export strengths that define India’s collagen manufacturing ecosystem.",
    image: "/images/all_blog_images/Blog_24_Collagen_Manufacturers_India/collagen-manufacturers-in-india.jpeg",
    date: "Jan 05, 2026",
    category: "Authority",
    author: "Dr. Rajesh Sharma",
    rating: 4,
    featured: false
  },
  {
    id: 25,
    slug: "certified-marine-collagen-supplier",
    title: "Certified Marine Collagen Supplier: Why Global Standards Matter",
    excerpt: "This authority-focused blog explains why global standards matter and what certifications buyers should expect from a reliable marine collagen supplier.",
    image: "/images/all_blog_images/Blog_25_Certified_Marine_Collagen_Supplier/certified-marine-collagen-supplier.jpeg",
    date: "Jan 04, 2026",
    category: "Authority",
    author: "Dr. Steven Clark",
    rating: 4.5,
    featured: false
  },
  {
    id: 26,
    slug: "collagen-supplements-global-brands",
    title: "Collagen Supplements: Ingredient Selection for Global Brands",
    excerpt: "This commercial-focused guide explains how brands should approach ingredient selection when developing high-quality collagen supplements.",
    image: "/images/all_blog_images/Blog_26_Collagen_Supplements_Global_Brands/collagen-supplements-ingredient-selection.jpeg",
    date: "Jan 03, 2026",
    category: "Commercial",
    author: "Dr. Jessica Lewis",
    rating: 4.5,
    featured: false
  },
  {
    id: 27,
    slug: "marine-collagen-peptides-nutraceutical",
    title: "Marine Collagen Peptides for Nutraceutical Brands: What to Consider",
    excerpt: "This commercial guide outlines key considerations nutraceutical brands should evaluate when sourcing marine collagen peptides.",
    image: "/images/all_blog_images/Blog_27_Marine_Collagen_Peptides_Nutraceutical/marine-collagen-peptides-for-nutraceutical-brands.jpeg",
    date: "Jan 02, 2026",
    category: "Commercial",
    author: "Dr. William Turner",
    rating: 4.5,
    featured: true
  },
  {
    id: 28,
    slug: "marine-collagen-market-trends",
    title: "Global Marine Collagen Market Trends and Growth Opportunities",
    excerpt: "This market insight blog explores key trends, drivers, and growth opportunities shaping the global marine collagen market.",
    image: "/images/all_blog_images/Blog_28_Marine_Collagen_Market_Trends/global-marine-collagen-market-growth.jpeg",
    date: "Jan 01, 2026",
    category: "Market Insight",
    author: "Dr. Nancy Harris",
    rating: 5,
    featured: true
  },
  {
    id: 29,
    slug: "fish-collagen-demand",
    title: "Why Demand for Fish Collagen Is Rising Across Global Industries",
    excerpt: "This market insight blog examines the key factors driving fish collagen demand across global industries.",
    image: "/images/all_blog_images/Blog_29_Fish_Collagen_Demand/fish-collagen-demand-global.jpeg",
    date: "Dec 31, 2025",
    category: "Market Insight",
    author: "Dr. Richard Young",
    rating: 4.5,
    featured: false
  },
  {
    id: 30,
    slug: "india-fish-collagen-supply-chain",
    title: "India’s Role in the Global Fish Collagen Supply Chain",
    excerpt: "This market insight blog explores how India contributes to global fish collagen supply, why international buyers source from India, and what makes Indian suppliers competitive.",
    image: "/images/all_blog_images/Blog_30_India_Fish_Collagen_Supply_Chain/fish-collagen-suppliers-india.jpeg",
    date: "Dec 30, 2025",
    category: "Market Insight",
    author: "Dr. Priya Patel",
    rating: 4.5,
    featured: false
  },
  {
    id: 31,
    slug: "type-i-collagen-explained",
    title: "Type I Collagen Explained: Structure, Sources, and Industrial Importance",
    excerpt: "This article provides a deep, industry-focused explanation of Type I collagen, designed to support sourcing decisions and formulation strategies.",
    image: "/images/all_blog_images/Blog_31_Type_I_Collagen_Explained/blog_31_type_i_collagen_explained-1.png",
    date: "Dec 29, 2025",
    category: "Technical",
    author: "Dr. Alan Grant",
    rating: 5,
    featured: true
  },
  {
    id: 32,
    slug: "molecular-weight-collagen-peptides",
    title: "Molecular Weight of Collagen Peptides and Why It Matters",
    excerpt: "Understanding collagen peptide molecular weight is essential for selecting the right ingredient for specific product applications.",
    image: "/images/all_blog_images/Blog_32_Molecular_Weight_of_Collagen_Peptides/blog_32_molecular_weight_of_collagen_peptides-4.png",
    date: "Dec 28, 2025",
    category: "Technical",
    author: "Dr. Laura Chen",
    rating: 4.5,
    featured: false
  },
  {
    id: 33,
    slug: "amino-acid-profile-marine-vs-fish-collagen",
    title: "Amino Acid Profile of Marine vs Fish Collagen",
    excerpt: "A detailed comparison of the amino acid profiles of marine versus fish collagen, explaining their functional implications.",
    image: "/images/all_blog_images/Blog_33_Amino_Acid_Profile_Marine_vs_Fish_Collagen/blog_33_amino_acid_profile_marine_vs_fish_collagen-8.png",
    date: "Dec 27, 2025",
    category: "Comparison",
    author: "Dr. Mark Wilson",
    rating: 4.5,
    featured: false
  },
  {
    id: 34,
    slug: "native-vs-hydrolyzed-collagen",
    title: "Native Collagen vs Hydrolyzed Collagen: Structural Differences",
    excerpt: "This technical comparison of native vs hydrolyzed collagen focuses on molecular structure, processing behavior, and industrial relevance.",
    image: "/images/all_blog_images/Blog_34_Native_vs_Hydrolyzed_Collagen/blog_34_native_vs_hydrolyzed_collagen-12.png",
    date: "Dec 26, 2025",
    category: "Comparison",
    author: "Dr. Emily Davis",
    rating: 4,
    featured: false
  },
  {
    id: 35,
    slug: "bioavailability-collagen-peptides",
    title: "Bioavailability of Collagen Peptides: What Manufacturers Should Know",
    excerpt: "Understanding the bioavailability of collagen peptides is essential for ingredient selection and formulation design.",
    image: "/images/all_blog_images/Blog_35_Bioavailability_of_Collagen_Peptides/blog_35_bioavailability_of_collagen_peptides-15.png",
    date: "Dec 25, 2025",
    category: "Technical",
    author: "Dr. James Wright",
    rating: 5,
    featured: true
  },
  {
    id: 36,
    slug: "thermal-stability-marine-collagen",
    title: "Thermal Stability of Marine Collagen in Food and Pharma Applications",
    excerpt: "How structure, composition, and processing influence marine collagen's behavior under heat exposure.",
    image: "/images/all_blog_images/Blog_36_Thermal_Stability_of_Marine_Collagen/blog_36_thermal_stability_of_marine_collagen-19.png",
    date: "Dec 24, 2025",
    category: "Application",
    author: "Dr. Linda Scott",
    rating: 4.5,
    featured: false
  }
];
