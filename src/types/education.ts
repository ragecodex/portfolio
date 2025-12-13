export type Education = {
  id: string;
  institution: string;
  institutionUrl?: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date | string;
  endDate: Date | string;
  gpa?: string | number;
  honors?: string[];
  relevantCoursework?: string[];
  description?: string;
  logo?: string;
}
