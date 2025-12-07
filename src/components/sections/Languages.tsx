import { languages } from "@/content/languages";
import { ProficiencyLabels } from "@/types/language";

export default function Languages() {
  return (
    <section className="section-container">
      <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
        Languages
      </h2>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((lang) => (
          <div key={lang.id} className="card text-center">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              {lang.name}
            </h3>
            <p className="text-gray-400">
              {ProficiencyLabels[lang.proficiency]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
