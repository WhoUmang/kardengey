import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const DEFAULTS = {
  adSpend: 50000,
  otherMarketingCost: 10000,
  leads: 250,
  customers: 20,
  revenuePerCustomer: 15000,
  grossMarginPercent: 60,
};

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const Metric = ({ label, value, note }) => (
  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
    <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">{label}</p>
    <p className="mt-3 text-2xl font-semibold tracking-tight text-white">{value}</p>
    {note && <p className="mt-2 text-xs leading-5 text-neutral-500">{note}</p>}
  </div>
);

export default function MarketingROICalculator() {
  const [values, setValues] = useState(DEFAULTS);

  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Marketing ROI Calculator",
      url: "https://kardengey.com/tools/marketing-roi-calculator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Free marketing ROI calculator for estimating ROI, ROAS, cost per lead and customer acquisition cost.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      provider: { "@type": "Organization", name: "kardengey", url: "https://kardengey.com" },
    };
    let script = document.head.querySelector('script[data-seo="marketing-roi-calculator"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "marketing-roi-calculator";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
    return () => script?.remove();
  }, []);

  const update = (key) => (event) => {
    const next = Number(event.target.value);
    setValues((current) => ({
      ...current,
      [key]: Number.isFinite(next) && next >= 0 ? next : 0,
    }));
  };

  const results = useMemo(() => {
    const totalMarketingCost = values.adSpend + values.otherMarketingCost;
    const revenue = values.customers * values.revenuePerCustomer;
    const estimatedContribution = revenue * (values.grossMarginPercent / 100);
    const profit = estimatedContribution - totalMarketingCost;
    const roi = totalMarketingCost > 0 ? (profit / totalMarketingCost) * 100 : 0;
    const roas = values.adSpend > 0 ? revenue / values.adSpend : 0;
    const cpl = values.leads > 0 ? values.adSpend / values.leads : 0;
    const cac = values.customers > 0 ? totalMarketingCost / values.customers : 0;
    const leadToCustomer = values.leads > 0 ? (values.customers / values.leads) * 100 : 0;

    return { totalMarketingCost, revenue, estimatedContribution, profit, roi, roas, cpl, cac, leadToCustomer };
  }, [values]);

  const reset = () => setValues(DEFAULTS);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <SEO
        title="Marketing ROI Calculator | Free ROI & ROAS Tool"
        description="Use this free marketing ROI calculator to estimate ROI, ROAS, cost per lead, CAC and lead-to-customer conversion for your marketing campaigns."
        canonical="https://kardengey.com/tools/marketing-roi-calculator"
      />
      <section className="relative overflow-hidden px-[6vw] pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-blue-400">Free Marketing Tool</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.92] tracking-[-0.055em]">
            Marketing ROI
            <br />
            Calculator.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-400 lg:text-lg">
            Calculate marketing ROI, ROAS, cost per lead and customer acquisition cost before you increase your budget. Use your ad spend, marketing costs, leads, customers and average revenue to estimate campaign performance.
          </p>
        </div>
      </section>

      <section className="border-t border-white/[0.07] px-[6vw] py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">Marketing ROI explained</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">How to calculate marketing ROI</h2>
          <div className="mt-6 max-w-4xl space-y-5 text-sm leading-7 text-neutral-400">
            <p>For a more useful profit-aware estimate, this calculator applies your gross margin to revenue to estimate contribution before marketing, then subtracts total marketing cost. Estimated marketing ROI = (estimated contribution − total marketing cost) ÷ total marketing cost × 100. ROAS remains revenue divided by ad spend.</p>
            <p>ROAS measures revenue generated for each rupee spent on advertising. CAC estimates the total marketing cost required to acquire one customer, while cost per lead measures the advertising cost required to generate a lead.</p>
            <p>These metrics work best together. A campaign can produce inexpensive leads but still have a poor return if those leads rarely become customers. Use the calculator above to test different budget and conversion assumptions before scaling.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] px-[6vw] py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">Common questions</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Marketing ROI calculator FAQs</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div><h3 className="font-semibold text-white">What is a good marketing ROI?</h3><p className="mt-2 text-sm leading-7 text-neutral-500">There is no universal target. Compare ROI with your margins, customer value, sales cycle and the full cost of acquiring customers.</p></div>
            <div><h3 className="font-semibold text-white">What is the difference between ROI and ROAS?</h3><p className="mt-2 text-sm leading-7 text-neutral-500">ROAS focuses on revenue generated from advertising spend. ROI can include broader marketing costs, making it a wider measure of marketing efficiency.</p></div>
            <div><h3 className="font-semibold text-white">How do I calculate customer acquisition cost?</h3><p className="mt-2 text-sm leading-7 text-neutral-500">Divide your total marketing cost by the number of customers acquired during the same measurement period.</p></div>
            <div><h3 className="font-semibold text-white">Can I use this calculator for Indian campaigns?</h3><p className="mt-2 text-sm leading-7 text-neutral-500">Yes. The calculator uses Indian rupee formatting and can be used for Google Ads, Meta Ads, lead generation and other marketing campaigns.</p></div>
          </div>
        </div>
      </section>

      <section className="px-[6vw] pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Your campaign</p>
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Enter your expected numbers. You can change them at any time.
                </p>
              </div>
              <button type="button" onClick={reset} className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition hover:text-white">
                Reset
              </button>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Input label="Ad spend" value={values.adSpend} onChange={update("adSpend")} currency />
              <Input label="Other marketing cost" value={values.otherMarketingCost} onChange={update("otherMarketingCost")} currency />
              <Input label="Expected leads" value={values.leads} onChange={update("leads")} />
              <Input label="Expected customers" value={values.customers} onChange={update("customers")} />
              <Input label="Revenue per customer" value={values.revenuePerCustomer} onChange={update("revenuePerCustomer")} currency />
              <Input label="Gross margin (%)" value={values.grossMarginPercent} onChange={update("grossMarginPercent")} className="sm:col-span-2" />
            </div>

            <div className="mt-7 rounded-2xl border border-blue-500/10 bg-blue-500/[0.04] p-5">
              <p className="text-xs font-medium text-blue-300">Quick interpretation</p>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                A positive estimated ROI means the contribution implied by your gross-margin assumption exceeds the marketing costs entered above.
                For lead-generation campaigns, use the average revenue per converted customer and a realistic gross margin.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Estimated results</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Metric label="Estimated revenue" value={formatINR(results.revenue)} />
              <Metric label="Marketing ROI" value={`${results.roi.toFixed(1)}%`} note="(Estimated contribution − total marketing cost) ÷ total marketing cost" />
              <Metric label="ROAS" value={`${results.roas.toFixed(2)}×`} note="Revenue generated per ₹1 of ad spend" />
              <Metric label="Cost per lead" value={formatINR(results.cpl)} />
              <Metric label="Customer acquisition cost" value={formatINR(results.cac)} />
              <Metric label="Lead → customer" value={`${results.leadToCustomer.toFixed(1)}%`} />
            </div>

            <div className={`mt-4 rounded-2xl border p-5 ${results.profit >= 0 ? "border-emerald-500/20 bg-emerald-500/[0.05]" : "border-red-500/20 bg-red-500/[0.05]"}`}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Estimated contribution after marketing costs</p>
              <p className="mt-2 text-2xl font-semibold text-white">{formatINR(results.profit)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] px-[6vw] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400">How it works</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Know the numbers before you scale.</h2>
          </div>
          <div className="space-y-7 text-sm leading-7 text-neutral-400">
            <div>
              <h3 className="font-semibold text-white">Marketing ROI</h3>
              <p className="mt-1">(Estimated contribution − total marketing cost) ÷ total marketing cost × 100. Estimated contribution is revenue multiplied by your gross-margin percentage.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">ROAS</h3>
              <p className="mt-1">Revenue ÷ ad spend. ROAS looks only at advertising spend, while ROI also accounts for other marketing costs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Customer acquisition cost</h3>
              <p className="mt-1">Total marketing cost ÷ customers acquired. Compare this with customer value to understand whether acquisition is sustainable.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Use estimates carefully</h3>
              <p className="mt-1">This calculator is a planning tool, not a forecast. ROI depends on the gross-margin assumption you enter and does not include fixed overhead or all possible sales costs. ROAS uses revenue and is not the same as profit or ROI. Real results depend on your channel, audience, offer, conversion rate, margins and attribution model.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[6vw] pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">More from kardengey</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight">Turn the calculation into a better marketing decision.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-500">
            Read our latest thinking on digital marketing costs, websites, SEO and growth strategy.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/insights/how-to-calculate-marketing-roi" className="inline-flex rounded-full border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-blue-500 hover:text-blue-400">
              Read the ROI guide ↗
            </Link>
            <Link to="/insights" className="inline-flex rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:-translate-y-0.5">
              Explore Insights ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({ label, value, onChange, currency = false, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">{label}</span>
      <div className="mt-2 flex items-center rounded-xl border border-white/[0.09] bg-black/30 focus-within:border-blue-500/50">
        {currency && <span className="pl-4 text-sm text-neutral-600">₹</span>}
        <input type="number" min="0" step="1" inputMode="decimal" value={value} onChange={onChange} className={`w-full bg-transparent ${currency ? "px-3" : "px-4"} py-3 text-sm text-white outline-none`} />
      </div>
    </label>
  );
}
