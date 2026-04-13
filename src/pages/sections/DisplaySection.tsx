import React, { useState } from 'react';
import { 
  Avatar, 
  AvatarGroup, 
  Accordion, 
  Modal, 
  Drawer, 
  EmptyState, 
  Button
} from '@lib';
import { CodeBlock } from '../../components/CodeBlock';
import styles from './Sections.module.css';

const DisplaySection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalBlur, setModalBlur] = useState(true);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerBlur, setDrawerBlur] = useState(true);

  const openBlurredModal = () => {
    setModalBlur(true);
    setModalOpen(true);
  };

  const openNonBlurredModal = () => {
    setModalBlur(false);
    setModalOpen(true);
  };

  const openBlurredDrawer = () => {
    setDrawerBlur(true);
    setDrawerOpen(true);
  };

  const openNonBlurredDrawer = () => {
    setDrawerBlur(false);
    setDrawerOpen(true);
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Data Display & Overlays</h2>
      <p className={styles.description}>
        Components for presenting complex data structures and contextual interactive layers.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Avatars</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className="t-label">Individual</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar name="Kedar R" status="online" size="xl" />
              <Avatar name="Adela P" status="busy" size="lg" />
              <Avatar name="Marcus B" status="away" size="md" />
              <Avatar name="System" size="sm" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className="t-label">Groups</p>
            <AvatarGroup>
              <Avatar name="User 1" />
              <Avatar name="User 2" />
              <Avatar name="User 3" />
              <Avatar name="User 4" />
            </AvatarGroup>
          </div>
        </div>
        <CodeBlock code={`<Avatar name="Kedar R" status="online" size="xl" />
<AvatarGroup>...</AvatarGroup>`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Accordions</h4>
        <div style={{ maxWidth: '600px', marginBottom: '16px' }}>
          <Accordion title="Security & Compliance Details">
            <p>All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Review our SOC2 Type II report for more information on our security posture.</p>
          </Accordion>
          <Accordion title="Data Retention Policy">
            <p>Records are kept for a period of 7 years as per federal guidelines for insurance claims processing.</p>
          </Accordion>
        </div>
        <CodeBlock code={`<Accordion title="Security">...</Accordion>`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Modals & Drawers</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
          <Button onClick={openBlurredModal}>Open Modal (Blurred)</Button>
          <Button variant="outline" onClick={openNonBlurredModal}>Open Modal (Non-Blurred)</Button>
          <Button variant="outline" onClick={openBlurredDrawer}>Open Drawer (Blurred)</Button>
          <Button variant="outline" onClick={openNonBlurredDrawer}>Open Drawer (Non-Blurred)</Button>
        </div>

        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setModalOpen(false)} 
          title="Confirm Audit Action"
          blurBackground={modalBlur}
          footer={
            <>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setModalOpen(false)}>Continue</Button>
            </>
          }
        >
          <p className="body-md">You are about to finalize the audit for <strong>CLM-2024-001</strong>. This action cannot be undone and will notify the claim supervisor.</p>
        </Modal>

        <Drawer 
          isOpen={isDrawerOpen} 
          onClose={() => setDrawerOpen(false)} 
          title="Audit Details"
          blurBackground={drawerBlur}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p className="t-label" style={{ marginBottom: '4px' }}>Status</p>
              <p className="body-sm">Pending Manual Review</p>
            </div>
            <div>
              <p className="t-label" style={{ marginBottom: '4px' }}>Assigned To</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Avatar name="Adela P" size="xs" />
                <span className="body-sm">Adela P.</span>
              </div>
            </div>
          </div>
        </Drawer>
        <CodeBlock code={`<Modal isOpen={open} onClose={close} title="Confirm">...</Modal>
<Drawer isOpen={open} side="right">...</Drawer>`} />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Empty States</h4>
        <div style={{ border: '1px solid var(--color-border)', borderRadius: '12px', background: 'var(--color-bg)', padding: '40px' }}>
          <EmptyState 
            icon="search_off"
            title="No Results Found"
            description="We couldn't find any claims matching your current filter criteria. Try adjusting your search or clearing filters."
            action={<Button variant="outline" size="sm">Clear All Filters</Button>}
          />
        </div>
        <CodeBlock code={`<EmptyState icon="search_off" title="No Results" />`} />
      </div>
    </div>
  );
};

export default DisplaySection;
