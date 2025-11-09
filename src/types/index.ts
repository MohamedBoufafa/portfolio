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
  videoUrl?: string;        // Direct video file (mp4, webm, etc.)
  youtubeUrl?: string;      // YouTube video ID or full URL
  vimeoUrl?: string;        // Vimeo video ID or full URL
  videoDescription?: string; // Optional video caption
  videos?: {                // Multiple videos (NEW!)
    url?: string;           // Direct video file
    youtubeUrl?: string;    // YouTube video
    vimeoUrl?: string;      // Vimeo video
    description?: string;   // Description for this video
  }[];
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
