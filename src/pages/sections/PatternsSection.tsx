import React from 'react';
import { 
  ActivityFeed, 
  NotificationItem, 
  ProfileCard, 
  KanbanCard
} from '@lib';
import { CodeBlock } from '../../components/CodeBlock';
import styles from './Sections.module.css';

const PatternsSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Compositional Patterns</h2>
      <p className={styles.description}>
        Complex UI patterns built by combining primitive components into purposeful clusters.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Activity Timelines</h4>
          <div style={{ 
            padding: '24px', 
            border: '1px solid var(--color-border)', 
            borderRadius: '12px', 
            background: 'var(--color-surface)',
            marginBottom: '16px'
          }}>
            <ActivityFeed 
              items={[
                { id: '1', label: 'Policy updated by Kedar R.', timestamp: '2 MIN AGO', icon: 'edit', color: 'primary' },
                { id: '2', label: 'Audit report generated', timestamp: '1 HR AGO', icon: 'description', color: 'success' },
                { id: '3', label: 'Exception flagged in CLM-284', timestamp: '3 HR AGO', icon: 'warning', color: 'warning' },
                { id: '4', label: 'New contributor added to unit', timestamp: '5 HR AGO', icon: 'person_add', color: 'info' },
              ]}
            />
          </div>
          <CodeBlock code={`<ActivityFeed items={activityData} />`} />
        </div>

        <div>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Notification Items</h4>
          <div style={{ 
            border: '1px solid var(--color-border)', 
            borderRadius: '12px', 
            overflow: 'hidden',
            marginBottom: '16px'
          }}>
            <NotificationItem 
              id="n1"
              title="Design Review Requested"
              description="Adela P. tagged you in a review for the new component library layout."
              timestamp="10m"
              unread
              type="info"
            />
            <NotificationItem 
              id="n2"
              title="Deployment Successful"
              description="The latest build v1.0.4 has been successfully deployed to staging."
              timestamp="1h"
              type="success"
            />
            <NotificationItem 
              id="n3"
              title="Security Alert"
              description="Multiple failed login attempts detected for your account from a new IP."
              timestamp="3h"
              type="error"
            />
          </div>
          <CodeBlock code={`<NotificationItem unread type="success" ... />`} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
        <div>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Profile Identity</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            <ProfileCard 
              name="Kedar R." 
              role="Design Lead · Corporate" 
              onlineStatus="online"
              statusLabel="Admin"
            />
            <ProfileCard 
              name="Adela P." 
              role="Claims Adjuster · L2" 
              onlineStatus="away"
              statusLabel="Active"
            />
          </div>
          <CodeBlock code={`<ProfileCard name="Kedar R." onlineStatus="online" />`} />
        </div>

        <div>
          <h4 className="heading-xs" style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>Kanban Tasks</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '16px' }}>
            <KanbanCard 
              id="k1"
              title="Review manual exceptions for GL-2024-9454"
              status="progress"
              statusLabel="In Progress"
              date="Mar 15"
              assignees={[{ name: 'Kedar R.' }]}
            />
            <KanbanCard 
              id="k2"
              title="Build component preview page and documentation"
              status="review"
              statusLabel="Review"
              date="Mar 11"
              assignees={[{ name: 'Kedar R.' }, { name: 'Adela P.' }]}
            />
          </div>
          <CodeBlock code={`<KanbanCard status="progress" assignees={users} />`} />
        </div>
      </div>
    </div>
  );
};

export default PatternsSection;
