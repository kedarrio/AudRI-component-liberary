import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Tabs.module.css';

export interface Tab {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  activeTabId: string;
  onChange: (id: string) => void;
  variant?: 'underline' | 'pills';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTabId,
  onChange,
  variant = 'underline',
  className,
}) => {
  const isPills = variant === 'pills';
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
    opacity: 0,
    width: 0,
    left: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeTab = activeTabId ? itemRefs.current[activeTabId] : null;
    const container = containerRef.current;

    if (activeTab && container) {
      const tabRect = activeTab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setIndicatorStyle({
        opacity: 1,
        width: `${tabRect.width}px`,
        transform: `translateX(${tabRect.left - containerRect.left}px)`,
        height: isPills ? `${tabRect.height}px` : undefined,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeTabId, tabs, isPills]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        isPills ? styles['pill-container'] : styles.tabs,
        className
      )}
      role="tablist"
    >
      <div
        className={clsx(
          isPills ? styles.pillIndicator : styles.underlineIndicator
        )}
        style={indicatorStyle}
      />

      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            ref={(el) => (itemRefs.current[tab.id] = el)}
            role="tab"
            aria-selected={isActive}
            className={clsx(
              styles.tab,
              isActive && (isPills ? styles.pill_active : styles.active),
              isPills && styles.pill
            )}
            onClick={() => !isActive && !tab.disabled && onChange(tab.id)}
            disabled={tab.disabled}
          >
            {tab.icon && (
              <span className={clsx('material-symbols-rounded', styles.icon)}>{tab.icon}</span>
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
