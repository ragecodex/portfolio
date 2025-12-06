import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "company-1",
    company: "Tech Company",
    companyUrl: "https://example.com",
    location: "Remote",
    roles: [
      {
        id: "role-1",
        title: "Senior Software Engineer",
        startDate: "2022-01-01",
        endDate: "present",
        duration: "3 years",
        responsibilities: [
          "Led development of microservices architecture serving 1M+ users",
          "Mentored team of 5 junior engineers on best practices",
          "Reduced API response time by 40% through optimization",
          "Implemented CI/CD pipelines reducing deployment time by 60%",
        ],
        technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"],
        highlights: [
          "Successfully migrated monolith to microservices with zero downtime",
          "Introduced automated testing increasing code coverage from 40% to 85%",
        ],
      },
      {
        id: "role-2",
        title: "Tech Lead",
        startDate: "2020-06-01",
        endDate: "2021-12-31",
        duration: "1 year 6 months",
        responsibilities: [
          "Provided technical guidance and architecture decisions for the team",
          "Coordinated with product managers to define technical roadmap",
          "Conducted code reviews and established coding standards",
          "Led technical interviews and hiring process",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      },
    ],
  },
  {
    id: "company-2",
    company: "Previous Company",
    location: "On-site",
    roles: [
      {
        id: "role-3",
        title: "Software Engineer",
        startDate: "2017-01-01",
        endDate: "2020-05-31",
        duration: "3 years 5 months",
        responsibilities: [
          "Built responsive web applications using modern JavaScript frameworks",
          "Integrated third-party APIs and payment gateways",
          "Collaborated with designers to implement pixel-perfect UIs",
          "Participated in agile development process",
        ],
        technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      },
    ],
  },
];
