import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import articles from "../src/data/articles.js";
import serviceLandingPages from "../src/data/serviceLandingPages.js";

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
  if (block.type === "link") {
    const href = escapeHtml(block.href || "");
    const external = /^https:\/\//i.test(block.href || "");
    return `<p><a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a></p>`;
  }
  if (block.type === "list" && Array.isArray(block.items)) {
    const items = block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    return `<ul>${items}</ul>`;
  }
  return `<p>${text}</p>`;
}

function shell({ title, description, canonical, content, type = "website", publishedAt, author, structuredData: extraStructuredData }) {
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

  if (canonical === site && type === "website") {
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Kardengey",
        url: site,
        description,
        email: "kardengey@gmail.com",
        founder: { "@type": "Person", name: "Umang Pathak" },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Kardengey",
        url: site,
      },
    ];
    const jsonLd = JSON.stringify(structuredData).replaceAll("<", "\\u003c");
    html = html.replace("</head>", '  <script type="application/ld+json">' + jsonLd + '</script>\n</head>');
  }

  if (extraStructuredData) {
    const jsonLd = JSON.stringify(extraStructuredData).replaceAll("<", "\\u003c");
    html = html.replace("</head>", '  <script type="application/ld+json">' + jsonLd + '</script>\n</head>');
  }

  if (type === "article" && publishedAt) {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      url: canonical,
      datePublished: publishedAt,
      author: { "@type": "Organization", name: author || "Kardengey" },
      publisher: { "@type": "Organization", name: "Kardengey", url: site },
    };
    const jsonLd = JSON.stringify(structuredData).replaceAll("<", "\\u003c");
    html = html.replace("</head>", '  <script type="application/ld+json">' + jsonLd + '</script>\n</head>');
  }

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
  .seo-cta{margin-top:48px;padding:28px;border:1px solid rgba(59,130,246,.3);border-radius:18px;background:rgba(59,130,246,.06)}
  .seo-cta h2{margin:0 0 10px}
  .seo-cta p{margin:0 0 16px}
  .seo-cta a{display:inline-block;margin:8px 18px 0 0;font-weight:700}
</style>`;

function pageContent(inner) {
  return `${style}<div class="seo-content"><header class="seo-header"><div class="seo-wrap"><a class="seo-brand" href="/">kardengey<span>.</span></a></div></header><main class="seo-wrap seo-main">${inner}</main><footer class="seo-footer"><div class="seo-wrap">© kardengey · <a href="/about-editorial-standards">Editorial standards</a> · <a href="/privacy-policy">Privacy policy</a> · <a href="/insights">Insights</a></div></footer></div>`;
}

const validArticles = articles
  .filter((article) => article && typeof article.slug === "string" && article.slug.trim() && typeof article.title === "string")
  .sort((a, b) => new Date(b.publishedAt || b.date).getTime() - new Date(a.publishedAt || a.date).getTime());

const articleIndex = validArticles.map((article) => `
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

for (const article of validArticles) {
  const content = pageContent(`
    <nav class="seo-meta"><a href="/insights">Kardengey / Insights</a> / ${escapeHtml(article.category)}</nav>
    <article>
      <p class="seo-kicker">${escapeHtml(article.category)}</p>
      <h1>${escapeHtml(article.title)}</h1>
      <p>${escapeHtml(article.description)}</p>
      <p class="seo-meta">${escapeHtml(article.date)} · ${escapeHtml(article.read)} · By ${escapeHtml(article.author || "Kardengey")}</p>
      <div class="seo-article-body">${(article.content || []).map(textBlock).join("\n")}</div>
      <section class="seo-cta"><h2>Put the next step into action.</h2><p>Explore how Kardengey approaches SEO, websites, performance marketing and brand work—or tell us what your business needs to improve.</p><a href="/services">Explore services ↗</a> <a href="/contact">Discuss a project ↗</a></section>
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
  <h1>We turn attention into growth.</h1>
  <p>Kardengey is a digital marketing and growth studio helping businesses in India strengthen their online presence through search engine optimisation (SEO), website development, performance marketing, branding and conversion-focused creative. Strategy, design and technology work together to attract relevant visitors and turn more of the right opportunities into enquiries.</p>
  <h2>What we help with</h2>
  <ul>
    <li><strong><a href="/services#website-development">Website development:</a></strong> plan and build clear, responsive experiences around customer needs and business goals.</li>
    <li><strong><a href="/services#seo">SEO services:</a></strong> improve technical foundations, site structure and useful content so search engines and people can understand your offer.</li>
    <li><strong><a href="/services#performance-marketing">Performance marketing:</a></strong> plan and manage paid campaigns with a focus on relevant enquiries, measurement and ongoing testing.</li>
    <li><strong><a href="/services#branding">Branding and creative:</a></strong> develop consistent identity systems and campaign assets that make the offer easier to recognise.</li>
    <li><strong><a href="/services#packaging-design">Packaging design:</a></strong> create production-aware packaging systems that communicate product information and brand identity.</li>
    <li><strong><a href="/services#ai-automation">AI and workflow automation:</a></strong> identify repetitive processes and build bounded automations with appropriate human review.</li>
  </ul>
  <h2>How we approach projects</h2>
  <p>We start by clarifying the goal, audience, scope and constraints. We then prioritise the work that can make the biggest practical difference, implement it, and use available evidence to guide improvements. Outcomes depend on the market, offer, budget and execution; we do not guarantee rankings or sales.</p>
  <h2>Explore our insights and tools</h2>
  <p>Explore our dedicated <a href="/seo-services-india">SEO services</a>, <a href="/website-development">website development</a>, <a href="/performance-marketing">performance marketing</a>, <a href="/branding-and-packaging-design">branding and packaging design</a>, and <a href="/digital-marketing-pricing">digital marketing pricing guide</a>. Read our <a href="/insights">digital marketing and SEO guides</a>, or use the <a href="/tools/marketing-roi-calculator">free marketing ROI calculator</a> to estimate return on marketing spend using your own assumptions.</p>
  <h2>Talk to Kardengey</h2>
  <p>Tell us about your business, what you want to improve and what you have tried so far. <a href="/contact">Send a project enquiry</a>, message us on <a href="https://wa.me/7666459165">WhatsApp</a> or email <a href="mailto:kardengey@gmail.com">kardengey@gmail.com</a>.</p>
`);

const home = shell({
  title: "Digital Marketing Agency & Growth Studio in India",
  description: "Kardengey helps businesses in India grow with SEO, website development, performance marketing and branding—focused on relevant traffic and qualified enquiries.",
  canonical: site,
  content: homeContent,
});
await writeFile(path.join(dist, "index.html"), home);


const editorialContent = pageContent(`
  <p class="seo-kicker">ABOUT / PUBLISHER INFORMATION</p>
  <h1>Built on practical work.</h1>
  <p>Kardengey is a founder-led digital growth studio working across websites, search, performance marketing, branding and practical technology. This page explains who runs the studio, what we publish and the standards we aim to follow.</p>
  <h2>Who is behind Kardengey?</h2>
  <p>Kardengey was founded by Umang Pathak. His professional background includes web development and building digital experiences, with practical work across WordPress, React, website implementation, search optimisation and digital marketing. The studio brings these disciplines together to help businesses improve their digital presence and customer journeys.</p>
  <h2>What Kardengey publishes</h2>
  <p>Kardengey Insights covers topics connected to the studio's work: website planning and development, SEO, paid acquisition, analytics, branding and useful technology. Articles aim to explain decisions, processes, trade-offs and ways to evaluate results. Kardengey is the publisher; individual authors or contributors are identified where applicable.</p>
  <h2>How we approach research and examples</h2>
  <p>We aim to explain the reasoning behind recommendations and distinguish general guidance from assumptions. Worked numbers and scenarios are illustrative unless a page explicitly identifies a verifiable source or documented case. They are not customer results, guarantees or universal industry benchmarks. Where advice depends on a platform, market or date, readers should verify current requirements before acting.</p>
  <h2>How we handle tools and calculations</h2>
  <p>Our calculators use the inputs entered by the visitor and display estimates based on the formulas explained on the relevant page. They are decision-support tools, not financial forecasts or substitutes for accounting, legal or professional advice. Results can be incomplete when costs, refunds, margins, attribution or other relevant variables are not included.</p>
  <h2>How content is reviewed and corrected</h2>
  <p>We review content when we identify an error, a material change in a platform or process, or a problem with a tool calculation. Updates are made to improve accuracy and usefulness; a publication date alone does not mean every detail has been independently revalidated. Readers can report a specific issue by emailing us with the page URL and the correction or source they recommend.</p>
  <h2>Contact the publisher</h2>
  <p>For editorial corrections, questions about an article or business enquiries, contact Kardengey at <a href="mailto:kardengey@gmail.com">kardengey@gmail.com</a>. You can also use the contact section on our website. Please do not send passwords, payment information or sensitive personal data through ordinary email.</p>
  <p>Browse our <a href="/insights">Insights library</a>, review <a href="/services">Kardengey services</a>, or use the <a href="/tools/marketing-tools">free marketing tools</a>.</p>
`);;
await mkdir(path.join(dist, "about-editorial-standards"), { recursive: true });
await writeFile(path.join(dist, "about-editorial-standards", "index.html"), shell({
  title: "About Kardengey Insights & Editorial Standards",
  description: "Who publishes Kardengey Insights, how examples are presented, how content is maintained, and how to request a correction.",
  canonical: `${site}/about-editorial-standards`,
  content: editorialContent,
}));

const contactContent = pageContent(`
  <p class="seo-kicker">CONTACT / START A CONVERSATION</p>
  <h1>Tell us what you want to build.</h1>
  <p>Contact Kardengey about website development, SEO, performance marketing, branding, packaging design or practical digital growth support.</p>
  <h2>Send a project enquiry</h2>
  <p>Use the enquiry form on this page to share your name, email address, project details and the service you are considering. We will use the information you provide to respond to your enquiry.</p>
  <h2>Email</h2>
  <p><a href="mailto:kardengey@gmail.com">kardengey@gmail.com</a></p>
  <h2>WhatsApp</h2>
  <p><a href="https://wa.me/7666459165">Message Kardengey on WhatsApp</a></p>
  <h2>What to include</h2>
  <p>A short description of your business, the challenge you want to solve, your website or social profile, and any timeline or budget constraints will help us understand the request. Please do not send passwords, payment details or sensitive personal information.</p>
`);
await mkdir(path.join(dist, "contact"), { recursive: true });
await writeFile(path.join(dist, "contact", "index.html"), shell({
  title: "Contact Kardengey | Start a Project Enquiry",
  description: "Contact Kardengey about website development, SEO, performance marketing, branding and digital growth projects.",
  canonical: `${site}/contact`,
  content: contactContent,
}));

const privacyContent = pageContent(`
  <p class="seo-kicker">WEBSITE INFORMATION</p>
  <h1>Privacy policy</h1>
  <p>Last updated: 28 October 2026</p>
  <p>This policy explains how Kardengey handles information when you visit kardengey.com, contact us, or interact with analytics and advertising technologies on the website.</p>
  <h2>Information you provide</h2>
  <p>When you contact Kardengey, you may choose to provide your name, email address, company or brand, phone number, requested service, approximate budget and project message. We use this information to respond to your enquiry and discuss requested services. Please do not submit sensitive personal information through a contact form.</p>
  <h2>Analytics</h2>
  <p>We use Google Analytics to understand how visitors discover and use the website, such as pages visited and general traffic patterns. Analytics may use cookies or similar technologies and process online identifiers, device or browser information and usage events.</p>
  <h2>Advertising and cookies</h2>
  <p>This website includes Google AdSense code and may display Google advertising if the site is approved and ads are enabled. Google and its advertising partners may use cookies or similar technologies to serve, measure and personalise ads, subject to your settings, applicable consent requirements and Google's policies. Advertising may not appear on every visit.</p>
  <p>You can manage cookie preferences through any consent message shown on this website, your browser settings, and Google's available privacy and advertising controls. Blocking cookies may affect some website or advertising functionality.</p>
  <h2>How information is used</h2>
  <p>Information may be used to reply to enquiries, provide requested services, maintain and secure the website, understand site performance, and support advertising and measurement where enabled. We do not sell personal information submitted through our contact form.</p>
  <h2>Third-party services</h2>
  <p>The website may rely on third-party services including Google Analytics, Google AdSense, website hosting and contact-form delivery providers. Those providers process information under their own terms and privacy policies. We do not control third-party websites or services.</p>
  <h2>Retention and security</h2>
  <p>We keep enquiry information for as long as reasonably necessary to respond, maintain business records, resolve issues and meet applicable obligations. We take reasonable steps to protect information, but no internet transmission or storage system can be guaranteed completely secure.</p>
  <h2>Your choices and questions</h2>
  <p>You may contact us to ask about information you submitted or request correction or deletion, subject to applicable legal or legitimate record-keeping requirements. For privacy questions, email <a href="mailto:kardengey@gmail.com">kardengey@gmail.com</a>.</p>
  <h2>Changes to this policy</h2>
  <p>We may update this policy as the website, services or applicable requirements change. The latest version will be published on this page.</p>
`);
await mkdir(path.join(dist, "privacy-policy"), { recursive: true });
await writeFile(path.join(dist, "privacy-policy", "index.html"), shell({
  title: "Privacy Policy",
  description: "How Kardengey handles contact enquiries, analytics, cookies and advertising technologies on its website.",
  canonical: `${site}/privacy-policy`,
  content: privacyContent,
}));

const calculatorContent = pageContent(`
  <p class="seo-kicker">FREE MARKETING TOOL</p>
  <h1>Marketing ROI calculator</h1>
  <p>Estimate return on marketing investment, return on ad spend, cost per lead, customer acquisition cost and lead-to-customer conversion using your own campaign numbers. The interactive calculator loads on this page when JavaScript is available.</p>
  <h2>How the calculations work</h2>
  <p>Total marketing cost = advertising spend + other marketing costs. Estimated revenue = customers acquired × average revenue per customer. Estimated contribution = revenue × gross margin percentage. Estimated profit after marketing = estimated contribution − total marketing cost.</p>
  <p>Estimated marketing ROI = (estimated profit after marketing ÷ total marketing cost) × 100. ROAS = revenue ÷ advertising spend. Cost per lead = advertising spend ÷ leads. Customer acquisition cost = total marketing cost ÷ customers acquired. Lead-to-customer conversion = customers acquired ÷ leads × 100.</p>
  <h2>Worked example (illustrative only)</h2>
  <p>Suppose a campaign spends ₹50,000 on ads and ₹10,000 on other marketing, generates 250 leads and acquires 20 customers at ₹15,000 revenue each. Revenue is ₹3,00,000. At a 60% gross margin, estimated contribution is ₹1,80,000; subtracting ₹60,000 total marketing cost leaves ₹1,20,000 estimated contribution after marketing and a 200% estimated ROI. ROAS is 6.0×, cost per lead is ₹200 and customer acquisition cost is ₹3,000. These are sample inputs, not a customer case study or a forecast.</p>
  <h2>Use the numbers carefully</h2>
  <p>Use the same measurement period for costs, leads and customers. Account for refunds, sales costs, taxes and repeat purchases where relevant. A positive estimate does not prove that marketing caused all reported revenue. Compare the estimate with actual sales and margin data before increasing spend.</p>
  <p><a href="/insights/how-to-calculate-marketing-roi">Read the full marketing ROI guide</a> or browse all <a href="/insights">Kardengey Insights articles</a>.</p>
`);
await mkdir(path.join(dist, "tools", "marketing-roi-calculator"), { recursive: true });
await writeFile(path.join(dist, "tools", "marketing-roi-calculator", "index.html"), shell({
  title: "Marketing ROI Calculator | Free ROI & ROAS Tool",
  description: "Estimate marketing ROI, ROAS, cost per lead, customer acquisition cost and lead conversion using your own campaign numbers.",
  canonical: `${site}/tools/marketing-roi-calculator`,
  content: calculatorContent,
}));


const servicesContent = pageContent(`
  <p class="seo-kicker">SERVICES / HOW WE WORK</p>
  <h1>Digital marketing services. Clear outcomes.</h1>
  <p>Kardengey is a digital growth studio working with businesses in India across website development, search engine optimisation, paid acquisition, brand identity, packaging and practical automation. This guide explains what each service involves, what a sensible engagement should measure and what information helps scope the work.</p>
  <h2 id="website-development">Website design and development</h2>
  <p>A website should help visitors understand the offer, assess credibility and take the next step. Work can include page planning, responsive design and development, enquiry paths, forms and technical checks. Review qualified enquiries, form completion, WhatsApp clicks and the performance of important landing pages.</p>\n  <p><a href="/website-development">Explore our website development approach</a>.</p>
  <h2 id="seo">Search engine optimisation</h2>
  <p>SEO combines crawlability, useful information, site structure, search intent and a business that deserves to be found. Work can include technical reviews, keyword and intent mapping, internal links and content improvements. Review relevant impressions, clicks, landing-page engagement and enquiries. Rankings fluctuate and are never guaranteed.</p>\n  <p><a href="/seo-services-india">Explore our SEO services in India</a>.</p>
  <h2 id="performance-marketing">Performance marketing</h2>
  <p>Paid campaigns should connect spend with lead quality and sales outcomes. Work can include offer and funnel review, audience and creative testing, conversion measurement and ongoing optimisation. Separate raw leads from qualified leads and compare cost per qualified lead, customer acquisition cost and contribution after marketing.</p>\n  <p><a href="/performance-marketing">Explore performance marketing services</a> and our <a href="/digital-marketing-pricing">pricing guide</a>.</p>
  <h2 id="branding">Brand identity and creative</h2>
  <p>Brand work can include discovery, positioning, logo direction, visual identity, typography, colour guidance and campaign creative systems. Validate the system across real customer touchpoints and check whether it communicates the intended offer clearly.</p>\n  <p><a href="/branding-and-packaging-design">Explore branding and packaging design</a>.</p>
  <h2 id="packaging-design">Packaging design</h2>
  <p>Packaging must work on a shelf, in transit, in photographs and in a customer's hands. Work can include product and audience context, information hierarchy, visual direction, print-ready artwork and production handoff checks. Confirm legibility, mandatory information, material constraints and print proofs with the production partner.</p>
  <h2 id="ai-automation">AI and workflow automation</h2>
  <p>Automation is useful when it removes a defined repetitive task. Begin by mapping the current process, then prototype a bounded workflow with human review and documented failure handling. Compare time per task, error rate and manual review before and after implementation.</p>
  <h2>How a project is scoped</h2>
  <ol><li>Understand the business goal and audience.</li><li>Review the starting point, assets, data and constraints.</li><li>Agree deliverables, exclusions, responsibilities and access.</li><li>Implement, test and use available evidence to plan improvements.</li></ol>
  <h2>Common questions</h2>
  <h3>How much does a project cost?</h3><p>Cost depends on scope, number of pages or deliverables, integrations, content readiness and ongoing support. Kardengey clarifies the requirements before providing a written scope and price.</p>
  <h3>How long does a project take?</h3><p>Timelines depend on scope, approvals, access to assets and feedback. Milestones and dependencies should be agreed before work begins.</p>
  <h3>Can you guarantee rankings or sales?</h3><p>No. Search rankings, ad costs and sales depend on competition, the offer, budget, customer behaviour, platform systems and execution. We can define measurable work and report what the data shows, but cannot guarantee a particular ranking or revenue.</p>
  <h3>What should I prepare?</h3><p>Share a short description of your business, the audience, the main problem, your website or social profiles and any deadline or budget constraint. A polished brief is not required to start a conversation.</p>
  <p>To discuss a project, <a href="/contact">send Kardengey an enquiry</a> or email <a href="mailto:kardengey@gmail.com">kardengey@gmail.com</a>. Final deliverables, fees and timelines are agreed in writing for each project.</p>
`);
await mkdir(path.join(dist, "services"), { recursive: true });
await writeFile(path.join(dist, "services", "index.html"), shell({
  title: "Digital Marketing Services in India | SEO, Websites & Ads",
  description: "Explore Kardengey’s SEO, website development, performance marketing, branding and packaging services for businesses in India. See scope, process and ways to measure progress.",
  canonical: `${site}/services`,
  content: servicesContent,
}));


const marketingToolsContent = pageContent(`
  <p class="seo-kicker">FREE BUSINESS TOOLS</p>
  <h1>Marketing lead quality and acquisition calculators</h1>
  <p>Use the interactive tools on this page to estimate cost per enquiry, contact rate, qualification rate, cost per qualified lead, customer acquisition cost, revenue-to-ad-spend ratio and estimated return after gross margin. Enter figures from the same reporting cohort.</p>
  <h2>Lead quality calculator</h2>
  <p>Enter advertising spend, enquiry count, contacts reached, qualified leads, new customers, other acquisition costs, collected revenue and gross margin. The interactive calculator shows the cost and conversion measures for the figures supplied.</p>
  <h2>How to interpret the results</h2>
  <p>A low contact rate can point to invalid contact details, slow response or unclear expectations. A low qualification rate can point to audience, location or offer mismatch. Qualified leads that do not become customers may require a sales-process review. If acquisition cost exceeds contribution, review margin, fulfilment and retention before increasing spend.</p>
  <h2>Calculation definitions</h2>
  <p>Cost per enquiry = advertising spend divided by enquiries. Cost per qualified lead = advertising spend divided by qualified leads. Media-only customer acquisition cost = advertising spend divided by new customers. Blended customer acquisition cost = the acquisition costs entered divided by new customers. Revenue-to-ad-spend ratio = collected revenue divided by advertising spend; it is not profit.</p>
  <p>These are estimates, not forecasts or industry benchmarks. Use consistent time periods and cohorts. The ROI estimate excludes fixed overhead and costs not entered. For detailed context, read <a href="/insights/meta-ads-leads-not-customers-diagnosis">the lead-quality diagnosis guide</a>, <a href="/insights/calculate-real-customer-acquisition-cost-india">the customer acquisition cost guide</a> and <a href="/insights/small-business-google-meta-ads-budget-india">the advertising budget guide</a>.</p>
`);
await mkdir(path.join(dist, "tools", "marketing-tools"), { recursive: true });
await writeFile(path.join(dist, "tools", "marketing-tools", "index.html"), shell({
  title: "Free Marketing Tools | Lead Quality & Customer Acquisition Calculators",
  description: "Calculate cost per enquiry, qualified lead, customer acquisition cost, revenue-to-ad-spend ratio and estimated marketing ROI.",
  canonical: `${site}/tools/marketing-tools`,
  content: marketingToolsContent,
}));

for (const page of serviceLandingPages) {
  const sections = page.sections.map((section) => `
    <section>
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\\n")}
    </section>`).join("\\n");
  const process = `<ol>${page.process.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
  const faqs = page.faqs.map(([question, answer]) => `<h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p>`).join("\\n");
  const related = page.related.map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join(" · ");
  const inner = `
    <nav class="seo-meta"><a href="/">Kardengey</a> / <a href="/services">Services</a> / ${escapeHtml(page.eyebrow)}</nav>
    <p class="seo-kicker">${escapeHtml(page.eyebrow)}</p>
    <h1>${escapeHtml(page.title)}</h1>
    <p>${escapeHtml(page.intro)}</p>
    <h2>Who this is for</h2><p>${escapeHtml(page.audience)}</p>
    ${sections}
    <h2>How we work</h2>${process}
    <h2>Common questions</h2>${faqs}
    <section class="seo-cta"><h2>Discuss your project</h2><p>Share your business goal, current starting point and the support you are looking for. We will review the scope before proposing the next step.</p><a href="/contact">Send a project enquiry ↗</a></section>
    <h2>Explore more</h2><p>${related} · <a href="/services">All services</a></p>
  `;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    serviceType: page.title,
    provider: { "@type": "Organization", name: "Kardengey", url: site },
    areaServed: { "@type": "Country", name: "India" },
    url: site + page.path,
  };
  const pageHtml = pageContent(inner);
  const html = shell({
    title: page.metaTitle.replace(/ — Kardengey$/, ""),
    description: page.description,
    canonical: site + page.path,
    content: pageHtml,
    structuredData,
  });
  const output = path.join(dist, page.path.slice(1), "index.html");
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, html);
}

const sitemapEntries = [
  { url: site + "/", priority: "1.0", changefreq: "weekly" },
  { url: site + "/insights", priority: "0.8", changefreq: "weekly" },
  { url: site + "/services", priority: "0.8", changefreq: "monthly" },
  { url: site + "/about-editorial-standards", priority: "0.5", changefreq: "yearly" },
  { url: site + "/contact", priority: "0.7", changefreq: "monthly" },
  { url: site + "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { url: site + "/tools/marketing-roi-calculator", priority: "0.9", changefreq: "weekly" },
  { url: site + "/tools/marketing-tools", priority: "0.9", changefreq: "weekly" },
  ...serviceLandingPages.map((page) => ({ url: site + page.path, priority: "0.85", changefreq: "monthly" })),
  ...validArticles.map((article) => ({ url: site + "/insights/" + article.slug, priority: "0.8", changefreq: "monthly" })),
];
const sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  sitemapEntries.map((entry) => '  <url><loc>' + entry.url + '</loc><changefreq>' + entry.changefreq + '</changefreq><priority>' + entry.priority + '</priority></url>').join("\n") +
  '\n</urlset>\n';
await writeFile(path.join(dist, "sitemap.xml"), sitemapXml);
console.log(`Prerendered homepage, services, marketing tools, insights index, and ${validArticles.length} article pages (from ${articles.length} records).`);
