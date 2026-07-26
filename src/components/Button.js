import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-[4px] px-5 py-3 text-sm font-semibold transition will-change-transform active:scale-[0.99]";

const variants = {
  primary:
    "bg-ink text-white shadow-sm hover:shadow-md hover:-translate-y-[1px] hover:bg-ink-800 transition-all duration-200 border border-transparent",
  secondary:
    "bg-white text-ink-900 shadow-sm hover:-translate-y-[1px] border border-ink-200 hover:bg-ink-50 transition-all duration-200",
  ghost:
    "bg-transparent text-ink-900 hover:bg-ink-50 border border-transparent hover:border-ink-200 transition-all duration-200",
  brand:
    "bg-brand text-white shadow-sm hover:-translate-y-[1px] hover:bg-brand-600 transition-all duration-200 border border-transparent"
};

const sizes = {
  sm: "px-4 py-2 text-xs rounded-[4px]",
  md: "px-5 py-2.5 text-sm rounded-[4px]",
  lg: "px-6 py-3 text-base rounded-[4px]"
};

export default function Button({
  to,
  href,
  onClick,
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  target,
  rel,
  ...rest
}) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={target}
        rel={rel || (target === "_blank" ? "noreferrer" : undefined)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
}
