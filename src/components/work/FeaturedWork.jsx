import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "Brand Identity",
    title: "GAUSHREE",
    description:
      "A premium dairy identity built around purity, trust and modern Indian craftsmanship.",
    type: "dairy",
    tags: ["Brand Strategy", "Identity", "Packaging"],
  },
  {
    number: "02",
    category: "Packaging + Branding",
    title: "CATTLEMAX",
    description:
      "A bold livestock nutrition brand designed to stand out in a crowded category.",
    type: "feed",
    tags: ["Branding", "Packaging", "Visual System"],
  },
  {
    number: "03",
    category: "Brand Identity",
    title: "DRISCO",
    description:
      "A high-energy beverage brand created to connect with a younger digital audience.",
    type: "drink",
    product: "SUZO — ENERGY DRINK",
    tags: ["Brand Identity", "Packaging", "Digital"],
  },
  {
    number: "04",
    category: "Performance Marketing",
    title: "MONEYWISE",
    description:
      "A growth-focused digital presence designed to turn financial expertise into measurable customer acquisition.",
    type: "money",
    tags: ["Digital", "Performance", "Growth"],
  },
  {
    number: "05",
    category: "Social + Performance",
    title: "LIBELLA LINK",
    description:
      "A digital growth system combining social media, creative and performance marketing.",
    type: "libella",
    tags: ["Social", "Creative", "Performance"],
  },
  {
    number: "06",
    category: "Digital Experience",
    title: "THELOOSEFIT",
    description:
      "A fashion-first digital experience built around a distinctive visual identity and modern commerce.",
    type: "fashion",
    tags: ["Brand", "E-commerce", "Digital"],
  },
];

function ProjectVisual({ type, product }) {
  if (type === "dairy") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#e8e2d6]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,.85),transparent_32%)]" />

        <div className="absolute left-[19%] top-[10%] max-w-[70%] truncate text-[8px] uppercase tracking-[0.45em] text-neutral-500 md:left-[9%] md:max-w-none md:text-[9px]">
          PREMIUM DAIRY
        </div>

        <div className="absolute left-[12%] top-[22%]">
          <span className="block text-[clamp(2.5rem,6vw,6rem)] font-black tracking-[-0.08em] text-black">
            A2
          </span>

          <span className="mt-1 block text-[7px] uppercase tracking-[0.4em] text-neutral-500 md:text-[8px]">
            COW MILK
          </span>
        </div>

        <div className="absolute bottom-[-8%] right-[8%] h-[78%] w-[35%] rotate-[8deg] rounded-[42%] bg-[#f8f4eb] shadow-[25px_30px_70px_rgba(0,0,0,.18)]" />

        <div className="absolute bottom-[16%] left-[12%]">
          <p className="text-3xl font-black tracking-[-0.06em] text-black sm:text-4xl">
            GAUSHREE
          </p>

          <p className="mt-2 text-[7px] uppercase tracking-[0.35em] text-neutral-500 md:text-[8px]">
            Pure by nature
          </p>
        </div>

        <div className="absolute right-[12%] top-[14%] h-20 w-20 rounded-full border border-black/10 sm:h-24 sm:w-24" />
        <div className="absolute right-[15%] top-[17%] h-14 w-14 rounded-full border border-black/10 sm:h-16 sm:w-16" />
      </div>
    );
  }

  if (type === "feed") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#111]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,.2),transparent_35%)]" />

        <div className="absolute -right-[15%] top-[-10%] h-[130%] w-[75%] rotate-[14deg] bg-[#202020]" />

        <div className="absolute left-[19%] top-[10%] max-w-[70%] truncate text-[7px] uppercase tracking-[0.45em] text-neutral-500 md:left-[9%] md:max-w-none md:text-[8px]">
          LIVESTOCK NUTRITION
        </div>

        <div className="absolute left-[9%] top-[25%]">
          <h3 className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-white">
            CATTLE
            <br />
            MAX
          </h3>

          <div className="mt-6 h-[3px] w-14 bg-blue-500 md:mt-7 md:w-16" />
        </div>

        <div className="absolute bottom-[11%] left-[9%] max-w-[75%]">
          <p className="text-[7px] uppercase tracking-[0.35em] text-neutral-400 md:text-[8px] md:tracking-[0.4em]">
            PREMIUM CATTLE FEED
          </p>
        </div>

        <div className="absolute bottom-[-15%] right-[2%] h-[72%] w-[48%] rounded-[45%] bg-gradient-to-br from-neutral-500 via-neutral-800 to-black opacity-80" />

        <div className="absolute right-[10%] top-[12%] text-[6px] uppercase tracking-[0.35em] text-neutral-600 md:text-[7px]">
          PERFORMANCE
        </div>
      </div>
    );
  }

  if (type === "drink") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#050b18]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,.22),transparent_48%)]" />

        <div className="absolute left-1/2 top-[12%] -translate-x-1/2 text-[7px] uppercase tracking-[0.45em] text-blue-300 md:text-[8px] md:tracking-[0.5em]">
          BEVERAGE BRAND
        </div>

        <div className="absolute left-1/2 top-[22%] -translate-x-1/2 text-center">
          <h3 className="text-[clamp(2.7rem,6vw,6rem)] font-black tracking-[-0.08em] text-white">
            DRISCO
          </h3>

          <p className="mt-2 text-[8px] uppercase tracking-[0.45em] text-blue-300 md:text-[9px] md:tracking-[0.5em]">
            {product}
          </p>
        </div>

        <div className="absolute bottom-[8%] left-1/2 h-[56%] w-[25%] -translate-x-1/2 rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-blue-950 via-[#071630] to-black shadow-[0_0_100px_rgba(37,99,235,.2)]">
          <div className="absolute inset-x-0 top-[20%] text-center">
            <p className="text-xl font-black tracking-[-0.05em] text-white sm:text-2xl">
              SUZO
            </p>

            <p className="mt-2 text-[6px] uppercase tracking-[0.4em] text-blue-300">
              ENERGY DRINK
            </p>
          </div>

          <div className="absolute bottom-[15%] left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border border-blue-400/30 sm:h-10 sm:w-10" />
        </div>

        <div className="absolute left-[14%] top-[32%] h-2 w-2 rounded-full bg-white shadow-[0_0_25px_white]" />
        <div className="absolute right-[14%] top-[52%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_30px_#2563eb]" />
      </div>
    );
  }

  if (type === "money") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#101010]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,.18),transparent_38%)]" />

        <div className="absolute left-[19%] top-[10%] max-w-[70%] truncate text-[7px] uppercase tracking-[0.35em] text-neutral-500 md:left-[9%] md:max-w-none md:text-[8px] md:tracking-[0.45em]">
  FINANCIAL INTELLIGENCE
</div>

        <div className="absolute left-[9%] top-[25%]">
          <h3 className="text-[clamp(2.7rem,6vw,6rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-white">
            MONEY
            <br />
            WISE
          </h3>
        </div>

        {/* Decorative line — kept higher on mobile to create separation */}
        <div className="absolute bottom-[20%] left-[9%] h-px w-[70%] bg-neutral-700 md:bottom-[17%]" />

        <div className="absolute bottom-[20%] left-[9%] h-px w-[46%] origin-left rotate-[-24deg] bg-blue-500 md:bottom-[17%]" />

        <div className="absolute right-[12%] top-[27%] flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 shadow-[0_0_70px_rgba(37,99,235,.2)] sm:h-20 sm:w-20 md:right-[14%] md:top-[28%]">
          <span className="text-[7px] uppercase tracking-[0.2em] text-blue-300 md:text-[8px]">
            GROW
          </span>
        </div>

        {/* Bottom metadata */}
        <div className="absolute bottom-[7%] right-[8%] max-w-[45%] text-right md:bottom-[9%] md:right-[10%] md:max-w-none">
          <p className="text-[6px] uppercase tracking-[0.25em] text-neutral-600 md:text-[7px] md:tracking-[0.35em]">
            DATA / STRATEGY / GROWTH
          </p>
        </div>
      </div>
    );
  }

  if (type === "libella") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#f2f0ea]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(37,99,235,.15),transparent_35%)]" />

        <div className="absolute left-[19%] top-[10%] max-w-[70%] truncate text-[7px] uppercase tracking-[0.4em] text-neutral-500 md:left-[9%] md:max-w-none md:text-[8px] md:tracking-[0.45em]">
          DIGITAL GROWTH
        </div>

        <div className="absolute left-[9%] top-[25%]">
          <h3 className="text-[clamp(2.7rem,6vw,6rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-black">
            LIBELLA
            <br />
            LINK
          </h3>
        </div>

        <div className="absolute bottom-[13%] left-[9%] h-16 w-16 rounded-full border-[9px] border-black sm:h-20 sm:w-20 md:h-20 md:w-20 md:border-[11px]" />

        <div className="absolute bottom-[20%] left-[28%] h-9 w-9 rounded-full bg-blue-600 sm:h-11 sm:w-11" />

        <div className="absolute right-[10%] top-[15%] h-32 w-32 rounded-full border border-black/10 sm:h-44 sm:w-44" />

        <div className="absolute bottom-[8%] right-[8%] max-w-[48%] text-right md:bottom-[10%] md:right-[10%] md:max-w-none">
          <p className="text-[6px] uppercase tracking-[0.25em] text-neutral-500 md:text-[7px] md:tracking-[0.35em]">
            SOCIAL / CREATIVE / PERFORMANCE
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#111]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,.14),transparent_38%)]" />

      <div className="absolute left-[19%] top-[10%] max-w-[70%] truncate text-[7px] uppercase tracking-[0.4em] text-neutral-500 md:left-[9%] md:max-w-none md:text-[8px] md:tracking-[0.45em]">
        FASHION / DIGITAL
      </div>

      <div className="absolute left-[9%] top-[24%]">
        <h3 className="text-[clamp(2.7rem,6vw,6rem)] font-black uppercase leading-[0.75] tracking-[-0.08em] text-white">
          THE
          <br />
          LOOSEFIT
        </h3>
      </div>

      <div className="absolute bottom-[7%] right-[8%] h-[67%] w-[38%] rotate-[8deg] rounded-[35%] border border-white/10 bg-gradient-to-br from-neutral-700 via-neutral-900 to-black shadow-[0_30px_80px_rgba(0,0,0,.5)]" />

      <div className="absolute bottom-[12%] left-[9%] max-w-[55%] md:bottom-[13%] md:max-w-none">
        <p className="text-[7px] uppercase tracking-[0.35em] text-neutral-500 md:text-[8px] md:tracking-[0.4em]">
          DESIGNED FOR PEOPLE
        </p>
      </div>

      <div className="absolute right-[10%] top-[13%] text-[6px] uppercase tracking-[0.3em] text-neutral-700 md:text-[7px] md:tracking-[0.35em]">
        COMMERCE
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href="#contact"
      aria-label={`Discuss the ${project.title} project with kardengey`}
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-white/[0.08] bg-neutral-900 sm:aspect-[4/3]">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.035 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ProjectVisual
            type={project.type}
            product={project.product}
          />
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-600/0 transition-all duration-500 group-hover:bg-blue-600/[0.08]" />

        {/* Number */}
        <div className="absolute left-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px] text-white backdrop-blur-md sm:left-5 sm:top-5">
          {project.number}
        </div>

        {/* View button */}
        <div className="absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:bg-blue-500 group-hover:text-white sm:bottom-5 sm:right-5 sm:h-13 sm:w-13">
          ↗
        </div>

        {/* Project label */}
        <div className="absolute bottom-4 left-4 z-20 max-w-[70%] rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:left-5 sm:max-w-none">
          <span className="block truncate text-[7px] uppercase tracking-[0.25em] text-white/70 sm:text-[8px] sm:tracking-[0.3em]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="min-w-0 truncate text-[8px] uppercase tracking-[0.25em] text-neutral-600 sm:text-[9px] sm:tracking-[0.3em]">
            {project.category}
          </span>

          <span className="shrink-0 text-[9px] text-neutral-700">
            {project.number}
          </span>
        </div>

        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {project.title}
            </h3>

            {project.product && (
              <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-blue-500">
                {project.product}
              </p>
            )}
          </div>

          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 transition-colors duration-300 group-hover:text-blue-500">
            Discuss project ↗
          </span>
        </div>

        <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-44"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/[0.035] blur-[160px]" />

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
              <span className="text-neutral-600">
                MOVES PEOPLE.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-sm text-sm leading-7 text-neutral-500 md:mb-2"
          >
            Strategy, identity, technology and growth systems built for
            ambitious brands.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-x-6 gap-y-20 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">
              Have something in mind?
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Let's build something worth remembering.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 transition-colors hover:text-white"
          >
            Start a project

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}