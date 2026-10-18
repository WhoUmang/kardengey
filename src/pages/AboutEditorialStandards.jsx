import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const principles = [
  {
    title: "Who creates this content?",
    body: "Kardengey Insights is produced by the Kardengey team as part of a founder-led digital growth studio. Our coverage reflects the work the studio focuses on: digital marketing, websites, search, analytics and practical uses of technology and AI. We identify the publisher clearly rather than implying that every article has been independently reviewed by an outside specialist."
  },
  {
    title: "What the content is for",
    body: "The goal is to help business owners understand options, ask better questions and make more informed decisions. Guides explain concepts and trade-offs; tools help readers test their own assumptions. Content is informational and is not a guarantee of commercial, advertising or search results."
  },
  {
    title: "How we handle examples and numbers",
    body: "Illustrative calculations are labelled as examples, not presented as customer results or industry-wide benchmarks. Pricing varies by provider, scope, geography and timing. Where a figure is an assumption, readers should replace it with their own data. We avoid presenting invented client results, testimonials or case studies as evidence."
  },
  {
    title: "How we review and update pages",
    body: "We review pages when we identify a material error, when a tool's calculation changes, or when guidance becomes outdated. A page's original publication date should not be treated as proof that every detail has been independently revalidated. Where we make a substantive update, we aim to keep the page and its supporting links accurate and useful."
  },
  {
    title: "Corrections and feedback",
    body: "If you find an error, a broken link or an explanation that needs clarification, email kardengey@gmail.com with the page URL and the detail in question. We can review the issue and correct the page when appropriate. Please do not send passwords, payment information or other sensitive personal data by email."
  }
];

export default function AboutEditorialStandards() {
  return (
    <>
      <SEO
        title="About Kardengey Insights & Editorial Standards"
        description="Learn who publishes Kardengey Insights, how examples and marketing calculations are presented, how content is maintained, and how to request a correction."
        canonical="https://kardengey.com/about-editorial-standards"
      />
      <main className="min-h-screen bg-[#050505] px-[6vw] pb-24 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-5xl">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition hover:text-white">← kardengey</Link>
          <p className="mt-16 text-[10px] uppercase tracking-[0.4em] text-blue-500">About / Editorial standards</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
            Useful thinking.<br /><span className="text-neutral-600">Clear standards.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            Kardengey publishes practical material about digital marketing, websites, search, analytics and technology. This page explains who is behind that material, what readers should expect from it, and how to flag an error.
          </p>
          <section className="mt-12 grid gap-4 border-y border-white/10 py-8 sm:grid-cols-3">
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Publisher</p><p className="mt-2 text-lg font-semibold">kardengey</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Editorial contact</p><a className="mt-2 inline-block text-lg underline decoration-blue-500 underline-offset-4" href="mailto:kardengey@gmail.com">kardengey@gmail.com</a></div>
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Focus</p><p className="mt-2 text-lg font-semibold">Digital growth & tools</p></div>
          </section>
          <div className="mt-8">
            {principles.map((item, index) => (
              <section key={item.title} className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10 md:py-10">
                <div><p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">{item.title}</h2></div>
                <p className="max-w-3xl text-sm leading-7 text-neutral-400 md:text-base md:leading-8">{item.body}</p>
              </section>
            ))}
          </div>
          <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <h2 className="text-2xl font-bold">Explore the material</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400">Browse our articles or use the free marketing ROI calculator to work through your own assumptions. The calculator provides estimates; compare them with actual sales, margins and campaign data before making budget decisions.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/insights" className="rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-blue-500 hover:text-white">Browse Insights ↗</Link>
              <Link to="/tools/marketing-roi-calculator" className="rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-blue-500">Open ROI calculator ↗</Link>
              <Link to="/privacy-policy" className="rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:border-blue-500">Privacy policy ↗</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
