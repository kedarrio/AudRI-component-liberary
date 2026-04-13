import React from 'react';
import styles from './Sections.module.css';
import { Button } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';


const RowWrapper: React.FC<{ label: string; sublabel?: string; children: React.ReactNode }> = ({ label, sublabel, children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px', padding: '24px 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
    <div>
      <h5 className="heading-xs" style={{ marginBottom: '4px' }}>{label}</h5>
      {sublabel && <p style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', lineHeight: 1.4 }}>{sublabel}</p>}
    </div>
    <div className={styles.flexRow} style={{ gap: '16px', alignItems: 'center' }}>
      {children}
    </div>
  </div>
);

const ButtonsSection = () => {

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Buttons — by type</h2>
      <p className={styles.description}>
        One size (md). Each type communicates a different intent level. Use a single icon per button — leading only.
      </p>

      <div style={{ marginTop: '32px' }}>
        <RowWrapper label="Primary" sublabel="High-emphasis action. One per view.">
          <Button variant="primary" icon="chevron_right">Button</Button>
          <Button variant="primary" icon="upload">Button</Button>
          <Button variant="primary">Button</Button>
        </RowWrapper>

        <RowWrapper label="Secondary" sublabel="Mid-emphasis. Pairs with Primary.">
          <Button variant="secondary" icon="filter_list">Button</Button>
          <Button variant="secondary" icon="grid_view">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary" icon="export_notes">Button</Button>
        </RowWrapper>

        <RowWrapper label="Ghost" sublabel="Low-emphasis, inline or tertiary actions.">
          <Button variant="ghost" icon="undo">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="ghost" icon="more_horiz">Button</Button>
          <Button variant="ghost" icon="chevron_left">Button</Button>
        </RowWrapper>

        <RowWrapper label="Outline" sublabel="Bordered. Standard tertiary button.">
          <Button variant="outline">Button</Button>
          <Button variant="outline" active icon="check">Button (active)</Button>
          <Button variant="outline">Button</Button>
        </RowWrapper>

        <RowWrapper label="Danger" sublabel="Destructive or critical actions only.">
          <Button variant="danger" icon="flag">Flag Violation</Button>
          <Button variant="danger-solid" icon="delete_sweep">Remove Carrier</Button>
          <Button variant="danger">Revoke Access</Button>
        </RowWrapper>

        <RowWrapper label="Brand CTA" sublabel="Marketing / landing page only.">
          <Button variant="brand-cta" icon="security">Start Free Trial</Button>
          <Button variant="outline" size="lg">Request a Demo</Button>
        </RowWrapper>

        <RowWrapper label="Icon-only" sublabel="Always add a tooltip. Never a bare action.">
          <Button icon="settings" iconOnly />
          <Button icon="notifications" iconOnly />
          <Button icon="more_horiz" iconOnly />
          <Button icon="search" iconOnly />
          <Button icon="tune" iconOnly />
          <Button icon="delete" iconOnly variant="danger" />
        </RowWrapper>

        <RowWrapper label="Disabled" sublabel="All types support disabled state.">
          <Button variant="primary" disabled icon="play_arrow">Run Audit</Button>
          <Button variant="secondary" disabled>Export</Button>
          <Button variant="ghost" disabled>Dismiss</Button>
        </RowWrapper>
      </div>

      <div style={{ marginTop: '64px' }}>
        <h4 className={styles.subTitle} style={{ marginBottom: '24px' }}>Code Implementation</h4>
        <CodeBlock code={`<Button variant="primary" icon="chevron_right">Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="brand-cta">Start Free Trial</Button>
<Button icon="settings" iconOnly />`} />
      </div>
    </div>
  );
};

export default ButtonsSection;
