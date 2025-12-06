"use client";

import { projects } from "@/content/projects";
import { useState } from "react";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section-container">
      <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
        Featured Projects
      </h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <div key={project.id} className="card cursor-pointer" onClick={() => toggleExpand(project.id)}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <button
                  className="ml-4 text-blue-600 hover:text-blue-600-hover)] transition-colors"
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                  {isExpanded ? "−" : "+"}
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.timeframe && (
                <p className="text-gray-500 text-sm">
                  {project.timeframe} • {project.year}
                </p>
              )}

              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-gray-800 space-y-4 animate-fade-in">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-400">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-400">{project.solution}</p>
                  </div>
                  {project.outcome && (
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--color-accent-success)] mb-2">
                        Outcome
                      </h4>
                      <p className="text-gray-400">{project.outcome}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
