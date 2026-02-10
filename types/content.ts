export type Links = {
  github: string;
  email: string;
  linkedin: string;
  leetcode: string;
};

export type Project = {
  title: string;
  note: string;
  href?: string;
  highlights?: readonly string[];
  stack?: readonly string[];
};

export type Contribution = {
  title: string;
  repo: string;
  note?: string;
};

export type Education = {
  title: string;
  institution: string;
  period: string;
  href?: string;
  note?: string;
};

export type HomeContent = {
  projects: Project[];
  contributes: Contribution[];
  education: Education[];
  tools: string[];
  experience: string[];
  languages: string[];
};

export type SiteContent = {
  name: string;
  title: string;
  location: string;
  description: string;
  links: Links;
};
