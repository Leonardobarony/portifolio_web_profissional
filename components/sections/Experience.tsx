"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-2">
            <p className="font-jetbrains text-accent text-sm tracking-widest uppercase">Trajetória</p>
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-text-primary">Experiência Profissional</h2>
          </div>

          <div className="relative flex flex-col gap-0">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden sm:block" />

            {experience.map(({ company, role, period, duration, highlights }, i) => (
              <motion.div
                key={`${company}-${role}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative sm:pl-12 pb-10 last:pb-0"
              >
                <div className="absolute left-[13px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent hidden sm:block" />

                <div className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-inter text-base font-semibold text-text-primary">{role}</h3>
                    <span className="font-jetbrains text-xs text-text-muted whitespace-nowrap">
                      {period} · {duration}
                    </span>
                  </div>
                  <p className="font-jetbrains text-sm text-accent">{company}</p>

                  <ul className="mt-2 flex flex-col gap-1">
                    {highlights.map((h) => (
                      <li key={h} className="text-text-muted text-sm flex gap-2">
                        <span className="text-accent mt-1 shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
