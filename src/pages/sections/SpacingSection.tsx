import React from 'react';

const SpacingRow: React.FC<{ token: string; value: string; usage: string }> = ({ token, value, usage }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
    <code style={{ width: '120px', fontSize: '11px', color: 'var(--color-primary)' }}>{token}</code>
    <span style={{ width: '60px', fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{value}</span>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <div style={{ height: '16px', width: value, backgroundColor: 'var(--color-primary-subtle)', border: '1px solid var(--color-primary-muted)', borderRadius: '2px' }} />
    </div>
    <span style={{ flex: 1, fontSize: '11px', color: 'var(--color-text-tertiary)' }}>{usage}</span>
  </div>
);

const SpacingSection = () => {
  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Spacing</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>Base-8 grid with fine-grain steps for dense UIs.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SpacingRow token="--space-1" value="2px" usage="Hairline gaps, icon offsets" />
        <SpacingRow token="--space-2" value="4px" usage="Tight gaps" />
        <SpacingRow token="--space-4" value="8px" usage="Default small gap" />
        <SpacingRow token="--space-8" value="16px" usage="Grid gutter, standard gap" />
        <SpacingRow token="--space-12" value="24px" usage="Card padding (horizontal)" />
        <SpacingRow token="--space-16" value="32px" usage="Section spacing" />
        <SpacingRow token="--space-24" value="48px" usage="Section padding" />
        <SpacingRow token="--space-40" value="80px" usage="Hero padding" />
      </div>
    </div>
  );
};

export default SpacingSection;
