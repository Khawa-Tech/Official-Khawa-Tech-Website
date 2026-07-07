import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = "", hoverEffect = true, onClick }: CardProps) {
  // Check if custom styles are injected in className to avoid duplication/conflicts
  const hasPadding = /\bp[xy]?-\d+/.test(className) || /\bp-\[/.test(className);
  const hasBorder = /\bborder-/.test(className) || /\bborder\b/.test(className);
  const hasBg = /\bbg-/.test(className);
  const hasRounded = /\brounded-/.test(className);
  const hasBackdrop = /\bbackdrop-/.test(className);
  const hasShadow = /\bshadow-/.test(className);

  const defaultClasses = [
    hasPadding ? "" : "p-6",
    hasRounded ? "" : "rounded-2xl",
    hasBorder ? "" : "border border-white/[0.05]",
    hasBg ? "" : "bg-[#020515]/60",
    hasBackdrop ? "" : "backdrop-blur-md",
  ].filter(Boolean).join(" ");

  const hoverClasses = hoverEffect 
    ? `transition-all duration-300 hover:-translate-y-1 ${
        hasBorder ? "" : "hover:border-primary/45"
      } ${
        hasBg ? "" : "hover:bg-primary/[0.03]"
      } ${
        hasShadow ? "" : "hover:shadow-[0_8px_30px_rgba(15,73,225,0.08)]"
      }`
    : "";

  return (
    <div
      onClick={onClick}
      className={`${defaultClasses} ${hoverClasses} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
