import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../button/button";
import styles from "./theme-switch.module.css";

export type ThemeSwitchVariant = "reveal" | "eclipse" | "split" | "rise";
export type Theme = "light" | "dark";

export interface ThemeSwitchProps {
  theme: Theme;
  variant?: ThemeSwitchVariant;
  onThemeChange: (
    next: Theme,
    variant: ThemeSwitchVariant,
    trigger: HTMLElement
  ) => void;
  label?: string;
  iconOnly?: boolean;
  className?: string;
}

export function ThemeSwitch({
  theme,
  variant = "reveal",
  onThemeChange,
  label = "Dark mode",
  iconOnly = false,
  className,
}: ThemeSwitchProps) {
  const [interacted, setInteracted] = useState(false);
  const next = theme === "light" ? "dark" : "light";
  const Icon = theme === "light" ? Sun : Moon;
  const classes = [
    styles.themeSwitch,
    styles[variant],
    iconOnly && styles.iconOnly,
    interacted && styles.interacted,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Button
      type="button"
      size="sm"
      variant="secondary"
      className={classes}
      data-theme={theme}
      aria-label={label}
      aria-pressed={theme === "dark"}
      onClick={event => {
        setInteracted(true);
        onThemeChange(next, variant, event.currentTarget);
      }}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <span key={theme} className={styles.icon}>
          <Icon size={16} strokeWidth={1.75} />
        </span>
      </span>
      {!iconOnly && <span className={styles.label}>{label}</span>}
    </Button>
  );
}

export default ThemeSwitch;
