import React,  { useState } from 'react'
import Header from '../land/Header'
import Footer from '../land/Footer'
import ApartmentGrid from './ApartmentGrid';

function Apartment() {

    const [homes] = useState([
        {
          id: 1,
          title: 'Beautiful Family Home',
          price: '$500,000',
          bedrooms: 4,
          bathrooms: 2,
          sqft: 2500,
          image: 'home1.jpg',
        },
        {
          id: 2,
          title: 'Luxury Villa with Pool',
          price: '$1,200,000',
          bedrooms: 6,
          bathrooms: 4,
          sqft: 4500,
          image: 'home2.jpg',
        },
        // Add more home listings here
      ]);

  return (
    <div>
        <Header/>
        <ApartmentGrid/>
        <Footer/>
    </div>
  )
}

export default Apartment