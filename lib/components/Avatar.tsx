import React from 'react';
import clsx from 'clsx';
import styles from './Avatar.module.css';

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  status,
  className,
}) => {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '?';

  return (
    <div className={clsx(styles.avatar, styles[`avatar_${size}`], className)}>
      {src ? (
        <img src={src} alt={name ?? ''} className={styles.image} />
      ) : (
        <span>{initials}</span>
      )}
      {status && (
        <div className={clsx(styles.status, styles[status])} />
      )}
    </div>
  );
};

export interface AvatarGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className }) => {
  return (
    <div className={clsx(styles.group, className)}>
      {children}
    </div>
  );
};
