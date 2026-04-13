import React from 'react';
import clsx from 'clsx';
import styles from './LineChart.module.css';

export interface LineChartProps {
  data: number[];
  width?: number | string;
  height?: number;
  variant?: 'primary' | 'success' | 'danger';
  className?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  width = '100%',
  height = 80,
  variant = 'primary',
  className,
}) => {
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min;
  
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((d - min) / range) * 100;
    return { x, y };
  });

  const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
  const areaD = `${pathD} L 100,100 L 0,100 Z`;

  return (
    <div className={clsx(styles.container, className)} style={{ width }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        width="100%"
        height={height}
        className={styles.svg}
      >
        <path
          d={areaD}
          className={clsx(styles.area, styles[`${variant}Area`])}
        />
        <path
          d={pathD}
          className={clsx(styles.path, styles[`${variant}Line`])}
        />
      </svg>
    </div>
  );
};
