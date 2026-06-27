import { memo } from "react";

interface SkillBadgeProps {
  label: string;
}

const SkillBadge = memo(function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="font-jetbrains text-xs px-3 py-1.5 rounded-md bg-bg-card border border-border text-text-muted whitespace-nowrap">
      {label}
    </span>
  );
});

export default SkillBadge;
