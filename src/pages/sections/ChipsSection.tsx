import React, { useState } from 'react';
import styles from './Sections.module.css';
import { Chip, ChipGroup } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const ChipsSection = () => {
  const [active, setActive] = useState<string[]>(['California']);
  const [exclusive, setExclusive] = useState('1');

  const toggleChip = (label: string) => {
    setActive(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const chips = ['California', 'Workers\' Comp', 'Active Claims', 'High Risk'];

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Chips</h2>
      <p className={styles.description}>
        Filter toggles for managing visibility and data sets.
      </p>

      <div className={styles.subSection}>
        <h4 className={styles.subTitle}>Multiple Selection (Default)</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {chips.map(label => (
            <Chip 
              key={label}
              active={active.includes(label)}
              onClick={() => toggleChip(label)}
              icon={label === 'California' ? 'location_on' : undefined}
            >
              {label}
            </Chip>
          ))}
        </div>
        <CodeBlock code={`<Chip active={isActive} icon="location_on" onClick={toggle}>California</Chip>
<Chip active={isActive} onClick={toggle}>Workers' Comp</Chip>`} />
      </div>

      <div className={styles.subSection}>
        <h4 className={styles.subTitle}>Exclusive Selection (ChipGroup)</h4>
        <div style={{ marginBottom: '20px' }}>
          <ChipGroup 
            items={[
              { id: '1', label: 'Summary View', icon: 'dashboard' },
              { id: '2', label: 'Detailed View', icon: 'view_list' },
              { id: '3', label: 'Network View', icon: 'hub' },
            ]}
            activeId={exclusive}
            onSelect={setExclusive}
          />
        </div>
        <CodeBlock code={`<ChipGroup 
  items={items} 
  activeId={activeId} 
  onSelect={setActiveId} 
/>`} />
      </div>
    </div>
  );
};

export default ChipsSection;
