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

export const blogCategories: string[] = [];

export const blogs: BlogPost[] = [];
