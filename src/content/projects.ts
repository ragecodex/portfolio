import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    name: "E-Commerce Platform",
    description: "Built scalable e-commerce platform handling 10K+ daily transactions",
    challenge:
      "The existing monolithic architecture couldn't scale to meet growing demand. Database performance degraded during peak traffic, and deployment cycles took hours.",
    solution:
      "Redesigned as microservices architecture with event-driven communication. Implemented caching layer with Redis and optimized database queries. Set up CI/CD pipeline with automated testing and zero-downtime deployments.",
    outcome:
      "Reduced page load time by 60%, increased system reliability to 99.9% uptime, and decreased deployment time from 4 hours to 15 minutes.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    timeframe: "6 months",
    year: 2023,
  },
  {
    id: "project-2",
    name: "Real-time Analytics Dashboard",
    description: "Developed real-time analytics platform for monitoring business metrics",
    challenge:
      "Business stakeholders needed instant visibility into key metrics across multiple data sources. Existing reporting was batch-processed overnight, making data 12-24 hours old.",
    solution:
      "Built real-time data pipeline using Kafka and stream processing. Created interactive dashboard with React and D3.js for data visualization. Implemented WebSocket connections for live updates.",
    outcome:
      "Enabled real-time decision making with sub-second data latency. Increased data accuracy and reduced manual reporting time by 80%.",
    technologies: ["React", "D3.js", "Node.js", "Kafka", "MongoDB", "WebSocket"],
    timeframe: "4 months",
    year: 2022,
  },
  {
    id: "project-3",
    name: "API Gateway Service",
    description: "Designed and implemented centralized API gateway for microservices",
    challenge:
      "Multiple microservices exposed different authentication mechanisms and lacked consistent error handling. No centralized rate limiting or request logging.",
    solution:
      "Developed API gateway service handling authentication, rate limiting, request/response transformation, and logging. Implemented circuit breaker pattern for resilience.",
    outcome:
      "Reduced client integration complexity, improved security posture, and provided centralized monitoring for all API traffic.",
    technologies: ["Node.js", "Express", "Redis", "JWT", "Docker", "Kubernetes"],
    timeframe: "3 months",
    year: 2021,
  },
];
