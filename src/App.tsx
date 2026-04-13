import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage';
import { ToastProvider, Button } from '@lib';

const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/*" element={<LibraryPage />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
