import React from 'react';
import clsx from 'clsx';
import styles from './Checkbox.module.css';

/**
 * Checkbox component.
 * Fully controlled.
 */
export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className,
}) => {
  return (
    <label className={clsx(styles.checkbox, disabled && styles.disabled, className)}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <div className={styles.box} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
