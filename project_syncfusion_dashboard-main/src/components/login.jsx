import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const login = ({ currentColor, currentMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        setMessage('Login successful! Redirecting...');
        setTimeout(() => navigate('/ecommerce'), 1200);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`rounded-3xl shadow-lg p-10 w-full max-w-md ${currentMode === 'Dark' ? 'bg-secondary-dark-bg text-gray-200' : 'bg-white'}`}>
      <h2 className="text-3xl font-extrabold mb-6 text-center" style={{ color: currentColor }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="login-email" className="block mb-2 font-semibold">Email</label>
          <input
            id="login-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
            style={{ borderColor: currentColor, background: currentMode === 'Dark' ? '#33373E' : '#fff', color: currentMode === 'Dark' ? '#fff' : '#000' }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="login-password" className="block mb-2 font-semibold">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
            style={{ borderColor: currentColor, background: currentMode === 'Dark' ? '#33373E' : '#fff', color: currentMode === 'Dark' ? '#fff' : '#000' }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-bold text-white text-lg shadow-md"
          style={{ background: currentColor, opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {message && <div className="mt-4 text-green-500 text-center">{message}</div>}
        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
        <div className="mt-6 text-center">
          Don&apos;t have an account? <a href="/signup" style={{ color: currentColor }}>Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default login;
