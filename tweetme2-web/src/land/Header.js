import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showRightNavDrawer, setShowRightNavDrawer] = useState(false);

  const toggleRightNavDrawer = () => {
    setShowRightNavDrawer((prevShow) => !prevShow);
  };

  const handleLinkAbout = () => {
    // Check if the item object exists and has the 'id' property

  };

  const handleLinkContact = () => {
    // Check if the item object exists and has the 'id' property
   
      // Use window.location.href to navigate to the detail page
      window.location.href = `/Contact/`;
  
  };

  return (
    <header id="headerContainer" className="header-primary mui-fixed">
      <section className="agent-tutorial-modal-container"></section>
      <nav className="flex-container">
        <div className="flex-group">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
          {/* <a
            id="backArrow"
            href=""
            title="Back"
            aria-label="Back"
            className="icon-item search-back"
          >
            <i className="res-icon arrow-left-bold-icon"></i>
            Search
          </a> */}
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
            <a href="/" title="Land for Sale" className="logo  ">
            <span className="header-text">Lands in Africa </span>
            </a>
          </div>
        </div>

        <div className="flex-group ">
          <ul className="nav-ul">
          <li className="auth-item-header">
              <button
                className="btn-link onClick={handleLinkAbout}"
                id="signupAnchor"
                title="Register to access features like favorites and saved searches"
              >
              <a href="/About/" id="Contact" title="Contact">About</a>
              </button>

            </li>

            <li className="auth-item-header">
              <button
              
                className="btn-link"
                id="signupAnchor"
                title="Register to access features like favorites and saved searches"
              >
              <a href="/Contact/" id="Contact" title="Contact">Contact</a>

      
              </button>
            </li>


            <li className="auth-item-header">
              <button
                className="btn-link"
                id="signupAnchor"
                title="Register to access features like favorites and saved searches"
              >
              <a href="/Register/" id="Contact" title="Contact">Register</a>
              </button>{" "}
              <span>/</span>
              <button
                className="btn-link"
                id="signinAnchor"
                title="Sign In to your account"
              >
              <a href="/Login/" id="Contact" title="Contact">Sign</a>
              </button>
            </li>
           
            <li>
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
                <div id="rightNavDrawer" className="rightNavDrawer">
                  <ul className="drawer-menu-list">
                    <li>
                      <a href="/homes-for-sale/" id="UserMenu_HomesForSale" title="Land for Sale">Land for Sale</a>
                    </li>
                    <li>
                      <a href="/sold/" id="UserMenu_HomesSold" title="Land Sold">Land Sold</a>
                    </li>
                    <li>
                      <a href="/real-estate-agents/" id="UserMenu_FindAgent" title="Agent Directory">Agent Directory</a>
                    </li>
                    <li className="separator">
                      <a href="/customer/favorites/" rel="nofollow" id="UserMenu_Favorites">Favorites</a>
                    </li>
                    <li>
                      <a href="/customer/notes/" rel="nofollow" id="UserMenu_notes">Notes</a>
                    </li>
                    <li>
                      <a href="/customer/saved-searches/" rel="nofollow" id="UserMenu_Saved_Searches">Saved Searches</a>
                    </li>
                    <li>
                      <a href="/customer/account/co-shopping/" rel="nofollow" id="UserMenu_CoShopper_Agent">Co-Shopper &amp; Agent</a>
                    </li>
                    <li className="separator">
                      <a href="/customer/account/" rel="nofollow" id="UserMenu_AccountSettings">Account Settings</a>
                    </li>
                    <li>
                      <a href="/support/" id="UserMenu_Help" title="Land.com Help &amp; Support">Help</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
