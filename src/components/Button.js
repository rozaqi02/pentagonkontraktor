import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition will-change-transform active:scale-[0.99]";

const variants = {
  primary:
    "bg-ink text-white shadow-soft hover:shadow-glow hover:-translate-y-[1px] ring-1 ring-black/5",
  secondary:
    "bg-white text-ink-900 shadow-soft hover:-translate-y-[1px] ring-1 ring-ink-900/10",
  ghost:
    "bg-transparent text-ink-900 hover:bg-ink-50 ring-1 ring-transparent hover:ring-ink-900/10",
  brand:
    "bg-brand text-white shadow-soft hover:-translate-y-[1px] hover:shadow-glow ring-1 ring-black/5"
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-5 py-3 text-sm rounded-2xl",
  lg: "px-6 py-3.5 text-base rounded-2xl"
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
