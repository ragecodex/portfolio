export interface Technology {
  id: string;
  name: string;
  category: TechnologyCategory;
  logo?: string;
  url?: string;
  yearsOfExperience?: number;
}

export enum TechnologyCategory {
  Language = "language",
  Framework = "framework",
  Library = "library",
  Database = "database",
  Cloud = "cloud",
  Tool = "tool",
  Other = "other",
}

export const CategoryLabels: Record<TechnologyCategory, string> = {
  [TechnologyCategory.Language]: "Languages",
  [TechnologyCategory.Framework]: "Frameworks",
  [TechnologyCategory.Library]: "Libraries",
  [TechnologyCategory.Database]: "Databases",
  [TechnologyCategory.Cloud]: "Cloud & Infrastructure",
  [TechnologyCategory.Tool]: "Tools & DevOps",
  [TechnologyCategory.Other]: "Other",
};
