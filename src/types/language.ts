export type Language = {
  id: string;
  name: string;
  proficiency: LanguageProficiency;
  flag?: string;
}

export enum LanguageProficiency {
  Native = "native",
  Fluent = "fluent",
  Professional = "professional",
  Intermediate = "intermediate",
  Basic = "basic",
}

export const ProficiencyLabels: Record<LanguageProficiency, string> = {
  [LanguageProficiency.Native]: "Native",
  [LanguageProficiency.Fluent]: "Fluent",
  [LanguageProficiency.Professional]: "Full Professional Proficiency",
  [LanguageProficiency.Intermediate]: "Intermediate",
  [LanguageProficiency.Basic]: "Basic",
};
