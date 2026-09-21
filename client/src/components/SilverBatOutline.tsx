/**
 * SilverBatOutline — borderline-only (stroke, no fill) SilverBat mark.
 * Derived from the official SilverBat logo supplied by the owner.
 * Used wherever SilverBat was previously represented by a generic sparkle icon.
 * The filled logo in the "Everything connects" backplane is intentionally untouched.
 *
 * Two assets, two jobs:
 * - OUTLINE_URL: stroke-only mark, reads well at larger sizes (>= 48px).
 * - SMALL_URL: solid silver silhouette, optimized for tiny 16-24px icon slots
 *   where outline strokes turn to mush.
 */
const OUTLINE_URL = "/silverbat-outline.png";
const SMALL_URL = "/silverbat-logo.png";

export function SilverBatOutline({ className = "" }: { className?: string }) {
  return (
    <img
      src={OUTLINE_URL}
      alt="SilverBat AI"
      className={`h-auto select-none pointer-events-none ${className}`}
      draggable={false}
    />
  );
}

/**
 * Small-size SilverBat mark — solid silhouette that stays legible at 16-24px.
 */
export function SilverBatSmall({ className = "" }: { className?: string }) {
  return (
    <img
      src={SMALL_URL}
      alt="SilverBat AI"
      className={`h-auto select-none pointer-events-none ${className}`}
      draggable={false}
    />
  );
}

/**
 * Icon-compatible wrapper for card configs expecting a lucide-style component
 * (e.g. `icon: SilverBatOutlineIcon`). Renders the SMALL solid mark, since
 * icon slots are ~20-24px where the outline version is illegible.
 */
export function SilverBatOutlineIcon({ className = "" }: { className?: string }) {
  return <SilverBatSmall className={className} />;
}