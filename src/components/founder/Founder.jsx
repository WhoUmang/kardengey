import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Founder visual */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,.18),transparent_45%)]" />

            <div className="absolute left-8 top-8">
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
                Founder / Kardengey
              </p>
            </div>

            {/* Temporary founder visual */}

            <div className="absolute inset-x-[18%] bottom-0 top-[20%] rounded-t-[45%] bg-gradient-to-b from-neutral-700 via-neutral-900 to-black" />

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                01
              </span>

              <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-700">
                Build / Think / Grow
              </span>
            </div>
          </motion.div>

          {/* Content */}

          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.45em] text-neutral-600"
            >
              The person behind it
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="mt-7 text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.07em]"
            >
              BUILT WITH
              <br />
              <span className="text-neutral-600">INTENT.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 max-w-xl"
            >
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Umang Pathak
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-blue-500">
                Founder
              </p>

              <p className="mt-8 text-base leading-8 text-neutral-400 md:text-lg">
                Kardengey started with a simple belief — businesses shouldn't
                need five different partners to build, market and grow.
              </p>

              <p className="mt-6 text-sm leading-7 text-neutral-600">
                The studio brings strategy, creativity, technology and AI
                together under one roof, with a focus on work that creates
                genuine business impact.
              </p>
            </motion.div>

            {/* Links */}

            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                Let's connect
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-white"
              >
                See the work
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}