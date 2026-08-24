import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CustomSelect({
  label,
  placeholder,
  value,
  onChange,
  options,
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Label */}
      <label className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-neutral-600">
        {label}
      </label>

      {/* Selected value */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="relative flex w-full items-center justify-between border-b border-white/10 bg-transparent py-4 text-left outline-none transition-colors duration-300 hover:border-white/30"
      >
        <span
          className={`text-sm ${
            value ? "text-white" : "text-neutral-700"
          }`}
        >
          {value || placeholder}
        </span>

        {/* Arrow */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xs text-white"
        >
          ↓
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-1 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 ${
                  value === option
                    ? "bg-blue-600 text-white"
                    : "text-neutral-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <span>{option}</span>

                {value === option && (
                  <span className="text-[10px]">●</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}