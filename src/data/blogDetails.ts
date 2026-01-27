
export interface BlogDetail {
  id: number;
  slug: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export const blogDetails: BlogDetail[] = [
  {
    id: 1,
    slug: "unlocking-youthful-skin-fish-collagen",
    title: "Unlocking Youthful Skin: The Power of Fish Collagen",
    image: "/image/skain-care.webp",
    date: "Jan 12, 2024",
    author: "Dr. Emily Roberts",
    category: "Beauty & Skincare",
    tags: ["Collagen", "Anti-Aging", "Skin Health", "Beauty"],
    content: `
      <p class="mb-4">Fish collagen, also known as marine collagen, has taken the beauty world by storm. Extracted from the skin and scales of fish, this type of collagen is renowned for its superior bioavailability compared to other sources like bovine or porcine collagen. But what exactly does it do for your skin?</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Superior Absorption for Maximum Results</h2>
      <p class="mb-4">The secret lies in the particle size. Fish collagen peptides are much smaller than other collagen molecules, allowing them to be absorbed more efficiently by the body. This means they can reach the deep layers of your skin faster, stimulating the production of new collagen and elastin.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Combatting Signs of Aging</h2>
      <p class="mb-4">As we age, our natural collagen production declines, leading to wrinkles, fine lines, and sagging skin. Supplementing with fish collagen helps replenish these lost stores. Studies have shown that regular intake can significantly improve skin hydration, elasticity, and firmness, giving you that coveted youthful glow.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Beyond Beauty</h2>
      <p class="mb-4">While the skin benefits are impressive, fish collagen also supports healthier hair and stronger nails. It provides the essential amino acids needed to build keratin, the protein that makes up hair and nails, reducing brittleness and promoting growth.</p>
      
      <p class="mb-4">In conclusion, incorporating fish collagen into your daily routine is a simple yet powerful way to invest in your skin's future. Whether in powder, capsule, or liquid form, it's a natural solution for lasting beauty.</p>
    `
  },
  {
    id: 2,
    slug: "fish-vs-bovine-collagen",
    title: "Fish Collagen vs. Bovine Collagen: Which is Better?",
    image: "/image/athos-slider-3.webp",
    date: "Dec 05, 2023",
    author: "James Anderson",
    category: "Health & Wellness",
    tags: ["Comparison", "Supplements", "Health", "Nutrition"],
    content: `
      <p class="mb-4">When choosing a collagen supplement, the two most common options are fish (marine) and bovine (cow) collagen. Both offer health benefits, but they differ significantly in their source, types of collagen provided, and absorption rates.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Type I vs. Type III Collagen</h2>
      <p class="mb-4">Fish collagen is primarily Type I collagen, which is the most abundant collagen in the human body. Type I is essential for building skin, bones, tendons, and ligaments. Bovine collagen, on the other hand, is usually a mix of Type I and Type III, which is found in muscles and organs.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Bioavailability Matters</h2>
      <p class="mb-4">One of the biggest advantages of fish collagen is its bioavailability. Because its peptides are smaller, they are absorbed up to 1.5 times more efficiently than bovine collagen. This makes fish collagen generally more effective for skin and beauty concerns.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Dietary Considerations</h2>
      <p class="mb-4">For pescatarians or those who avoid red meat for religious or dietary reasons, fish collagen is the obvious choice. Additionally, our fish collagen is wild-caught and sustainable, avoiding the hormonal and antibiotic issues sometimes associated with factory-farmed cattle.</p>
      
      <p class="mb-4">Ultimately, the best choice depends on your specific goals. For skin health and anti-aging, fish collagen is superior. for gut health or muscle recovery, bovine might have a slight edge. However, for an all-around premium supplement, marine collagen stands out.</p>
    `
  },
  {
    id: 3,
    slug: "sustainable-sourcing-marine-collagen",
    title: "Sustainable Sourcing: The Eco-Friendly Choice",
    image: "/image/athos-slider-4.webp",
    date: "Nov 20, 2023",
    author: "Sarah Green",
    category: "Sustainability",
    tags: ["Eco-Friendly", "Environment", "Sustainability", "Marine Life"],
    content: `
      <p class="mb-4">In today's world, where environmental consciousness is more important than ever, the source of your supplements matters. Marine collagen, specifically when sourced from wild-caught fish or as a byproduct of the fishing industry, represents a sustainable and eco-friendly choice.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Reducing Waste</h2>
      <p class="mb-4">A significant portion of fish caught for food—specifically skins and scales—is often discarded as waste. By utilizing these parts to produce high-quality collagen, we are upcycling materials that would otherwise contribute to landfills or pollution. This 'nose-to-tail' approach maximizes the value of natural resources.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Lower Carbon Footprint</h2>
      <p class="mb-4">Compared to bovine collagen production, which requires raising cattle (a process known for high greenhouse gas emissions and land use), marine collagen production has a significantly lower carbon footprint. It requires no additional land and utilizes existing fishing infrastructure.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Protecting Marine Ecosystems</h2>
      <p class="mb-4">We are committed to sourcing only from certified sustainable fisheries that adhere to strict quotas and regulations. This ensures that fish populations remain healthy and that marine biodiversity is preserved for future generations.</p>
      
      <p class="mb-4">By choosing our sustainably sourced marine collagen, you aren't just doing something good for your body; you're making a positive impact on the planet.</p>
    `
  },
  {
    id: 4,
    slug: "collagen-for-joint-health",
    title: "Revitalize Your Movement: Collagen for Joint Health",
    image: "/image/bones.webp",
    date: "Feb 15, 2024",
    author: "Michael Chen",
    category: "Joint Health",
    tags: ["Joints", "Mobility", "Pain Relief", "Active Living"],
    content: `
      <p class="mb-4">Joint pain can be debilitating, affecting everything from your daily walk to your ability to exercise. While often associated with aging, joint issues can affect anyone. Fortunately, collagen supplementation offers a natural way to support joint health and improve mobility.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">The Glue That Holds You Together</h2>
      <p class="mb-4">Collagen is the primary protein in cartilage, the rubbery tissue that cushions your joints. Over time, wear and tear deplete this cartilage, leading to friction and pain. Consuming collagen peptides provides the building blocks your body needs to repair and maintain this crucial tissue.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Reducing Inflammation</h2>
      <p class="mb-4">Research suggests that collagen peptides may have anti-inflammatory properties. This can help reduce swelling and stiffness in joints, particularly for those suffering from conditions like osteoarthritis. Many users report noticeable improvements in flexibility and comfort after consistent use.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">Supporting Active Lifestyles</h2>
      <p class="mb-4">For athletes and fitness enthusiasts, collagen is vital for protecting ligaments and tendons. It helps prevent injuries and speeds up recovery times after intense workouts. Keeping your connective tissues strong is key to long-term performance.</p>
      
      <p class="mb-4">Don't let joint pain hold you back. Adding a scoop of fish collagen to your morning smoothie or coffee is an easy step towards smoother, more comfortable movement and a healthier, more active life.</p>
    `
  }
];
