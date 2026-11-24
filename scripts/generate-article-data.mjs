import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import articles from "../src/data/articles.js";

const outputRoot = path.resolve("src/data/generated");
const validArticles = articles
  .filter((article) => article && typeof article.slug === "string" && article.slug.trim() && typeof article.title === "string")
  .sort((a, b) => new Date(b.publishedAt || b.date).getTime() - new Date(a.publishedAt || a.date).getTime());

const metadata = validArticles.map(({ category, filter, title, slug, description, date, publishedAt, read, author }) => ({
  category, filter, title, slug, description, date, publishedAt, read, author,
}));

await rm(outputRoot, { recursive: true, force: true });
await mkdir(path.join(outputRoot, "articles"), { recursive: true });
await writeFile(path.join(outputRoot, "article-index.json"), JSON.stringify(metadata, null, 2) + "\n");

for (const article of validArticles) {
  if (!/^[a-z0-9-]+$/.test(article.slug)) {
    throw new Error(`Unsafe article slug: ${article.slug}`);
  }
  await writeFile(path.join(outputRoot, "articles", `${article.slug}.json`), JSON.stringify(article) + "\n");
}

console.log(`Generated lightweight index and ${validArticles.length} lazy article files from ${articles.length} records.`);
