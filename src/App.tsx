import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Moon, Sun } from 'lucide-react';
import './App.css';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLogoAnimating, setIsLogoAnimating] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  
  // Your Notion page URL and correct password
  const NOTION_URL: string = 'https://www.notion.so/Life-City-Worship-Volunteer-Hub-1e7c88dcb985804ab208eb8181fecb2d';
  const CORRECT_PASSWORD: string = 'romans12:1';

  useEffect(() => {
    // Trigger logo animation on theme change
    setIsLogoAnimating(true);
    const timer = setTimeout(() => setIsLogoAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [isDark]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      window.location.href = NOTION_URL;
    } else {
      setError('Incorrect password. Please try again.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const toggleTheme = (): void => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
      {/* Theme Toggle Button - Centered at top */}
      <div className="theme-toggle">
        <button
          onClick={toggleTheme}
          className={`theme-button ${isDark ? 'dark' : 'light'}`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className={`card ${isDark ? 'dark' : 'light'}`}>
          
       {/* Logo Section */}
<div className="logo-section">
  <div className={`logo ${isLogoAnimating ? 'animating' : ''}`}>
    <img
      src={isDark ? '/logo-white.svg' : '/logo-black.svg'}
      alt="Life City Logo"
      className="logo-image"
    />
  </div>

  <h1 className={`title ${isDark ? 'dark' : 'light'}`}>
    Life City Worship Volunteer Hub
  </h1>
  <p className={`subtitle ${isDark ? 'dark' : 'light'}`}>
    Enter the password to access the hub
  </p>
</div>


          {/* Password Form */}
          <div className="form-section">
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter password"
                className={`password-input ${isDark ? 'dark' : 'light'}`}
                style={{ 
                  width: '280px',
                  maxWidth: '100%',
                  minWidth: '240px'
                }}
              />

              
              {/* Show/Hide Password Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`password-toggle ${isDark ? 'dark' : 'light'}`}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!password.trim()}
              className={`submit-button ${isDark ? 'dark' : 'light'} ${password.trim() ? 'enabled' : 'disabled'}`}
              style={{
                width: '280px',
                maxWidth: '100%'
              }}
            >

>
  Enter the Hub
</button>

          {/* YouTube Channel Link */}
          <div className="youtube-section">
            <p className={`youtube-text ${isDark ? 'dark' : 'light'}`}>
              Visit our YouTube page below
            </p>
            <a
              href="https://www.youtube.com/watch?v=qal1xbKTnjM&list=PLojz68sKoGE3y4l_oO6SkbdYgumXnKwcc"
              target="_blank"
              rel="noopener noreferrer"
              className={`youtube-link ${isDark ? 'dark' : 'light'}`}
            >
              <svg className="youtube-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Life City Worship</span>
            </a>
          </div>

          {/* Footer */}
          <div className={`footer ${isDark ? 'dark' : 'light'}`}>
            Life City Worship Team
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="background-decoration">
        <div className={`decoration-1 ${isDark ? 'dark' : 'light'}`}></div>
        <div className={`decoration-2 ${isDark ? 'dark' : 'light'}`}></div>
      </div>
    </div>
  );
};

export default App;