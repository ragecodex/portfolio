export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location?: string;
  email: string;
  social: SocialLinks;
  coreValues: CoreValue[];
  avatar?: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter?: string;
  medium?: string;
  stackoverflow?: string;
  dev?: string;
  [key: string]: string | undefined;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
