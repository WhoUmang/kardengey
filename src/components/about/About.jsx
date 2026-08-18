import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Think deeper.",
    text: "We look beyond the brief to understand the business, the audience and the opportunity.",
  },
  {
    number: "02",
    title: "Build boldly.",
    text: "We combine strategy, creativity and technology to create work with a point of view.",
  },
  {
    number: "03",
    title: "Measure what matters.",
    text: "Beautiful work means little if it doesn't move the business forward.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Intro */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-neutral-600">
            About Kardengey
          </p>
        </motion.div>

        {/* Big statement */}

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[1250px] text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.07em]"
        >
          We don't believe
          <br />
          <span className="text-neutral-600">
            businesses need
          </span>
          <br />
          another agency.
        </motion.h2>

        {/* Supporting statement */}

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr]">

          <div />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-xl leading-9 text-neutral-300 md:text-2xl">
              They need a partner who can see the whole picture — brand,
              technology, marketing and growth — and make all of it work
              together.
            </p>

            <p className="mt-8 max-w-xl text-sm leading-7 text-neutral-500">
              Kardengey brings strategy, creative thinking, digital
              engineering, performance marketing and AI into one connected
              system. No unnecessary layers. No handoffs between five
              different teams. Just focused work built around the outcome.
            </p>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-28 h-px w-full bg-white/10" />

        {/* Principles */}

        <div className="grid gap-0 md:grid-cols-3">

          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-10 md:first:pl-0 md:last:border-r-0"
            >
              <div className="flex items-start justify-between">

                <span className="text-[10px] tracking-[0.2em] text-neutral-700">
                  {principle.number}
                </span>

                <span className="text-neutral-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500">
                  ↗
                </span>

              </div>

              <h3 className="mt-16 text-3xl font-bold tracking-tight text-white">
                {principle.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-neutral-500">
                {principle.text}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-2xl text-2xl font-medium leading-9 text-neutral-300 md:text-3xl">
            Strategy gives us direction.
            <br />
            Creativity gives us distinction.
            <br />
            Technology makes it scalable.
          </p>

          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-700">
            kardengey / 2026
          </span>
        </motion.div>

      </div>
    </section>
  );
}