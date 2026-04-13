import React from 'react';
import { Button, useToast } from '@lib';
import { CodeBlock } from '../../components/CodeBlock';

const ToastsSection = () => {
  const { addToast } = useToast();

  return (
    <div>
      <h2 className="heading-xl" style={{ marginBottom: '8px' }}>Toasts</h2>
      <p className="body-md" style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
        Temporary notifications with pastel semantic backgrounds. Positioned at the bottom-right.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
        <Button variant="outline" onClick={() => addToast({ variant: 'success', title: 'Audit Passed', body: 'All compliance checks for WC-2024 have been verified.' })}>Success Toast</Button>
        <Button variant="outline" onClick={() => addToast({ variant: 'error', title: 'Violation Detected', body: 'Immediate action required on high-risk file.' })}>Error Toast</Button>
        <Button variant="outline" onClick={() => addToast({ variant: 'warning', title: 'Pending Review', body: 'Awaiting supervisor signature.' })}>Warning Toast</Button>
        <Button variant="outline" onClick={() => addToast({ variant: 'info', title: 'Export Ready', body: 'Your audit report is available for download.' })}>Info Toast</Button>
      </div>

      <CodeBlock code={`const { addToast } = useToast();
addToast({ variant: 'success', title: 'Pass', body: '...' });`} />
    </div>
  );
};

export default ToastsSection;
