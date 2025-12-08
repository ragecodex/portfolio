import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "htecgroup",
    company: "HTEC Group",
    companyUrl: "https://htec.com",
    logo: "/htecgroup_logo.jpg",
    location: "Hybrid (Remote + On-site)",
    roles: [
      {
        id: "role-1",
        title: "Senior Software Engineer",
        startDate: "2023-04-01",
        endDate: "present",
        responsibilities: [
          "Implementing new client portal with high-performant dashboard featuring widgets/data visualizations using .Net Core",
          "Migrating legacy .NET Framework services to .NET Core",
          "Acting as Project Tech Authority in a team of 5+ engineers",
          "Mentoring team of few junior engineers on best practices",
          "Taking leading place in technical discussions and architecture design with client",
        ],
      technologies: ["Azure", ".NET Framework (4.7)", ".NET Core", "React", "Azure App Services", "Azure SQL Database", "Azure queues", "Auth0/Okta"],
      highlights: [],
      },
    ],
  },
  {
    id: "mistral",
    company: "Mistral",
    logo: "/mistral_technologies_logo.jpg",
    location: "Hybrid (Remote + On-site)",
    roles: [
      {
        id: "role-2",
        title: "Senior Software Engineer/Team Lead",
        startDate: "2022-07-01",
        endDate: "2023-03-31",
        responsibilities: [
          "Leading a team of 10+ engineers in developing a SaaS platform for background screening",
          "Leading a team of 5+ engineers in developing a SaaS platform for vacancy management and applicant tracking",
          "Architecting scalable backend services using Node.js and AWS Lambda",
          "Architecting scalable docker microservices deployed on GCP Cloud Run",
          "Implementing event-driven architectures using AWS SQS/SNS and GCP Pub/Sub for async processing and inter-service communication",
          "Implementning SAGA patterns for distributed transactions across microservices",
          "Implementing selective data replication between legacy and new systems using change data capture (CDC) with Maxwell deployed on GCP",
          "Designing and implementing RESTful APIs",
          "Coordinating with cross-functional teams to define project requirements and deliverables",
          "Conducting code reviews and ensuring adherence to best practices",
          "Integrated third-party APIs and payment gateways like Stripe",
          "Collaborated with designers and product owners to deliver user-friendly interfaces"
        ],
        technologies: ["AWS", "GCP", "React", "Node.js", "TypeScript", "PostgreSQL", "Express", "AWS Lambda", "API Gateway", "AWS RDS", "AWS S3", "Stripe", "AWS SQS/SNS", "Docker", "GCP Cloud Run", "Kubernetes", "GCP Pub/Sub"],
      },
      {
        id: "role-3",
        title: "Software Engineer/Team Lead",
        startDate: "2018-05-01",
        endDate: "2022-06-30",
        responsibilities: [
          "Participating in the development of a custom dashboard for monitoring IOT devices",
          "Leading a team of 5+ engineers in developing a custom APM solution for monitoring applications by utilizing ElasticSearch and Kibana with custom log processing pipelines",
          "Architecting scalable backend services using Node.js and AWS Lambda",
          "Implementing event-driven architectures using AWS SQS/SNS fanout pattern for async processing and inter-service communication",
          "Designing and implementing RESTful APIs",
          "Using Elasticashe for log event integration and caching layer to improve performance",
          "Coordinating with cross-functional teams to define project requirements and deliverables",
          "Conducting code reviews and ensuring adherence to best practices",
          "Collaborated with designers and product owners to deliver user-friendly interfaces",
          "Integrating with third-party identity providers for authentication and authorization by implementing OAuth2 and SAML protocols",
        ],
        technologies: ["AWS", "React", "Node.js", "TypeScript", "PostgreSQL", "Express", "AWS Lambda", "API Gateway", "AWS RDS", "AWS S3", "AWS SQS/SNS", "ElasticSearch", "Kibana", "Elasticashe (Clustered Redis)"],
      },
    ],
  },
];
