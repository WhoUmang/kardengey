import { motion, AnimatePresence } from "framer-motion";
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

export default function Services() {
  const [active, setActive] = useState(5);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}

        <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>
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
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-[clamp(4rem,8vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.07em]"
            >
              BUILT
              <br />
              <span className="text-neutral-600">TO MOVE.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm text-sm leading-7 text-neutral-500 md:pb-2"
          >
            We bring strategy, creativity, technology, marketing and AI under
            one roof — so every part of your growth works together.
          </motion.p>

        </div>

        {/* SERVICE CATALOGUE */}

        <div className="border-t border-white/10">

          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <motion.button
                key={service.number}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="group relative block w-full border-b border-white/10 text-left"
              >

                {/* BLUE BACKGROUND */}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 origin-left bg-blue-600"
                />

                {/* CONTENT */}

                <div
                  className={`
                    relative z-10
                    flex
                    min-h-[120px]
                    items-center
                    gap-5
                    px-2
                    py-7
                    transition-all
                    duration-500
                    md:min-h-[145px]
                    md:gap-8
                    md:px-4
                    ${
                      isActive
                        ? "text-black md:px-8"
                        : "text-white"
                    }
                  `}
                >

                  {/* NUMBER */}

                  <span
                    className={`
                      w-10
                      shrink-0
                      text-[10px]
                      font-medium
                      tracking-[0.25em]
                      transition-colors
                      duration-300
                      md:w-14
                      ${
                        isActive
                          ? "text-black/50"
                          : "text-neutral-700"
                      }
                    `}
                  >
                    {service.number}
                  </span>

                  {/* TITLE */}

                  <span
                    className={`
                      flex-1
                      text-[clamp(2rem,4vw,4.5rem)]
                      font-black
                      uppercase
                      leading-none
                      tracking-[-0.055em]
                      transition-transform
                      duration-500
                      ${
                        isActive
                          ? "translate-x-2"
                          : "group-hover:translate-x-2"
                      }
                    `}
                  >
                    {service.title}
                  </span>

                  {/* ARROW */}

                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-lg
                      transition-all
                      duration-500
                      md:h-14
                      md:w-14
                      ${
                        isActive
                          ? "rotate-45 border-black/20 text-black"
                          : "border-white/10 text-neutral-600 group-hover:rotate-45 group-hover:border-white/30 group-hover:text-white"
                      }
                    `}
                  >
                    ↗
                  </span>

                </div>

                {/* EXPANDED INFORMATION */}

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative z-10 overflow-hidden bg-blue-600"
                    >
                      <div className="grid gap-6 px-16 pb-8 md:grid-cols-[1fr_0.6fr] md:px-24">

                        <p className="max-w-xl text-sm leading-7 text-black/70 md:text-base">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap content-start gap-2 md:justify-end">
                          {service.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className="rounded-full border border-black/15 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-black/60"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.button>
            );
          })}

        </div>

        {/* BOTTOM NOTE */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
            Capabilities / 06
          </span>

          <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
            Strategy × Creativity × Technology
          </span>
        </motion.div>

      </div>
    </section>
  );
}