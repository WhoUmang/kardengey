import { motion } from "framer-motion";

const instagramPosts = [
  "/instagram/1.jpg",
  "/instagram/2.jpg",
  "/instagram/3.jpg",
  "/instagram/4.jpg",
  "/instagram/5.jpg",
  "/instagram/6.jpg",
  "/instagram/7.jpg",
  "/instagram/8.jpg",
  "/instagram/9.jpg",
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* TOP LABEL */}

        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.45em] text-neutral-600"
          >
            The person behind Kardengey
          </motion.p>

          <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
            01 / Founder
          </span>
        </div>

        {/* MAIN */}

        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* INSTAGRAM */}

          <motion.a
            href="https://www.instagram.com/thatredliner/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Umang on Instagram"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative block aspect-square overflow-hidden rounded-[36px] border border-white/10 bg-[#090909]"
          >

            {/* GRID */}

            <div className="absolute inset-0 grid grid-cols-3 gap-[2px] bg-[#050505]">

              {instagramPosts.map((image, index) => (
                <div
                  key={image}
                  className="relative overflow-hidden bg-[#101010]"
                >
                  <img
                    src={image}
                    alt={`@thatredliner post ${index + 1}`}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-[35%]"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent" />
                </div>
              ))}

            </div>

            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* TOP LABEL */}

            <div className="absolute left-7 right-7 top-7 flex items-center justify-between">

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                Personal / Instagram
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-sm text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-white/50">
                ↗
              </span>

            </div>

            {/* BOTTOM PROFILE */}

            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">

              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/50">
                  Creator / Rider
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  @thatredliner
                </p>
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 transition-colors duration-300 group-hover:text-white">
                View Instagram
              </span>

            </div>

          </motion.a>

          {/* CONTENT */}

          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.45em] text-blue-500"
            >
              Founder / Builder / Creator
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 text-[clamp(3.5rem,7vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]"
            >
              BUILT
              <br />
              <span className="text-neutral-600">
                DIFFERENT.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="mt-10"
            >

              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Umang Pathak
              </h3>

              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                Founder — Kardengey
              </p>

              <div className="mt-8 max-w-xl">

                <p className="text-lg leading-8 text-neutral-300 md:text-xl">
                  I spent years building things for other people — websites,
                  digital experiences, products and ideas. Eventually, I
                  decided it was time to build something of my own.
                </p>

                <p className="mt-6 text-sm leading-7 text-neutral-500">
                  Kardengey came from that decision. A studio built around
                  the belief that strategy, creativity, technology and AI
                  shouldn't live in separate boxes.
                </p>

                <p className="mt-6 text-sm leading-7 text-neutral-500">
                  Outside the studio, I'm still doing what I've always
                  enjoyed — creating, experimenting, learning and getting
                  out on the road. That curiosity is a big part of how I
                  approach the work too.
                </p>

              </div>

            </motion.div>

            {/* PERSONAL TAGS */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {[
                "Digital",
                "Technology",
                "Marketing",
                "AI",
                "Creator",
                "Rider",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-neutral-600 transition-colors duration-300 hover:border-blue-500/40 hover:text-blue-400"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  !text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:!text-white
                "
              >
                <span className="!text-black transition-colors duration-300 group-hover:!text-white">
                  Let's connect
                </span>

                <span className="!text-black transition-colors duration-300 group-hover:!text-white">
                  ↗
                </span>
              </a>

              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-neutral-500 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                See the work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

            </motion.div>

          </div>

        </div>

        {/* BOTTOM */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto]"
        >

          <p className="max-w-2xl text-sm leading-7 text-neutral-700">
            A founder-led studio for businesses that want fewer handoffs,
            sharper thinking and better execution.
          </p>

          <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
            India / Worldwide
          </span>

        </motion.div>

      </div>
    </section>
  );
}