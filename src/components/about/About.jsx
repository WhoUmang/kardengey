import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Think deeper.",
    text: "We don't start with what needs to be made. We start with why it needs to exist — understanding the business, the audience and the opportunity.",
  },
  {
    number: "02",
    title: "Build boldly.",
    text: "Strategy means little without execution. We bring ideas to life through design, technology, content, marketing and AI.",
  },
  {
    number: "03",
    title: "Make it matter.",
    text: "Attention is useful. Impact is better. Everything we build is designed to create a meaningful outcome for the business.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-48"
    >
      {/* Ambient glow */}

      <div className="pointer-events-none absolute left-[15%] top-[25%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Intro */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-600">
              About Kardengey
            </p>

            <span className="hidden text-[9px] uppercase tracking-[0.35em] text-neutral-700 md:block">
              Strategy / Creativity / Technology
            </span>
          </div>
        </motion.div>

        {/* Main statement */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 max-w-[1250px] text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.07em]"
        >
          One partner.
          <br />
          <span className="text-neutral-600">
            More ways to
          </span>
          <br />
          move forward.
        </motion.h2>

        {/* Supporting copy */}

        <div className="mt-20 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-4"
          >
            <span className="mt-2 h-px w-10 bg-blue-500" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-600">
              Why we exist
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-3xl"
          >
            <p className="text-xl leading-9 text-neutral-300 md:text-2xl">
              Businesses don't need more people to manage.
              They need the right people thinking together.
            </p>

            <p className="mt-8 text-sm leading-7 text-neutral-500 md:text-base">
              Kardengey brings strategy, creative thinking, digital
              engineering, performance marketing, content and AI into one
              connected studio. Instead of splitting growth across different
              partners, we bring the thinking and execution together.
            </p>

            <p className="mt-6 text-sm leading-7 text-neutral-600">
              Fewer handoffs. Faster decisions. Better ideas.
              And work that is built to actually move the business.
            </p>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-28 h-px w-full bg-white/10 md:my-36" />

        {/* Principles heading */}

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-600">
              How we think
            </p>

            <h3 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
              The way we work.
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-600">
            Different disciplines. One direction. Everything connected to
            the outcome.
          </p>
        </div>

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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-32 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-blue-500">
                The Kardengey approach
              </p>

              <p className="mt-6 max-w-3xl text-2xl font-medium leading-9 text-neutral-300 md:text-4xl md:leading-[1.25]">
                Think clearly.
                <br />
                Create boldly.
                <br />
                Build things that matter.
              </p>
            </div>

            <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-700">
              kardengey / 2026
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}