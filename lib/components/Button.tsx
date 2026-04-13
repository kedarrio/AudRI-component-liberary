import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

/**
 * Button component for AuDRI Design System.
 * Accepts variants: primary, secondary, ghost, outline, danger, danger-solid.
 * Accepts sizes: xs, sm, md, lg, xl.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'danger-solid' | 'brand-cta';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: string;
  iconOnly?: boolean;
  loading?: boolean;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  icon,
  iconOnly = false,
  loading = false,
  className,
  children,
  disabled,
  active,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.btn,
        styles[`btn-${variant}`],
        styles[`btn-${size}`],
        iconOnly && styles['btn-icon'],
        active && styles['btn-active'],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="material-symbols-rounded anim-spin icon-sm">sync</span>
      ) : (
        icon && (
          <span className={clsx(
            "material-symbols-rounded",
            (size === 'xs' || size === 'sm') ? 'icon-sm' : 'icon-md'
          )}>
            {icon}
          </span>
        )
      )}
      {!iconOnly && children}
    </button>
  );
};
