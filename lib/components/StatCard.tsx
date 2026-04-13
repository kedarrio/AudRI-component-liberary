import React from 'react';
import clsx from 'clsx';
import styles from './StatCard.module.css';
import { Card } from './Card';

/**
 * StatCard component for KPIs.
 */
export interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  delta?: string | number;
  deltaDirection?: 'up' | 'down';
  progress?: number; // 0-100
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  unit,
  delta,
  deltaDirection,
  progress,
  variant = 'primary',
  className,
}) => {
  const deltaIcon = deltaDirection === 'up' ? 'trending_up' : 'trending_down';

  return (
    <Card className={clsx(styles['stat-card'], className)}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>
        {value}
        {unit && <span className={styles.unit}>{unit}</span>}
      </p>
      
      {delta && (
        <div className={clsx(styles.delta, deltaDirection && styles[deltaDirection])}>
          <span className="material-symbols-rounded icon-sm">{deltaIcon}</span>
          {delta}
        </div>
      )}

      {progress !== undefined && (
        <div className={styles['progress-track']}>
          <div
            className={clsx(styles['progress-fill'], styles[`fill-${variant}`])}
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}
    </Card>
  );
};
