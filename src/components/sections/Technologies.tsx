import { technologies } from "@/content/technologies";
import Image from "next/image";

export default function Technologies() {
  return (
    <section id="skills" className="section-container">
      <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
        Technologies & Tools
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center justify-center p-4 card hover:scale-110 transition-transform group"
              title={tech.name}
            >
              <div className="w-12 h-12 relative mb-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                />
              </div>
              <p className="text-xs text-gray-400 text-center group-hover:text-gray-200 transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
