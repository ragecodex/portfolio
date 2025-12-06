import { profile } from "@/content/profile";
import { experiences } from "@/content/experience";
import { education } from "@/content/education";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.tagline,
    email: profile.email,
    url: "https://ragibsmajic.com",
    sameAs: [
      profile.social.linkedin,
      profile.social.github,
      ...(profile.social.twitter ? [profile.social.twitter] : []),
    ],
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: getPersonSchema(),
  };
}

export function getWorkExperienceSchema() {
  return experiences.map((exp) =>
    exp.roles.map((role) => ({
      "@context": "https://schema.org",
      "@type": "WorkExperience",
      name: role.title,
      description: role.responsibilities.join(". "),
      startDate:
        typeof role.startDate === "string"
          ? role.startDate
          : role.startDate.toISOString(),
      endDate:
        role.endDate === "present"
          ? new Date().toISOString()
          : typeof role.endDate === "string"
          ? role.endDate
          : role.endDate.toISOString(),
      employer: {
        "@type": "Organization",
        name: exp.company,
        url: exp.companyUrl,
      },
    }))
  ).flat();
}

export function getEducationalOccupationalCredentialSchema() {
  return education.map((edu) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: `${edu.degree} in ${edu.fieldOfStudy}`,
    credentialCategory: edu.degree,
    educationalLevel: edu.degree,
    recognizedBy: {
      "@type": "Organization",
      name: edu.institution,
      url: edu.institutionUrl,
    },
  }));
}
