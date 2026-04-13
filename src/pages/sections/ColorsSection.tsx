import React from 'react';
import clsx from 'clsx';
import styles from './Sections.module.css';
import { colors } from '@lib';

const ColorSwatch: React.FC<{ name: string; hex: string; desc: string }> = ({ name, hex, desc }) => (
  <div className={styles.swatchContainer}>
    <div 
      className={clsx(styles.swatch, (name.includes('surface') || name.includes('bg')) && styles.swatchBorder)}
      style={{ backgroundColor: hex }} 
    />
    <div className={styles.swatchInfo}>
      <p className={styles.swatchLabel}>{name}</p>
      <p className={styles.swatchHex}>{hex}</p>
      <p className={styles.swatchDesc}>{desc}</p>
    </div>
  </div>
);

const ColorsSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Color System</h2>
      
      <div className={styles.subSection}>
        <h3 className={styles.subTitle}>Primary — Brand Orange</h3>
        <div className={clsx(styles.grid, styles.grid140)}>
          <ColorSwatch name="--color-primary" hex={colors.primary} desc="Primary actions, active states" />
          <ColorSwatch name="--color-primary-hover" hex={colors.primaryHover} desc="Button hover" />
          <ColorSwatch name="--color-primary-active" hex={colors.primaryActive} desc="Button active" />
          <ColorSwatch name="--color-primary-subtle" hex={colors.primarySubtle} desc="Tinted backgrounds" />
          <ColorSwatch name="--color-primary-muted" hex={colors.primaryMuted} desc="Borders on tinted" />
        </div>
      </div>

      <div className={styles.subSection}>
        <h3 className={styles.subTitle}>Neutrals — Warm Gray</h3>
        <div className={clsx(styles.grid, styles.grid140)}>
          <ColorSwatch name="--color-bg" hex={colors.bg} desc="Page background" />
          <ColorSwatch name="--color-surface" hex={colors.surface} desc="Card backgrounds" />
          <ColorSwatch name="--color-surface-raised" hex={colors.surfaceRaised} desc="Hover states" />
          <ColorSwatch name="--color-surface-overlay" hex={colors.surfaceOverlay} desc="Progress track, skeleton" />
          <ColorSwatch name="--color-border" hex={colors.border} desc="Default borders" />
        </div>
      </div>

      <div className={styles.subSection}>
        <h3 className={styles.subTitle}>Semantic — Success</h3>
        <div className={clsx(styles.grid, styles.grid140)}>
          <ColorSwatch name="--color-success" hex={colors.success.base} desc="Base semantic color" />
          <ColorSwatch name="--color-success-subtle" hex={colors.success.subtle} desc="Fill background" />
          <ColorSwatch name="--color-success-border" hex={colors.success.border} desc="Border highlight" />
          <ColorSwatch name="--color-success-text" hex={colors.success.text} desc="Text contrast" />
        </div>
      </div>

      <div className={styles.subSection}>
        <h3 className={styles.subTitle}>Semantic — Warning</h3>
        <div className={clsx(styles.grid, styles.grid140)}>
          <ColorSwatch name="--color-warning" hex={colors.warning.base} desc="Base semantic color" />
          <ColorSwatch name="--color-warning-subtle" hex={colors.warning.subtle} desc="Fill background" />
          <ColorSwatch name="--color-warning-border" hex={colors.warning.border} desc="Border highlight" />
          <ColorSwatch name="--color-warning-text" hex={colors.warning.text} desc="Text contrast" />
        </div>
      </div>

      <div className={styles.subSection}>
        <h3 className={styles.subTitle}>Semantic — Danger</h3>
        <div className={clsx(styles.grid, styles.grid140)}>
          <ColorSwatch name="--color-danger" hex={colors.danger.base} desc="Base semantic color" />
          <ColorSwatch name="--color-danger-subtle" hex={colors.danger.subtle} desc="Fill background" />
          <ColorSwatch name="--color-danger-border" hex={colors.danger.border} desc="Border highlight" />
          <ColorSwatch name="--color-danger-text" hex={colors.danger.text} desc="Text contrast" />
        </div>
      </div>

      <div className={styles.subSection}>
        <h3 className={styles.subTitle}>Semantic — Info</h3>
        <div className={clsx(styles.grid, styles.grid140)}>
          <ColorSwatch name="--color-info" hex={colors.info.base} desc="Base semantic color" />
          <ColorSwatch name="--color-info-subtle" hex={colors.info.subtle} desc="Fill background" />
          <ColorSwatch name="--color-info-border" hex={colors.info.border} desc="Border highlight" />
          <ColorSwatch name="--color-info-text" hex={colors.info.text} desc="Text contrast" />
        </div>
      </div>
    </div>
  );
};

export default ColorsSection;
