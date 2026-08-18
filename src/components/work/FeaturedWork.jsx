import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "Brand Identity",
    title: "GAUSHREE",
    description:
      "A premium dairy identity built around purity, trust and modern Indian craftsmanship.",
    type: "dairy",
  },
  {
    number: "02",
    category: "Packaging + Branding",
    title: "CATTLEMAX",
    description:
      "A bold livestock nutrition brand designed to stand out in a crowded category.",
    type: "feed",
  },
  {
    number: "03",
    category: "Digital + Growth",
    title: "DRISCO",
    description:
      "A high-energy beverage identity created to connect with a younger digital audience.",
    type: "drink",
  },
  {
    number: "04",
    category: "Performance Marketing",
    title: "MONEYWISE",
    description:
      "A growth-focused digital presence designed to turn financial expertise into measurable customer acquisition.",
    type: "money",
  },
  {
    number: "05",
    category: "Social + Performance",
    title: "LIBELLA LINK",
    description:
      "A digital growth system combining social media, creative and performance marketing.",
    type: "libella",
  },
  {
    number: "06",
    category: "Digital Experience",
    title: "THELOOSEFIT",
    description:
      "A fashion-first digital experience built around a distinctive visual identity and modern commerce.",
    type: "fashion",
  },
];

function ProjectVisual({ type }) {
  if (type === "dairy") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#e8e2d6]">
        <div className="absolute left-[12%] top-[12%] h-[70%] w-[30%] rounded-[45%] bg-[#f8f5ed] shadow-[20px_20px_60px_rgba(0,0,0,0.18)]" />

        <div className="absolute left-[19%] top-[27%] text-4xl font-bold tracking-tight text-black">
          A2
        </div>

        <div className="absolute left-[18%] top-[36%] text-[7px] uppercase tracking-[0.35em] text-neutral-500">
          COW MILK
        </div>

        <div className="absolute bottom-[10%] right-[8%] h-[42%] w-[25%] rounded-[40%] bg-[#f7f2e8] shadow-[15px_15px_40px_rgba(0,0,0,0.16)]" />

        <div className="absolute bottom-[18%] right-[15%] text-[8px] font-semibold uppercase tracking-[0.2em] text-black">
          GAUSHREE
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,.7),transparent_30%)]" />
      </div>
    );
  }

  if (type === "feed") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#161616]">
        <div className="absolute -right-[10%] top-[5%] h-[120%] w-[75%] rotate-[12deg] bg-[#252525]" />

        <div className="absolute left-[12%] top-[14%] text-5xl font-black uppercase tracking-tight text-white">
          CATTLE
          <br />
          MAX
        </div>

        <div className="absolute left-[13%] top-[43%] h-[3px] w-[70px] bg-blue-500" />

        <div className="absolute bottom-[12%] left-[13%] text-[8px] uppercase tracking-[0.35em] text-neutral-400">
          PREMIUM CATTLE FEED
        </div>

        <div className="absolute bottom-[-12%] right-[2%] h-[70%] w-[48%] rounded-[45%] bg-gradient-to-br from-neutral-500 via-neutral-800 to-black opacity-80" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(37,99,235,.22),transparent_35%)]" />
      </div>
    );
  }

  if (type === "drink") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#050b18]">
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-[35px] border border-blue-400/20 bg-gradient-to-br from-blue-950 via-[#06112a] to-black shadow-[0_0_100px_rgba(37,99,235,.2)]" />

        <div className="absolute left-1/2 top-[27%] -translate-x-1/2 text-5xl font-black tracking-[-0.06em] text-white">
          DRISCO
        </div>

        <div className="absolute left-1/2 top-[48%] -translate-x-1/2 text-[8px] uppercase tracking-[0.5em] text-blue-300">
          SUZO
        </div>

        <div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-white shadow-[0_0_25px_white]" />

        <div className="absolute right-[16%] top-[55%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_30px_#2563eb]" />

        <div className="absolute bottom-[20%] left-[25%] h-1 w-1 rounded-full bg-white" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,.2),transparent_45%)]" />
      </div>
    );
  }

  if (type === "money") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#101010]">
        <div className="absolute left-[10%] top-[15%] text-[10px] uppercase tracking-[0.4em] text-neutral-500">
          FINANCIAL INTELLIGENCE
        </div>

        <div className="absolute left-[10%] top-[32%] text-6xl font-black tracking-[-0.07em] text-white">
          MONEY
          <br />
          WISE
        </div>

        <div className="absolute bottom-[17%] left-[10%] h-px w-[70%] bg-neutral-700" />

        <div className="absolute bottom-[17%] left-[10%] h-px w-[45%] origin-left rotate-[-24deg] bg-blue-500" />

        <div className="absolute right-[13%] top-[28%] h-16 w-16 rounded-full border border-blue-500/40 bg-blue-500/10 shadow-[0_0_60px_rgba(37,99,235,.2)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(37,99,235,.16),transparent_35%)]" />
      </div>
    );
  }

  if (type === "libella") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#f2f0ea]">
        <div className="absolute left-[10%] top-[12%] text-[9px] uppercase tracking-[0.4em] text-neutral-500">
          DIGITAL GROWTH
        </div>

        <div className="absolute left-[10%] top-[30%] text-5xl font-black tracking-[-0.06em] text-black">
          LIBELLA
          <br />
          LINK
        </div>

        <div className="absolute bottom-[13%] left-[10%] h-[80px] w-[80px] rounded-full border-[12px] border-black" />

        <div className="absolute bottom-[20%] left-[27%] h-[45px] w-[45px] rounded-full bg-blue-600" />

        <div className="absolute right-[10%] top-[18%] h-[180px] w-[180px] rounded-full border border-black/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,.15),transparent_35%)]" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#111]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,.08),transparent_35%)]" />

      <div className="absolute left-[10%] top-[12%] text-[9px] uppercase tracking-[0.4em] text-neutral-500">
        FASHION / DIGITAL
      </div>

      <div className="absolute left-[10%] top-[30%] text-5xl font-black uppercase tracking-[-0.07em] text-white">
        THE
        <br />
        LOOSEFIT
      </div>

      <div className="absolute bottom-[8%] right-[8%] h-[65%] w-[38%] rotate-[8deg] rounded-[35%] border border-white/10 bg-gradient-to-br from-neutral-700 via-neutral-900 to-black shadow-[0_30px_80px_rgba(0,0,0,.5)]" />

      <div className="absolute bottom-[15%] left-[10%] text-[8px] uppercase tracking-[0.35em] text-neutral-500">
        DESIGNED FOR PEOPLE
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_55%,rgba(37,99,235,.12),transparent_35%)]" />
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/[0.04] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Header */}

        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-xs uppercase tracking-[0.45em] text-neutral-500"
            >
              Selected Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.065em]"
            >
              WORK THAT
              <br />
              MOVES PEOPLE.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm text-sm leading-6 text-neutral-500 md:mb-2"
          >
            Strategy, identity, technology and growth systems built for
            ambitious brands.
          </motion.p>

        </div>

        {/* Project Grid */}

        <div className="grid gap-x-6 gap-y-20 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: (index % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group ${
                index % 3 === 1 ? "md:translate-y-16" : ""
              }`}
            >

              {/* Visual */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/[0.08] bg-neutral-900">

                <ProjectVisual type={project.type} />

                <div className="absolute inset-0 bg-blue-600/0 transition-all duration-500 group-hover:bg-blue-600/10" />

                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px] text-white backdrop-blur-md">
                  {project.number}
                </div>

                <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45">
                  ↗
                </div>

              </div>

              {/* Details */}

              <div className="mt-6">

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-600">
                    {project.category}
                  </span>

                  <span className="text-[9px] text-neutral-700">
                    {project.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                  {project.description}
                </p>

              </div>

            </motion.article>
          ))}

        </div>

        {/* Bottom link */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 flex justify-end"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-neutral-400 transition-colors hover:text-white"
          >
            View all work

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
              ↗
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}