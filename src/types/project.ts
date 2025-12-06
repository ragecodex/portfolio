export interface Project {
  id: string;
  name: string;
  description: string;
  challenge: string;
  solution: string;
  outcome?: string;
  technologies: string[];
  timeframe?: string;
  year?: number;
  image?: string;
  url?: string;
  githubUrl?: string;
}
