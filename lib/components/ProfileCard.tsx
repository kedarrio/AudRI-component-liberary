import React from 'react';
import clsx from 'clsx';
import styles from './ProfileCard.module.css';
import { Avatar } from './Avatar';

export interface ProfileCardProps {
  name: string;
  role: string;
  avatarSrc?: string;
  statusLabel?: string;
  onlineStatus?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  avatarSrc,
  statusLabel,
  onlineStatus,
  className,
}) => {
  return (
    <div className={clsx(styles.card, className)}>
      <Avatar 
        src={avatarSrc} 
        name={name} 
        size="md" 
        status={onlineStatus} 
      />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
      {statusLabel && <div className={styles.status}>{statusLabel}</div>}
    </div>
  );
};
