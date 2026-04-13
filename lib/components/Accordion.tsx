import React, { useState, useId } from 'react';
import clsx from 'clsx';
import styles from './Accordion.module.css';

export interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  defaultOpen = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const headerId = useId();
  const panelId = useId();

  return (
    <div className={clsx(styles.accordion, isOpen && styles.open, className)}>
      <button
        id={headerId}
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={styles.title}>{title}</span>
        <span className={clsx('material-symbols-rounded', styles.chevron)}>
          expand_more
        </span>
      </button>
      <div 
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={styles.content}
      >
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
};
