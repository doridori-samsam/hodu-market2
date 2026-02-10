import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "white" | "dark";
  size?: "default" | "small" | "large";
  className?: string;
  children: React.ReactNode;
}

function ButtonComponent(
  {
    variant = "primary",
    size = "default",
    className = "",
    children,
    type = "button",
    ...rest
  }: ButtonBaseProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      {...rest}
      ref={ref}
      className={`btn btn-${variant} btn-${size} btn-hover-trans ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

const Button = forwardRef(ButtonComponent);
Button.displayName = "Button";

export default Button;
