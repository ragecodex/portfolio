import { profile } from "@/content/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-center items-center gap-4 mb-8">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-600 text-gray-100 rounded-lg hover:border-gray-500 transition-colors"
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
            aria-label="Contact via Email"
          >
            Contact
          </a>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
