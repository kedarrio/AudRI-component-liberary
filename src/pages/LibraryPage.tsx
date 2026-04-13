import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Sidebar } from '@lib';
import {
  ColorsSection,
  TypographySection,
  SpacingSection,
  ButtonsSection,
  TagsSection,
  ChipsSection,
  InputsSection,
  ControlsSection,
  DropdownsSection,
  ToastsSection,
  AlertsSection,
  CardsSection,
  TableSection,
  NavigationSection,
  IconsSection,
  AnimationsSection,
  LineArtSection,
  GridSection,
  LoadersSection,
  DisplaySection,
  PatternsSection,
  DashboardSection
} from './sections';
import styles from './LibraryPage.module.css';

const sidebarItems = [
  { id: 'colors', label: 'Colours', section: 'Foundation', icon: 'palette' },
  { id: 'typography', label: 'Typography', section: 'Foundation', icon: 'text_fields' },
  { id: 'spacing', label: 'Spacing', section: 'Foundation', icon: 'space_bar' },
  { id: 'grid', label: 'Grid', section: 'Foundation', icon: 'grid_view' },
  { id: 'buttons', label: 'Buttons', section: 'Components', icon: 'smart_button' },
  { id: 'tags', label: 'Tags & Badges', section: 'Components', icon: 'sell' },
  { id: 'chips', label: 'Chips', section: 'Components', icon: 'filter_list' },
  { id: 'inputs', label: 'Inputs & Forms', section: 'Components', icon: 'input' },
  { id: 'controls', label: 'Controls', section: 'Components', icon: 'check_box' },
  { id: 'dropdowns', label: 'Dropdowns', section: 'Components', icon: 'arrow_drop_down_circle' },
  { id: 'toasts', label: 'Toasts', section: 'Feedback', icon: 'notification_important' },
  { id: 'alerts', label: 'Alerts', section: 'Feedback', icon: 'warning' },
  { id: 'loaders', label: 'Loaders', section: 'Feedback', icon: 'progress_activity' },
  { id: 'cards', label: 'Cards', section: 'Surfaces', icon: 'dashboard_customize' },
  { id: 'display', label: 'Display', section: 'Surfaces', icon: 'web_asset' },
  { id: 'table', label: 'Table', section: 'Data', icon: 'table_chart' },
  { id: 'navigation', label: 'Navigation', section: 'Navigation', icon: 'explore' },
  { id: 'patterns', label: 'Patterns', section: 'Patterns', icon: 'schema' },
  { id: 'dashboards', label: 'Dashboards', section: 'Patterns', icon: 'dashboard' },
  { id: 'icons', label: 'Icons', section: 'Visuals', icon: 'face' },
  { id: 'animations', label: 'Animations', section: 'Visuals', icon: 'animation' },
  { id: 'lineart', label: 'Line Art', section: 'Visuals', icon: 'draw' },
];

const LibraryPage = () => {
  const [activeId, setActiveId] = useState('colors');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, { rootMargin: '-10% 0px -80% 0px' });

    sidebarItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 40;
      window.scrollTo({ top, behavior: 'instant' });
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar
        items={sidebarItems}
        activeId={activeId}
        onItemClick={scrollToSection}
        header={
          <div className={styles.sidebarHeader}>
            <span className={styles.navLogo}>
              AuDRI <span className={styles.navLogoSpan}>LIB</span>
            </span>
          </div>
        }
      />
        
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={clsx("display-lg", styles.title)}>AuDRI Design System</h1>
          <p className={clsx("body-lg", styles.description)}>
            A precise, professional system for building compliance intelligence interfaces. 
            Dense, focused, built to communicate authority.
          </p>
        </div>

        <div className={styles.sectionsList}>
          <section id="colors"><ColorsSection /></section>
          <section id="typography"><TypographySection /></section>
          <section id="spacing"><SpacingSection /></section>
          <section id="grid"><GridSection /></section>
          <section id="buttons"><ButtonsSection /></section>
          <section id="tags"><TagsSection /></section>
          <section id="chips"><ChipsSection /></section>
          <section id="inputs"><InputsSection /></section>
          <section id="controls"><ControlsSection /></section>
          <section id="dropdowns"><DropdownsSection /></section>
          <section id="toasts"><ToastsSection /></section>
          <section id="alerts"><AlertsSection /></section>
          <section id="loaders"><LoadersSection /></section>
          <section id="cards"><CardsSection /></section>
          <section id="display"><DisplaySection /></section>
          <section id="table"><TableSection /></section>
          <section id="navigation"><NavigationSection /></section>
          <section id="patterns"><PatternsSection /></section>
          <section id="dashboards"><DashboardSection /></section>
          <section id="icons"><IconsSection /></section>
          <section id="animations"><AnimationsSection /></section>
          <section id="lineart"><LineArtSection /></section>
        </div>

        <footer className={styles.footer}>
          AuDRI Design System — v1.0 — Glifiq · glifiq.com
        </footer>
      </main>
    </div>
  );
};

export default LibraryPage;
