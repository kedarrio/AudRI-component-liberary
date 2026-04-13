import React, { useState } from 'react';
import { Nav, Sidebar, Button, Breadcrumbs, Pagination, Stepper, Tabs } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const NavigationSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [pillTab, setPillTab] = useState('p1');
  const [page, setPage] = useState(1);
  const [step, setStep] = useState(1);
  const [activeSidebar, setActiveSidebar] = useState('1');

  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Navigation</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        App-shell components for context and navigation.
      </p>

      {/* Existing Nav & Sidebar */}
      <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '4px', color: 'var(--color-text-secondary)' }}>Top Navigation (Embedded)</h4>
        <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden', position: 'relative', height: '46px', background: 'var(--color-bg)' }}>
          <Nav 
            logo={<span style={{ fontWeight: 600 }}>AuDRI</span>} 
            links={[
              { label: 'Claims', href: '#', active: true },
              { label: 'Audits', href: '#' },
              { label: 'Reports', href: '#' },
            ]}
            actions={<Button size="xs" variant="primary">New Claim</Button>}
            style={{ position: 'absolute' }}
          />
        </div>
        <CodeBlock code={`<Nav logo="..." links={links} actions={actions} />`} />
      </div>

      <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '4px', color: 'var(--color-text-secondary)' }}>Sidebar</h4>
        <div style={{ border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden', display: 'flex', height: '240px', background: 'var(--color-bg)' }}>
          <Sidebar 
            items={[
              { id: '1', label: 'Monitor', icon: 'analytics', section: 'Insights' },
              { id: '2', label: 'Reports', icon: 'data_usage', section: 'Insights' },
            ]} 
            activeId={activeSidebar}
            onItemClick={setActiveSidebar}
            style={{ height: '100%', position: 'static' }}
          />
          <div style={{ flex: 1, padding: '24px', background: 'var(--color-bg)' }}>
            <p className="body-sm" style={{ color: 'var(--color-text-tertiary)' }}>Standard Sidebar Content Area</p>
          </div>
        </div>
        <CodeBlock code={`<Sidebar items={items} activeId={active} onItemClick={set} />`} />
      </div>

      {/* New Components */}
      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Tabs</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '16px' }}>
          <div>
            <p className="body-sm" style={{ marginBottom: '12px', color: 'var(--color-text-tertiary)' }}>Underline (Default)</p>
            <Tabs 
              tabs={[
                { id: 'tab1', label: 'Overview', icon: 'dashboard' },
                { id: 'tab2', label: 'Analytics', icon: 'analytics' },
                { id: 'tab3', label: 'Settings', icon: 'settings' },
              ]}
              activeTabId={activeTab}
              onChange={setActiveTab}
            />
          </div>
          <div>
            <p className="body-sm" style={{ marginBottom: '12px', color: 'var(--color-text-tertiary)' }}>Pills</p>
            <Tabs 
              variant="pills"
              tabs={[
                { id: 'p1', label: 'All Time' },
                { id: 'p2', label: '30 Days' },
                { id: 'p3', label: '7 Days' },
              ]}
              activeTabId={pillTab}
              onChange={setPillTab}
            />
          </div>
        </div>
        <CodeBlock code={`<Tabs variant="pills" tabs={tabs} activeTabId={active} onChange={set} />`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Breadcrumbs</h4>
        <div style={{ marginBottom: '16px', padding: '16px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
          <Breadcrumbs 
            items={[
              { id: 'home', label: 'Root', href: '#', icon: 'home' },
              { id: 'claims', label: 'Claims', href: '#' },
              { id: 'details', label: 'CLM-2024-001', active: true },
            ]}
          />
        </div>
        <CodeBlock code={`<Breadcrumbs items={breadcrumbs} />`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Stepper</h4>
        <div style={{ marginBottom: '16px', padding: '32px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
          <Stepper 
            steps={['Ingest', 'Analyze', 'Review', 'Complete']}
            currentStep={step}
            onStepClick={setStep}
          />
        </div>
        <CodeBlock code={`<Stepper steps={['Step 1', 'Step 2']} currentStep={val} />`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Pagination</h4>
        <div style={{ marginBottom: '16px' }}>
          <Pagination 
            currentPage={page} 
            totalPages={12} 
            onPageChange={setPage} 
          />
        </div>
        <CodeBlock code={`<Pagination currentPage={page} totalPages={12} onPageChange={setPage} />`} />
      </div>
    </div>
  );
};

export default NavigationSection;
