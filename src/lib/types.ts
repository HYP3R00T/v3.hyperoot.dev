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
export type SocialObjects = {
  name: string;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
