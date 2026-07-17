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

export const blogDetails: BlogDetail[] = [];
