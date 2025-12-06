import { technologies } from "@/content/technologies";
import { TechnologyCategory, CategoryLabels } from "@/types/technology";

export default function Technologies() {
  // Group technologies by category
  const grouped = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<TechnologyCategory, typeof technologies>);

  return (
    <section id="skills" className="section-container">
      <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
        Technologies & Tools
      </h2>
      <div className="max-w-5xl mx-auto space-y-12">
        {Object.entries(grouped).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">
              {CategoryLabels[category as TechnologyCategory]}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {techs.map((tech) => (
                <div
                  key={tech.id}
                  className="card text-center hover:scale-105 transition-transform"
                >
                  <p className="text-lg font-medium text-gray-100">
                    {tech.name}
                  </p>
                  {tech.yearsOfExperience && (
                    <p className="text-sm text-gray-500 mt-1">
                      {tech.yearsOfExperience}+ years
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
