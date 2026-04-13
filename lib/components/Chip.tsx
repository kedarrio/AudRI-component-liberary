import React from 'react';
import clsx from 'clsx';
import styles from './Chip.module.css';

/**
 * Chip component for filter toggles.
 * Can be active or inactive.
 */
export interface ChipProps {
  active?: boolean;
  icon?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  active = false,
  icon,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={clsx(styles.chip, active && styles.active, className)}
      onClick={onClick}
      type="button"
    >
      {icon && <span className={clsx("material-symbols-rounded icon-sm", styles.icon)}>{icon}</span>}
      {children}
    </button>
  );
};
