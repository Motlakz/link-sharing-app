import React, { useState, useEffect } from 'react';
import Logo from '../images/logo-devlinks-large.svg';
import LogoCondensed from '../images/logo-devlinks-small.svg';
import LinkIconSmall from '../images/icon-link.svg';
import ProfileIcon from '../images/icon-profile-details-header.svg';
import EyeIcon from '../images/icon-preview-header.svg';

function Header({ isLoggedIn }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 475);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <header className="w-full bg-white rounded-lg p-4 animate__animated animate__backInDown">
          {isMobile ? (
            // Mobile navigation for logged-in user
            <nav className="flex items-center justify-between">
              <div className="logo-condensed">
                <figure>
                  <img src={LogoCondensed} alt="" />
                </figure>
              </div>
              <div className="middle-btns flex gap-2 text-center">
                <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md hover:font-semibold hover:bg-cyan-200 hover:text-cyan-600 hover:bg-opacity-70">
                  <span className="icon">
                    <img src={LinkIconSmall} alt="" />
                  </span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 py-2 group rounded-md hover:font-semibold hover:bg-cyan-200 hover:text-cyan-600 hover:bg-opacity-70">
                  <span className="icon">
                    <img src={ProfileIcon} alt="" />
                  </span>
                </button>
              </div>
              <button className="preview p-2 rounded-md border border-cyan-600 text-cyan-600 hover:bg-cyan-200 hover:text-cyan-600 hover:bg-opacity-70">
                <img src={EyeIcon} alt="" />
              </button>
            </nav>
          ) : (
            // Desktop navigation for logged-in user
            <nav className="flex items-center justify-between">
              <div className="logo">
                <figure>
                  <img src={Logo} alt="devlinks logo" />
                </figure>
              </div>
              <div className="middle-btns flex gap-4">
                <button className="flex items-center justify-center gap-2 p-2 rounded-md hover:font-semibold hover:bg-cyan-200 hover:text-cyan-600 hover:bg-opacity-70">
                  <span className="icon">
                    <img src={LinkIconSmall} alt="" />
                  </span>
                  <p className="text">Links</p>
                </button>
                <button className="flex items-center justify-center gap-2 p-2 group rounded-md hover:font-semibold hover:bg-cyan-200 hover:text-cyan-600 hover:bg-opacity-70">
                  <span className="icon">
                    <img src={ProfileIcon} alt="" />
                  </span>
                  <p className="text">Profile Details</p>
                </button>
              </div>
              <button className="preview p-2 rounded-md border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-gray-100">Preview</button>
            </nav>
          )}
        </header>
      ) : (
        // Header for logged-out user
        <header className="animate__animated animate__backInDown">
          <nav  className="p-8">
            <div className="logo">
              <figure>
                <img src={Logo} alt="" />
              </figure>
            </div>
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;

