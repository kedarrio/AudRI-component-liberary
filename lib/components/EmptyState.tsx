import React from 'react';
import clsx from 'clsx';
import styles from './EmptyState.module.css';

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon = 'inbox',
  action,
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.iconWrapper}>
        <span className={clsx('material-symbols-rounded', styles.icon)}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};
