import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage';
import { ToastProvider, Button } from '@lib';

const LandingPage = () => (
  <div className="flex-column flex-center vh100 gap-24">
    <h1 className="display-xl">AuDRI Design System</h1>
    <p className="body-lg" style={{ color: 'var(--color-text-secondary)' }}>
      Precision Intelligence meets Quiet Luxury.
    </p>
    <div className="flex-row gap-16">
      <Link to="/library">
        <Button variant="primary" size="lg">Explore Library</Button>
      </Link>
      <Link to="/library">
        <Button variant="outline" size="lg">Documentation</Button>
      </Link>
    </div>
  </div>
);

const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/library/*" element={<LibraryPage />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
