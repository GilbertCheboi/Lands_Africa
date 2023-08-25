import React, { useState } from 'react';
import './Searchme.css'


    const data = [
      {
        "key": 1,
        "title": "Scenic Rift Valley Plot",
        "description": "Kenya, Nakuru, Naivasha",
        "country": "Kenya",
        "county": "Nakuru",
        "sub_county": "Naivasha",
        "price": 150000,
        "image": "https://example.com/images/kenya1.jpg",
        "content": "Explore the beauty of Kenya with this prime land located in the breathtaking Rift Valley...",
        "timestamp": "2023-08-24T09:15:00Z",
        "realtor": "Grace Kariuki"
      },
      {
        "key": 2,
        "title": "Coastal Acreage",
        "description": "Kenya, Mombasa, Kwale",
        "country": "Kenya",
        "county": "Mombasa",
        "sub_county": "Kwale",
        "price": 280000,
        "image": "https://example.com/images/kenya2.jpg",
        "content": "Own a piece of paradise with this sprawling coastal land, perfect for a resort or private getaway...",
        "timestamp": "2023-08-23T11:30:00Z",
        "realtor": "Isaac Mbeki"
      },
      {
        "key": 3,
        "title": "Serengeti Plains Parcel",
        "description": "Kenya, Narok, Maasai Mara",
        "country": "Kenya",
        "county": "Narok",
        "sub_county": "Maasai Mara",
        "price": 75000,
        "image": "https://example.com/images/kenya3.jpg",
        "content": "Experience the wild beauty of Africa with this land in the iconic Maasai Mara region...",
        "timestamp": "2023-08-22T14:20:00Z",
        "realtor": "Daniel Ole-Sankale"
      },
      {
        "key": 4,
        "title": "Panoramic Nairobi Viewpoint",
        "description": "Kenya, Nairobi, Kajiado",
        "country": "Kenya",
        "county": "Nairobi",
        "sub_county": "Kajiado",
        "price": 210000,
        "image": "https://example.com/images/kenya4.jpg",
        "content": "Elevate your lifestyle with this elevated land offering stunning views of Nairobi's skyline...",
        "timestamp": "2023-08-21T16:45:00Z",
        "realtor": "Sarah Njoroge"
      },
      {
        "key": 5,
        "title": "Lush Tea Plantation Estate",
        "description": "Kenya, Kericho, Bureti",
        "country": "Kenya",
        "county": "Kericho",
        "sub_county": "Bureti",
        "price": 380000,
        "image": "https://example.com/images/kenya5.jpg",
        "content": "Embrace tranquility and sustainability with your own tea plantation in the heart of Kericho...",
        "timestamp": "2023-08-20T10:30:00Z",
        "realtor": "Patrick Kibet"
      },
      {
        "key": 6,
        "title": "Rustic Amboseli Land",
        "description": "Kenya, Kajiado, Amboseli",
        "country": "Kenya",
        "county": "Kajiado",
        "sub_county": "Amboseli",
        "price": 95000,
        "image": "https://example.com/images/kenya6.jpg",
        "content": "Experience the allure of Amboseli with this rustic land, a stone's throw from the majestic elephants...",
        "timestamp": "2023-08-19T14:15:00Z",
        "realtor": "Lucy Mwangi"
      }
    ]
  
  
 
function PropertyCard({ property }) {
    const [expanded, setExpanded] = useState(false);

    const handleLink = () => {
      // Implement your logic for handling the link here
    };
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    const {
        image,
        title,
        price,
        timestamp,
        description,
        content,
        realtor
      } = property;
    
      const showPreview = content && content.length > 70;

    return (
        <div className="custom-card">
        <div className="card-content">
          <div className="card-content-wrapper" onClick={handleLink}>
            <div className="custom-card-media-container">
              <img src={image} alt={title} className="custom-card-media" />
            </div>
            <div className="custom-card-content">
              <h3 className="price">Ksh {price}</h3>
              <p className="subheader">{timestamp}</p>
              <p className="subheader2">
                <i className="fas fa-map-marker-alt"></i>
                <span className="location-icon"> </span>
                {description}
              </p>
              <p>
                {content && (showPreview ? content.slice(0, 70) + "..." : content)}
              </p>
            </div>
          </div>
          {expanded && (
            <div className="collapse-content">
              <p>{content}</p>
            </div>
          )}
          <div className="custom-card-header">
            <div className="user-name">{realtor}</div>
            <div className="header-actions">
              <button className="expand-button" onClick={handleExpandClick}>
                <span>{expanded ? 'less' : 'more'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function PropertyList({ filteredProperties }) {
    const propertyCards = filteredProperties.map(property => (
      <PropertyCard key={property.key} property={property} />
    ));
  
    return <div>{propertyCards}</div>;
  }
  
  const Scroll = (props) => {
    return (
      <div style={{ overflowY: 'scroll', height: '70vh' }}>
        {props.children}
      </div>
    );
  }
  
  export default function Searchme() {
    const [searchField, setSearchField] = useState("");
  
    const filteredProperties = data.filter(property => {
      return (
        property.title.toLowerCase().includes(searchField.toLowerCase()) ||
        property.description.toLowerCase().includes(searchField.toLowerCase())
      );
    });
  
    const handleChange = e => {
      setSearchField(e.target.value);
    };
  
    function renderPropertyList() {
      return (
        <Scroll>
          <PropertyList filteredProperties={filteredProperties} />
        </Scroll>
      );
    }
  
    return (
      <section className="garamond">
        <div className="navy georgia ma0 grow">
          <h2 className="f2">Search Properties</h2>
        </div>
        <div className="pa2">
          <input
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type="search"
            placeholder="Search Properties"
            onChange={handleChange}
          />
        </div>
        {renderPropertyList()}
      </section>
    );
    }  