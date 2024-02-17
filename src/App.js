import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import EmptyState from './components/EmptyStatePage';
import HeaderLoggedOut from './components/Header'; // Import the HeaderLoggedOut component

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // This code will run whenever the location (route) changes
    setIsLoggedIn(location.pathname !== '/');
  }, [location]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(location.pathname !== '/');
  };

  const handleSignUp = () => {
    // Sign up logic here
    setIsLoggedIn(true);
  };

  // Conditionally render HeaderLoggedOut when on /login or /signup
  const isLoginOrSignUp = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="App flex flex-col items-center bg-gradient relative min-h-screen">
      {/* Conditionally render HeaderLoggedOut for /login and /signup */}
      {isLoginOrSignUp ? (
        <HeaderLoggedOut />
      ) : (
        // Render the Header component for other routes
        <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      )}

      <Routes>
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpForm onSignUp={handleSignUp} />} />
        <Route
          path="/empty-state-page"
          element={<EmptyState isLoggedIn={isLoggedIn} onLogin={handleLogin} />}
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
