import React from 'react';
import clsx from 'clsx';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  active?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onItemClick?: (item: BreadcrumbItem) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  onItemClick,
  className,
}) => {
  return (
    <nav className={clsx(styles.breadcrumbs, className)} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <div className={clsx(styles.item, item.active && styles.active)}>
            {item.icon && (
              <span className={clsx('material-symbols-rounded', styles.icon)}>{item.icon}</span>
            )}
            {item.href && !item.active ? (
              <a
                href={item.href}
                className={styles.link}
                onClick={(e) => {
                  if (onItemClick) {
                    e.preventDefault();
                    onItemClick(item);
                  }
                }}
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
          {index < items.length - 1 && (
            <span className={styles.separator} aria-hidden="true">
              /
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
