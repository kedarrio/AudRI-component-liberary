import React from 'react';
import clsx from 'clsx';
import styles from './Spinner.module.css';

export interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'white';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  className,
}) => {
  return (
    <svg
      className={clsx(styles.spinner, styles[`spinner_${size}`], className)}
      viewBox="0 0 50 50"
      style={{ color: variant === 'white' ? '#fff' : `var(--color-${variant})` }}
    >
      <circle
        className={styles.circle}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );
};
