import { motion } from "framer-motion";
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

  return (
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

        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-black tracking-[-0.04em] text-white"
        >
          kardengey
        </a>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
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

        {/* CTA */}

        <a
          href="#contact"
          className="
            group
            relative
            inline-flex
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

          {/* CTA content */}

          <span
            className="
              relative
              z-10
              flex
              items-center
              gap-2
              text-black
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            <span>Let's Talk</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              ↗
            </span>
          </span>

        </a>

      </div>
    </motion.header>
  );
}