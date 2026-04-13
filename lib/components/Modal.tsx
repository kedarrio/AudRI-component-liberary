import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import styles from './Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  blurBackground?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
  blurBackground = true,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Wait a frame + small delay to ensure transition registers
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
      }, 400); // 400ms match for durations.moderate
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return createPortal(
    <div
      className={clsx(
        styles.overlay, 
        isAnimating && styles.open, 
        blurBackground && styles.blur
      )}
      onClick={onClose}
    >
      <div
        className={clsx(styles.modal, className)}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <header className={styles.header}>
          <h3 id="modal-title" className={clsx(styles.title, 'heading-sm')}>{title}</h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <span className="material-symbols-rounded">close</span>
          </button>
        </header>
        <div className={styles.content}>
          {children}
        </div>
        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>,
    document.body
  );
};
