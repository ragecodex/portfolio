import { education } from "@/content/education";

export default function Education() {
  return (
    <section className="section-container">
      <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
        Education
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="card">
            <h3 className="text-2xl font-bold text-gray-100 mb-2">
              {edu.institution}
            </h3>
            <p className="text-xl text-gray-400 mb-2">
              {edu.degree} in {edu.fieldOfStudy}
            </p>
            <p className="text-gray-500 mb-4">
              {typeof edu.startDate === "string"
                ? new Date(edu.startDate).getFullYear()
                : edu.startDate.getFullYear()}{" "}
              -{" "}
              {typeof edu.endDate === "string"
                ? new Date(edu.endDate).getFullYear()
                : edu.endDate.getFullYear()}
            </p>
            {edu.description && (
              <p className="text-gray-400">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
