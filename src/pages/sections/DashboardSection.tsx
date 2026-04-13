import React from 'react';
import { 
  DonutChart, 
  LineChart, 
  Card,
  Badge
} from '@lib';
import { CodeBlock } from '../../components/CodeBlock';
import styles from './Sections.module.css';

const DashboardSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Dashboards & Analytics</h2>
      <p className={styles.description}>
        Advanced visualization components and layout systems for data-intensive administrative interfaces.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>KPI Visualizations</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <Card>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <DonutChart value={72} label="72%" subLabel="Confidence" />
              <div style={{ textAlign: 'center' }}>
                <p className="body-sm" style={{ fontWeight: 600 }}>Audit Accuracy</p>
                <p className="t-label" style={{ fontSize: '10px' }}>Global Average</p>
              </div>
            </div>
          </Card>
          <Card>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="t-label">Throughput</p>
                <Badge variant="success">+12%</Badge>
              </div>
              <LineChart data={[10, 25, 45, 30, 55, 78, 85]} variant="success" />
              <p className="heading-md">1,284 <span className="body-xs" style={{ color: 'var(--color-text-tertiary)' }}>claims/dy</span></p>
            </div>
          </Card>
          <Card>
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="t-label">Error Rate</p>
                <Badge variant="danger">+4%</Badge>
              </div>
              <LineChart data={[10, 15, 8, 12, 25, 18, 32]} variant="danger" />
              <p className="heading-md">2.4% <span className="body-xs" style={{ color: 'var(--color-text-tertiary)' }}>avg</span></p>
            </div>
          </Card>
        </div>
        <CodeBlock code={`<DonutChart value={72} label="72%" />
<LineChart data={[10, 25, 45...]} variant="success" />`} />
      </div>
    </div>
  );
};

export default DashboardSection;
