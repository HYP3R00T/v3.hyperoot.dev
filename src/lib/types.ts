import type { CollectionEntry } from "astro:content";

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

// Make similar changes to config.ts in content folder
export type ArticleData = {
  author: string;
  pubDatetime?: Date;
  modDatetime?: Date | null;
  title: string;
  featured: boolean;
  draft: boolean;
  category: string;
  tags: string[];
  description?: string;
};

// Define the type for docs collection
export type ArticleProps = CollectionEntry<"blog"> & {
  data: ArticleData;
};

export interface Category {
  category: string;
  categoryName: string;
}
