import React from 'react';
import clsx from 'clsx';
import styles from './Alert.module.css';

/**
 * Alert component variants.
 */
export type AlertVariant = 'success' | 'warning' | 'danger' | 'info';

/**
 * Alert component.
 */
export interface AlertProps {
  variant?: AlertVariant;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  className,
  style,
  children,
}) => {
  const iconName = {
    success: 'check_circle',
    warning: 'warning',
    danger: 'error',
    info: 'info',
  }[variant];

  return (
    <div 
      className={clsx(styles.alert, styles[`alert-${variant}`], className)}
      style={style}
    >
      <span className={clsx("material-symbols-rounded icon-md", styles.icon)}>
        {iconName}
      </span>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {children && <div className={styles.body}>{children}</div>}
      </div>
    </div>
  );
};
