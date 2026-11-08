import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const principles = [
  {
    title: "Who is behind Kardengey?",
    body: "Kardengey is an independent, founder-led digital growth studio founded by Umang Pathak. Umang's professional background includes web development and building digital experiences, with hands-on work across WordPress, React, website implementation, search optimisation and digital marketing. Kardengey brings these disciplines together to help businesses improve how they present themselves, attract relevant audiences and convert interest into enquiries."
  },
  {
    title: "What Kardengey publishes",
    body: "Kardengey Insights covers practical topics connected to the studio's work: website planning and development, SEO, paid acquisition, analytics, branding and useful technology. Articles are written to explain decisions, processes, trade-offs and ways to evaluate results. The publisher is Kardengey; individual authors or contributors are identified where applicable."
  },
  {
    title: "How we approach research and examples",
    body: "We aim to explain the reasoning behind recommendations and distinguish general guidance from assumptions. Worked numbers and scenarios are illustrative unless a page explicitly identifies a verifiable source or documented case. They are not customer results, guarantees or universal industry benchmarks. Where advice depends on a platform, market or date, readers should verify current requirements before acting."
  },
  {
    title: "How we handle tools and calculations",
    body: "Our calculators use the inputs entered by the visitor and display estimates based on the formulas explained on the relevant page. They are decision-support tools, not financial forecasts or substitutes for accounting, legal or professional advice. Results can be incomplete when costs, refunds, margins, attribution or other relevant variables are not included."
  },
  {
    title: "How content is reviewed and corrected",
    body: "We review content when we identify an error, a material change in a platform or process, or a problem with a tool calculation. Updates are made to improve accuracy and usefulness; a publication date alone does not mean every detail has been independently revalidated. Readers can report a specific issue by emailing us with the page URL and the correction or source they recommend."
  },
  {
    title: "Contact the publisher",
    body: "For editorial corrections, questions about an article or business enquiries, contact Kardengey at kardengey@gmail.com. You can also use the contact section on our website. Please do not send passwords, payment information or sensitive personal data through ordinary email."
  }
];

export default function AboutEditorialStandards() {
  return (
    <>
      <SEO
        title="About Kardengey | Publisher, Founder & Editorial Standards"
        description="Meet Kardengey founder Umang Pathak, learn about the studio's digital experience, what Kardengey Insights covers, and how we research, review and correct content."
        canonical="https://kardengey.com/about-editorial-standards"
      />
      <main className="min-h-screen bg-[#050505] px-[6vw] pb-24 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-5xl">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition hover:text-white">← kardengey</Link>
          <p className="mt-16 text-[10px] uppercase tracking-[0.4em] text-blue-500">About / Publisher information</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
            Built on<br /><span className="text-neutral-600">practical work.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            Kardengey is a founder-led digital growth studio working across websites, search, performance marketing, branding and practical technology. This page explains who runs the studio, what we publish and the standards we aim to follow.
          </p>

          <section className="mt-12 grid gap-4 border-y border-white/10 py-8 sm:grid-cols-3">
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Publisher</p><p className="mt-2 text-lg font-semibold">Kardengey</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Founder</p><p className="mt-2 text-lg font-semibold">Umang Pathak</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Editorial contact</p><a className="mt-2 inline-block break-all text-lg underline decoration-blue-500 underline-offset-4" href="mailto:kardengey@gmail.com">kardengey@gmail.com</a></div>
          </section>

          <section className="mt-10 border-b border-white/10 py-8 md:py-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">Founder</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Umang Pathak</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-400 md:text-base md:leading-8">
              Umang's work has focused on building and improving websites and digital experiences. His practical background includes WordPress development, React-based interfaces, website implementation and digital marketing. He founded Kardengey to bring development, creative execution and growth strategy together in one studio.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400 md:text-base md:leading-8">
              The studio's content is informed by the same practical focus: explain what a business owner needs to consider, show how a process can be approached, and make limitations and assumptions clear. Kardengey does not claim that every article is independently reviewed by an external specialist.
            </p>
          </section>

          <div className="mt-8">
            {principles.slice(1).map((item, index) => (
              <section key={item.title} className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10 md:py-10">
                <div><p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">{item.title}</h2></div>
                <p className="max-w-3xl text-sm leading-7 text-neutral-400 md:text-base md:leading-8">{item.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <h2 className="text-2xl font-bold">Explore Kardengey</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400">Browse practical articles, review the services we offer, or use our free marketing calculators with your own business figures.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/insights" className="rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-blue-500 hover:text-white">Browse Insights ↗</Link>
              <Link to="/services" className="rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-blue-500">Our services ↗</Link>
              <Link to="/tools/marketing-tools" className="rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-blue-500">Free marketing tools ↗</Link>
              <Link to="/privacy-policy" className="rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-blue-500">Privacy policy ↗</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
