import { forwardRef, type ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      onClick,
      ...props
    },
    ref
  ) {
    const ariaDisabled = loading ? true : props["aria-disabled"];
    const blocksPress = ariaDisabled === true || ariaDisabled === "true";
    const classes = [styles.button, styles[variant], styles[size], className]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        {...props}
        ref={ref}
        data-arc-control=""
        data-loading={loading ? "" : undefined}
        className={classes}
        disabled={disabled}
        aria-busy={loading || props["aria-busy"]}
        aria-disabled={ariaDisabled}
        onClick={blocksPress ? event => event.preventDefault() : onClick}
      >
        {loading && (
          <span className={styles.loader} aria-hidden="true">
            <span className={styles.spinner} />
          </span>
        )}
        <span className={styles.label}>{children}</span>
      </button>
    );
  }
);

export default Button;
