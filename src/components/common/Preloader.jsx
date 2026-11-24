import { useEffect, useState } from "react";

const letters = [
  { char: "k", x: "-42vw", y: "-34vh", rotate: -28 },
  { char: "a", x: "34vw", y: "-38vh", rotate: 24 },
  { char: "r", x: "-38vw", y: "28vh", rotate: -18 },
  { char: "d", x: "42vw", y: "32vh", rotate: 30 },
  { char: "e", x: "-12vw", y: "-46vh", rotate: -22 },
  { char: "n", x: "15vw", y: "44vh", rotate: 20 },
  { char: "g", x: "-46vw", y: "2vh", rotate: -34 },
  { char: "e", x: "46vw", y: "-4vh", rotate: 34 },
  { char: "y", x: "8vw", y: "-42vh", rotate: -16 },
];

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [scattering, setScattering] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = window.requestAnimationFrame(() => setVisible(true));

    if (reducedMotion) {
      const finish = window.setTimeout(() => setVisible(false), 450);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(finish);
      };
    }

    const scatter = window.setTimeout(() => setScattering(true), 1550);
    const finish = window.setTimeout(() => setVisible(false), 2700);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(scatter);
      window.clearTimeout(finish);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`kardengey-preloader ${scattering ? "is-scattering" : ""}`}
      role="status"
      aria-label="Loading Kardengey"
      aria-live="polite"
    >
      <div className="kardengey-preloader__word" aria-hidden="true">
        {letters.map((letter, index) => (
          <span
            className="kardengey-preloader__letter"
            key={index}
            style={{
              "--letter-index": index,
              "--scatter-x": letter.x,
              "--scatter-y": letter.y,
              "--scatter-rotate": `${letter.rotate}deg`,
            }}
          >
            {letter.char}
          </span>
        ))}
      </div>
      <p className="kardengey-preloader__tagline">we will do everything</p>
      <span className="kardengey-preloader__progress" aria-hidden="true" />
    </div>
  );
}
