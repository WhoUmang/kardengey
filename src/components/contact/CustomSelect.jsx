import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CustomSelect({
  label,
  placeholder,
  value,
  onChange,
  options,
  error,
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      <label className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-neutral-500">
        {label}
      </label>

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={Boolean(error)}
        onClick={() => setOpen((current) => !current)}
        className={`relative flex min-h-14 w-full items-center justify-between border-b bg-transparent py-4 text-left outline-none transition-colors duration-300 hover:border-white/30 ${error ? "border-red-500" : "border-white/10"}`}
      >
        <span className={`text-sm ${value ? "text-white" : "text-neutral-600"}`}>
          {value || placeholder}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-sm text-neutral-400">
          ↓
        </motion.span>
      </button>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-1 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            role="listbox"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={value === option}
                onClick={() => handleSelect(option)}
                className={`flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 ${value === option ? "bg-blue-600 text-white" : "text-neutral-400 hover:bg-white/[0.06] hover:text-white"}`}
              >
                <span>{option}</span>
                {value === option && <span className="text-[10px]">●</span>}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
