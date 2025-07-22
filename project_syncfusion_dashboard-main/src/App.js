import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorMapping } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Login from './components/login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const location = useLocation();

  // Check if current route is login or signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {isAuthPage ? (
        <div className="min-h-screen flex items-center justify-center bg-main-bg dark:bg-main-dark-bg">
          <Routes>
            <Route path="/login" element={<Login currentColor={currentColor} currentMode={currentMode} />} />
            <Route path="/signup" element={<Signup currentColor={currentColor} currentMode={currentMode} />} />
          </Routes>
        </div>
      ) : (
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}
              <Routes>
                <Route path="/" element={<PrivateRoute><Ecommerce /></PrivateRoute>} />
                <Route path="/ecommerce" element={<PrivateRoute><Ecommerce /></PrivateRoute>} />
                <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
                <Route path="/employees" element={<PrivateRoute><Employees /></PrivateRoute>} />
                <Route path="/customers" element={<PrivateRoute><Customers /></PrivateRoute>} />
                <Route path="/kanban" element={<PrivateRoute><Kanban /></PrivateRoute>} />
                <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
                <Route path="/line" element={<PrivateRoute><Line /></PrivateRoute>} />
                <Route path="/area" element={<PrivateRoute><Area /></PrivateRoute>} />
                <Route path="/bar" element={<PrivateRoute><Bar /></PrivateRoute>} />
                <Route path="/pie" element={<PrivateRoute><Pie /></PrivateRoute>} />
                <Route path="/financial" element={<PrivateRoute><Financial /></PrivateRoute>} />
                <Route path="/color-mapping" element={<PrivateRoute><ColorMapping /></PrivateRoute>} />
                <Route path="/pyramid" element={<PrivateRoute><Pyramid /></PrivateRoute>} />
                <Route path="/stacked" element={<PrivateRoute><Stacked /></PrivateRoute>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
