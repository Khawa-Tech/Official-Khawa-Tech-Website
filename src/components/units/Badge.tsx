import React from "react";

interface BadgeProps {
  children?: React.ReactNode;
  title?: string;
  pulse?: boolean;
  className?: string;
}

export default function Badge({ children, title, pulse = true, className = "" }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-[10px] sm:text-xs font-semibold tracking-widest text-foreground/80 uppercase ${className}`}>
      {pulse && <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />}
      {title || children}
    </div>
  );
}
