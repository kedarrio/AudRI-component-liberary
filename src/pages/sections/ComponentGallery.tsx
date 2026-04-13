import React from 'react';
import styles from './Sections.module.css';

interface GalleryCardProps {
  title: string;
  icon: string;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, icon, onClick }) => (
  <button className={styles.galleryCard} onClick={onClick}>
    <div className={styles.galleryIcon}>
      <span className="material-symbols-rounded">{icon}</span>
    </div>
    <span className={styles.galleryTitle}>{title}</span>
  </button>
);

const ComponentGallery = ({ onCardClick }: { onCardClick: (id: string) => void }) => {
  const cards = [
    { id: 'buttons', title: 'Buttons', icon: 'smart_button' },
    { id: 'inputs', title: 'Inputs', icon: 'input' },
    { id: 'navigation', title: 'Navigation', icon: 'explore' },
    { id: 'cards', title: 'Cards', icon: 'dashboard_customize' },
    { id: 'table', title: 'Tables', icon: 'table_chart' },
    { id: 'dashboards', title: 'Dashboards', icon: 'dashboard' },
  ];

  return (
    <div className={styles.galleryGrid}>
      {cards.map(card => (
        <GalleryCard 
          key={card.id} 
          title={card.title} 
          icon={card.icon} 
          onClick={() => onCardClick(card.id)} 
        />
      ))}
    </div>
  );
};

export default ComponentGallery;
