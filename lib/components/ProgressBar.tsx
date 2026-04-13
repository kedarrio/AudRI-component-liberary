import React from 'react';
import clsx from 'clsx';
import styles from './ProgressBar.module.css';

/**
 * ProgressBar component.
 */
export interface ProgressBarProps {
  progress: number; // 0-100
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'primary',
  size = 'md',
  className,
}) => {
  return (
    <div className={clsx(styles.track, styles[`size-${size}`], className)}>
      <div
        className={clsx(styles.fill, styles[`fill-${variant}`])}
        style={{ transform: `scaleX(${Math.min(100, Math.max(0, progress)) / 100})` }}
      />
    </div>
  );
};
