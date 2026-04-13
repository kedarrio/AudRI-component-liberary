import React, { useId } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css'; // Reusing some input styles

/**
 * Textarea component for AuDRI Design System.
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  hint,
  error,
  className,
  disabled,
  id,
  rows = 4,
  ...props
}) => {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <div className={clsx(styles['input-group'], className)}>
      {label && (
        <label htmlFor={textareaId} className={styles['input-label']}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        className={clsx(
          styles.input,
          styles.textarea,
          error && styles['input-error']
        )}
        disabled={disabled}
        {...props}
      />
      {error ? (
        <span className={styles['input-error-msg']}>{error}</span>
      ) : (
        hint && <span className={styles['input-hint']}>{hint}</span>
      )}
    </div>
  );
};
