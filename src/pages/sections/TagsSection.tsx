import React from 'react';
import { Tag } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const TagsSection = () => {
  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Tags & Badges</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Status indicators using pure-CSS dots. Optimized for scanning at a glance.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Variants with Dots</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <Tag variant="success">Compliant</Tag>
          <Tag variant="danger">Violation</Tag>
          <Tag variant="warning">Pending</Tag>
          <Tag variant="info">Under Review</Tag>
          <Tag variant="brand">New</Tag>
          <Tag variant="neutral">Closed</Tag>
        </div>
        <CodeBlock code={`<Tag variant="success">Compliant</Tag>
<Tag variant="danger">Violation</Tag>
<Tag variant="warning">Pending</Tag>
<Tag variant="info">Under Review</Tag>
<Tag variant="brand">New</Tag>
<Tag variant="neutral">Closed</Tag>`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Label Only</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <Tag variant="success" dot={false}>Success</Tag>
          <Tag variant="danger" dot={false}>Danger</Tag>
          <Tag variant="warning" dot={false}>Warning</Tag>
          <Tag variant="info" dot={false}>Info</Tag>
        </div>
        <CodeBlock code={`<Tag variant="success" dot={false}>Success</Tag>`} />
      </div>
    </div>
  );
};

export default TagsSection;
