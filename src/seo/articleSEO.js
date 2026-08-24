import { SITE_URL, SITE_NAME } from "./siteConfig";

export function getArticleSEO(article) {
  return {
    title: article.title,
    description: article.description,

    canonical: `${SITE_URL}/insights/${article.slug}`,

    type: "article",

    publishedAt: article.publishedAt,

    author: article.author || SITE_NAME,
  };
}