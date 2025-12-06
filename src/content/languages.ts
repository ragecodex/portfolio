import { Language, LanguageProficiency } from "@/types/language";

export const languages: Language[] = [
  {
    id: "bosnian",
    name: "Bosnian",
    nativeName: "Bosanski",
    proficiency: LanguageProficiency.Native,
  },
  {
    id: "english",
    name: "English",
    proficiency: LanguageProficiency.Professional,
  },
];
