
export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  category: string;
  mainImage: string;
  gallery: string[];
  results?: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export interface Skill {
  title: string;
  description: string;
  imageUrl: string;
}
