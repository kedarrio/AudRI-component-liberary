import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

/**
 * Card component for building surfaces.
 * Supports hoverable state and panel (raised/subtle) variant.
 */
export interface CardProps {
  variant?: 'base' | 'panel';
  hoverable?: boolean;
  padding?: 'sm' | 'md' | 'none';
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'base',
  hoverable = false,
  padding = 'md',
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        styles[`card-${variant}`],
        hoverable && styles.hoverable,
        styles[`padding-${padding}`],
        className
      )}
    >
      {children}
    </div>
  );
};
