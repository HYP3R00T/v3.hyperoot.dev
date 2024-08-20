import { SITE } from "config";
import type { CollectionEntry } from "astro:content";
import type { ArticleProps, Category } from "@/lib/types";

// Helper function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export const getUniqueCategories = (posts: ArticleProps[]) => {
  const categories: Category[] = posts
    .filter(postFilter)
    .flatMap((post) => post.data.category)
    .map((category) => ({ category: category, categoryName: category }))
    .filter(
      (value, index, self) =>
        self.findIndex((category) => category.category === value.category) ===
        index,
    )
    .sort((categoryA, categoryB) =>
      categoryA.category.localeCompare(categoryB.category),
    );
  return categories;
};
