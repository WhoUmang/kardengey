import { motion, AnimatePresence } from "framer-motion";
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

export default function Process() {
  const [active, setActive] = useState(0);

  const progress = (active / (steps.length - 1)) * 100;

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}

        <div className="grid gap-10 md:grid-cols-[1fr_0.45fr] md:items-end">

          <div>
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
              className="mt-6 text-[clamp(4rem,8vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.07em]"
            >
              FROM IDEA
              <br />
              <span className="text-neutral-600">
                TO IMPACT.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="max-w-sm text-sm leading-7 text-neutral-500 md:pb-2"
          >
            A simple process built to keep ideas moving — from the first
            question to measurable growth.
          </motion.p>

        </div>

        {/* PROCESS JOURNEY */}

        <div className="mt-24 md:mt-32">

          {/* Desktop timeline */}

          <div className="relative hidden md:block">

            {/* Base line */}

            <div className="absolute left-0 right-0 top-[27px] h-px bg-white/10" />

            {/* Progress line */}

            <motion.div
              className="absolute left-0 top-[27px] h-px bg-blue-500"
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Steps */}

            <div className="relative grid grid-cols-5">

              {steps.map((step, index) => {
                const isActive = active === index;
                const isPassed = index <= active;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className="group text-left"
                  >

                    {/* Node */}

                    <div className="relative flex h-14 items-start">

                      <motion.div
                        animate={{
                          scale: isActive ? 1.35 : 1,
                          backgroundColor: isPassed
                            ? "rgb(37 99 235)"
                            : "rgb(20 20 20)",
                          borderColor: isPassed
                            ? "rgb(59 130 246)"
                            : "rgba(255,255,255,0.15)",
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 h-4 w-4 rounded-full border"
                      />

                      {isActive && (
                        <motion.span
                          layoutId="process-pulse"
                          className="absolute -left-2 -top-2 h-8 w-8 rounded-full border border-blue-500/30"
                        />
                      )}

                    </div>

                    {/* Number */}

                    <p
                      className={`text-[10px] tracking-[0.25em] transition-colors duration-300 ${
                        isActive
                          ? "text-blue-500"
                          : "text-neutral-700"
                      }`}
                    >
                      {step.number}
                    </p>

                    {/* Title */}

                    <p
                      className={`mt-3 text-xl font-semibold tracking-tight transition-all duration-300 lg:text-2xl ${
                        isActive
                          ? "translate-x-1 text-white"
                          : "text-neutral-600 group-hover:text-neutral-300"
                      }`}
                    >
                      {step.title}
                    </p>

                  </button>
                );
              })}

            </div>
          </div>

          {/* Active step */}

          <div className="mt-14 border-t border-white/10 pt-10 md:mt-20 md:pt-14">

            <AnimatePresence mode="wait">

              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="hidden gap-10 md:grid md:grid-cols-[0.7fr_1.3fr]"
              >

                {/* Step identity */}

                <div>

                  <p className="text-[10px] uppercase tracking-[0.35em] text-blue-500">
                    {steps[active].number} — {steps[active].label}
                  </p>

                  <h3 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-white">
                    {steps[active].title}
                  </h3>

                </div>

                {/* Description */}

                <div className="flex flex-col justify-end md:pb-2">

                  <p className="max-w-2xl text-base leading-8 text-neutral-500 md:text-lg">
                    {steps[active].description}
                  </p>

                  <div className="mt-8 flex items-center gap-4">

                    <span className="h-px w-12 bg-blue-500" />

                    <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
                      Kardengey / Process
                    </span>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* Mobile timeline */}

          <div className="mt-10 md:hidden">

            {steps.map((step, index) => {
              const isActive = active === index;

              return (
                <div
                  key={step.number}
                  className="relative border-l border-white/10 pl-8"
                >

                  {/* Node */}

                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className="absolute -left-[7px] top-1"
                  >
                    <span
                      className={`block h-3 w-3 rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-blue-500 bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                          : "border-white/20 bg-[#050505]"
                      }`}
                    />
                  </button>

                  {/* Step */}

                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className="mb-10 block w-full text-left"
                  >
                    <p
                      className={`text-[9px] tracking-[0.25em] ${
                        isActive
                          ? "text-blue-500"
                          : "text-neutral-700"
                      }`}
                    >
                      {step.number}
                    </p>

                    <h3
                      className={`mt-2 text-3xl font-bold tracking-tight ${
                        isActive
                          ? "text-white"
                          : "text-neutral-600"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </button>

                </div>
              );
            })}

          </div>

        </div>

        {/* FOOTER LINE */}

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">

          <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
            01 — 05
          </span>

          <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
            Discover / Define / Create / Launch / Grow
          </span>

        </div>

      </div>
    </section>
  );
}