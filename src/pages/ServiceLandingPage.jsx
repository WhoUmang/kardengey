import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import serviceLandingPages from "../data/serviceLandingPages";

export default function ServiceLandingPage({ pageKey }) {
  const page = serviceLandingPages.find((item) => item.key === pageKey);

  if (!page) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <p className="text-sm text-neutral-400">This service page is unavailable.</p>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={page.metaTitle.replace(/ — Kardengey$/, "")}
        description={page.description}
        canonical={`https://kardengey.com${page.path}`}
      />
      <main className="min-h-screen bg-[#050505] px-[6vw] pb-24 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition-colors hover:text-white">← kardengey</Link>
          <p className="mt-16 text-[10px] uppercase tracking-[0.4em] text-blue-500">{page.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">{page.title}</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-300 md:text-xl">{page.intro}</p>

          <div className="mt-12 grid gap-4 border-y border-white/10 py-8 md:grid-cols-[0.35fr_1fr]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Who this is for</p>
            <p className="max-w-3xl text-sm leading-7 text-neutral-400 md:text-base">{page.audience}</p>
          </div>

          <div className="mt-8">
            {page.sections.map((section, index) => (
              <section key={section.heading} className="grid gap-5 border-b border-white/10 py-10 md:grid-cols-[0.7fr_1.3fr] md:gap-12 md:py-14">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">0{index + 1} / Guide</p>
                  <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">{section.heading}</h2>
                </div>
                <div className="space-y-5">
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-neutral-400 md:text-base md:leading-8">{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">How we work</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">A clear process, before work begins.</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {page.process.map((step, index) => (
                <li key={step} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <span className="text-xs font-semibold tracking-[0.2em] text-blue-500">0{index + 1}</span>
                  <p className="text-sm leading-7 text-neutral-300">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 border-t border-white/10 pt-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">Common questions</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Before you get started.</h2>
            <div className="mt-8 divide-y divide-white/10">
              {page.faqs.map(([question, answer]) => (
                <article key={question} className="py-6">
                  <h3 className="text-lg font-semibold text-white">{question}</h3>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-neutral-400 md:text-base">{answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-3xl border border-blue-500/30 bg-blue-500/[0.06] p-8 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">Discuss your project</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase leading-tight tracking-[-0.05em] md:text-5xl">Tell us what needs to move forward.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">Share your business goal, current starting point and the support you are looking for. We will review the scope before proposing the next step.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-500">Discuss a project <span aria-hidden="true">↗</span></Link>
          </section>

          <section className="mt-14">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Explore more</h2>
            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {page.related.map((item) => <Link key={item.href} to={item.href} className="text-sm text-blue-300 transition-colors hover:text-white">{item.label} ↗</Link>)}
              <Link to="/services" className="text-sm text-blue-300 transition-colors hover:text-white">All services ↗</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
