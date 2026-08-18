import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Distinctive identities that give businesses a recognizable point of view.",
    keywords: ["Strategy", "Identity", "Visual Systems"],
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "High-performance digital experiences engineered for speed, usability and conversion.",
    keywords: ["Websites", "UX / UI", "Development"],
  },
  {
    number: "03",
    title: "Performance Marketing",
    description:
      "Paid acquisition systems designed around measurable business growth.",
    keywords: ["Meta Ads", "Google Ads", "Growth"],
  },
  {
    number: "04",
    title: "Packaging Design",
    description:
      "Packaging that earns attention, communicates value and stands apart on the shelf.",
    keywords: ["Packaging", "3D", "Print"],
  },
  {
    number: "05",
    title: "SEO",
    description:
      "Technical foundations and content strategies that compound organic visibility.",
    keywords: ["Technical SEO", "Content", "Search"],
  },
  {
    number: "06",
    title: "AI Automation",
    description:
      "Intelligent workflows that remove repetitive work and create faster operating systems.",
    keywords: ["AI", "Automation", "Agents"],
  },
];

function ServiceVisual({ active }) {
  return (
    <div className="relative flex h-full min-h-[460px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[#090909]">

      {/* Ambient glow */}

      <motion.div
        animate={{
          scale: active === 5 ? 1.35 : 1,
          opacity: active === 5 ? 0.28 : 0.12,
        }}
        transition={{ duration: 0.6 }}
        className="absolute h-72 w-72 rounded-full bg-blue-600 blur-[100px]"
      />

      {/* Grid */}

      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Central system */}

      <motion.div
        animate={{
          rotate: active === 5 ? 180 : active * 18,
          scale: active === 5 ? 1.15 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex h-48 w-48 items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full border border-blue-500/30" />

        <div className="absolute inset-4 rounded-full border border-white/10" />

        <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-xl" />

        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/40 bg-[#0c1630] shadow-[0_0_70px_rgba(37,99,235,.25)]">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
            {services[active].number}
          </span>
        </div>

        {/* Orbit dots */}

        {[0, 1, 2, 3].map((dot) => (
          <motion.span
            key={dot}
            animate={{
              rotate: active * 40 + dot * 90,
            }}
            transition={{
              duration: 0.8,
            }}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-blue-400"
            style={{
              transformOrigin: "0 0",
              transform: `rotate(${dot * 90}deg) translateX(112px)`,
            }}
          />
        ))}
      </motion.div>

      {/* Service name */}

      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
            Capability
          </p>

          <p className="mt-2 text-sm font-semibold text-neutral-300">
            {services[active].title}
          </p>
        </div>

        <span className="text-[10px] text-neutral-700">
          0{active + 1} / 06
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(5);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Header */}

        <div className="mb-20">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-600"
          >
            What we do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-6 max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.065em]"
          >
            Built around
            <br />
            <span className="text-neutral-600">growth.</span>
          </motion.h2>

        </div>

        {/* Main layout */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Services list */}

          <div className="border-t border-white/10">

            {services.map((service, index) => {
              const isActive = active === index;

              return (
                <motion.button
                  key={service.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`group flex w-full items-center gap-5 border-b border-white/10 py-7 text-left transition-all duration-300 ${
                    isActive ? "pl-4" : ""
                  }`}
                >
                  <span
                    className={`text-[10px] tracking-[0.2em] transition-colors ${
                      isActive
                        ? "text-blue-500"
                        : "text-neutral-700"
                    }`}
                  >
                    {service.number}
                  </span>

                  <span
                    className={`text-2xl font-semibold tracking-tight transition-colors md:text-3xl ${
                      isActive
                        ? "text-white"
                        : "text-neutral-500 group-hover:text-neutral-300"
                    }`}
                  >
                    {service.title}
                  </span>

                  <span
                    className={`ml-auto text-xl transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-blue-500 opacity-100"
                        : "-translate-x-3 opacity-0"
                    }`}
                  >
                    →
                  </span>
                </motion.button>
              );
            })}

          </div>

          {/* Interactive visual */}

          <div className="lg:sticky lg:top-32 lg:h-fit">
            <ServiceVisual active={active} />

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {services[active].keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-neutral-500"
                >
                  {keyword}
                </span>
              ))}
            </motion.div>

            <motion.p
              key={`description-${active}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-6 max-w-lg text-sm leading-7 text-neutral-500"
            >
              {services[active].description}
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}