import { useState } from "react";
import {
  useCopyFeedback,
  type CopyFeedbackState,
} from "../lib/use-copy-feedback";
import styles from "./copy-button.module.css";

export interface CopyButtonProps {
  value: string;
  label?: string;
  copiedLabel?: string;
  failedLabel?: string;
  className?: string;
  iconOnly?: boolean;
  variant?: "outline" | "plain";
  disabled?: boolean;
  onCopied?: () => void;
}

function CopyIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M5 15c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2" />
    </svg>
  );
}

/**
 * The glyph a copy control shows: the copy icon at rest; on success it fades and a tick is drawn in its place, on
 * failure a short alert mark. `pulse` redraws the tick when the same value is copied twice. Shared with the site's copy controls.
 */
export function CopyGlyph({
  state,
  pulse = 0,
  size = 16,
}: {
  state: CopyFeedbackState;
  pulse?: number;
  size?: number;
}) {
  const key = state === "copied" ? `copied-${pulse}` : state;
  return (
    <span
      className={styles.glyph}
      style={{ width: size, height: size }}
      data-state={state}
      aria-hidden="true"
    >
      <span key={key} className={styles.glyphLayer}>
        {state === "copied" ? (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className={styles.check}
              d="M5 12.5l4.5 4.5L19 7.5"
              pathLength={1}
            />
          </svg>
        ) : state === "error" ? (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7.5v5" />
            <path d="M12 16.2h.01" />
          </svg>
        ) : (
          <CopyIcon size={size} />
        )}
      </span>
    </span>
  );
}

export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  failedLabel = "Could not copy",
  className,
  iconOnly = false,
  variant = "outline",
  disabled,
  onCopied,
}: CopyButtonProps) {
  const { state, copy } = useCopyFeedback(1800);
  const [pulse, setPulse] = useState(0);
  const text =
    state === "copied" ? copiedLabel : state === "error" ? failedLabel : label;
  async function handleCopy() {
    if (await copy(value)) {
      setPulse(count => count + 1);
      onCopied?.();
    }
  }

  return (
    <>
      <button
        type="button"
        className={[
          styles.button,
          iconOnly && styles.iconOnly,
          variant === "plain" && styles.plain,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => void handleCopy()}
        aria-label={iconOnly || state === "idle" ? label : `${text}. ${label}`}
        data-arc-control=""
        data-copy-state={state}
        disabled={disabled}
      >
        <CopyGlyph state={state} pulse={pulse} />
        {/* The label keeps the width of its longest word, so the button never resizes and nothing around it moves. */}
        {!iconOnly && (
          <span className={styles.label} aria-hidden="true">
            {Array.from(new Set([label, copiedLabel, failedLabel]), word => (
              <span key={word} className={styles.sizer}>
                {word}
              </span>
            ))}
            <span key={text} className={styles.word}>
              {text}
            </span>
          </span>
        )}
      </button>
      <span className={styles.srOnly} role="status">
        {state === "idle" ? "" : text}
      </span>
    </>
  );
}
