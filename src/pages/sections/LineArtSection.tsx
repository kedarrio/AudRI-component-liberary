import React, { useState } from 'react';
import { Button } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const LineArtSection = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => setKey(prev => prev + 1);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Line Art</h2>
          <p className="body-md" style={{ color: 'var(--color-text-secondary)' }}>
            SVG-only illustrations with strictly defined stroke weights and styles.
          </p>
        </div>
        <Button variant="primary" icon="draw" onClick={handleReplay}>Replay Draw-on</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '12px', 
          padding: '40px', 
          border: '1px solid var(--color-border)', 
          borderRadius: '12px',
          background: 'var(--color-surface)'
        }}>
          <svg key={`l1-${key}`} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="line-primary line-animated active" d="M60 20L100 40V80L60 100L20 80V40L60 20Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path className="line-muted" d="M60 20V100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="line-muted" d="M100 40L20 80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="line-muted" d="M100 80L20 40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="60" cy="60" r="10" className="line-fill-sub" strokeWidth="1.5" />
          </svg>
          <code style={{ fontSize: '10px', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>compliance_web.svg</code>
        </div>

        <div style={{ padding: '24px', border: '1px solid var(--color-border)', borderRadius: '12px', background: 'var(--color-surface-raised)' }}>
          <h5 className="heading-xs" style={{ marginBottom: '12px' }}>Style Rules</h5>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
            <li className="body-sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Stroke Cap / Join</span>
              <strong>Round</strong>
            </li>
            <li className="body-sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Primary Stroke</span>
              <strong style={{ color: 'var(--color-primary)' }}>#F58550</strong>
            </li>
            <li className="body-sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Muted Stroke</span>
              <strong style={{ color: 'var(--color-border-strong)' }}>#D1CEC9</strong>
            </li>
            <li className="body-sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Background Fill</span>
              <strong>None (Transparent)</strong>
            </li>
          </ul>
        </div>
      </div>
      <CodeBlock code={`<path className="line-primary line-animated active" d="..." />`} />
    </div>
  );
};

export default LineArtSection;
