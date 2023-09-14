import React, { useEffect, useState } from 'react';
import './../styles/apartment/apartmentDetail.css';
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import Header from '../land/Header';
import Footer from '../land/Footer';
import { Gallery } from "react-grid-gallery";

// import image1 from '../assets/home.jpeg';
// import image2 from '../assets/tom.jpeg';
// import image3 from '../assets/veg.jpg';
// import image4 from '../assets/vegt.jpg';
// import image5 from '../assets/tom.jpeg';
// import image6 from '../assets/veg.jpg';
// import image7 from '../assets/vegt.jpg';

const ApartmentDetail = () => {
  const url = window.location.href;
  const apartmentId = url.substring(url.lastIndexOf('/') + 1);

  const [apartmentData, setApartmentData] = useState(null);
  const [images, setImages] = useState([]); // Define images and setImages states

  const fetchDetails = async () => {
    try {
      const response = await fetch(`https://landsinafrica.com/api/apartments/${apartmentId}/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApartmentData(data);
    } catch (error) {
      console.error('Error fetching apartment details:', error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!apartmentData) {
    // You can show a loading spinner or message while data is being fetched.
    return <div>Loading...</div>;
  }
  const markerPosition = {
    lat: 0.467818, lng: 35.373523
    // lat: parseFloat(item.center_latitude),
    // lng: parseFloat(item.center_longitude),
  };

  const containerStyle = {
    height: "350px",
    width: "100%",
  };

  const imagesDataArray = Object.entries(apartmentData)
.filter(([key, value]) => key.startsWith("image") && value !== null)
.map(([key, value], index) => ({
  src: value,
  alt: `Apartment Image ${index}`,
  isSelected: false,
}));

const handleSelect = (index, item, event) => {
  const nextImages = images.map((image, i) =>
    i === index ? { ...image, isSelected: !image.isSelected } : image
  );
  setImages(nextImages);
};

// const imagesDataArray = [
//   {
//     src: image1,
//     alt: "Image 1",
//     isSelected: false,
//   },
//   {
//     src: image2,
//     alt: "Image 2",
//     isSelected: false,
//   },
//   {
//     src: image3,
//     alt: "Image 3",
//     isSelected: false,
//   },
//   {
//     src: image4,
//     alt: "Image 4",
//     isSelected: false,
//   },
//   {
//     src: image5,
//     alt: "Image 5",
//     isSelected: false,
//   },
//   {
//     src: image6,
//     alt: "Image 6",
//     isSelected: false,
//   },
//   {
//     src: image7,
//     alt: "Image 7",
//     isSelected: false,
//   },
//   // Add more images as needed
// ];

  return (
    <div>
      <Header/>
    <div className="apartment-detail-container">
    <div className="image-gallery">
      <Gallery images={imagesDataArray} onSelect={handleSelect} />
    </div>
      <div className="apartment-details-box">
      <div className="apartment-details">
        <div className='apartment-top'>
        <h1>{apartmentData.name}</h1>
        <div className="realtor-info">
          <p>Realtor: {apartmentData.realtor}</p>
          <p>Posted: {apartmentData.timestamp}</p>
        </div>
        <div className="price-details">
          <h2>Price: {apartmentData.cash_price}</h2>
          <div className="icons">
            <span ><i class="fa fa-bed" ></i>  {apartmentData.beds}</span>
            <span ><i class="fa fa-bath" aria-hidden="true"></i> {apartmentData.baths}</span>
            {/* <span className="cash-price">Cash Price: {apartmentData.cash_price}</span> */}
          </div>
          </div>
        </div>

        <div className="apartment-content-container">
          <h2>
            About This Apartment
          </h2>
          <div className="apartment-content">
            <p className="apartment-content-text">
              {apartmentData.content}
            </p>
          </div>
        </div>

        <div className="amenities">
          <h2>Amenities</h2>
          <ul className="amenities-list">
            {Object.keys(apartmentData).map((key) => {
              if (key.startsWith('amenities') && apartmentData[key]) {
                return (
                  <li key={key} className="amenity-item">
                    {apartmentData[key]}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>

        <div className="google-map">
          <h2>Location</h2>
          <LoadScript googleMapsApiKey="AIzaSyAr-cGH_dOd4h3lmwoSIEaDXcLn4O3G-98">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={markerPosition}
              zoom={15}
            >
              <Marker
                position={markerPosition}
                title='Apartment'
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                }}
              />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      </div>
      <div className="realtor-information">
        <h2>Realtor Information</h2>
        <p>Name: {apartmentData.user.First_Name} {apartmentData.user.Last_Name}</p>
        {/* You can display other realtor information as well */}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ApartmentDetail;
