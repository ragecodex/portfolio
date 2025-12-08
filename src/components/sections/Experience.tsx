import { experiences } from "@/content/experience";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 border-l-2 border-gray-800">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-[var(--color-accent-primary)] rounded-full"></div>
            <div className="flex items-center gap-4 mb-2">
              {exp.logo && (
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              )}
              <h3 className="text-2xl font-bold text-gray-100">
                {exp.company}
              </h3>
            </div>
            {exp.location && (
              <p className="text-gray-500 mb-6">{exp.location}</p>
            )}
            <div className="space-y-8">
              {exp.roles.map((role) => (
                <div key={role.id}>
                  <div className="flex flex-wrap items-baseline gap-2 mb-3">
                    <h4 className="text-xl font-semibold text-gray-100">
                      {role.title}
                    </h4>
                    <span className="text-gray-400">
                      {typeof role.startDate === "string"
                        ? new Date(role.startDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })
                        : role.startDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}{" "}
                      -{" "}
                      {role.endDate === "present"
                        ? "Present"
                        : typeof role.endDate === "string"
                        ? new Date(role.endDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })
                        : role.endDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                    </span>
                    {role.duration && (
                      <span className="text-gray-500">({role.duration})</span>
                    )}
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  {role.technologies && role.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {role.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
