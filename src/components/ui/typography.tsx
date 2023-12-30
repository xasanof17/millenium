import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Title = {
  children: ReactNode;
  className?: string;
};

export function TypographyH1({ children, className }: Title) {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl xl:text-5xl",
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: Title) {
  return (
    <h2 className={cn(className, "tracking-tight first:mt-0")}>{children}</h2>
  );
}

export function TypographyH3({ children, className }: Title) {
  return (
    <h3
      className={cn(
        className,
        "scroll-m-20 text-2xl font-semibold tracking-tight",
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: Title) {
  return (
    <h4
      className={cn(
        className,
        "scroll-m-20 text-xl font-semibold tracking-tight",
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: Title) {
  return (
    <p className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className }: Title) {
  return (
    <blockquote className={cn(className, "mt-6 border-l-2 pl-6 italic")}>
      {children}
    </blockquote>
  );
}

export function TypographyMuted({ children, className }: Title) {
  return (
    <p className={cn(className, "text-sm text-muted-foreground")}>{children}</p>
  );
}

export function TypographySmall({ children, className }: Title) {
  return (
    <small className={cn(className, "text-sm font-medium leading-none")}>
      {children}
    </small>
  );
}
