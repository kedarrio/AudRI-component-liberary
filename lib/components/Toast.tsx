import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import clsx from 'clsx';
import styles from './Toast.module.css';

/**
 * Toast variant definition.
 */
export type ToastVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral';

/**
 * Toast item definition.
 */
export interface ToastItem {
  id: string;
  variant: ToastVariant;
  title: string;
  body?: string;
  duration?: number;
}

/**
 * Toast context value definition.
 */
interface ToastContextValue {
  addToast: (toast: Omit<ToastItem, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

/**
 * Toast Provider for managing notifications.
 */
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className={styles.container}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

/**
 * Individual Toast Component.
 */
export interface ToastProps extends ToastItem {
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  variant = 'neutral',
  title,
  body,
  onClose,
  duration = 4000,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(onClose, 400); // match --dur-moderate
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, handleClose]);

  const iconName = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info',
    neutral: 'notifications',
  }[variant];

  return (
    <div className={clsx(styles.toast, styles[`toast-${variant}`], isExiting && styles.exiting)}>
      <span className={clsx("material-symbols-rounded icon-md", styles.icon)}>
        {iconName}
      </span>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {body && <p className={styles.body}>{body}</p>}
      </div>
      <button className={styles.close} onClick={handleClose} aria-label="Close toast">
        <span className="material-symbols-rounded icon-sm">close</span>
      </button>
    </div>
  );
};
