import React from 'react';
import { Alert } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';
import styles from './Sections.module.css';

const IconTile: React.FC<{ name: string }> = ({ name }) => (
  <div className={styles.iconTile}>
    <span className="material-symbols-rounded icon-xl" style={{ opacity: 0.8 }}>{name}</span>
    <code style={{ fontSize: '9px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)', textAlign: 'center', lineHeight: 1.2 }}>{name}</code>
  </div>
);

const audriIcons = [
  'security', 'check_circle', 'gavel', 'fact_check', 'policy', 'verified',
  'description', 'inventory_2', 'analytics', 'trending_up', 'trending_down',
  'rule', 'error', 'warning', 'location_on', 'timer', 'supervisor_account',
  'history', 'download', 'cloud_upload', 'settings', 'notifications'
];

const IconsSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Icons</h2>
      <p className={styles.description}>
        Material Symbols Rounded (Weight 300, Unfilled). Optimized for density and professional clarity.
      </p>

      <Alert variant="warning" title="Deprecated Icon" className="anim-fade-in" style={{ marginBottom: '40px' }}>
        <strong>shield_check</strong> renders incorrectly at Weight 300 unfilled. 
        Use <code>security</code> for shield concepts and <code>check_circle</code> for compliance status.
      </Alert>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(118px, 1fr))', 
        gap: '20px', 
        marginBottom: '48px' 
      }}>
        {audriIcons.map(name => <IconTile key={name} name={name} />)}
      </div>

      <CodeBlock code={`<span className="material-symbols-rounded">security</span>`} />
    </div>
  );
};

export default IconsSection;
