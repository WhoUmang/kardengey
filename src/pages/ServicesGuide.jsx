import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const services = [
  {
    title: "Website design & development",
    problem: "A website should help a visitor understand the offer, assess credibility and take the next step. A visually polished page is not enough if the message, navigation or enquiry path is unclear.",
    work: ["Page and navigation planning around visitor intent", "Responsive UI design and development", "Contact forms and WhatsApp enquiry paths", "Core technical checks before launch"],
    measure: "Track qualified enquiries, form completion, WhatsApp clicks, page engagement and the performance of important landing pages."
  },
  {
    title: "Search engine optimisation",
    problem: "SEO is not a one-time metadata exercise. It combines crawlability, useful information, site structure, search intent and a business that deserves to be found.",
    work: ["Technical crawl and indexability review", "Keyword and search-intent mapping", "Page structure, internal links and on-page improvements", "Content briefs grounded in real customer questions"],
    measure: "Review impressions, clicks, query relevance, landing-page engagement and enquiries. Rankings fluctuate and are never guaranteed."
  },
  {
    title: "Performance marketing",
    problem: "Ad platforms can generate clicks without generating profitable customers. Campaign decisions need to connect spend with lead quality and sales outcomes.",
    work: ["Offer, audience and funnel review", "Campaign structure and creative testing plan", "Conversion-event and UTM measurement setup", "Regular review of spend, lead quality and next tests"],
    measure: "Separate raw leads from qualified leads. Compare cost per qualified lead, customer acquisition cost and contribution after marketing—not just clicks."
  },
  {
    title: "Brand identity & creative",
    problem: "Inconsistent visuals and unclear positioning make it harder for customers to recognise a business and understand why its offer is relevant.",
    work: ["Brand discovery and positioning questions", "Logo and visual identity direction", "Typography, colour and usage guidance", "Campaign and social creative systems"],
    measure: "Check consistency across real customer touchpoints and whether the identity communicates the intended offer to the intended audience."
  },
  {
    title: "Packaging design",
    problem: "Packaging has to work in the real world: on a shelf, in transit, in a photograph and in the customer's hands.",
    work: ["Product, audience and competitor context", "Information hierarchy and visual direction", "Artwork preparation for the chosen print process", "Mock-up review and production handoff checks"],
    measure: "Validate legibility, required product information, material constraints and print proofs with the production partner before ordering."
  },
  {
    title: "AI & workflow automation",
    problem: "Automation is useful when it removes a defined repetitive task. Adding AI to a broken process can simply make the same problem happen faster.",
    work: ["Map the existing workflow and handoffs", "Identify repetitive, rules-based steps", "Prototype a bounded automation with human review", "Document failure handling and ownership"],
    measure: "Compare time per task, error rate, completion rate and the amount of manual review before and after the change."
  }
];

const questions = [
  ["How much does a project cost?", "Cost depends on the scope, number of pages or deliverables, integrations, content readiness and ongoing support. We first clarify what needs to be done, then provide a written scope and price. A generic starting price would be misleading without those details."],
  ["How long does a project take?", "Timelines depend on scope, approvals, access to assets and how quickly feedback is provided. We agree milestones before work begins and flag dependencies rather than promise the same turnaround for every project."],
  ["Can you guarantee Google rankings or ad results?", "No. Search rankings, ad costs and sales depend on competition, the offer, budget, customer behaviour, platform systems and execution. We can define measurable work, report what the data shows and make informed improvements; we cannot guarantee a particular ranking or revenue."],
  ["What should I prepare before contacting you?", "A short description of your business, the product or service you want to grow, the audience you serve, your website or social profiles, the main problem you want solved and any deadline or budget constraint. You do not need a polished brief to start a conversation."]
];

export default function ServicesGuide() {
  return (
    <>
      <SEO
        title="Digital Marketing, SEO & Website Services"
        description="Explore how Kardengey approaches website development, SEO, performance marketing, branding, packaging design and practical AI automation."
        canonical="https://kardengey.com/services"
      />
      <main className="min-h-screen bg-[#050505] px-[6vw] pb-24 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 hover:text-white">← kardengey</Link>
          <p className="mt-16 text-[10px] uppercase tracking-[0.4em] text-blue-500">Services / How we work</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">Digital work.<br /><span className="text-neutral-600">Clear outcomes.</span></h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">Kardengey is a digital growth studio working across websites, search, paid acquisition, brand identity, packaging and practical automation. This page explains what each service involves, what a sensible engagement should measure and what information helps us scope the work.</p>
          <div className="mt-12 grid gap-4 border-y border-white/10 py-8 sm:grid-cols-3">
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Start with</p><p className="mt-2 text-lg font-semibold">The business problem</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Plan around</p><p className="mt-2 text-lg font-semibold">Scope & constraints</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">Review using</p><p className="mt-2 text-lg font-semibold">Relevant evidence</p></div>
          </div>
          <section className="mt-12">
            {services.map((service, index) => (
              <article key={service.title} className="border-b border-white/10 py-10 md:py-14">
                <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
                  <div><p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">0{index + 1} / Service</p><h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{service.title}</h2></div>
                  <div>
                    <p className="text-sm leading-7 text-neutral-300 md:text-base">{service.problem}</p>
                    <h3 className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">What the work can include</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">{service.work.map((item) => <li key={item} className="border-l border-blue-500/60 pl-4 text-sm leading-6 text-neutral-400">{item}</li>)}</ul>
                    <h3 className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">What to measure or validate</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-400">{service.measure}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <section className="mt-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">Before a project begins</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">A practical way to scope the work.</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["01", "Understand the goal", "Define the business outcome and the audience. More traffic is not automatically the goal; the right enquiries or sales may matter more."],
                ["02", "Review the starting point", "Look at the current website, analytics, campaigns, brand assets, customer journey and any known constraints."],
                ["03", "Agree deliverables", "Document what is included, what is excluded, who supplies content or approvals, and what access is needed."],
                ["04", "Implement and learn", "Deliver the agreed work, check it before launch and use available data to decide what should be improved next."]
              ].map(([number, title, body]) => <li key={number} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"><p className="text-xs text-blue-500">{number}</p><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-neutral-400">{body}</p></li>)}
            </ol>
          </section>
          <section className="mt-16 border-t border-white/10 pt-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">Common questions</p>
            <div className="mt-6">{questions.map(([question, answer]) => <article key={question} className="border-b border-white/10 py-6"><h3 className="text-lg font-semibold">{question}</h3><p className="mt-3 max-w-4xl text-sm leading-7 text-neutral-400">{answer}</p></article>)}</div>
          </section>
          <section className="mt-16 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-7 md:p-10">
            <h2 className="text-2xl font-bold md:text-3xl">Have a specific business problem?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400">Share what you are trying to improve, what you have already tried and any constraints. We can use that information to decide whether the work is a good fit and define a realistic scope.</p>
            <a href="mailto:kardengey@gmail.com?subject=Project%20enquiry%20for%20Kardengey" className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-blue-500">Discuss a project ↗</a>
          </section>
          <p className="mt-10 text-xs leading-6 text-neutral-600">Service descriptions are general explanations, not a promise of specific results. Final deliverables, fees and timelines are agreed in writing for each project.</p>
        </div>
      </main>
    </>
  );
}
