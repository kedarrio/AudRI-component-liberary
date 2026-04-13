import React from 'react';
import clsx from 'clsx';
import styles from './Skeleton.module.css';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'rect' | 'circle';
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'text',
  className,
}) => {
  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={clsx(
        styles.skeleton,
        variant === 'circle' && styles.circle,
        variant === 'rect' && styles.rect,
        variant === 'text' && styles.text,
        className
      )}
      style={style}
    />
  );
};
