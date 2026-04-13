import React from 'react';
import clsx from 'clsx';
import styles from './Toggle.module.css';

/**
 * Toggle component (Switch).
 * Fully controlled.
 */
export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className,
}) => {
  return (
    <label className={clsx(styles.toggle, disabled && styles.disabled, className)}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div className={styles.track}>
        <div className={styles.thumb} />
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
