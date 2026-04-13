import React, { useState } from 'react';
import { Button } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const AnimBox: React.FC<{ anim: string; name: string; delay?: string }> = ({ anim, name, delay }) => (
  <div className={anim} style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '12px', 
    padding: '24px', 
    border: '1px solid var(--color-border)', 
    borderRadius: '12px',
    background: 'var(--color-surface)',
    animationDelay: delay
  }}>
    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--color-primary)' }} />
    <code style={{ fontSize: '10px', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>{name}</code>
  </div>
);

const AnimationsSection = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => setKey(prev => prev + 1);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Animations</h2>
          <p className="body-md" style={{ color: 'var(--color-text-secondary)' }}>
            System-wide transitions and micro-interactions.
          </p>
        </div>
        <Button variant="primary" icon="replay" onClick={handleReplay}>Replay Animations</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <AnimBox key={`a1-${key}`} anim="anim-fade-in" name=".anim-fade-in" />
        <AnimBox key={`a2-${key}`} anim="anim-fade-up" name=".anim-fade-up" />
        <AnimBox key={`a3-${key}`} anim="anim-fade-down" name=".anim-fade-down" />
        <AnimBox key={`a4-${key}`} anim="anim-scale-in" name=".anim-scale-in" />
        <AnimBox key={`a5-${key}`} anim="anim-spin" name=".anim-spin" />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Staggered Load Example</h4>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <div key={`s1-${key}`} className="anim-fade-up delay-1" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--color-primary-subtle)', border: '1px solid var(--color-primary-muted)' }} />
          <div key={`s2-${key}`} className="anim-fade-up delay-2" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--color-primary-subtle)', border: '1px solid var(--color-primary-muted)' }} />
          <div key={`s3-${key}`} className="anim-fade-up delay-3" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--color-primary-subtle)', border: '1px solid var(--color-primary-muted)' }} />
          <div key={`s4-${key}`} className="anim-fade-up delay-4" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--color-primary-subtle)', border: '1px solid var(--color-primary-muted)' }} />
        </div>
        <CodeBlock code={`.anim-fade-up delay-1
.anim-fade-up delay-2
.anim-fade-up delay-3
.anim-fade-up delay-4`} />
      </div>
    </div>
  );
};

export default AnimationsSection;
