export type Links = {
  github: string;
  email: string;
  linkedin: string;
};

export type Project = {
  title: string;
  note: string;
  href?: string;
};

export type Contribution = {
  title: string;
  repo: string;
  note?: string;
};

export type HomeContent = {
  projects: Project[];
  contributes: Contribution[];
  tools: string[];
  experience: string[];
};

export type SiteContent = {
  name: string;
  title: string;
  description: string;
  links: Links;
};
