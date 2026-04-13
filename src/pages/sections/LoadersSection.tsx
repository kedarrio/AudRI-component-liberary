import React from 'react';
import { Spinner, Skeleton, Card, LoadingLine } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';
import styles from './Sections.module.css';

const LoadersSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Loaders & Feedback</h2>
      <p className={styles.description}>
        Indication systems for background tasks, incremental loading, and data fetching.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Activity Spinners</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Spinner size="xs" />
            <span className="t-label" style={{ fontSize: '10px' }}>XS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Spinner size="sm" />
            <span className="t-label" style={{ fontSize: '10px' }}>SM</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Spinner size="md" />
            <span className="t-label" style={{ fontSize: '10px' }}>MD</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Spinner size="lg" />
            <span className="t-label" style={{ fontSize: '10px' }}>LG</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Spinner size="xl" />
            <span className="t-label" style={{ fontSize: '10px' }}>XL</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <Spinner variant="success" />
          <Spinner variant="danger" />
          <Spinner variant="warning" />
          <Spinner variant="info" />
        </div>
        <CodeBlock code={`<Spinner size="lg" variant="primary" />`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Skeleton Shimmer</h4>
        <div style={{ marginBottom: '16px' }}>
          <Card>
            <div style={{ padding: '24px', display: 'flex', gap: '16px' }}>
              <Skeleton variant="circle" width={48} height={48} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Skeleton width="40%" height={20} />
                <Skeleton width="90%" />
                <Skeleton width="80%" />
              </div>
            </div>
          </Card>
        </div>
        <CodeBlock code={`<Skeleton variant="circle" width={48} height={48} />\n<Skeleton width="40%" height={20} />`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Loading Line</h4>
        <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <p className="t-label" style={{ fontSize: '10px', marginBottom: '8px', color: 'var(--color-text-tertiary)' }}>Solid (Default)</p>
            <LoadingLine />
          </div>
          <div style={{ padding: '24px', background: 'var(--color-bg)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            <p className="t-label" style={{ fontSize: '10px', marginBottom: '12px', color: 'var(--color-text-tertiary)' }}>Glass (on background)</p>
            <LoadingLine variant="glass" />
          </div>
        </div>
        <CodeBlock code={`<LoadingLine variant="solid" />\n<LoadingLine variant="glass" />`} />
      </div>
    </div>
  );
};

export default LoadersSection;
