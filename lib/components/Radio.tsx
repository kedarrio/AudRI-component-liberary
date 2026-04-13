import React from 'react';
import clsx from 'clsx';
import styles from './Radio.module.css';

/**
 * Radio component.
 * Fully controlled.
 */
export interface RadioProps {
  checked: boolean;
  onChange: (value: string) => void;
  label?: string;
  value: string;
  name: string;
  disabled?: boolean;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  checked,
  onChange,
  label,
  value,
  name,
  disabled = false,
  className,
}) => {
  return (
    <label className={clsx(styles.radio, disabled && styles.disabled, className)}>
      <input
        type="radio"
        className={styles.input}
        checked={checked}
        name={name}
        value={value}
        onChange={() => onChange(value)}
        disabled={disabled}
      />
      <div className={styles.box}>
        <div className={styles.dot} />
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
