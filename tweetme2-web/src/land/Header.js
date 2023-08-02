import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
    const [query, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const fetchSearchResults = async () => {
    try{
      const response = await fetch(`http://127.0.0.1:8000/search?q=${query}`)
      const data = await response.json();
      console.log(data)

     
        setSearchResults(data);
     
    } catch(error)  {
        console.error('Error fetching search results:', error);
      };
  };


  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleForm = () => {
    setIsFormActive(!isFormActive);
  };

  const cancelForm = () => {
    setIsFormActive(false);
  };

  return (
    <div>
    <nav>
      <div className={`menu-icon ${isActive ? 'hide' : ''}`} onClick={toggleMenu}>
        <span className="fas fa-bars"></span>
      </div>
      <div className="logo">Lands In Africa</div>
      <div className={`nav-items ${isActive ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/About/">About</a></li>
        <li><a href="/login/">Sell Land</a></li>
        <li><a href="/Contact/">Contact</a></li>
        <li><a href="/login/">Login</a></li>
        <li><a href="/register/">Register</a></li>
      </div>
      <div className={`search-icon ${isFormActive ? 'hide' : ''}`} onClick={toggleForm}>
        <span className="fas fa-search"></span>
      </div>
      <div className={`cancel-icon ${isFormActive ? 'show' : ''}`} onClick={cancelForm}>
        <span className="fas fa-times"></span>
      </div>
      <form className={`search-form ${isFormActive ? 'active' : ''}`} action="#">
        <input type="search" className="search-data" placeholder="Search" value={query}
        onChange={(e) => setSearchQuery(e.target.value)} required />
        <button type="submit" className="fas fa-search"></button>
      </form>
      
    </nav>
    <ul>
        {searchResults.map((result) => (
          <li key={result.title}>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
          </li>
        ))}
      </ul>
  </div>
  );
};

export default Header;



/**
 * <header id="headerContainer" className="header-primary mui-fixed">
      <section className="agent-tutorial-modal-container"></section>
      <nav className="flex-container">
        {/* Mobile: Render the button and dropdown menu *
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
                   <a href="/register/" id="Contact" title="Contact">
                     Register
                   </a>
                 </button>{" "}
                 <span>/</span>
                 <button className="btn-link" onClick={handleLinkSign}>
                   <a href="/login/" id="Contact" title="Contact">
                     Sign
                   </a>
                 </button>
               </li>
             </ul>
           )}
         </div>
       )}

       {/* Desktop: Render all components *
       {!isMobile && (
         <>
           <div className="flex-group">
             <div className="search-container">
               <input type="text" placeholder="Search..." />
               <button type="submit">Search</button>
             </div>
             {/* ... *
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
                   <a href="/register/" id="Contact" title="Contact">
                     Register
                   </a>
                 </button>{" "}
                 <span>/</span>
                 <button className="btn-link" onClick={handleLinkSign}>
                   <a href="/login/" id="Contact" title="Contact">
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
 */