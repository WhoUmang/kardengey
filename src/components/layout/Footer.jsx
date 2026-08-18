import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] px-[6vw] pb-8 pt-24">
      <div className="mx-auto max-w-[1500px]">

        {/* Giant brand */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#home"
            className="block text-[clamp(4rem,15vw,15rem)] font-black leading-[0.75] tracking-[-0.09em] text-white transition-colors duration-500 hover:text-blue-500"
          >
            kardengey
          </a>
        </motion.div>

        {/* Middle */}

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-3">

          <div>
            <p className="max-w-xs text-sm leading-7 text-neutral-500">
              Strategy, creativity, technology and AI for ambitious businesses
              ready to move.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-neutral-700">
              Navigate
            </p>

            <div className="flex flex-col items-start gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-neutral-700">
              Start a conversation
            </p>

            <a
              href="https://wa.me/7666459165"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              WhatsApp

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="mailto:kardengey@gmail.com"
              className="mt-3 block text-sm text-neutral-500 transition-colors hover:text-white"
            >
              kardengey@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.25em] text-neutral-700 md:flex-row">
          <span>© 2026 kardengey</span>

          <span>India / Worldwide</span>

          <span>Built to move.</span>
        </div>

      </div>
    </footer>
  );
}