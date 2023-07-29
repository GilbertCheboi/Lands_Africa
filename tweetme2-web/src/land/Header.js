import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [showRightNavDrawer, setShowRightNavDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleRightNavDrawer = () => {
    setShowRightNavDrawer((prevShow) => !prevShow);
  };

  const handleLinkAbout = () => {
    // Handle link for 'About'
    // ...
  };

  const handleLinkContact = () => {
    // Handle link for 'Contact'
    // ...
  };

  const handleLinkRegister = () => {
    // Handle link for 'Register'
    // ...
  };

  const handleLinkSign = () => {
    // Handle link for 'Sign'
    // ...
  };

  // Update isMobile state when the screen size changes
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Add event listener to detect screen size changes
    window.addEventListener("resize", updateIsMobile);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <header id="headerContainer" className="header-primary mui-fixed">
      <section className="agent-tutorial-modal-container"></section>
      <nav className="flex-container">
        {/* Mobile: Render the button and dropdown menu */}
        {isMobile && (
           <div className="flex-mobile">
           <div className="logo-item">
             <a href="/" title="Land for Sale" className="logo">
               <span className="header-text">Lands in Africa</span>
             </a>
           </div>
           <button
             id="rightNavToggleFromHeader"
             className="user-menu-item"
             aria-label="Open Logged In Menu"
             aria-haspopup="true"
             aria-expanded={showRightNavDrawer}
             aria-controls="rightNavDrawer"
             onClick={toggleRightNavDrawer}
           >
             <div className="photo-icon">
               <i className="res-icon profile-squared-icon"></i>
             </div>
             <i className="res-icon more-icon vertical-meatball-menu"></i>
           </button>
            {showRightNavDrawer && (
              <ul className="nav-ul">
                <li className="auth-item-header">
                  <button className="btn-link" onClick={handleLinkAbout}>
                    <a href="/About/" id="Contact" title="Contact">
                      About
                    </a>
                  </button>
                </li>

                <li className="auth-item-header">
                  <button className="btn-link" onClick={handleLinkContact}>
                    <a href="/Contact/" id="Contact" title="Contact">
                      Contact
                    </a>
                  </button>
                </li>

                <li className="auth-item-header">
                  <button className="btn-link" onClick={handleLinkRegister}>
                    <a href="/Register/" id="Contact" title="Contact">
                      Register
                    </a>
                  </button>{" "}
                  <span>/</span>
                  <button className="btn-link" onClick={handleLinkSign}>
                    <a href="/Login/" id="Contact" title="Contact">
                      Sign
                    </a>
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* Desktop: Render all components */}
        {!isMobile && (
          <>
            <div className="flex-group">
              <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
              </div>
              {/* ... */}
              <a
                href="/real-estate-agents/"
                id="header-find-agent"
                title="Land Agents"
                className="agent-directory-item"
              >
                Sell land?
              </a>
            </div>

            <div className="flex-group">
              <div className="logo-item">
                <a href="/" title="Land for Sale" className="logo">
                  <span className="header-text">Lands in Africa</span>
                </a>
              </div>
            </div>

            <div className="flex-group">
              <ul className="nav-ul">
                <li className="auth-item-header">
                  <button className="btn-link" onClick={handleLinkAbout}>
                    <a href="/About/" id="Contact" title="Contact">
                      About
                    </a>
                  </button>
                </li>

                <li className="auth-item-header">
                  <button className="btn-link" onClick={handleLinkContact}>
                    <a href="/Contact/" id="Contact" title="Contact">
                      Contact
                    </a>
                  </button>
                </li>

                <li className="auth-item-header">
                  <button className="btn-link" onClick={handleLinkRegister}>
                    <a href="/Register/" id="Contact" title="Contact">
                      Register
                    </a>
                  </button>{" "}
                  <span>/</span>
                  <button className="btn-link" onClick={handleLinkSign}>
                    <a href="/Login/" id="Contact" title="Contact">
                      Sign
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

