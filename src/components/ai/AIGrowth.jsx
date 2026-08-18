import { motion } from "framer-motion";

const items = [
  "AI AUTOMATION",
  "INTELLIGENT WORKFLOWS",
  "AI AGENTS",
  "DATA SYSTEMS",
  "PERFORMANCE",
  "GROWTH",
];

export default function AIGrowth() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Left */}

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.45em] text-blue-500"
            >
              Intelligence × Growth
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="mt-7 text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.07em]"
            >
              AI SHOULD
              <br />
              <span className="text-neutral-600">DO MORE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 max-w-lg text-base leading-8 text-neutral-500 md:text-lg"
            >
              We use AI to automate repetitive work, accelerate decisions
              and build smarter systems around the way businesses actually
              operate.
            </motion.p>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-white"
            >
              Build something intelligent

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600">
                ↗
              </span>
            </a>
          </div>

          {/* Right */}

          <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[#080808]">

            {/* Grid */}

            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            {/* Glow */}

            <div className="absolute h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />

            {/* Core */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative h-64 w-64 rounded-full border border-blue-500/20"
            >
              <div className="absolute inset-8 rounded-full border border-white/10" />

              <div className="absolute inset-16 flex items-center justify-center rounded-full border border-blue-500/30 bg-blue-600/10">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                  AI
                </span>
              </div>

              {[0, 1, 2, 3, 4, 5].map((node) => (
                <span
                  key={node}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_#2563eb]"
                  style={{
                    transform: `rotate(${node * 60}deg) translateX(125px)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Floating labels */}

            {items.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="absolute rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[8px] uppercase tracking-[0.25em] text-neutral-500 backdrop-blur-md"
                style={{
                  left: `${10 + (index % 3) * 32}%`,
                  top: `${10 + Math.floor(index / 3) * 70}%`,
                }}
              >
                {item}
              </motion.span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}