/**
 * Three Pillars. IntersectionObserver-based scroll reveal wrapper.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 */
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
  as?: "div" | "section" | "span" | "li";
  style?: CSSProperties;
}

export default function Reveal({ children, delay = 0, className = "", as = "div", style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
