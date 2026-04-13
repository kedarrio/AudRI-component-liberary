import React from 'react';
import clsx from 'clsx';
import styles from './ActivityFeed.module.css';

export interface ActivityItem {
  id: string;
  label: string;
  timestamp: string;
  icon?: string;
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  className?: string;
}

export interface ActivityFeedProps {
  items: ActivityItem[];
  className?: string;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ items, className }) => {
  return (
    <div className={clsx(styles.feed, className)}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.line} />
          <div className={clsx(styles.iconWrapper, item.color && styles[`icon_${item.color}`])}>
            {item.icon && (
              <span 
                className={clsx('material-symbols-rounded', styles.icon)}
                style={{ color: item.color ? `var(--color-${item.color})` : 'inherit' }}
              >
                {item.icon}
              </span>
            )}
          </div>
          <div className={styles.content}>
            <div className={styles.label}>{item.label}</div>
            <div className={styles.timestamp}>{item.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
