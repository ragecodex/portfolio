"use client";

import { profile } from "@/content/profile";
import Image from "next/image";
import ContactModal from "@/components/layout/ContactModal";
import { useState } from "react";

export default function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 animate-fade-in pt-16 pb-12">
      <div className="max-w-4xl text-center mb-8 lg:mb-10">
        <div className="mb-6 flex justify-center">
          <Image
            src="/profile.jpg"
            alt={profile.name}
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-gray-700"
            priority
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-4">
          {profile.name}
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-4">
          {profile.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
          {profile.tagline}
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-500 transition-colors"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-600 text-gray-100 text-sm sm:text-base rounded-lg hover:border-gray-500 transition-colors"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="px-5 py-2.5 border border-gray-600 text-gray-100 text-sm sm:text-base rounded-lg hover:border-gray-500 transition-colors cursor-pointer"
            aria-label="Open contact modal"
          >
            Contact
          </button>
        </div>
      </div>

      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {profile.coreValues.map((value) => (
            <div
              key={value.id}
              className="card hover:scale-105 transition-transform"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-snug">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />    
      </section>
  );
}
