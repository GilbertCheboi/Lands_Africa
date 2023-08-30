import React, { useEffect, useState } from 'react';
import { Map } from './feed';
import './styles.css';
import "./Header.css";
import Card from './Card';
import Header from './Header';


function PropertyList({ filteredProperties }) {
  const propertyCards = filteredProperties.map(property => (
    <Card key={property.key} property={property} />
  ));

  return <div>{propertyCards}</div>;
}

export function App() {
  const [searchField, setSearchField] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const response = await fetch('https://landsinafrica.com/api/Land/');
      const data = await response.json();
      console.log(data);
      setItems(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredProperties = items.filter(property => {
    const lowerSearchField = searchField.toLowerCase();
    const lowerTitle = property.title ? property.title.toLowerCase() : '';
    const lowerCounty = property.county ? property.county.toLowerCase() : '';
    const lowerDescription = property.description ? property.description.toLowerCase() : '';
  const lowerCountry = property.country ? property.country.toLowerCase() : '';
  const lowerSpecificLocation = property.specific_location ? property.specific_location.toLowerCase() : '';
  const lowerRealtor = property.realtor ? property.realtor.toLowerCase() : '';
  
    const searchRegex = new RegExp(lowerSearchField, 'i'); // 'i' flag for case-insensitive matching
  
    return searchRegex.test(lowerTitle) ||
    searchRegex.test(lowerDescription) ||
    searchRegex.test(lowerCountry) ||
    searchRegex.test(lowerSpecificLocation) ||
    searchRegex.test(lowerCounty) ||
    searchRegex.test(lowerRealtor)
  });
  

  const handleSearch = e => {
    setSearchField(e.target.value);
  };

  function renderPropertyList() {
    return <PropertyList filteredProperties={filteredProperties} />;
  }

  return (
    <div className='main-page'>
      <Header />
      <div className="main-container">
        <div className='side-page '>

        <div className="search-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
          {renderPropertyList()}
          {/* Render the SearchComponent with the searchQuery prop
          <SearchComponent searchQuery={searchQuery} /> */}

          {/* Or, render the card items if there is no search query */}
          {/* {searchQuery.trim() === '' && cardItems} */}
        </div>
        <div className="map-container">
          <Map items={filteredProperties} />
        </div>
      </div>
    </div>
  );
}

