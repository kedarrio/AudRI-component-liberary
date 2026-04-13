import React from 'react';
import { Card, StatCard } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const CardsSection = () => {
  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Cards & Surfaces</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Base containers for grouping content and displaying metrics.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Standard Cards</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <Card padding="sm">
            <h5 className="heading-xs">Static Base</h5>
            <p className="body-sm">Standard content container with no hover effects.</p>
          </Card>
          <Card hoverable padding="sm">
            <h5 className="heading-xs">Hoverable State</h5>
            <p className="body-sm">Lifts on hover with shadow elevation.</p>
          </Card>
          <Card variant="panel" padding="sm">
            <h5 className="heading-xs">Raised Panel</h5>
            <p className="body-sm">Higher contrast surface for sub-groups.</p>
          </Card>
        </div>
        <CodeBlock code={`<Card hoverable padding="sm">...</Card>
<Card variant="panel">...</Card>`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>KPI Stat Cards</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <StatCard label="Audit Coverage" value="100" unit="%" delta="vs 3% manual" deltaDirection="up" progress={100} variant="success" />
          <StatCard label="Violation Rate" value="0.42" unit="%" delta="0.05% spike" deltaDirection="down" progress={42} variant="danger" />
          <StatCard label="Active Claims" value="12,504" delta="2.1k growth" deltaDirection="up" progress={75} variant="primary" />
        </div>
        <CodeBlock code={`<StatCard label="Audit Coverage" value="100" unit="%" delta="vs 3% manual" deltaDirection="up" progress={100} variant="success" />`} />
      </div>
    </div>
  );
};

export default CardsSection;
