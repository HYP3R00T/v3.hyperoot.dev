// For HeadSEO.astro
export interface HeadSEOProps {
  title?: string | undefined;
  description?: string | undefined;
  ogImage?: URL | undefined;
}

// For BaseLayout.astro
export interface BaseLayoutProps {
  title?: string | undefined;
  description?: string | undefined;
  ogImage?: URL | undefined;
}

// For social links (config.ts)
export interface SocialObjects {
  name: string;
  href: string;
  active: boolean;
  linkTitle: string;
}
[];

export interface ExperienceProps {
  job_title: string;
  description: string;
  duration: string;
  tags?: string[];
  url: string;
}

export interface ExpCardProps {
  data: ExperienceProps;
}

export interface ProjectsProps {
  name: string;
  description: string;
  tags?: string[];
  url: string;
}

export interface ProjCardProps {
  data: ProjectsProps;
}
