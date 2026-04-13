import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import styles from './Drawer.module.css';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  side?: 'right' | 'left';
  className?: string;
  blurBackground?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  side = 'right',
  className,
  blurBackground = true,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Ensure frame registration for smooth transition
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 30);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = 'unset';
      }, 400); // match --dur-moderate
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return createPortal(
    <React.Fragment>
      <div
        className={clsx(
          styles.overlay, 
          isAnimating && styles.open,
          blurBackground && styles.blur
        )}
        onClick={onClose}
      />
      <div
        className={clsx(
          styles.drawer,
          styles[side],
          isAnimating && styles.open,
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <header className={styles.header}>
          <h3 id="drawer-title" className={clsx(styles.title, 'heading-sm')}>{title}</h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close drawer">
            <span className="material-symbols-rounded">close</span>
          </button>
        </header>
        <div className={styles.content}>
          {children}
        </div>
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </React.Fragment>,
    document.body
  );
};
