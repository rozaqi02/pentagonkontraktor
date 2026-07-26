import React from "react";
import cn from "classnames";

export default function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
