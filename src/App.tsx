import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import { initializeData } from './data/data';

// A simple router component to handle navigation based on the URL hash.
const Router: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#/');
    };
    window.addEventListener('hashchange', handleHashChange);
    // Set initial hash
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const isAdminAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';

  let page;
  switch (hash) {
    case '#/admin/dashboard':
      page = isAdminAuthenticated ? <AdminDashboard /> : <AdminLoginPage />;
      break;
    case '#/admin':
      page = <AdminLoginPage />;
      break;
    default:
      page = <HomePage />;
  }
  
  return page;
};


const App: React.FC = () => {
  useEffect(() => {
    // Ensure local storage is seeded with default data on first load.
    initializeData();
  }, []);

  return (
    <div className="bg-brand-dark text-white font-sans">
      <Router />
    </div>
  );
};

export default App;
