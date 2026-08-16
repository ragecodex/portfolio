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
          "Own technical delivery for AI-powered and cloud-based SaaS products, including multimodal agent services and retrieval systems",
          "Serve as Project Tech Authority, shaping architecture, technical standards, and delivery decisions with client and internal stakeholders",
          "Lead and mentor engineers through implementation, code review, and pragmatic engineering practices",
          "Design and evolve scalable backend and web platforms across .NET, Python, AWS, Azure, and modern frontend technologies",
          "Partner with product and design teams to turn business needs into reliable, user-focused software",
        ],
      technologies: ["Azure", ".NET Framework (4.7)", ".NET Core", "React", "Azure App Services", "Azure SQL Database", "Azure queues",
        "Auth0/Okta", "MSSQL Server", "Entity Framework", "Dapper", "MediatR", "XUnit", "Moq", "CQRS", "RESTful APIs",
        "Git", "Node.js", "TypeScript", "AWS", "GCP", "MySQL", "PostgreSQL", "MongoDB", "Express", "Saga Pattern",
        "Docker", "Kubernetes", "gRPC", "Kafka"],
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
          "Provided technical leadership for SaaS teams delivering background-screening and recruitment platforms",
          "Defined scalable service and microservice architecture across Node.js, AWS Lambda, GCP Cloud Run, and Kubernetes",
          "Owned reliable asynchronous integrations, distributed-transaction patterns, and change-data-capture workflows",
          "Set engineering quality through architecture reviews, code reviews, mentoring, and delivery coordination",
          "Worked with product, design, and client stakeholders to define requirements and ship secure customer-facing integrations",
        ],
        technologies: ["AWS", "GCP", "React", "Node.js", "TypeScript", "PostgreSQL", "Express", "AWS Lambda", "API Gateway", "AWS RDS", "AWS S3", "Stripe", "AWS SQS/SNS", "Docker", "GCP Cloud Run", "Kubernetes", "GCP Pub/Sub", "Maxwell (CDC)", "MySQL", "MongoDB", "Saga Pattern"],
      },
      {
        id: "role-3",
        title: "Software Engineer/Team Lead",
        startDate: "2018-05-01",
        endDate: "2022-06-30",
        responsibilities: [
          "Led engineering delivery for IoT monitoring and application-performance-management products",
          "Designed scalable AWS and Node.js services, including event-driven processing, caching, and observability pipelines",
          "Owned secure API and identity integrations, including OAuth2, SAML, and third-party services",
          "Contributed to cloud automation and infrastructure-as-code practices with CloudFormation",
          "Coordinated implementation across engineering, product, and design while maintaining code quality standards",
        ],
        technologies: ["AWS", "React", "Node.js", "TypeScript", "PostgreSQL", "Express", "AWS Lambda", "API Gateway", "AWS RDS", "AWS S3", "AWS SQS/SNS", "ElasticSearch", "Kibana", "Elasticashe (Clustered Redis)", "AWS CloudFormation"],
      },
    ],
  },
];
