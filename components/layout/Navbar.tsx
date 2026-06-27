"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Certificações", href: "#certifications" },
  { label: "Projetos", href: "#projects" },
];

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
  mobile?: boolean;
  onClick?: () => void;
}

function NavLink({ href, label, active, mobile = false, onClick }: NavLinkProps) {
  const base = "text-sm transition-colors";
  const activeClass = "text-accent";
  const inactiveClass = "text-text-muted hover:text-text-primary";
  const mobileClass = mobile ? "block px-6 py-3" : "";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${mobileClass} ${active ? activeClass : inactiveClass}`}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(href);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg-primary/80 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <span className="font-inter text-accent font-bold text-sm tracking-tight whitespace-nowrap flex-shrink-0">
          Leonardo Augusto Barony
        </span>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <li key={href}>
              <NavLink href={href} label={label} active={active === href} />
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-text-muted hover:text-text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col border-t border-border bg-bg-primary">
          {links.map(({ label, href }) => (
            <li key={href}>
              <NavLink
                href={href}
                label={label}
                active={active === href}
                mobile
                onClick={() => setOpen(false)}
              />
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
