/**
 * Three Pillars. Cinematic three-act intro (~6.4s visible), crisp DOM rendering:
 *   Act 1 — "The only app you need. For business. For life." typed word by word,
 *           holds, then fades out
 *   Act 2 — Three Pillars logo + product name fade in, hold, fade out
 *   Act 3 — "A PRODUCT OF" + buildingit logo fade in, hold, then overlay
 *           fades to the page
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Plays on every page load/refresh.
 */
import { useEffect, useState } from "react";

const MARK_URL = "/logo.png";
const BUILDINGIT_URL = "/buildingit.png";

const WORDS = [
  "The",
  "only",
  "app",
  "you",
  "need.",
  "For",
  "business.",
  "For",
  "life.",
];

// Timeline (ms)
const TYPE_START = 350; // first word appears
const TYPE_STEP = 240; // one word every 240ms → typing ends ~2510ms
const ACT1_HOLD_UNTIL = 3350; // tagline fully visible until here
const ACT2_IN = 3800; // logo + name fade in
const ACT2_OUT = 5700; // logo + name fade out
const ACT3_IN = 6150; // buildingit credit fades in
const OVERLAY_OUT = 7650; // whole overlay starts fading to the page

export default function IntroOverlay() {
  const [wordCount, setWordCount] = useState(0);
  const [act, setAct] = useState(1); // 1, 2, 3; 0 = between acts
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    // Preload act images up front so Act 2/3 never show empty frames.
    [MARK_URL, BUILDINGIT_URL].forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const timers: number[] = [];
    WORDS.forEach((_, i) => {
      timers.push(
        window.setTimeout(() => setWordCount(i + 1), TYPE_START + i * TYPE_STEP)
      );
    });
    timers.push(
      window.setTimeout(() => setAct(0), ACT1_HOLD_UNTIL),
      window.setTimeout(() => setAct(2), ACT2_IN),
      window.setTimeout(() => setAct(0), ACT2_OUT),
      window.setTimeout(() => setAct(3), ACT3_IN),
      window.setTimeout(() => setDone(true), OVERLAY_OUT)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const actStyle = (n: number): React.CSSProperties => ({
    opacity: act === n ? 1 : 0,
    transform:
      act === n ? "translateY(0) scale(1)" : "translateY(10px) scale(0.985)",
    transition:
      "opacity 500ms cubic-bezier(0.23,1,0.32,1), transform 600ms cubic-bezier(0.23,1,0.32,1)",
  });

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
      style={{
        backgroundColor: "#ffffff",
        opacity: done ? 0 : 1,
        visibility: done ? "hidden" : "visible",
        transition:
          "opacity 700ms cubic-bezier(0.23,1,0.32,1), visibility 0s 700ms",
      }}
    >
      {/* Act 1 — tagline typed word by word */}
      <div
        className="absolute inset-0 flex items-center justify-center px-4"
        style={actStyle(1)}
      >
        <p
          className="text-center font-display font-bold tracking-tight leading-tight"
          style={{
            color: "#0a0a0a",
            whiteSpace: "nowrap",
            fontSize: "clamp(1rem, 3.4vw, 3rem)",
          }}
        >
          {WORDS.map((word, i) => (
            <span
              key={i}
              style={{
                opacity: i < wordCount ? 1 : 0,
                transform:
                  i < wordCount ? "translateY(0)" : "translateY(0.35em)",
                display: "inline-block",
                transition:
                  "opacity 320ms cubic-bezier(0.23,1,0.32,1), transform 380ms cubic-bezier(0.23,1,0.32,1)",
                marginRight: "0.28em",
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      {/* Act 2 — Three Pillars logo + product name */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-6"
        style={actStyle(2)}
      >
        <img
          src={MARK_URL}
          alt="Three Pillars"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40"
        />
        <span
          className="font-display font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl"
          style={{ color: "#0a0a0a" }}
        >
          Three Pillars
        </span>
      </div>

      {/* Act 3 — a product of buildingit */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-4"
        style={actStyle(3)}
      >
        <span className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-zinc-500 uppercase">
          a product of
        </span>
        <img
          src={BUILDINGIT_URL}
          alt="buildingit"
          className="h-10 sm:h-12 md:h-14 w-auto"
        />
      </div>
    </div>
  );
}