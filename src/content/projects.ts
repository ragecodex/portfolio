import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-3",
    name: "Multimodal Enterprise AI Agent",
    description: "Built core agent, vision, attachment, web-search, and retrieval capabilities for an AI-powered enterprise workspace assistant",
    challenge:
      "The product needed to answer reliably across text, images, temporary attachments, and connected workplace data while giving users grounded, useful results. The retrieval layer had to combine lexical and semantic signals, support visual content, and remain fast enough for an interactive agent experience.",
    solution:
      "Led development of the Python AI-agent services and embedding pipeline, integrating AWS Bedrock with models. Implemented the LLM tool loop for vision, temporary attachments, and web search; generated image descriptions and vector-rich Parquet data; and built in-memory FAISS indexes for retrieval. Improved the RAG pipeline with BM25, semantic search, reranking, and result fusion, while contributing across a .NET Core, FastAPI, and Next.js stack. I used SpecKit and spec-driven development, with Claude Code (Opus), Codex, and ChatGPT as active engineering tools for planning, implementation, testing, and review.",
    outcome:
      "Established the multimodal retrieval foundation for an assistant that can work across documents, images, attachments, web results, and connected Google Drive, Gmail, and Calendar data—supporting daily briefs and context-aware answers.",
    technologies: ["Python", "FastAPI", "AWS Bedrock", "RAG", "FAISS", "BM25", "Next.js", ".NET Core", "Claude Code", "Codex", "ChatGPT"],
    timeframe: "Ongoing",
    year: 2026,
  },
  {
    id: "project-1",
    name: "Vacancy & Applications Management Platform",
    description: "Led migration of Ruby on Rails monolith to microservices architecture for high-load recruitment platform",
    challenge:
      "The Ruby on Rails monolith became a critical bottleneck under high load with multiple teams working simultaneously. Data migration was particularly complex, requiring selective replication of millions of rows from the monolith database to individual microservice databases while maintaining data consistency.",
    solution:
      "Architected migration to Node.js microservices deployed on GCP Kubernetes. Implemented progressive React integration into Rails pages, planning eventual migration to microfrontend architecture. Developed complex SQL scripts for initial migration of millions of rows, then built CDC pipeline using Maxwell and GCP Pub/Sub for real-time data synchronization. Led cross-functional team coordination with client stakeholders to ensure smooth delivery.",
    outcome:
      "Significantly increased system availability and performance for migrated modules. Enabled independent team deployment cycles and reduced bottlenecks. Successfully orchestrated complex data replication strategy maintaining consistency across distributed databases.",
    technologies: ["React", "Node.js", "Ruby on Rails", "Kubernetes", "GCP", "PostgreSQL", "Maxwell", "GCP Pub/Sub", "Docker", "Stripe"],
    timeframe: "1 year 6 months",
    year: 2024,
  },
  {
    id: "project-2",
    name: "Application Performance Monitoring Platform",
    description: "Architected serverless APM solution processing millions of log entries per second for enterprise client",
    challenge:
      "Required handling extreme data loads with millions of log entries arriving within seconds while maintaining system stability. Elasticsearch API needed protection from overload to prevent data loss. Additionally, implementing SAML authentication with IBM for Kibana on AWS added complexity to the security architecture.",
    solution:
      "Designed serverless architecture using AWS Lambda, CloudWatch Logs, and CloudWatch agents for on-premise legacy systems. Implemented two-tier Lambda processing: first tier used Elasticache (clustered Redis) for real-time aggregation and data extraction, second tier buffered through SNS/SQS before Elasticsearch ingestion. This buffer prevented API overload while supporting thousands of parallel Lambda executions. Collaborated with AWS solution architects to increase Lambda soft limits for extreme scalability requirements.",
    outcome:
      "Delivered highly scalable, real-time monitoring solution successfully handling millions of concurrent log entries. Achieved zero data loss through intelligent buffering architecture. Provided enterprise client with instant visibility across all systems with customized, actionable insights.",
    technologies: ["Node.js", "AWS Lambda", "Elasticsearch", "Kibana", "AWS CloudWatch", "Elasticache", "Redis", "SNS", "SQS", "SAML"],
    timeframe: "2 years",
    year: 2022,
  }
];
