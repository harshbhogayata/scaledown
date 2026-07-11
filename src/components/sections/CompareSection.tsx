"use client";

import { Reveal, SectionEyebrow } from "@/components/site/Reveal";
import { COMPARE } from "@/lib/showcase";

export function CompareSection() {
  return (
    <section className="border-b border-border/70 py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionEyebrow>{COMPARE.eyebrow}</SectionEyebrow>
          <h2 className="display max-w-3xl text-4xl text-foreground md:text-5xl lg:text-6xl">
            {COMPARE.title}{" "}
            <span className="italic text-primary">{COMPARE.italic}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {COMPARE.body}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                {COMPARE.headers.map((h, i) => (
                  <th
                    key={h || "metric"}
                    className={`px-3 py-4 font-semibold ${
                      i === 1 ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.rows.map((row) => (
                <tr key={row[0]} className="border-b border-border/70">
                  {row.map((cell, i) => (
                    <td
                      key={`${row[0]}-${i}`}
                      className={`px-3 py-4 ${
                        i === 0
                          ? "font-medium text-foreground"
                          : i === 1
                            ? "font-semibold text-primary"
                            : "text-muted-foreground"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
