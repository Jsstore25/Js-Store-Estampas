import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import { initializeData } from './data/data';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    initializeData();

    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange, false);

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const protectedAdminDashboard = () => {
    const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
    if (isAuthenticated) {
      return <AdminDashboard />;
    }
    // Redirect to login
    window.location.hash = '#/admin';
    return <AdminLoginPage />;
  };

  let component;
  const currentRoute = route || '#/';

  if (currentRoute.startsWith('#/admin')) {
    if(currentRoute === '#/admin/dashboard') {
      component = protectedAdminDashboard();
    } else {
      component = <AdminLoginPage />;
    }
  } else {
    component = <HomePage />;
  }


  return (
    <div className="bg-brand-dark text-white font-sans">
      {component}
    </div>
  );
};

export default App;
