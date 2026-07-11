import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "text" | "glow";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, type = "button", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 font-sora active:scale-[0.98]";
    
    const variants = {
      primary: "bg-brand-accent text-white hover:bg-blue-700 shadow-md shadow-brand-accent/15",
      secondary: "bg-brand-elevated text-brand-text border border-brand-border hover:border-brand-border-hover hover:bg-brand-secondary",
      outline: "border border-brand-border text-brand-text bg-transparent hover:bg-brand-border hover:text-white",
      text: "text-brand-text hover:text-white bg-transparent p-0 hover:translate-x-1 duration-200",
      glow: "bg-brand-accent text-white hover:bg-blue-700 relative overflow-hidden after:absolute after:inset-0 after:bg-white/10 after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-700 shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.65)]"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-13 px-8 text-lg rounded-xl"
    };

    const combinedStyles = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      const isAnchor = href.startsWith("#");
      if (isAnchor) {
        return (
          <a href={href} className={combinedStyles}>
            {props.children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedStyles}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        type={type}
        className={combinedStyles}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
