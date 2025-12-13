export type Profile ={
  name: string;
  title: string;
  tagline: string;
  location?: string;
  email: string;
  social: SocialLinks;
  coreValues: CoreValue[];
  avatar?: string;
}

export type SocialLinks = {
  linkedin: string;
  github: string;
  twitter?: string;
  medium?: string;
  stackoverflow?: string;
  dev?: string;
  [key: string]: string | undefined;
}

export type CoreValue = {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
