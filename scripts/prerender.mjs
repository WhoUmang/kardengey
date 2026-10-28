import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import articles from "../src/data/articles.js";

const dist = path.resolve("dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const site = "https://kardengey.com";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function textBlock(block) {
  const text = escapeHtml(block.text || "");
  if (block.type === "heading") return `<h2>${text}</h2>`;
  if (block.type === "quote") return `<blockquote><p>${text}</p></blockquote>`;
  return `<p>${text}</p>`;
}

function shell({ title, description, canonical, content, type = "website", publishedAt, author }) {
  let html = template;
  const fullTitle = `${title} — kardengey`;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(fullTitle)}</title>`);
  const meta = (name, value, attr = "name") => {
    const tag = `<meta ${attr}="${name}" content="${escapeHtml(value)}" />`;
    const regex = new RegExp(`<meta\\s+[^>]*${attr}=["']${name}["'][^>]*>`, "i");
    if (regex.test(html)) html = html.replace(regex, tag);
    else html = html.replace("</head>", `  ${tag}\n</head>`);
  };
  meta("description", description);
  meta("og:title", fullTitle, "property");
  meta("og:description", description, "property");
  meta("og:type", type, "property");
  meta("og:url", canonical, "property");
  meta("og:site_name", "kardengey", "property");
  meta("twitter:card", "summary");
  meta("twitter:title", fullTitle);
  meta("twitter:description", description);
  if (publishedAt) meta("article:published_time", publishedAt, "property");
  if (author) meta("article:author", author, "property");

  const canonicalTag = `<link rel="canonical" href="${escapeHtml(canonical)}" />`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, canonicalTag);
  } else {
    html = html.replace("</head>", `  ${canonicalTag}\n</head>`);
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  return html;
}

const style = `
<style>
  .seo-content{background:#050505;color:#f5f5f5;min-height:100vh;font-family:Arial,Helvetica,sans-serif;line-height:1.8}
  .seo-wrap{width:min(100% - 40px,1000px);margin:auto}
  .seo-header{padding:24px 0;border-bottom:1px solid #262626}
  .seo-brand{color:#fff;text-decoration:none;font-weight:800;font-size:20px}
  .seo-brand span,.seo-kicker{color:#60a5fa}
  .seo-main{padding:56px 0 90px}
  .seo-content h1{font-size:clamp(2.3rem,7vw,4.8rem);line-height:1.05;letter-spacing:-.055em;margin:16px 0 24px}
  .seo-content h2{font-size:clamp(1.45rem,4vw,2rem);line-height:1.25;margin:42px 0 12px;color:#fff}
  .seo-content p,.seo-content li{color:#c4c4c4;font-size:17px;line-height:1.85}
  .seo-content a{color:#93c5fd}
  .seo-meta{font-size:12px;color:#929292;text-transform:uppercase;letter-spacing:.12em}
  .seo-list{padding:24px 0;border-top:1px solid #262626}
  .seo-list h2{margin:0 0 8px}
  .seo-list a{color:#fff;text-decoration:none}
  .seo-footer{border-top:1px solid #262626;padding:26px 0;color:#929292;font-size:13px}
  .seo-content blockquote{border-left:3px solid #3b82f6;padding-left:20px;margin:24px 0}
</style>`;

function pageContent(inner) {
  return `${style}<div class="seo-content"><header class="seo-header"><div class="seo-wrap"><a class="seo-brand" href="/">kardengey<span>.</span></a></div></header><main class="seo-wrap seo-main">${inner}</main><footer class="seo-footer"><div class="seo-wrap">© kardengey · <a href="/about-editorial-standards">Editorial standards</a> · <a href="/privacy-policy">Privacy policy</a> · <a href="/insights">Insights</a></div></footer></div>`;
}

const articleIndex = articles.map((article) => `
  <article class="seo-list">
    <p class="seo-meta">${escapeHtml(article.category)} · ${escapeHtml(article.date)} · ${escapeHtml(article.read)}</p>
    <h2><a href="/insights/${escapeHtml(article.slug)}">${escapeHtml(article.title)}</a></h2>
    <p>${escapeHtml(article.description)}</p>
  </article>`).join("");

const insightsContent = pageContent(`
  <p class="seo-kicker">KARDENGEY / INSIGHTS</p>
  <h1>Practical thinking for business growth.</h1>
  <p>Guides and tools about digital marketing, websites, search, analytics and technology. Our articles explain decisions, trade-offs and practical steps for business owners.</p>
  ${articleIndex}
  <p>Have a question about a topic or spotted an error? <a href="mailto:kardengey@gmail.com">Contact the editorial team</a>.</p>
`);

await mkdir(path.join(dist, "insights"), { recursive: true });
await writeFile(path.join(dist, "insights", "index.html"), shell({
  title: "Insights: Digital Marketing, SEO & Growth",
  description: "Practical guides about digital marketing, SEO, websites, analytics and business growth from Kardengey.",
  canonical: `${site}/insights`,
  content: insightsContent,
}));

for (const article of articles) {
  const content = pageContent(`
    <nav class="seo-meta"><a href="/insights">Kardengey / Insights</a> / ${escapeHtml(article.category)}</nav>
    <article>
      <p class="seo-kicker">${escapeHtml(article.category)}</p>
      <h1>${escapeHtml(article.title)}</h1>
      <p>${escapeHtml(article.description)}</p>
      <p class="seo-meta">${escapeHtml(article.date)} · ${escapeHtml(article.read)} · By ${escapeHtml(article.author || "Kardengey")}</p>
      <div class="seo-article-body">${(article.content || []).map(textBlock).join("\n")}</div>
      <p>Need help applying these ideas to your business? <a href="/#contact">Contact Kardengey</a> or explore more <a href="/insights">practical guides</a>.</p>
    </article>
  `);
  const output = path.join(dist, "insights", article.slug, "index.html");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, shell({
    title: article.title,
    description: article.description,
    canonical: `${site}/insights/${article.slug}`,
    content,
    type: "article",
    publishedAt: article.publishedAt,
    author: article.author || "Kardengey",
  }));
}

const homeContent = pageContent(`
  <p class="seo-kicker">DIGITAL GROWTH STUDIO</p>
  <h1>Strategy, design and digital execution for business growth.</h1>
  <p>Kardengey helps businesses improve their digital presence through websites, search engine optimisation, paid advertising, branding and conversion-focused marketing. We connect strategy with practical execution and clear communication.</p>
  <h2>What we help with</h2>
  <ul>
    <li><strong>Websites and landing pages:</strong> plan and build clear, responsive experiences around customer needs and business goals.</li>
    <li><strong>Search engine optimisation:</strong> improve technical foundations, site structure and useful content so search engines and people can understand your offer.</li>
    <li><strong>Performance marketing:</strong> plan and manage paid campaigns with a focus on relevant enquiries, measurement and ongoing testing.</li>
    <li><strong>Branding and creative:</strong> develop consistent identity systems and campaign assets that make the offer easier to recognise.</li>
  </ul>
  <h2>How we approach projects</h2>
  <p>We start by clarifying the goal, audience, scope and constraints. We then prioritise the work that can make the biggest practical difference, implement it, and use available evidence to guide improvements. Outcomes depend on the market, offer, budget and execution; we do not guarantee rankings or sales.</p>
  <h2>Explore our insights and tools</h2>
  <p>Read our <a href="/insights">digital marketing and SEO guides</a>, or use the <a href="/tools/marketing-roi-calculator">free marketing ROI calculator</a> to estimate return on marketing spend using your own assumptions.</p>
  <h2>Talk to Kardengey</h2>
  <p>Tell us about your business, what you want to improve and what you have tried so far. Email <a href="mailto:kardengey@gmail.com">kardengey@gmail.com</a> to start a conversation.</p>
`);

const home = shell({
  title: "Digital Growth Studio",
  description: "Kardengey helps businesses with websites, SEO, performance marketing, branding and conversion-focused digital growth.",
  canonical: site,
  content: homeContent,
});
await writeFile(path.join(dist, "index.html"), home);

const sitemapEntries = [
  { url: site + "/", priority: "1.0", changefreq: "weekly" },
  { url: site + "/insights", priority: "0.8", changefreq: "weekly" },
  { url: site + "/about-editorial-standards", priority: "0.5", changefreq: "yearly" },
  { url: site + "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { url: site + "/tools/marketing-roi-calculator", priority: "0.9", changefreq: "weekly" },
  ...articles.map((article) => ({ url: site + "/insights/" + article.slug, priority: "0.8", changefreq: "monthly" })),
];
const sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  sitemapEntries.map((entry) => '  <url><loc>' + entry.url + '</loc><changefreq>' + entry.changefreq + '</changefreq><priority>' + entry.priority + '</priority></url>').join("\n") +
  '\n</urlset>\n';
await writeFile(path.join(dist, "sitemap.xml"), sitemapXml);
console.log(`Prerendered homepage, insights index, and ${articles.length} article pages.`);
