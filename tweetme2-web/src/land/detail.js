// detail.js

import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from './Header';
import PropertyDetails from './PropertyDetails';

export function ItemDetails({ itemId }) {
  const [itemDetails, setItemDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      console.log("hello world");
      try {
        const response = await fetch(`http://49.13.51.138/api/Land/${itemId}/`);
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
      <div className="main-container">
       {/* <h2>hello world</h2>
      <h2>{itemDetails.content}</h2>
      <p>{itemDetails.price}</p> */}
      {/* Display other item details here */}
      <PropertyDetails itemDetails={itemDetails}/>
      </div>
    </div>
  );
}
