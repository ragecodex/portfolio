export type Experience = {
  id: string;
  company: string;
  companyUrl?: string;
  roles: Role[];
  location?: string;
  description?: string;
  logo?: string;
}

export type Role = {
  id: string;
  title: string;
  startDate: Date | string;
  endDate: Date | string | "present";
  duration?: string;
  responsibilities: string[];
  technologies?: string[];
  highlights?: string[];
}

export type DateRange = {
  start: Date;
  end: Date | "present";
};
