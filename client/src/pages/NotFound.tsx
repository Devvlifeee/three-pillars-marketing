/**
 * Three Pillars. 404: lost in space.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, starfield.
 */
import { Link } from "wouter";
import Starfield from "@/components/effects/Starfield";
import { Home, ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Starfield className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

      <div className="relative z-10 container text-center py-24">
        <p className="font-mono text-xs tracking-widest text-zinc-500">
          SIGNAL LOST, SECTOR UNCHARTED
        </p>
        <h1 className="font-display font-semibold leading-none mt-6 select-none">
          <span className="text-silver text-[8rem] sm:text-[12rem] tracking-tighter">404</span>
        </h1>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
          You've drifted off the map
        </h2>
        <p className="text-zinc-400 mt-4 max-w-md mx-auto leading-relaxed">
          This page doesn't exist in the Three Pillars universe, it may have
          been moved, renamed, or never launched at all.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/"
            className="press inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5 hover:bg-zinc-200"
          >
            <Home className="w-4 h-4" />
            Return to base
          </Link>
          <Link
            href="/modules"
            className="press inline-flex items-center gap-2 rounded-full border border-white/20 text-white font-medium px-7 py-3.5 hover:bg-white/[0.06] hover:border-white/30 transition-colors"
          >
            <Compass className="w-4 h-4" />
            Explore the module universe
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
