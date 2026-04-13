import React from 'react';
import clsx from 'clsx';
import styles from './Stepper.module.css';

export interface StepperProps {
  steps: string[];
  currentStep: number; // 0-indexed
  onStepClick?: (index: number) => void;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  className,
}) => {
  const progressRatio = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className={clsx(styles.stepper, className)}>
      <div className={styles.line} />
      <div className={styles.progress} style={{ width: `${progressRatio}%` }} />
      {steps.map((label, index) => {
        const isActive = index === currentStep;
        const isComplete = index < currentStep;

        return (
          <div
            key={label}
            className={clsx(
              styles.step,
              isActive && styles.active,
              isComplete && styles.complete
            )}
            onClick={() => onStepClick?.(index)}
          >
            <div className={styles.circle}>
              {isComplete ? (
                <span className="material-symbols-rounded icon-sm">check</span>
              ) : (
                index + 1
              )}
            </div>
            <span className={styles.label}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};
