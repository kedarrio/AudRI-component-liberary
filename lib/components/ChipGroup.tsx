import React from 'react';
import clsx from 'clsx';
import { Chip } from './Chip';
import styles from './Chip.module.css';

/**
 * ChipGroup component to manage selection.
 */
export interface ChipGroupProps {
  items: { id: string; label: string; icon?: string }[];
  activeId?: string;
  onSelect: (id: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ChipGroup: React.FC<ChipGroupProps> = ({
  items,
  activeId,
  onSelect,
  className,
  style,
}) => {
  return (
    <div className={clsx(styles.chipGroup, className)} style={style}>
      {items.map(item => (
        <Chip
          key={item.id}
          active={item.id === activeId}
          icon={item.icon}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </Chip>
      ))}
    </div>
  );
};
