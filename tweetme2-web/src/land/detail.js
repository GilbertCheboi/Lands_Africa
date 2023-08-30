// detail.js

import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from './Header';
import PropertyDetails from './PropertyDetails';
import Footer from './Footer';

export function ItemDetails ({ itemId }) {
  const [itemDetails, setItemDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      console.log("hello world");
      try {

        const response = await fetch(`https://landsinafrica.com/api/Land/${itemId}/`);
        console.log("hello world");
        if (!response.ok) {
          throw new Error('Error fetching item details');
        }
        const data = await response.json();
        console.log("hello world");
        console.log(data);

        if (data) {
          setItemDetails(data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching item details:', error);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [itemId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className='main-detail'>
      <PropertyDetails itemDetails={itemDetails}/>
      </div>
      <Footer />
    </div>
  );
};
