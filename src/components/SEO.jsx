import { useEffect } from "react";

const SITE_URL = "https://kardengey.com";
const SITE_NAME = "kardengey";

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  publishedAt,
  author,
}) {
  useEffect(() => {
    const fullTitle =
      title === SITE_NAME
        ? SITE_NAME
        : `${title} — ${SITE_NAME}`;

    document.title = fullTitle;

    setMeta("description", description);

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:site_name", SITE_NAME, "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    if (publishedAt) {
      setMeta("article:published_time", publishedAt, "property");
    }

    if (author) {
      setMeta("article:author", author, "property");
    }

    setCanonical(canonical);
  }, [
    title,
    description,
    canonical,
    type,
    publishedAt,
    author,
  ]);

  return null;
}

function setMeta(name, content, attribute = "name") {
  if (!content) return;

  let element = document.head.querySelector(
    `meta[${attribute}="${name}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}