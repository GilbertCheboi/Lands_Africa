import React, { useEffect, useState } from 'react';
import { Map } from './feed';
import './styles.css';
import Card from './Card';
import Header from './Header';
import PropertyDetails from './PropertyDetails';
import { SearchComponent } from './search'; // Import the SearchComponent

export function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async () => {
    try {

      const response = await fetch('http://49.13.51.138/api/Land/');
      // const response = await fetch('http://192.168.0.13:8001/api/Land/');
      const data = await response.json();
      console.log(data);
      setItems(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const cardItems = items.map((item, index) => (
    <Card
      id={item.id}
      key={index}
      title={item.name}
      description={`${item.country}, ${item.county}, ${item.specific_location}`}
      country={item.country}
      county={item.county}
      sub_county={item.sub_county}
      price={item.price}
      image={item.image}
      content={item.content}
      timestamp={item.timestamp}
      realtor={item.realtor}
      // Add any other props you want to pass to the Card component
    />
  ));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main-page'>
      <Header />
      <div className="main-container">
        <div className='side-page '>
          {/* Render the SearchComponent with the searchQuery prop */}
          <SearchComponent searchQuery={searchQuery} cardItems={cardItems}  />
          {/* Or, render the card items if there is no search query */}
          {searchQuery.trim() === '' && cardItems}
        </div>
        <div className="map-container">
          <Map items={searchQuery.trim() === '' ? items : []} />
        </div>
      </div>
    </div>
  );
}
