import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CustomSelect from "./CustomSelect";

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
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }

    if (status === "error") setStatus("idle");
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (form.phone.trim() && !/^[+()\d\s-]{7,20}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone / WhatsApp number.";
    if (!form.service) next.service = "Please select a service.";
    if (!form.message.trim()) next.message = "Please tell us about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("idle");
      return;
    }
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

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
  };

  const fieldClass =
    "w-full border-b border-white/10 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-neutral-700 transition-colors focus:border-blue-500";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090909] px-6 py-16 sm:px-8 md:px-16 md:py-28">
          {/* Ambient glow */}
          <motion.div
            animate={
              status === "sending"
                ? {
                    scale: [1, 1.4, 2],
                    opacity: [0.12, 0.3, 0],
                  }
                : {
                    scale: 1,
                    opacity: 0.12,
                  }
            }
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-[140px]"
          />

          {/* Technical grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Submission pulse */}
          <AnimatePresence>
            {status === "sending" && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0.7 }}
                  animate={{ scale: 8, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute left-1/2 top-[58%] z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500"
                />

                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 1, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="pointer-events-none absolute left-0 right-0 top-1/2 z-30 h-px bg-blue-400 shadow-[0_0_30px_8px_rgba(37,99,235,0.55)]"
                />
              </>
            )}
          </AnimatePresence>

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
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]"
              >
                LET'S MAKE
                <br />
                <span className="text-neutral-600">SOMETHING MOVE.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
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
                transition={{ duration: 0.7, delay: 0.3 }}
                className="group relative mx-auto mt-10 inline-flex h-16 items-center overflow-hidden rounded-full bg-white px-8 text-sm font-bold !text-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(37,99,235,0.35)]"
              >
                <span className="pointer-events-none absolute left-0 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-blue-600 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-[7] group-hover:opacity-100" />

                <span className="relative z-10 flex items-center gap-4 !text-black transition-colors duration-300 group-hover:!text-white">
                  <span className="!text-black transition-colors duration-300 group-hover:!text-white">
                    Let's talk
                  </span>

                  <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden">
                    <span className="absolute !text-black transition-all duration-400 group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:!text-white">
                      ↗
                    </span>
                    <span className="absolute -translate-x-6 translate-y-6 !text-white transition-all duration-400 group-hover:translate-x-0 group-hover:translate-y-0">
                      →
                    </span>
                  </span>
                </span>

                <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-500 group-hover:w-8" />
              </motion.a>
            </div>

            <div className="my-16 flex items-center gap-5">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-700">
                OR SEND AN ENQUIRY
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Form / success state */}
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    filter: "blur(8px)",
                  }}
                  transition={{ duration: 0.45 }}
                  className="text-left"
                >
                  <div className="grid gap-5 md:grid-cols-2">
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
                        className={`${fieldClass} ${errors.name ? "border-red-500" : ""}`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && <p id="name-error" className="mt-2 text-xs text-red-400">{errors.name}</p>}
                    </div>

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
                        className={`${fieldClass} ${errors.email ? "border-red-500" : ""}`}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <p id="email-error" className="mt-2 text-xs text-red-400">{errors.email}</p>}
                    </div>

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
                        className={fieldClass}
                      />
                    </div>

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
                        className={`${fieldClass} ${errors.phone ? "border-red-500" : ""}`}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && <p id="phone-error" className="mt-2 text-xs text-red-400">{errors.phone}</p>}
                    </div>

                    <CustomSelect
                      label="What can we help with? *"
                      placeholder="Select a service"
                      value={form.service}
                      onChange={(value) =>
                        setForm((current) => ({
                          ...current,
                          service: value,
                        }))
                      }
                      options={[
                        "Branding",
                        "Website / Technology",
                        "Digital Marketing",
                        "SEO",
                        "AI / Automation",
                        "Something else",
                      ]}
                    />

                    <CustomSelect
                      label="Approximate budget"
                      placeholder="Prefer to discuss"
                      value={form.budget}
                      onChange={(value) =>
                        setForm((current) => ({
                          ...current,
                          budget: value,
                        }))
                      }
                      options={["₹50K – ₹1L", "₹1L – ₹3L", "₹3L – ₹5L", "₹5L+"]}
                    />

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
                        className={`${fieldClass} resize-none leading-7 ${errors.message ? "border-red-500" : ""}`}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && <p id="message-error" className="mt-2 text-xs text-red-400">{errors.message}</p>}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div className="max-w-md">
                      {status === "error" ? (
                        <p className="text-xs leading-6 text-red-400">
                          Something went wrong while sending your enquiry.
                          Please try again or contact us on WhatsApp.
                        </p>
                      ) : (
                        <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-700">
                          Your enquiry goes directly to Kardengey.
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={status !== "sending" ? { y: -3 } : {}}
                      whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                      className="group relative inline-flex h-14 min-w-[210px] items-center justify-center overflow-hidden rounded-full bg-white px-8 text-xs font-bold uppercase tracking-[0.2em] !text-black shadow-none transition-shadow duration-500 hover:shadow-[0_20px_70px_rgba(37,99,235,0.35)] disabled:cursor-wait disabled:opacity-80"
                    >
                      <motion.span
                        animate={
                          status === "sending"
                            ? { x: ["-150%", "450%"] }
                            : { x: "-150%" }
                        }
                        transition={
                          status === "sending"
                            ? {
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "linear",
                              }
                            : { duration: 0 }
                        }
                        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-blue-500/40 blur-xl"
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute
                          left-0
                          top-1/2
                          h-10
                          w-10
                          -translate-x-1/2
                          -translate-y-1/2
                          scale-0
                          rounded-full
                          bg-blue-600
                          opacity-0
                          transition-all
                          duration-500
                          ease-[cubic-bezier(0.76,0,0.24,1)]
                          group-hover:scale-[8]
                          group-hover:opacity-100
                        "
                      />

                      <span className="relative z-10 flex items-center gap-5">
                        <AnimatePresence mode="wait" initial={false}>
                          {status === "sending" ? (
                            <motion.span
                              key="sending"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="!text-black"
                            >
                              Transmitting...
                            </motion.span>
                          ) : status === "error" ? (
                            <motion.span
                              key="retry"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="!text-black"
                            >
                              Try again
                            </motion.span>
                          ) : (
                            <motion.span
                              key="send"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="!text-black transition-colors duration-300 group-hover:!text-white"
                            >
                              Send enquiry
                            </motion.span>
                          )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait" initial={false}>
                          {status === "sending" ? (
                            <motion.span
                              key="signal"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              className="!text-blue-600"
                            >
                              ●
                            </motion.span>
                          ) : status === "error" ? (
                            <motion.span
                              key="retry-arrow"
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 5 }}
                              className="!text-red-500"
                            >
                              ↻
                            </motion.span>
                          ) : (
                            <motion.span
                              key="arrow"
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 5 }}
                              className="!text-black transition-colors duration-300 group-hover:!text-white"
                            >
                              →
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden text-center"
                >
                  {/* Orbital rings */}
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: 360 }}
                    transition={{
                      scale: { duration: 0.7, ease: "easeOut" },
                      opacity: { duration: 0.4 },
                      rotate: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="absolute h-56 w-56 rounded-full border border-blue-500/20"
                  />

                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="absolute h-36 w-36 rounded-full border border-white/10"
                  />

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.15, 1] }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_80px_rgba(37,99,235,0.45)]"
                  >
                    <span className="text-3xl font-light text-white">✓</span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="relative z-10 mt-10 text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[0.85] tracking-[-0.06em] text-white"
                  >
                    TRANSMISSION
                    <br />
                    <span className="text-neutral-600">SENT.</span>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className="relative z-10 mt-7 max-w-md text-sm leading-7 text-neutral-500"
                  >
                    We've got it. Someone from Kardengey will be in touch
                    shortly.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="relative z-10 mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-blue-500"
                  >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                    Message received
                  </motion.div>

                  <motion.button
                    type="button"
                    onClick={resetForm}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="relative z-10 mt-8 text-[9px] uppercase tracking-[0.25em] text-neutral-700 transition-colors hover:text-white"
                  >
                    Send another enquiry →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact details */}
            <div className="mt-16 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-600 md:flex-row md:justify-center md:gap-8">
              <a
                href="mailto:kardengey@gmail.com"
                className="transition-colors duration-300 hover:text-white"
              >
                kardengey@gmail.com
              </a>

              <span className="hidden text-neutral-800 md:block">/</span>

              <a
                href="https://wa.me/7666459165"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                WhatsApp
              </a>

              <span className="hidden text-neutral-800 md:block">/</span>

              <span>India / Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}