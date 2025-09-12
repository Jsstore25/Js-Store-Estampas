import React, { useState, FormEvent } from 'react';
import { JsStoreLogo } from '../components/icons/Logo';

const AdminLoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a secure check.
    // For this demo, we use a simple hardcoded password.
    if (password === 'admin123') {
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      window.location.hash = '#/admin/dashboard';
    } else {
      setError('Senha incorreta.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark p-4">
      <div className="bg-brand-gray p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <JsStoreLogo className="h-16 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-center text-white mb-6">Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 mb-2">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-brand-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-brand-yellow text-brand-dark font-bold py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors"
          >
            Entrar
          </button>
        </form>
         <div className="text-center mt-6">
            <a href="/#/" className="text-sm text-gray-400 hover:text-brand-yellow">Voltar para a Loja</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;