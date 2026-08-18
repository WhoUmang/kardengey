import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`
            mx-auto
            flex
            w-full
            items-center
            justify-between
            px-[4vw]
            py-5
            transition-all
            duration-500
            ${
              scrolled
                ? "border-b border-white/[0.08] bg-[#050505]/60 backdrop-blur-xl"
                : "bg-transparent"
            }
          `}
        >

          {/* LOGO */}

          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-black tracking-[-0.04em] text-white"
          >
            kardengey
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  group
                  relative
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-blue-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">

            {/* DESKTOP CTA */}

            <a
              href="#contact"
              className="
                group
                relative
                hidden
                h-11
                items-center
                overflow-hidden
                rounded-full
                bg-white
                px-6
                text-xs
                font-bold
                text-black
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)]
                lg:inline-flex
              "
            >

              {/* Blue liquid */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-1/2
                  h-8
                  w-8
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

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-2
                  !text-black
                  transition-colors
                  duration-300
                  group-hover:!text-white
                "
              >
                <span className="!text-black group-hover:!text-white">
                  Let's Talk
                </span>

                <span className="!text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:!text-white">
                  ↗
                </span>
              </span>

            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-black/20
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-blue-500/50
                lg:hidden
              "
            >

              <span className="relative flex h-4 w-5 flex-col justify-between">

                <motion.span
                  animate={
                    menuOpen
                      ? {
                          y: 6,
                          rotate: 45,
                        }
                      : {
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-[1px] w-full bg-white"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? {
                          opacity: 0,
                          x: 8,
                        }
                      : {
                          opacity: 1,
                          x: 0,
                        }
                  }
                  transition={{ duration: 0.2 }}
                  className="h-[1px] w-3/4 self-end bg-blue-500"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? {
                          y: -6,
                          rotate: -45,
                        }
                      : {
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-[1px] w-full bg-white"
                />

              </span>

            </button>

          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-40
              bg-[#050505]
              lg:hidden
            "
          >

            {/* Ambient glow */}

            <div className="pointer-events-none absolute right-[-20%] top-[20%] h-80 w-80 rounded-full bg-blue-600/[0.12] blur-[120px]" />

            {/* Grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "55px 55px",
              }}
            />

            {/* Menu content */}

            <div className="relative flex h-full flex-col justify-between px-[7vw] pb-10 pt-32">

              <div>

                <p className="mb-10 text-[9px] uppercase tracking-[0.45em] text-neutral-600">
                  Navigation
                </p>

                <nav className="flex flex-col">

                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 * index,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        py-5
                        text-[clamp(2.5rem,10vw,4rem)]
                        font-black
                        uppercase
                        leading-none
                        tracking-[-0.05em]
                        text-neutral-500
                        transition-colors
                        duration-300
                        hover:text-white
                      "
                    >
                      <span>{link.label}</span>

                      <span className="text-lg font-normal text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        ↗
                      </span>
                    </motion.a>
                  ))}

                </nav>

              </div>

              {/* Bottom */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between"
              >

                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
                    Digital Growth Studio
                  </p>

                  <p className="mt-2 text-xs text-neutral-600">
                    India / Worldwide
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={closeMenu}
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
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    !text-black
                  "
                >
                  <span className="!text-black">
                    Let's Talk
                  </span>

                  <span className="!text-black transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}