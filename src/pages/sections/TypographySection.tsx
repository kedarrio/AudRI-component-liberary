import React from 'react';

const TypographyRow: React.FC<{
  label: string;
  className: string;
  size: string;
  weight: string;
  lineHeight: string;
  tracking?: string;
  text?: string;
}> = ({ label, className, size, weight, lineHeight, tracking, text = 'The agile fox jumps over compliance gaps.' }) => (
  <div style={{ 
    padding: '24px 0', 
    borderBottom: '1px solid var(--color-border)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-primary)', background: 'var(--color-primary-subtle)', padding: '2px 6px', borderRadius: '4px' }}>{label}</span>
      <span style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>{size} / {weight} / {lineHeight} {tracking ? `/ ${tracking}` : ''}</span>
    </div>
    <p className={className} style={{ margin: 0 }}>{text}</p>
  </div>
);

const TypographySection = () => {
  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Typography</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>Plus Jakarta Sans for UI and JetBrains Mono for data.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TypographyRow label=".display-xl" className="display-xl" size="60px" weight="600" lineHeight="1.15" tracking="-0.03em" />
        <TypographyRow label=".display-lg" className="display-lg" size="48px" weight="600" lineHeight="1.15" tracking="-0.03em" />
        <TypographyRow label=".display-md" className="display-md" size="36px" weight="600" lineHeight="1.3" tracking="-0.02em" />
        <TypographyRow label=".heading-xl" className="heading-xl" size="30px" weight="600" lineHeight="1.3" tracking="-0.02em" />
        <TypographyRow label=".heading-lg" className="heading-lg" size="24px" weight="600" lineHeight="1.3" tracking="-0.02em" />
        <TypographyRow label=".body-lg" className="body-lg" size="14px" weight="400" lineHeight="1.6" />
        <TypographyRow label=".body-md" className="body-md" size="13px" weight="400" lineHeight="1.45" tracking="-0.01em" />
        <TypographyRow label=".mono" className="mono" size="Inherit" weight="300" lineHeight="N/A" text="123,456.78 WC-2024-00194" />
        <TypographyRow label=".mono-sm" className="mono-sm" size="12px" weight="300" lineHeight="N/A" text="const audit = () => 'compliant';" />
      </div>
    </div>
  );
};

export default TypographySection;
