import React from 'react';
import styles from './Sections.module.css';

const GridItem: React.FC<{ span: string; label: string }> = ({ span, label }) => (
  <div style={{ 
    background: 'var(--color-surface-raised)', 
    border: '1px solid var(--color-border)', 
    borderRadius: '8px',
    padding: '24px 12px',
    textAlign: 'center',
    fontSize: '13px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--color-text-tertiary)',
    gridColumn: `span ${span}`
  }}>
    {label}
  </div>
);

const GridSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Responsive Grid</h2>
      <p className={styles.description}>
        Desktop 12-col / Tablet 8-col / Mobile 4-col — 16px gutter.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Full row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '16px' 
        }}>
          <GridItem span="12" label="12 / 8 / 4" />
        </div>

        {/* Half rows */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '16px' 
        }}>
          <GridItem span="6" label="6 / 4 / 4" />
          <GridItem span="6" label="6 / 4 / 4" />
        </div>

        {/* Thirds / Dynamic */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '16px' 
        }}>
          <GridItem span="4" label="4 / 4 / 4" />
          <GridItem span="4" label="4 / 4 / 2" />
          <GridItem span="4" label="4 / 8 / 2" />
        </div>

        {/* Fourths */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '16px' 
        }}>
          <GridItem span="3" label="3/2/2" />
          <GridItem span="3" label="3/2/2" />
          <GridItem span="3" label="3/2/2" />
          <GridItem span="3" label="3/2/2" />
        </div>
      </div>
    </div>
  );
};

export default GridSection;
