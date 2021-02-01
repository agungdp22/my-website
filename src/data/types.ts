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
  start: Date;
  end: Date | null;
  tags: string[];
  description: string;
  links: object;
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

export interface Skill {
  id: number;
  name: string;
  image: string;
  height: number;
  percentage: number;
}
