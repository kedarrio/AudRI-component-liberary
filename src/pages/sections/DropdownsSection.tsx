import React, { useState } from 'react';
import { Dropdown } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const DropdownsSection = () => {
  const [val1, setVal1] = useState('ca');

  const options = [
    { label: 'California', value: 'ca', icon: 'location_on' },
    { label: 'New York', value: 'ny', icon: 'location_on' },
    { label: 'Texas', value: 'tx', icon: 'location_on' },
    { label: 'Florida', value: 'fl', icon: 'location_on' },
    { label: 'Separator', value: 'sep1', separator: true },
    { label: 'Delete Record', value: 'del', icon: 'delete', danger: true },
  ];

  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Dropdowns</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Fully custom interactive menus. Optimized for dense data selection and action triggers.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
        <div>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Select with Icons</h4>
          <Dropdown
            label="Jurisdiction"
            options={options}
            value={val1}
            onChange={setVal1}
            icon="public"
          />
        </div>
        <div>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Action Menu</h4>
          <Dropdown
            placeholder="Actions..."
            options={[
              { label: 'Export PDF', value: 'pdf', icon: 'download' },
              { label: 'Share Report', value: 'share', icon: 'share' },
              { label: 'Separator', value: 'sep', separator: true },
              { label: 'Delete', value: 'del', icon: 'delete', danger: true },
            ]}
            onChange={(v) => console.log(v)}
          />
        </div>
      </div>
      <CodeBlock code={`<Dropdown label="Jurisdiction" options={opts} value={val} onChange={setVal} icon="public" />`} />
    </div>
  );
};

export default DropdownsSection;
