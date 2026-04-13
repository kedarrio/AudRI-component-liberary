import React from 'react';
import clsx from 'clsx';
import styles from './DonutChart.module.css';

export interface DonutChartProps {
  value: number; // 0 to 100
  label?: string;
  subLabel?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  value,
  label,
  subLabel,
  size = 120,
  strokeWidth = 12,
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={clsx(styles.container, className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.svg}>
        <circle
          className={styles.bg}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className={styles.indicator}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
        />
      </svg>
      <div className={styles.center}>
        {label && <span className={styles.label}>{label}</span>}
        {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
      </div>
    </div>
  );
};
