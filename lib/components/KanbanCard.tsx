import React from 'react';
import clsx from 'clsx';
import styles from './KanbanCard.module.css';
import { Avatar, AvatarGroup } from './Avatar';

export interface KanbanCardProps {
  id: string;
  title: string;
  status: 'todo' | 'progress' | 'review' | 'done';
  statusLabel: string;
  date?: string;
  assignees?: { name: string; src?: string }[];
  onClick?: (id: string) => void;
  className?: string;
}

export const KanbanCard: React.FC<KanbanCardProps> = ({
  id,
  title,
  status,
  statusLabel,
  date,
  assignees = [],
  onClick,
  className,
}) => {
  return (
    <div 
      className={clsx(styles.card, className)}
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
      <header className={styles.header}>
        <div className={clsx(styles.statusTag, styles[`status_${status}`])}>
          {statusLabel}
        </div>
        <span className={clsx('material-symbols-rounded', styles.metaIcon)}>more_horiz</span>
      </header>

      <div className={styles.title}>{title}</div>

      <footer className={styles.footer}>
        <AvatarGroup>
          {assignees.map((a, i) => (
            <Avatar key={i} name={a.name} src={a.src} size="xs" />
          ))}
        </AvatarGroup>
        
        {date && (
          <div className={styles.meta}>
            <span className={clsx('material-symbols-rounded', styles.metaIcon)}>schedule</span>
            {date}
          </div>
        )}
      </footer>
    </div>
  );
};
