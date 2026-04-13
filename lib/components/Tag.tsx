import React from 'react';
import clsx from 'clsx';
import styles from './Tag.module.css';

/**
 * Tag component for status indicators.
 * Accepts variants: success, danger, warning, info, brand, neutral.
 * Includes an optional dot indicator.
 */
export interface TagProps {
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'brand' | 'neutral';
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({
  variant = 'neutral',
  dot = true,
  className,
  children,
}) => {
  return (
    <div className={clsx(styles.tag, styles[`tag-${variant}`], className)}>
      {dot && <span className={styles.dot} />}
      {children}
    </div>
  );
};
