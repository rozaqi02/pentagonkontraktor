import React from "react";
import cn from "classnames";
import Container from "./Container";

export default function PageHero({ title, desc, image, children, className }) {
  return (
    <section className={cn("relative overflow-hidden bg-soft", className)}>
      {image ? (
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
        </div>
      ) : null}

      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {title}
          </h1>
          {desc ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-ink-700">
              {desc}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
