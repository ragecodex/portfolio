import { profile } from "@/content/profile";

export default function Values() {
  return (
    <section className="section-container">
      <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
        Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {profile.coreValues.map((value) => (
          <div
            key={value.id}
            className="card hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-gray-100 mb-3">
              {value.title}
            </h3>
            <p className="text-gray-400">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
