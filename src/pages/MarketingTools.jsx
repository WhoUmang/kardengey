import { useMemo, useState } from "react";
import SEO from "../components/SEO";

const money = (value) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);
const number = (value) => Math.max(0, Number(value) || 0);

function Field({ label, value, onChange, prefix = "" }) {
  return <label className="block"><span className="mb-2 block text-xs font-medium text-neutral-400">{label}</span><div className="flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4"><span className="text-neutral-500">{prefix}</span><input type="number" min="0" value={value} onChange={(event) => onChange(event.target.value)} className="w-full bg-transparent py-3 pl-2 text-white outline-none" /></div></label>;
}

function Result({ label, value, note }) {
  return <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4"><p className="text-xs text-neutral-500">{label}</p><p className="mt-2 text-2xl font-semibold text-white">{value}</p>{note && <p className="mt-1 text-xs text-neutral-500">{note}</p>}</div>;
}

export default function MarketingTools() {
  const [spend, setSpend] = useState("15000");
  const [leads, setLeads] = useState("100");
  const [reached, setReached] = useState("60");
  const [qualified, setQualified] = useState("24");
  const [customers, setCustomers] = useState("3");
  const [otherCosts, setOtherCosts] = useState("5000");
  const [revenue, setRevenue] = useState("45000");
  const [margin, setMargin] = useState("50");
  const lead = useMemo(() => {
    const s=number(spend), l=number(leads), r=number(reached), q=number(qualified), c=number(customers);
    const total=s+number(otherCosts), rev=number(revenue), contribution=rev*Math.min(100,number(margin))/100;
    return {cpl:l?s/l:0,contact:l?r/l*100:0,cpq:q?s/q:0,qualifiedRate:l?q/l*100:0,cac:c?total/c:0,mediaCac:c?s/c:0,roi:total?(contribution-total)/total*100:0,roas:s?rev/s:0};
  },[spend,leads,reached,qualified,customers,otherCosts,revenue,margin]);
  return <>
    <SEO title="Free Marketing Tools: Lead Quality & CAC Calculator" description="Use Kardengey's free calculators to understand lead quality, cost per qualified lead, customer acquisition cost, ROAS and estimated marketing ROI." canonical="https://kardengey.com/tools/marketing-tools" />
    <main className="min-h-screen bg-[#050505] px-[6vw] pb-24 pt-32 text-white md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="text-[10px] uppercase tracking-[0.35em] text-blue-500">Kardengey / Free business tools</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">Measure what<br/><span className="text-neutral-500">moves business.</span></h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-400">Two practical worksheets for small businesses. Enter your own campaign numbers to understand lead quality and acquisition economics. Calculations are estimates, not forecasts or industry benchmarks.</p>
        <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-9">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Tool 01 / Lead quality calculator</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">Where are your enquiries dropping?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">Enter counts from the same lead cohort. A raw enquiry, a reached contact and a qualified lead are not interchangeable.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Ad spend (₹)" value={spend} onChange={setSpend} prefix="₹"/>
            <Field label="Total enquiries" value={leads} onChange={setLeads}/>
            <Field label="Contacts reached" value={reached} onChange={setReached}/>
            <Field label="Qualified leads" value={qualified} onChange={setQualified}/>
            <Field label="New customers" value={customers} onChange={setCustomers}/>
            <Field label="Other acquisition costs (₹)" value={otherCosts} onChange={setOtherCosts} prefix="₹"/>
            <Field label="Collected revenue (₹)" value={revenue} onChange={setRevenue} prefix="₹"/>
            <Field label="Gross margin (%)" value={margin} onChange={setMargin}/>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Result label="Cost per enquiry" value={money(lead.cpl)}/>
            <Result label="Contact rate" value={lead.contact.toFixed(1)+"%"}/>
            <Result label="Qualification rate" value={lead.qualifiedRate.toFixed(1)+"%"}/>
            <Result label="Cost per qualified lead" value={money(lead.cpq)}/>
            <Result label="Media-only CAC" value={money(lead.mediaCac)}/>
            <Result label="Blended CAC (entered costs)" value={money(lead.cac)}/>
            <Result label="Revenue / ad spend" value={lead.roas.toFixed(2)+"×"}/>
            <Result label="Estimated ROI after gross margin" value={lead.roi.toFixed(1)+"%"}/>
          </div>
          <p className="mt-5 text-xs leading-6 text-neutral-500">The ROI estimate uses collected revenue × gross margin, less ad spend and entered other acquisition costs. It excludes fixed overhead and any costs you have not entered. If counts refer to different date cohorts, the results may be misleading.</p>
        </section>
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-9">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">Tool 02 / Acquisition decision worksheet</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">How to interpret the numbers</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article><h3 className="font-semibold">If contact rate is low</h3><p className="mt-2 text-sm leading-7 text-neutral-400">Check invalid details, response timing, missed calls, form friction and whether the creative sets accurate expectations.</p></article>
            <article><h3 className="font-semibold">If qualification rate is low</h3><p className="mt-2 text-sm leading-7 text-neutral-400">Review audience fit, location, offer clarity, qualification criteria and the gap between the ad promise and actual price or service.</p></article>
            <article><h3 className="font-semibold">If qualified leads do not become customers</h3><p className="mt-2 text-sm leading-7 text-neutral-400">Inspect sales response, trust, quotation clarity, appointment availability, objections and follow-up ownership.</p></article>
            <article><h3 className="font-semibold">If CAC exceeds contribution</h3><p className="mt-2 text-sm leading-7 text-neutral-400">Revisit pricing, margin, fulfilment cost, repeat purchase evidence and acquisition channels before increasing spend.</p></article>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="font-semibold">Keep the definitions consistent</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-400">
              <li>Cost per enquiry = media spend ÷ enquiries.</li>
              <li>Cost per qualified lead = media spend ÷ qualified leads.</li>
              <li>Media-only CAC = media spend ÷ new customers.</li>
              <li>Blended CAC = entered acquisition costs ÷ new customers.</li>
              <li>Revenue-to-ad-spend ratio = collected revenue ÷ media spend; it is not profit.</li>
            </ul>
          </div>
        </section>
        <section className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-6 md:p-9">
          <h2 className="text-2xl font-bold">Use the full guides with your results</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-blue-300">
            <a className="hover:text-white" href="/insights/meta-ads-leads-not-customers-diagnosis">Why Meta Ads generate leads but not customers ↗</a>
            <a className="hover:text-white" href="/insights/calculate-real-customer-acquisition-cost-india">How to calculate real customer acquisition cost ↗</a>
            <a className="hover:text-white" href="/insights/small-business-google-meta-ads-budget-india">How to set a Google and Meta Ads budget ↗</a>
            <a className="hover:text-white" href="/insights/how-to-track-whatsapp-leads-small-business-india">How to track WhatsApp leads ↗</a>
          </div>
        </section>
      </div>
    </main>
  </>;
}
