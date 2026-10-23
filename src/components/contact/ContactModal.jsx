import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "Website / Technology",
  budget: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-blue-500";

function trackAnalyticsEvent(eventName, parameters = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...parameters });
}

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const openModal = (event) => {
      if (event?.detail?.service) {
        setForm((current) => ({ ...current, service: event.detail.service }));
      }
      setError("");
      trackAnalyticsEvent("contact_form_open");
      setOpen(true);
    };
    window.addEventListener("kardengey:open-contact", openModal);
    return () => window.removeEventListener("kardengey:open-contact", openModal);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape" && status !== "sending") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, status]);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status !== "idle") setStatus("idle");
    setError("");
  };

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send your enquiry.");
      trackAnalyticsEvent("generate_lead", {
        service: form.service,
        budget: form.budget || "prefer_to_discuss",
      });
      setStatus("success");
    } catch {
      setStatus("error");
      setError("We couldn't send your enquiry. Please try again or contact us on WhatsApp.");
    }
  };

  const close = () => {
    if (status === "sending") return;
    setOpen(false);
    window.setTimeout(() => {
      setForm(initialForm);
      setStatus("idle");
      setError("");
    }, 200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#090b10] p-6 text-white shadow-2xl sm:p-9"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <button
              type="button"
              onClick={close}
              disabled={status === "sending"}
              aria-label="Close enquiry form"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-neutral-400 transition hover:border-white/30 hover:text-white disabled:opacity-40"
            >
              ×
            </button>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">Kardengey / Start a project</p>
            <h2 id="contact-modal-title" className="mt-4 pr-10 text-3xl font-black uppercase leading-tight tracking-[-0.05em] sm:text-4xl">
              {status === "success" ? "Enquiry received." : "Tell us what you're building."}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-400">
              {status === "success"
                ? "Thanks for reaching out. Your enquiry has been sent to Kardengey."
                : "Share a few details and we'll get back to you about the next steps."}
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.07] p-6">
                <p className="text-sm text-neutral-200">Your message was submitted successfully.</p>
                <button type="button" onClick={close} className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:bg-blue-500">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Name *
                    <input className={fieldClass + " mt-2 normal-case tracking-normal"} name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" required />
                  </label>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Email *
                    <input className={fieldClass + " mt-2 normal-case tracking-normal"} name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email" required />
                  </label>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Company / brand
                    <input className={fieldClass + " mt-2 normal-case tracking-normal"} name="company" value={form.company} onChange={update} placeholder="Company name" autoComplete="organization" />
                  </label>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Phone / WhatsApp
                    <input className={fieldClass + " mt-2 normal-case tracking-normal"} name="phone" type="tel" value={form.phone} onChange={update} placeholder="+91" autoComplete="tel" />
                  </label>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Service *
                    <select className={fieldClass + " mt-2 [color-scheme:dark]"} name="service" value={form.service} onChange={update} required>
                      <option className="bg-[#171b22] text-white">Branding</option>
                      <option className="bg-[#171b22] text-white">Website / Technology</option>
                      <option className="bg-[#171b22] text-white">Digital Marketing</option>
                      <option className="bg-[#171b22] text-white">SEO</option>
                      <option className="bg-[#171b22] text-white">AI / Automation</option>
                      <option className="bg-[#171b22] text-white">Something else</option>
                    </select>
                  </label>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Approx. budget
                    <select className={fieldClass + " mt-2 [color-scheme:dark]"} name="budget" value={form.budget} onChange={update}>
                      <option className="bg-[#171b22] text-white" value="">Prefer to discuss</option>
                      <option className="bg-[#171b22] text-white">Under ₹25K</option>
                      <option className="bg-[#171b22] text-white">₹25K – ₹50K</option>
                      <option className="bg-[#171b22] text-white">₹50K – ₹1L</option>
                      <option className="bg-[#171b22] text-white">₹1L – ₹3L</option>
                      <option className="bg-[#171b22] text-white">₹3L+</option>
                    </select>
                  </label>
                </div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  Tell us about your project *
                  <textarea className={fieldClass + " mt-2 min-h-28 resize-y normal-case tracking-normal"} name="message" value={form.message} onChange={update} placeholder="What do you need help with?" required rows={4} />
                </label>
                {error && <p role="alert" className="text-sm leading-6 text-red-400">{error}</p>}
                <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-neutral-500">Your enquiry goes directly to Kardengey.</p>
                  <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-blue-500 disabled:cursor-wait disabled:opacity-60">
                    {status === "sending" ? "Sending enquiry…" : "Send enquiry ↗"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
