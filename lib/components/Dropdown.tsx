import React, { useState, useRef, useEffect, useId } from 'react';
import clsx from 'clsx';
import styles from './Dropdown.module.css';

/**
 * Dropdown item definition.
 */
export interface DropdownOption {
  label?: string;
  value: string;
  icon?: string;
  danger?: boolean;
  separator?: boolean;
  shortcut?: string;
  header?: string;
}

/**
 * Dropdown component.
 * Fully controlled trigger and menu.
 */
export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  icon?: string;
  disabled?: boolean;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select an option',
  icon,
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  const labelId = useId();
  const listboxId = useId();

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && activeIndex >= 0) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [isOpen, activeIndex]);

  const handleToggle = () => {
    if (disabled) return;
    const opening = !isOpen;
    setIsOpen(opening);
    if (opening) {
      const selectedIdx = options.findIndex(opt => opt.value === value);
      setActiveIndex(selectedIdx >= 0 ? selectedIdx : 0);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    if (!option.header && !option.separator) {
      onChange(option.value);
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'n':
        e.preventDefault();
        if (!isOpen) {
          handleToggle();
        } else {
          setActiveIndex(prev => {
            let next = prev + 1;
            while (next < options.length && (options[next].header || options[next].separator)) {
              next++;
            }
            return next < options.length ? next : prev;
          });
        }
        break;
      case 'ArrowUp':
      case 'p':
        e.preventDefault();
        if (!isOpen) {
          handleToggle();
        } else {
          setActiveIndex(prev => {
            let next = prev - 1;
            while (next >= 0 && (options[next].header || options[next].separator)) {
              next--;
            }
            return next >= 0 ? next : prev;
          });
        }
        break;
      case 'Escape':
        if (isOpen) {
          setIsOpen(false);
          triggerRef.current?.focus();
        }
        break;
      case 'Enter':
      case ' ':
        if (!isOpen) {
          e.preventDefault();
          handleToggle();
        } else if (activeIndex >= 0) {
          e.preventDefault();
          handleSelect(options[activeIndex]);
        }
        break;
      case 'Tab':
        if (isOpen) setIsOpen(false);
        break;
    }
  };

  return (
    <div 
      className={clsx(styles.dropdown, className)} 
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      {label && (
        <span id={labelId} className={styles['dropdown-label']}>
          {label}
        </span>
      )}
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listboxId : undefined}
        aria-labelledby={label ? labelId : undefined}
        className={clsx(styles.trigger, isOpen && styles.open)}
        onClick={handleToggle}
        disabled={disabled}
      >
        <div className={styles['trigger-content']}>
          {icon && <span className="material-symbols-rounded icon-sm">{icon}</span>}
          <span className={styles['trigger-text']}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <span className={clsx("material-symbols-rounded icon-sm", styles.chevron)}>
          expand_more
        </span>
      </button>

      <div 
        id={listboxId}
        role="listbox"
        aria-labelledby={label ? labelId : undefined}
        className={clsx(styles.menu, isOpen && styles.open)}
      >
        {options.map((option, index) => {
          if (option.header) {
            return <div key={`header-${index}`} className={styles.header}>{option.header}</div>;
          }
          if (option.separator) {
            return <div key={`sep-${index}`} className={styles.separator} />;
          }
          const isActive = option.value === value;
          const isFocused = activeIndex === index;
          
          return (
            <button
              key={option.value}
              ref={el => itemRefs.current[index] = el}
              type="button"
              role="option"
              aria-selected={isActive}
              tabIndex={isOpen ? (isFocused ? 0 : -1) : -1}
              className={clsx(
                styles.item,
                isActive && styles.active,
                isFocused && styles.focused,
                option.danger && styles.danger
              )}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={styles['item-content']}>
                {option.icon && (
                  <span className={clsx("material-symbols-rounded icon-sm", styles['option-icon'])}>
                    {option.icon}
                  </span>
                )}
                <span className={styles['item-label']}>{option.label}</span>
              </div>
              {option.shortcut && (
                <span className={styles.shortcut}>{option.shortcut}</span>
              )}
              {isActive && !option.shortcut && (
                <span className="material-symbols-rounded icon-sm">check</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
