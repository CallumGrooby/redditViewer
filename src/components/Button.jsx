import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../ultilies/ButtonUltis";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium [&>*]:transition-colors transition-colors disabled:opacity-50 disabled:pointer-events-none  data-[state=open]:bg-slate-100",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-background p-1  [&>*]:text-background hover:[&>*]:text-secondary focus:bg-secondary",
        white:
          "bg-background text-white hover:bg-secondary p-1  [&>*]:text-primary hover:[&>*]:text-background",
        // destructive:
        //   "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        // outline:
        //   "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        // subtle:
        //   "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        // ghost:
        //   "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        // link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "w-10 h-10 rounded-full",
        sm: "w-8 h-8 rounded-full",
        lg: "w-12 h-12 rounded-full p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, children, href, variant, size, isSelected, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
