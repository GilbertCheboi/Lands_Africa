import React, { useEffect, useState } from 'react';
import { Map } from './feed';
import './styles.css';
import Card from './Card';
import Header from './Header';
import PropertyDetails from './PropertyDetails';


export function App() {
  const [items, setItems] = useState([]);

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
      id = {item.id}
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
        <div>
          {cardItems}
        </div>
      </div>
      <div className="map-container">
        <Map items={items} />
      </div>
    </div>
  </div>
  );
}

//AIzaSyAr-cGH_dOd4h3lmwoSIEaDXcLn4O3G-98
//http://192.168.0.20:8000/api/Land/