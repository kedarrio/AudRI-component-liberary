import React from 'react';
import clsx from 'clsx';
import styles from './LoadingLine.module.css';

export interface LoadingLineProps {
  variant?: 'solid' | 'glass';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A horizontal, indeterminate loading line (progress bar).
 */
export const LoadingLine: React.FC<LoadingLineProps> = ({
  variant = 'solid',
  className,
  style,
}) => {
  return (
    <div
      className={clsx(
        styles.loading_line,
        variant === 'glass' && styles.glass,
        className
      )}
      style={style}
    />
  );
};
