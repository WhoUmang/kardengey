import { motion } from "framer-motion";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send enquiry.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090909] px-6 py-16 sm:px-8 md:px-16 md:py-28">

          {/* Blue ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.12] blur-[140px]" />

          {/* Technical grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-5xl">

            {/* Header */}
            <div className="text-center">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.45em] text-blue-500"
              >
                Start something
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]"
              >
                LET'S MAKE
                <br />
                <span className="text-neutral-600">
                  SOMETHING MOVE.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="mx-auto mt-8 max-w-xl text-sm leading-7 text-neutral-500 md:text-base"
              >
                Have a brand to build, a website to launch or a growth problem
                to solve? Let's talk.
              </motion.p>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/7666459165"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Kardengey on WhatsApp"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="group relative mx-auto mt-10 inline-flex h-16 items-center overflow-hidden rounded-full bg-white px-8 text-sm font-bold !text-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(37,99,235,0.35)]"
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-1/2
                    h-12
                    w-12
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-0
                    rounded-full
                    bg-blue-600
                    opacity-0
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.76,0,0.24,1)]
                    group-hover:scale-[7]
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-4
                    !text-black
                    transition-colors
                    duration-300
                    group-hover:!text-white
                  "
                >
                  <span className="!text-black transition-colors duration-300 group-hover:!text-white">
                    Let's talk
                  </span>

                  <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden">
                    <span
                      className="
                        absolute
                        !text-black
                        transition-all
                        duration-400
                        group-hover:-translate-y-6
                        group-hover:translate-x-6
                        group-hover:!text-white
                      "
                    >
                      ↗
                    </span>

                    <span
                      className="
                        absolute
                        -translate-x-6
                        translate-y-6
                        !text-white
                        transition-all
                        duration-400
                        group-hover:translate-x-0
                        group-hover:translate-y-0
                      "
                    >
                      →
                    </span>
                  </span>
                </span>

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-blue-500
                    transition-all
                    duration-500
                    group-hover:w-8
                  "
                />
              </motion.a>
            </div>

            {/* Divider */}
            <div className="my-16 flex items-center gap-5">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-700">
                OR SEND AN ENQUIRY
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="grid gap-5 md:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-neutral-600"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full border-b border-white/10 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-neutral-700 transition-colors focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-neutral-600"
                  >
                    Work email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full border-b border-white/10 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-neutral-700 transition-colors focus:border-blue-500"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-neutral-600"
                  >
                    Company / Brand
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full border-b border-white/10 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-neutral-700 transition-colors focus:border-blue-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-neutral-600"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full border-b border-white/10 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-neutral-700 transition-colors focus:border-blue-500"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-neutral-600"
                  >
                    What can we help with? *
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-white/10 bg-[#090909] px-0 py-4 text-sm text-white outline-none transition-colors focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Branding">Branding</option>
                    <option value="Website / Technology">
                      Website / Technology
                    </option>
                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>
                    <option value="SEO">SEO</option>
                    <option value="AI / Automation">
                      AI / Automation
                    </option>
                    <option value="Something else">
                      Something else
                    </option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-neutral-600"
                  >
                    Approximate budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full border-b border-white/10 bg-[#090909] px-0 py-4 text-sm text-white outline-none transition-colors focus:border-blue-500"
                  >
                    <option value="">
                      Prefer to discuss
                    </option>
                    <option value="₹50K – ₹1L">
                      ₹50K – ₹1L
                    </option>
                    <option value="₹1L – ₹3L">
                      ₹1L – ₹3L
                    </option>
                    <option value="₹3L – ₹5L">
                      ₹3L – ₹5L
                    </option>
                    <option value="₹5L+">
                      ₹5L+
                    </option>
                  </select>
                </div>

                {/* Project details */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-neutral-600"
                  >
                    Tell us about your project *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us what you're building, what you're trying to solve, or where you need help."
                    className="w-full resize-none border-b border-white/10 bg-transparent px-0 py-4 text-sm leading-7 text-white outline-none placeholder:text-neutral-700 transition-colors focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Submit area */}
              <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

                <div className="max-w-md">
                  {status === "success" && (
                    <p className="text-xs leading-6 text-blue-500">
                      Thanks. We've received your enquiry and will be in touch
                      shortly.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-xs leading-6 text-red-400">
                      Something went wrong while sending your enquiry. Please
                      try again or contact us on WhatsApp.
                    </p>
                  )}

                  {status === "idle" && (
                    <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-700">
                      Your enquiry goes directly to Kardengey.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative inline-flex h-14 items-center gap-5 overflow-hidden rounded-full bg-white px-7 text-xs font-bold uppercase tracking-[0.2em] !text-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(37,99,235,0.35)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-1/2
                      h-12
                      w-12
                      -translate-x-1/2
                      -translate-y-1/2
                      scale-0
                      rounded-full
                      bg-blue-600
                      opacity-0
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.76,0,0.24,1)]
                      group-hover:scale-[7]
                      group-hover:opacity-100
                    "
                  />

                  <span className="relative z-10 !text-black transition-colors duration-300 group-hover:!text-white">
                    {status === "sending"
                      ? "Sending..."
                      : "Send enquiry"}
                  </span>

                  <span className="relative z-10 text-lg !text-black transition-colors duration-300 group-hover:!text-white">
                    →
                  </span>
                </button>
              </div>
            </motion.form>

            {/* Contact details */}
            <div
              className="
                mt-16
                flex
                flex-col
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.25em]
                text-neutral-600
                md:flex-row
                md:justify-center
                md:gap-8
              "
            >
              <a
                href="mailto:kardengey@gmail.com"
                className="transition-colors duration-300 hover:text-white"
              >
                kardengey@gmail.com
              </a>

              <span className="hidden text-neutral-800 md:block">
                /
              </span>

              <a
                href="https://wa.me/7666459165"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                WhatsApp
              </a>

              <span className="hidden text-neutral-800 md:block">
                /
              </span>

              <span>
                India / Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}