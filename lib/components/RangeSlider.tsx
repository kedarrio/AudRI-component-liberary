import React from 'react';
import clsx from 'clsx';
import styles from './RangeSlider.module.css';

export interface RangeSliderProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.header}>
        {label && <label className={styles.label}>{label}</label>}
        <span className={styles.value}>{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.slider}
      />
    </div>
  );
};
