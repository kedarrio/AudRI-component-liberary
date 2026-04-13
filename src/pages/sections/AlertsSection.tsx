import React from 'react';
import { Alert } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const AlertsSection = () => {
  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Alerts</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Persistent inline messages for contextual feedback. Available in four semantic variants.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        <Alert variant="info" title="System Update">
          Audit database will undergo maintenance at 22:00 PST. Expect intermittent delays during the processing window.
        </Alert>
        <Alert variant="warning" title="Incomplete Signature">
          This record requires a digital signature from a compliance supervisor before it can be finalized for archive.
        </Alert>
        <Alert variant="danger" title="High-Risk Violation">
          Critical failure in Section 4.B (Regulatory Compliance). Immediate investigation is mandatory per SOP-24.
        </Alert>
        <Alert variant="success" title="Certification Verified">
          The jurisdictional certification for this claim has been successfully verified against the state database.
        </Alert>
      </div>

      <CodeBlock code={`<Alert variant="success" title="Certification Verified">
  The certification has been verified.
</Alert>`} />
    </div>
  );
};

export default AlertsSection;
