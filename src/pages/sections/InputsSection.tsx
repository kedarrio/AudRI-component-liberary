import React, { useState } from 'react';
import { Input, Textarea, RangeSlider, FileUpload } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const InputsSection = () => {
  const [val, setVal] = useState('');
  const [range, setRange] = useState(65);

  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Inputs & Forms</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Controlled form elements with detailed labels, hints, and error states.
      </p>

      {/* Existing Inputs */}
      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Basic Inputs</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '16px' }}>
          <Input 
            label="Claim Number" 
            placeholder="WC-2024-00194" 
            hint="Format: WC-YYYY-NNNNN"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <Input 
            label="Policy ID" 
            placeholder="Enter policy ID" 
            error="Policy ID not found in database" 
          />
        </div>
        <CodeBlock code={`<Input label="Claim Number" placeholder="WC-2024-00194" hint="Format:..." />
<Input label="Policy ID" error="Not found" />`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Specialized Inputs</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '16px' }}>
          <Input 
            type="search" 
            label="Search Records" 
            placeholder="Scan claims..." 
            leadingIcon="search" 
          />
          <Input 
            type="password" 
            label="Security Pin" 
            placeholder="Enter pin" 
            leadingIcon="lock" 
          />
        </div>
        <CodeBlock code={`<Input type="search" leadingIcon="search" placeholder="Scan..." />
<Input type="password" leadingIcon="lock" />`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Textarea</h4>
        <div style={{ marginBottom: '16px' }}>
          <Textarea 
            label="Internal Note" 
            placeholder="Add compliance notes here..." 
            hint="Visible to compliance supervisors only" 
          />
        </div>
        <CodeBlock code={`<Textarea label="Internal Note" placeholder="Add..." />`} />
      </div>

      {/* New Components */}
      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Range & Intensity</h4>
        <div style={{ maxWidth: '400px', marginBottom: '16px' }}>
          <RangeSlider 
            label="Audit Confidence Threshold" 
            value={range} 
            onChange={setRange} 
            min={0} 
            max={100} 
          />
        </div>
        <CodeBlock code={`<RangeSlider label="Confidence" value={val} onChange={set} />`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>File Management</h4>
        <div style={{ marginBottom: '16px' }}>
          <FileUpload 
            onFileSelect={(files) => console.log(files)} 
            label="Drop document to audit" 
            accept=".pdf,.docx,.xlsx"
          />
        </div>
        <CodeBlock code={`<FileUpload label="Drop document" accept=".pdf" onFileSelect={handle} />`} />
      </div>
    </div>
  );
};

export default InputsSection;
