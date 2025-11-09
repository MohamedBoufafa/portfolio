export interface Project {
  id: string;
  title: string;
  overview: string;
  description: string;
  caption: string;
  tags: string[];
  url?: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  images?: string[];
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  githubUrl?: string;
  paperUrl?: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  website?: string;
}
