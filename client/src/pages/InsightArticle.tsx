/**
 * Three Pillars — Insight article reader page.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith — pure black, silver/white, frosted glass.
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/effects/Reveal";
import { ARTICLES, getArticle, type ArticleBlock } from "@/lib/insights";

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display text-2xl font-semibold text-white mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="text-zinc-300 leading-[1.85] mt-5 text-[15px] sm:text-base">
          {block.text}
        </p>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-white/40 pl-6 my-9">
          <p className="font-display text-lg sm:text-xl text-silver leading-relaxed">
            {block.text}
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-zinc-300 leading-relaxed text-[15px] sm:text-base">
              <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mt-7 mb-2 rounded-xl border border-white/25 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/[0.06]">
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="text-left font-mono text-[11px] tracking-widest text-zinc-300 uppercase px-5 py-3"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-white/[0.12]">
                  {row.map((cell, j) => (
                    <td key={j} className="px-5 py-3 text-zinc-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "sources":
      return (
        <div className="mt-12 rounded-xl border border-white/15 bg-white/[0.02] p-6">
          <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mb-4">
            Sources
          </p>
          <ul className="space-y-2.5">
            {block.items.map((s) => (
              <li key={s.url} className="text-sm leading-relaxed">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export default function InsightArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticle(slug ?? "");

  if (!article) {
    return (
      <div className="pt-40 pb-24 min-h-screen text-center">
        <p className="font-mono text-xs tracking-widest text-zinc-500">404</p>
        <h1 className="font-display text-3xl font-bold text-white mt-3">
          Article not found
        </h1>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 mt-6 text-sm text-zinc-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Insights
        </Link>
      </div>
    );
  }

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <span className="font-mono text-[10px] tracking-widest px-2 py-0.5 rounded-full border border-white/15 bg-white/[0.04] text-zinc-400 uppercase">
              {article.category}
            </span>
            <span className="font-mono text-[11px] text-zinc-500 tracking-widest">
              {fmtDate(article.date)} · {article.readMinutes} MIN READ
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mt-5 leading-[1.15]">
            {article.title}
          </h1>
          <p className="text-zinc-400 mt-5 text-lg leading-relaxed">
            {article.excerpt}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent mt-10" />
          <article className="mt-2">
            {article.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </article>
        </Reveal>

        {/* CTA */}
        <Reveal delay={120}>
          <div className="mt-16 rounded-2xl border border-white/25 bg-white/[0.03] p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-white">
              Run your entire business on one platform.
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Billing, CRM, payroll, compliance, and 153+ modules. One login, one
              data layer, one bill.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 mt-5 rounded-full bg-white text-black text-sm font-medium px-6 py-2.5 hover:bg-zinc-200 transition-colors"
            >
              Book a demo
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Related */}
        <div className="mt-16">
          <p className="font-mono text-xs tracking-widest text-zinc-500 mb-5">
            KEEP READING
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="group rounded-2xl border border-white/25 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/40 transition-colors p-6"
              >
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                  {a.category}
                </span>
                <h4 className="font-display text-base font-semibold text-white mt-2 group-hover:text-silver transition-colors">
                  {a.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
