"use client";

import Image from "next/image";
import { Link2, Code2, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-bg-primary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-jetbrains text-accent text-sm tracking-widest uppercase">
            Portfólio Profissional
          </p>

          <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            {profile.name}
          </h1>

          <p className="font-jetbrains text-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
            {profile.title}
          </p>

          <p className="text-text-muted text-lg italic">
            &ldquo;{profile.tagline}&rdquo;
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-bg-primary font-semibold text-sm transition-colors"
            >
              <Link2 size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-muted hover:text-text-primary hover:border-accent transition-colors text-sm"
            >
              <Code2 size={16} />
              GitHub
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-muted hover:text-text-primary hover:border-accent transition-colors text-sm"
            >
              <FileDown size={16} />
              Baixar CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/10">
            <Image
              src={profile.avatar}
              alt={`Foto de ${profile.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
