import React, { useState, useId } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

/**
 * Input component for AuDRI Design System.
 * Supports text, search, password, email types.
 * Optional label, hint, error, leading icon, and disabled state.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'text' | 'search' | 'password' | 'email';
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  hint,
  error,
  leadingIcon,
  className,
  disabled,
  id,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const generatedId = useId();
  const inputId = id ?? generatedId;
  
  const isPassword = type === 'password';
  const currentType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={clsx(styles['input-group'], className)}>
      {label && (
        <label htmlFor={inputId} className={styles['input-label']}>
          {label}
        </label>
      )}
      <div className={styles['input-wrapper']}>
        {leadingIcon && (
          <span className={clsx("material-symbols-rounded icon-sm", styles['input-icon'])}>
            {leadingIcon}
          </span>
        )}
        <input
          id={inputId}
          type={currentType}
          className={clsx(
            styles.input,
            error && styles['input-error'],
            leadingIcon && styles['has-icon'],
            isPassword && styles['has-toggle']
          )}
          disabled={disabled}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className={styles['password-toggle']}
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <span className="material-symbols-rounded icon-sm">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        )}
      </div>
      {error ? (
        <span className={styles['input-error-msg']}>{error}</span>
      ) : (
        hint && <span className={styles['input-hint']}>{hint}</span>
      )}
    </div>
  );
};
