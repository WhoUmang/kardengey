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
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] px-[6vw] pb-8 pt-24 md:pt-32">
      <div className="mx-auto max-w-[1500px]">

        {/* Closing statement */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-7 text-[10px] uppercase tracking-[0.45em] text-blue-500">
            Ready when you are
          </p>

          <h2 className="max-w-[1100px] text-[clamp(3.5rem,9vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.075em] text-white">
            Let's make
            <br />
            <span className="text-neutral-600">
              something move.
            </span>
          </h2>
        </motion.div>

        {/* Giant brand */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-20 overflow-hidden"
        >
          <a
            href="/"
            className="block text-[clamp(4rem,15vw,15rem)] font-black leading-[0.72] tracking-[-0.09em] text-white transition-colors duration-500 hover:text-blue-500"
          >
            kardengey
          </a>
        </motion.div>

        {/* Middle */}

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-4">

          {/* Intro */}

          <div className="md:col-span-1">
            <p className="max-w-xs text-sm leading-7 text-neutral-500">
              A digital growth studio combining strategy, creativity,
              technology and AI to build things that move businesses forward.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-neutral-700">
              Navigate
            </p>

            <div className="flex flex-col items-start gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
                >
                  <span>{link.label}</span>

                  <span className="translate-x-[-4px] text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-neutral-700">
              Start a conversation
            </p>

            <a
              href="https://wa.me/7666459165"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              WhatsApp

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="mailto:kardengey@gmail.com"
              className="mt-3 block break-all text-sm text-neutral-500 transition-colors duration-300 hover:text-white"
            >
              kardengey@gmail.com
            </a>
          </div>

          {/* Personal / Social */}

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-neutral-700">
              Outside the studio
            </p>

            <a
              href="https://instagram.com/thatredliner"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              @thatredliner

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <p className="mt-4 max-w-[180px] text-[11px] leading-5 text-neutral-700">
              Founder / builder / creator / rider.
            </p>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.25em] text-neutral-700 md:flex-row md:items-center md:justify-between">

          <span>
            © 2026 kardengey
          </span>

          <span>
            India / Worldwide
          </span>

          <span className="text-neutral-600">
            Built to move.
          </span>

        </div>

      </div>
    </footer>
  );
}