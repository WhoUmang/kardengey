import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    label: "SIGNAL",
    description:
      "We start by understanding the business, the audience, the market and the opportunity hiding underneath the obvious.",
  },
  {
    number: "02",
    title: "Strategy",
    label: "DIRECTION",
    description:
      "We turn research into a clear strategic direction — positioning, messaging, creative territory and growth priorities.",
  },
  {
    number: "03",
    title: "Create",
    label: "EXPRESSION",
    description:
      "Brand identity, campaigns, digital experiences and content come together into one distinctive system.",
  },
  {
    number: "04",
    title: "Launch",
    label: "MOMENTUM",
    description:
      "We put the work into the world through technology, media and experiences engineered to create attention.",
  },
  {
    number: "05",
    title: "Grow",
    label: "COMPOUND",
    description:
      "We measure, learn and optimise — turning successful ideas into systems that keep getting better.",
  },
];

function ProcessCore({ active }) {
  return (
    <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#080808] md:h-[520px]">

      {/* Ambient blue field */}

      <motion.div
        animate={{
          scale: 1 + active * 0.08,
          opacity: 0.08 + active * 0.025,
        }}
        transition={{ duration: 0.8 }}
        className="absolute h-72 w-72 rounded-full bg-blue-600 blur-[110px]"
      />

      {/* Technical grid */}

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Outer rings */}

      <motion.div
        animate={{ rotate: active * 18 }}
        transition={{ duration: 1 }}
        className="absolute h-72 w-72 rounded-full border border-blue-500/20"
      />

      <motion.div
        animate={{
          rotate: active * -25,
          scale: 0.78 + active * 0.035,
        }}
        transition={{ duration: 1 }}
        className="absolute h-52 w-52 rounded-full border border-white/10"
      />

      {/* Core */}

      <motion.div
        key={active}
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-blue-400/30 bg-[#07122b] shadow-[0_0_100px_rgba(37,99,235,.2)]"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#0b0b0b]">
          <span className="text-xs font-bold tracking-[0.25em] text-blue-400">
            {steps[active].number}
          </span>
        </div>
      </motion.div>

      {/* Orbit nodes */}

      {[0, 1, 2, 3, 4].map((node) => (
        <motion.div
          key={node}
          animate={{
            rotate: active * 22,
          }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,.4)]"
          style={{
            transformOrigin: "0 0",
            transform: `rotate(${node * 72}deg) translateX(145px)`,
          }}
        />
      ))}

      {/* Current label */}

      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">

        <div>
          <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
            Current phase
          </p>

          <motion.p
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300"
          >
            {steps[active].label}
          </motion.p>
        </div>

        <span className="text-[10px] text-neutral-700">
          {steps[active].number} / 05
        </span>

      </div>
    </div>
  );
}

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Heading */}

        <div className="mb-20">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-600"
          >
            How we work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.065em]"
          >
            FROM SIGNAL
            <br />
            <span className="text-neutral-600">TO SCALE.</span>
          </motion.h2>

        </div>

        {/* Main process */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Steps */}

          <div className="border-t border-white/10">

            {steps.map((step, index) => {
              const isActive = active === index;

              return (
                <motion.button
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`group flex w-full items-center gap-5 border-b border-white/10 py-7 text-left transition-all duration-300 ${
                    isActive ? "pl-4" : ""
                  }`}
                >

                  <span
                    className={`text-[10px] tracking-[0.2em] ${
                      isActive
                        ? "text-blue-500"
                        : "text-neutral-700"
                    }`}
                  >
                    {step.number}
                  </span>

                  <span
                    className={`text-2xl font-semibold tracking-tight md:text-3xl ${
                      isActive
                        ? "text-white"
                        : "text-neutral-500 group-hover:text-neutral-300"
                    }`}
                  >
                    {step.title}
                  </span>

                  <span
                    className={`ml-auto transition-all duration-300 ${
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

          {/* Visual */}

          <div className="lg:sticky lg:top-32 lg:h-fit">

            <ProcessCore active={active} />

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-7"
            >
              <div className="flex items-start justify-between gap-8">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-blue-500">
                    {steps[active].number} — {steps[active].label}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
                    {steps[active].title}
                  </h3>
                </div>

                <span className="hidden text-[9px] uppercase tracking-[0.3em] text-neutral-700 md:block">
                  Kardengey process
                </span>

              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
                {steps[active].description}
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}