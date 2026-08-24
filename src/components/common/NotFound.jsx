import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "./../SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have moved."
        canonical="https://kardengey.com/"
      />

      <main className="relative flex min-h-screen overflow-hidden bg-[#050505] text-white">

        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-600/[0.08]
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col justify-between px-[6vw] py-8 md:py-10">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/"
              className="
                inline-block
                text-[24px]
                font-black
                leading-none
                tracking-[-0.055em]
                text-white
                transition-colors
                duration-300
                hover:text-blue-500
              "
            >
              kardengey
            </Link>
          </motion.div>

          {/* Main */}

          <div className="flex flex-1 items-center py-24">

            <div className="w-full">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.45em]
                  text-blue-500
                "
              >
                Kardengey / Error 404
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-6
                  text-[clamp(6rem,18vw,18rem)]
                  font-black
                  uppercase
                  leading-[0.72]
                  tracking-[-0.09em]
                  text-white
                "
              >
                404
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                className="mt-12 max-w-xl"
              >

                <h2 className="
                  text-2xl
                  font-bold
                  uppercase
                  tracking-[-0.03em]
                  text-neutral-300
                  md:text-4xl
                ">
                  Looks like this page
                  <br />
                  moved.
                </h2>

                <p className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-neutral-600
                  md:text-base
                ">
                  The page you're looking for doesn't exist, has moved,
                  or the link may be incorrect.
                </p>

              </motion.div>

              {/* CTA */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="mt-10"
              >

                <Link
  to="/"
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-white
    px-7
    py-3.5
    text-xs
    font-bold
    uppercase
    tracking-[0.15em]
    !text-black
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-blue-600
    hover:!text-white
  "
>
  <span className="!text-black group-hover:!text-white">
    Back to home
  </span>

  <span className="!text-black transition-transform duration-300 group-hover:!text-white group-hover:-translate-x-1">
    ←
  </span>
</Link>

              </motion.div>

            </div>

          </div>

          {/* Bottom */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="
              flex
              flex-col
              gap-3
              border-t
              border-white/10
              pt-5
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-neutral-700
              md:flex-row
              md:justify-between
            "
          >
            <span>
              Kardengey / Digital Growth Studio
            </span>

            <span>
              India / Worldwide
            </span>

            <span>
              Built to move.
            </span>
          </motion.div>

        </div>

      </main>
    </>
  );
}