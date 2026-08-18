import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Main CTA Card */}

        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090909] px-8 py-20 md:px-16 md:py-28">

          {/* Blue ambient glow */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.12] blur-[140px]" />

          {/* Technical grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}

          <div className="relative z-10 mx-auto max-w-5xl text-center">

            {/* Eyebrow */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.45em] text-blue-500"
            >
              Start something
            </motion.p>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]"
            >
              LET'S MAKE
              <br />
              <span className="text-neutral-600">
                SOMETHING MOVE.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="mx-auto mt-8 max-w-xl text-sm leading-7 text-neutral-500 md:text-base"
            >
              Have a brand to build, a website to launch or a growth problem
              to solve? Let's talk.
            </motion.p>

            {/* CTA */}

            <motion.a
              href="https://wa.me/7666459165"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Kardengey on WhatsApp"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="group relative mx-auto mt-10 inline-flex h-16 items-center overflow-hidden rounded-full bg-white px-8 text-sm font-bold !text-black transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(37,99,235,0.35)]"
            >

              {/* Blue liquid */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-1/2
                  h-12
                  w-12
                  -translate-x-1/2
                  -translate-y-1/2
                  scale-0
                  rounded-full
                  bg-blue-600
                  opacity-0
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  group-hover:scale-[7]
                  group-hover:opacity-100
                "
              />

              {/* Button content */}

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-4
                  !text-black
                  transition-colors
                  duration-300
                  group-hover:!text-white
                "
              >

                {/* Button text */}

                <span
                  className="
                    !text-black
                    transition-colors
                    duration-300
                    group-hover:!text-white
                  "
                >
                  Let's talk
                </span>

                {/* Animated arrow */}

                <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden">

                  {/* Default arrow */}

                  <span
                    className="
                      absolute
                      !text-black
                      transition-all
                      duration-400
                      group-hover:-translate-y-6
                      group-hover:translate-x-6
                      group-hover:!text-white
                    "
                  >
                    ↗
                  </span>

                  {/* Hover arrow */}

                  <span
                    className="
                      absolute
                      -translate-x-6
                      translate-y-6
                      !text-white
                      transition-all
                      duration-400
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                    "
                  >
                    →
                  </span>

                </span>

              </span>

              {/* Bottom blue accent */}

              <span
                className="
                  absolute
                  bottom-1.5
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-blue-500
                  transition-all
                  duration-500
                  group-hover:w-8
                "
              />

            </motion.a>

            {/* Contact details */}

            <div
              className="
                mt-16
                flex
                flex-col
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.25em]
                text-neutral-600
                md:flex-row
                md:justify-center
                md:gap-8
              "
            >

              <a
                href="mailto:kardengey@gmail.com"
                className="transition-colors duration-300 hover:text-white"
              >
                kardengey@gmail.com
              </a>

              <span className="hidden text-neutral-800 md:block">
                /
              </span>

              <a
                href="https://wa.me/7666459165"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                WhatsApp
              </a>

              <span className="hidden text-neutral-800 md:block">
                /
              </span>

              <span>
                India / Worldwide
              </span>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}