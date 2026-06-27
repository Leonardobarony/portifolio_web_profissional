import { ExternalLink, BarChart2, AppWindow, Code2 } from "lucide-react";
import type { Project, ProjectType } from "@/data/projects";

const typeIcon: Record<ProjectType, React.ReactNode> = {
  Relatório: <BarChart2 size={16} className="text-accent" />,
  App: <AppWindow size={16} className="text-accent" />,
  "Open Source": <Code2 size={16} className="text-accent" />,
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl bg-bg-card border border-border hover:-translate-y-1 transition-transform duration-200">
      <div className="flex items-center gap-2">
        {typeIcon[project.type]}
        <span className="font-jetbrains text-xs text-accent uppercase tracking-wide">
          {project.type}
        </span>
      </div>

      <h3 className="text-text-primary font-semibold text-lg leading-snug">
        {project.title}
      </h3>

      <p className="text-text-muted text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-jetbrains text-xs px-2 py-1 rounded bg-bg-primary border border-border text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors mt-auto"
      >
        {project.linkLabel}
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
