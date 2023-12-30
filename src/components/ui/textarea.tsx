import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full resize-y rounded-lg border-2 border-gray-200 bg-transparent p-3 text-base text-white outline-none placeholder:text-slate-100 disabled:pointer-events-none disabled:opacity-50 dark:border-indigo-700 dark:bg-indigo-500 dark:placeholder:text-slate-300",
          className,
        )}
        rows={2}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
