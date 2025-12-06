import { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Ragib Smajic",
  title: "Senior Software Engineer",
  tagline: "Value-focused problem solver with 8 years of experience building scalable solutions",
  location: "Bosnia and Herzegovina",
  email: "ragib.smajic@example.com",
  social: {
    linkedin: "https://linkedin.com/in/ragibsmajic",
    github: "https://github.com/ragibsmajic",
  },
  coreValues: [
    {
      id: "value-focused",
      title: "Value-Focused",
      description: "Prioritizing business impact and user outcomes over technical novelty.",
    },
    {
      id: "problem-solver",
      title: "Problem Solver",
      description: "Breaking down complex challenges into elegant, maintainable solutions.",
    },
    {
      id: "engineer-mindset",
      title: "Engineer Mindset",
      description: "Systematic approach to design, implementation, and optimization.",
    },
    {
      id: "tech-enthusiast",
      title: "Technology Enthusiast",
      description: "Passionate about learning and applying cutting-edge technologies.",
    },
  ],
};
