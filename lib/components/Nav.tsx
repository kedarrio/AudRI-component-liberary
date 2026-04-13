import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Nav.module.css';

/**
 * Top Navigation component.
 * Sticky with backdrop blur.
 */
export interface NavProps {
  logo?: React.ReactNode;
  links?: { label: string; href: string; active?: boolean }[];
  actions?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Nav: React.FC<NavProps> = ({
  logo,
  links,
  actions,
  className,
  style,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(styles.nav, isScrolled && styles.scrolled, className)} style={style}>
      <div className={clsx("grid-container", styles.inner)}>
        <div className={styles.logo}>{logo}</div>
        
        {links && (
          <div className={styles.links}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={clsx(styles.link, link.active && styles.active)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className={styles.actions}>{actions}</div>
      </div>
    </nav>
  );
};
