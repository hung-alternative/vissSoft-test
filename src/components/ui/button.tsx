import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// # Component

// <div className={"aspect-square text-shadow-none bg-viss-gradient bg-white/30 backdrop-blur-sm"}></div>;

const buttonVariants = cva(
  "inline-flex items-center justify-center shadow-viss-btn gap-3 text-shadow-viss whitespace-nowrap rounded-[20px] text-2xl font-bold uppercase bg-white",
  {
    variants: {
      variant: {
        primary: "bg-viss-gradient-btn text-white",
        secondary: "",
        icon: "aspect-square rounded-full text-shadow-none w-[60px]",
        iconPrimary:
          "aspect-square rounded-full text-shadow-none w-[60px] bg-viss-gradient-btn text-white",
        transparent: "bg-white/30 backdrop-blur-sm text-white",
      },
      size: {
        default: "h-[60px]",
      },
    },
    compoundVariants: [
      {
        variant: "icon",
        className: "h-auto",
      },
      {
        variant: "iconPrimary",
        className: "h-auto",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "secondary" ? (
          <span
            className={
              "gradient-text flex items-center justify-center gap-3 bg-white"
            }
          >
            {props.children}
          </span>
        ) : (
          props.children
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

{
  /*<Button variant={"secondary"} className={"w-full"}>*/
}
{
  /*  Secondary*/
}
{
  /*</Button>*/
}
{
  /*<Button variant={"icon"} className={"w-12 bg-[#F2F7FF]"}>*/
}
{
  /*  <img src={"images/arrow.svg"} alt={"arrow"} className={"mt-1"} />*/
}
{
  /*</Button>*/
}
{
  /*<Button variant={"primary"}>Primary</Button>*/
}
{
  /*<Button variant={"transparent"}>Transparent</Button>*/
}
