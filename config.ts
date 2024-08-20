import type {
  ExperienceProps,
  ProjectsProps,
  SocialObjects,
} from "@/lib/types";

export const SITE = {
  website: "https://hyperoot.dev",
  author: "HYP3R00T",
  desc: "",
  title: "Hyperoot",
  ogImage: "og-image.jpg",
  repo: "https://github.com/HYP3R00T/v3.hyperoot.dev",
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const experience: ExperienceProps[] = [
  {
    job_title: "Project Engineer · Wipro",
    duration: "2022 — 2024",
    description:
      "Served as a QA tester for a prominent client in the US medical insurance industry, specializing in ETL pipeline testing. I developed automated scripts using Python and Boto3 to support integration testing, designed OpenShift pipelines to optimize testing workflows, and maintained and enhanced the internal testing suite.",
    tags: ["Python", "AWS", "Azure", "Docker", "Linux", "OpenShift"],
    url: "https://www.wipro.com/",
  },
];

export const projects: ProjectsProps[] = [
  {
    name: "CelestialDocs",
    description:
      "CelestialDocs is a simple and versatile documentation template built with Astro. It provides a clean and minimal interface for creating documentation websites, leveraging the power of Astro and Tailwind CSS for a streamlined user experience.",
    url: "https://celestialdocs.hyperoot.dev/",
    tags: ["Astro", "TailwindCSS", "TypeScript", "JavaScript"],
  },
  {
    name: "CelestialDocs",
    description:
      "CelestialDocs is a simple and versatile documentation template built with Astro. It provides a clean and minimal interface for creating documentation websites, leveraging the power of Astro and Tailwind CSS for a streamlined user experience.",
    url: "https://celestialdocs.hyperoot.dev/",
    tags: ["Astro", "TailwindCSS", "TypeScript", "JavaScript"],
  },
  {
    name: "CelestialDocs",
    description:
      "CelestialDocs is a simple and versatile documentation template built with Astro. It provides a clean and minimal interface for creating documentation websites, leveraging the power of Astro and Tailwind CSS for a streamlined user experience.",
    url: "https://celestialdocs.hyperoot.dev/",
    tags: ["Astro", "TailwindCSS", "TypeScript", "JavaScript"],
  },
  {
    name: "CelestialDocs",
    description:
      "CelestialDocs is a simple and versatile documentation template built with Astro. It provides a clean and minimal interface for creating documentation websites, leveraging the power of Astro and Tailwind CSS for a streamlined user experience.",
    url: "https://celestialdocs.hyperoot.dev/",
    tags: ["Astro", "TailwindCSS", "TypeScript", "JavaScript"],
  },
];

export const Socials: SocialObjects[] = [
  {
    name: "github",
    href: "https://github.com/HYP3R00T/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "facebook",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "instagram",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "linkedin",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "mail",
    href: "mailto:rajesh@hyperoot.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "x",
    href: "https://x.com/HYP3R00T",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "twitch",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "youtube",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "discord",
    href: "https://discord.gg/tWZRBhaPhd",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "gitlab",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "reddit",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "telegram",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "mastodon",
    href: "https://mastodon.social/@hyp3r00t",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
