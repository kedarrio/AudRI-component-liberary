import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Sidebar.module.css';

/**
 * Sidebar item definition.
 */
export interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
  section?: string;
}

export interface SidebarProps {
  items: SidebarItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  header?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeId,
  onItemClick,
  header,
  className,
  style,
}) => {
  // Use a local state for activeIndex to drive the animation, synchronized with props
  const [activeIndex, setActiveIndex] = useState<number>(
    items.findIndex((i) => i.id === activeId)
  );
  const [prevIndex, setPrevIndex] = useState<number>(activeIndex);

  // Sync internal index state when external activeId prop changes (e.g. on scroll)
  useEffect(() => {
    const newIndex = items.findIndex((i) => i.id === activeId);
    if (newIndex !== -1 && newIndex !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(newIndex);
    }
  }, [activeId, items, activeIndex]);

  const handleItemClick = (index: number, id: string) => {
    if (index === activeIndex) return;
    
    // Animate instantly on click
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    
    // Call the external handler for side effects (like scrolling/navigation)
    onItemClick?.(id);
  };

  useEffect(() => {
    if (activeIndex !== prevIndex) {
      const timer = setTimeout(() => {
        setPrevIndex(activeIndex);
      }, 400); // Duration match for CSS
      return () => clearTimeout(timer);
    }
  }, [activeIndex, prevIndex]);

  // Group items by section
  const sections = items.reduce((acc: Record<string, SidebarItem[]>, item: SidebarItem) => {
    const section = item.section || 'General';
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {} as Record<string, SidebarItem[]>);

  return (
    <aside className={clsx(styles.sidebar, className)} style={style}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.inner}>
        {Object.entries(sections).map(([name, sectionItems]) => (
          <div key={name} className={styles.group}>
            <h4 className={styles.sectionLabel}>{name}</h4>
            <div className={styles.list}>
              {sectionItems.map((item) => {
                const currentFlatIndex = items.indexOf(item);
                const isActive = activeIndex === currentFlatIndex;
                const isLeaving = prevIndex === currentFlatIndex && !isActive;

                return (
                  <button
                    key={item.id}
                    className={clsx(
                      styles.item,
                      isActive && styles.active,
                      isLeaving && styles.leaving
                    )}
                    onClick={() => handleItemClick(currentFlatIndex, item.id)}
                  >
                    <div className={styles.activeBg} />
                    <div className={styles.hoverBg} />

                    <div className={styles.content}>
                      {item.icon && (
                        <span className={clsx('material-symbols-rounded', styles.itemIcon)}>
                          {item.icon}
                        </span>
                      )}
                      <span className={styles.label}>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
