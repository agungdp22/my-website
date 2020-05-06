export interface Link {
  title: string;
  url: string;
  icon: string | string[];
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  image: string | null;
  start: Date; // TODO improve
  end: Date | null;
  tags: string[];
  featured: boolean;
  description: string;
  description_ja?: string;
  links: object; // TODO improve
}

export interface Work {
  id: number;
  title: string;
  company: string;
  companyLogo: string | null;
  link: string | null;
  start: Date;
  end: Date | null;
  featured: boolean;
}
