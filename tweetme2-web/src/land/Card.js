import React, { useState } from 'react';
import './Card.css'; // Create a separate CSS file for styling if desired

const Card = ({ title, description, image, price, content, timestamp, realtor, id }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLink = () => {
    // Check if the item object exists and has the 'id' property
    if (id) {
      // Use window.location.href to navigate to the detail page
      window.location.href = `/Land/${id}`;
    } else {
      console.error('Item data is missing or invalid.');
    }
  };
  
  return (
    <div className="custom-card">
      {/* Use onClick to call handleLink */}
      <div className="card-content" onClick={handleLink}>
        <img src={image} alt={title} className="custom-card-media" />
        <div className="custom-card-content">
          <h3 className="price">Ksh {price}</h3>
          <p className="subheader">{timestamp}</p>
          <p className="subheader2">
            <i className="fas fa-map-marker-alt"></i>
            <span className="location-icon">&#128205;</span>
            {description}
          </p>
        </div>
        {expanded && (
          <div className="collapse-content">
            <p>{content}</p>
          </div>
        )}
        <div className="custom-card-header">
          <div className="user-name">{realtor}</div>
          <div className="header-actions">
            <button className="expand-button" onClick={handleLink}>
              <span>{expanded ? 'less' : 'more'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
