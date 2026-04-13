import React from 'react';
import clsx from 'clsx';
import styles from './NotificationItem.module.css';

export interface NotificationItemProps {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  unread?: boolean;
  type?: 'info' | 'success' | 'warning' | 'error';
  onClick?: (id: string) => void;
  className?: string;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  id,
  title,
  description,
  timestamp,
  unread = false,
  type = 'info',
  onClick,
  className,
}) => {
  const iconMap = {
    info: 'info',
    success: 'check_circle',
    warning: 'warning',
    error: 'error',
  };

  return (
    <div 
      className={clsx(styles.item, unread && styles.unread, className)}
      onClick={() => onClick?.(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(id);
        }
      }}
    >
      <div className={clsx(styles.iconWrapper, styles[`type_${type}`])}>
        <span className={clsx('material-symbols-rounded', styles.icon)}>
          {iconMap[type]}
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <span className={styles.timestamp}>{timestamp}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
