import { Technology, TechnologyCategory } from "@/types/technology";

export const technologies: Technology[] = [
  // Languages
  {
    id: "typescript",
    name: "TypeScript",
    category: TechnologyCategory.Language,
    yearsOfExperience: 5,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: TechnologyCategory.Language,
    yearsOfExperience: 8,
  },
  {
    id: "python",
    name: "Python",
    category: TechnologyCategory.Language,
    yearsOfExperience: 4,
  },
  // Frameworks
  {
    id: "react",
    name: "React",
    category: TechnologyCategory.Framework,
    yearsOfExperience: 6,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: TechnologyCategory.Framework,
    yearsOfExperience: 3,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: TechnologyCategory.Framework,
    yearsOfExperience: 6,
  },
  {
    id: "express",
    name: "Express",
    category: TechnologyCategory.Framework,
    yearsOfExperience: 5,
  },
  // Databases
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: TechnologyCategory.Database,
    yearsOfExperience: 5,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: TechnologyCategory.Database,
    yearsOfExperience: 4,
  },
  {
    id: "redis",
    name: "Redis",
    category: TechnologyCategory.Database,
    yearsOfExperience: 3,
  },
  // Cloud & Infrastructure
  {
    id: "aws",
    name: "AWS",
    category: TechnologyCategory.Cloud,
    yearsOfExperience: 5,
  },
  {
    id: "docker",
    name: "Docker",
    category: TechnologyCategory.Cloud,
    yearsOfExperience: 4,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: TechnologyCategory.Cloud,
    yearsOfExperience: 2,
  },
  // Tools
  {
    id: "git",
    name: "Git",
    category: TechnologyCategory.Tool,
    yearsOfExperience: 8,
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: TechnologyCategory.Tool,
    yearsOfExperience: 3,
  },
];
