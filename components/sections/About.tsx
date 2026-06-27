"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "15+", label: "anos em tecnologia" },
  { value: "6+", label: "anos em dados" },
  { value: "8+", label: "empresas atendidas" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-bg-card">
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
              Sobre
            </p>
            <h2 className="font-inter text-3xl sm:text-4xl font-bold text-text-primary">
              Quem sou eu
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col gap-4 text-text-muted leading-relaxed">
              <p>
                Profissional com mais de <strong className="text-text-primary">15 anos de experiência</strong> em
                tecnologia, sendo os últimos <strong className="text-text-primary">6+ anos focados em Data Engineering
                e Business Intelligence</strong>.
              </p>
              <p>
                Atualmente como <strong className="text-text-primary">Power BI Tech Leader na Dataside</strong>,
                lidero equipes técnicas de BI, conduzo levantamento de requisitos com áreas de negócio e
                entrego soluções de dados de ponta a ponta — da ingestão ao insight.
              </p>
              <p>
                Formação em <strong className="text-text-primary">Engenharia de Telecomunicações (FUMEC)</strong> e
                Pós-graduação em <strong className="text-text-primary">Data Analytics (IGTI)</strong>. Experiência
                em projetos de consultoria, liderança técnica e arquitetura de soluções de dados em cloud
                (AWS, Microsoft Fabric, Databricks).
              </p>
              <p>
                Baseado em <strong className="text-text-primary">Contagem, Minas Gerais</strong>. Idiomas: Português
                (nativo) e Inglês (Professional Working).
              </p>
            </div>

            <div className="flex flex-row lg:flex-col gap-6 justify-center">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center lg:items-start gap-1">
                  <span className="font-inter text-4xl font-bold text-accent">
                    {value}
                  </span>
                  <span className="font-jetbrains text-xs text-text-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
