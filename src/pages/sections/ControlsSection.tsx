import React, { useState } from 'react';
import { Toggle, Checkbox, Radio } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const ControlsSection = () => {
  // Toggle states
  const [toggleA, setToggleA] = useState(true);
  const [toggleB, setToggleB] = useState(false);

  // Checkbox states (independent for multi-selection demo)
  const [checkA, setCheckA] = useState(true);
  const [checkB, setCheckB] = useState(false);
  const [checkC, setCheckC] = useState(false);

  // Radio state
  const [radio, setRadio] = useState('Option A');

  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Controls</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Interactive controls for making binary or multiple-choice selections. All include spring-based animations on activation.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        {/* Toggle Column */}
        <div style={{ marginBottom: '40px' }}>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Status Toggle</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            <Toggle checked={toggleA} onChange={setToggleA} label="Realtime Monitoring" />
            <Toggle checked={toggleB} onChange={setToggleB} label="Automatic Compliance" />
            <Toggle checked={false} onChange={() => { }} label="Feature Not Available" disabled />
          </div>
          <CodeBlock code={`<Toggle checked={val} onChange={setVal} label="Realtime..." />
<Toggle disabled />`} />
        </div>

        {/* Checkbox Column - Demonstrating Multi-Select */}
        <div style={{ marginBottom: '40px' }}>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Checkboxes (Multi-Select)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            <Checkbox checked={checkA} onChange={setCheckA} label="Agree to Terms & Policies" />
            <Checkbox checked={checkB} onChange={setCheckB} label="Receive Daily Summary" />
            <Checkbox checked={checkC} onChange={setCheckC} label="Export as JSON" />
            <Checkbox checked={true} onChange={() => { }} label="Internal Use Component" disabled />
          </div>
          <CodeBlock code={`<Checkbox checked={val} onChange={setVal} />`} />
        </div>

        {/* Radio Column - Demonstrating Switching */}
        <div style={{ marginBottom: '40px' }}>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Radios (Switching)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            <Radio name="demo" value="Option A" checked={radio === 'Option A'} onChange={setRadio} label="Full Audit Trail" />
            <Radio name="demo" value="Option B" checked={radio === 'Option B'} onChange={setRadio} label="Current Status Only" />
            <Radio name="demo" value="Option C" checked={radio === 'Option C'} onChange={setRadio} label="Legacy Archive (2020)" />
            <Radio name="demo" value="Disabled" checked={false} onChange={() => { }} label="Unsupported Format" disabled />
          </div>
          <CodeBlock code={`<Radio name="g1" value="A" checked={val === 'A'} onChange={setVal} />`} />
        </div>
      </div>
    </div>
  );
};

export default ControlsSection;
