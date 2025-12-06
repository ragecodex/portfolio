import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 animate-fade-in">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
          {profile.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          {profile.title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">
          {profile.tagline}
        </p>
        <div className="mt-12 flex gap-6 justify-center flex-wrap">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-600 text-gray-100 rounded-lg hover:border-gray-500 transition-colors"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 border border-gray-600 text-gray-100 rounded-lg hover:border-gray-500 transition-colors"
            aria-label="Send Email"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
