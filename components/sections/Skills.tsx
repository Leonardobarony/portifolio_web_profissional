"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillBadge from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-2">
            <p className="font-jetbrains text-accent text-sm tracking-widest uppercase">
              Competências
            </p>
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-text-primary">
              Stack Técnico
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(({ category, items }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col gap-3 p-5 rounded-xl bg-bg-card border border-border"
              >
                <h3 className="font-inter text-sm font-semibold text-text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <SkillBadge key={item} label={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
