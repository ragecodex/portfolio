import { profile } from "@/content/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-100 mb-2">
              Get In Touch
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-600 hover:text-blue-600-hover)] transition-colors text-lg"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex gap-6">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors text-lg"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors text-lg"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
