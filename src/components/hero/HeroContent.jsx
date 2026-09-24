import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex min-h-screen w-full items-center px-[6vw] pb-24 pt-24 sm:pb-28">
      <div className="max-w-[900px]">

        {/* Eyebrow */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.5em] text-neutral-500"
        >
          Digital Growth Studio
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]"
        >
          WE TURN
          <br />
          ATTENTION
          <br />
          INTO GROWTH.
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          className="mt-10 max-w-xl text-base leading-7 text-neutral-400 md:text-lg"
        >
          We combine strategy, creativity, technology and AI to turn ambitious
          businesses into brands people remember.
        </motion.p>

        {/* CTA GROUP */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >

          {/* =========================================
              PRIMARY CTA
          ========================================= */}

          <a
            href="#contact"
            className="group relative inline-flex h-14 items-center overflow-hidden rounded-full bg-white px-7 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)]"
          >
            {/* Blue liquid */}

            <span
              className="
                pointer-events-none
                absolute
                left-0
                top-1/2
                h-10
                w-10
                -translate-x-1/2
                -translate-y-1/2
                scale-0
                rounded-full
                bg-blue-600
                opacity-0
                transition-all
                duration-500
                ease-[cubic-bezier(0.76,0,0.24,1)]
                group-hover:scale-[8]
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
                gap-3
                text-black
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              <span>
                Start a project
              </span>

              {/* Arrow container */}

              <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">

                {/* Default arrow */}

                <span
                  className="
                    absolute
                    text-black
                    transition-all
                    duration-500
                    group-hover:-translate-y-6
                    group-hover:translate-x-6
                    group-hover:text-white
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
                    text-white
                    transition-all
                    duration-500
                    group-hover:translate-x-0
                    group-hover:translate-y-0
                  "
                >
                  →
                </span>

              </span>
            </span>
          </a>

          {/* =========================================
              SECONDARY CTA
          ========================================= */}

          <a
            href="#work"
            className="
              group
              relative
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-white
              transition-all
              duration-500
              hover:h-16
              hover:w-16
              hover:border-blue-500
            "
          >

            {/* Arrow */}

            <span
              className="
                text-lg
                transition-transform
                duration-500
                group-hover:rotate-45
              "
            >
              ↗
            </span>

            {/* Orbit */}

            <span
              className="
                pointer-events-none
                absolute
                inset-[-5px]
                rounded-full
                border
                border-dashed
                border-white/10
                opacity-0
                transition-all
                duration-500
                group-hover:rotate-180
                group-hover:opacity-100
              "
            />

            {/* Label */}

            <span
              className="
                pointer-events-none
                absolute
                -bottom-8
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-neutral-600
                opacity-0
                transition-all
                duration-300
                group-hover:text-blue-400
                group-hover:opacity-100
              "
            >
              Explore work
            </span>

          </a>

        </motion.div>

      </div>
    </div>
  );
}