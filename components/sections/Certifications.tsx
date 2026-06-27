"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications, courses } from "@/data/certifications";

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-2">
            <p className="font-jetbrains text-accent text-sm tracking-widest uppercase">Formação Contínua</p>
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-text-primary">Certificações & Cursos</h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-base font-semibold text-text-primary border-b border-border pb-2">
                Certificações
              </h3>
              <ul className="flex flex-col gap-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-text-muted text-sm flex gap-2">
                    <span className="text-accent shrink-0">›</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-base font-semibold text-text-primary border-b border-border pb-2">
                Cursos Concluídos
              </h3>
              <ul className="flex flex-col gap-2">
                {courses.map((course) => (
                  <li key={course} className="text-text-muted text-sm flex gap-2">
                    <span className="text-accent shrink-0">›</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
