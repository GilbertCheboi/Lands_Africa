import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import './../styles/apartment/apartmentDetail.css';
import React, { useEffect, useState } from 'react';

const ApartmentDetail = () => {
  const url = window.location.href;
  const apartmentId = url.substring(url.lastIndexOf('/') + 1);
    const [itemDetails, setItemDetails] = useState({});
  const [loading, setLoading] = useState(true);
const containerStyle = {
    height: "400px",
    width: "100%",
  };
  console.log("data", apartmentId)

  const markerPosition = {
    lat: 0.467818, lng: 35.373523
    // lat: parseFloat(item.center_latitude),
    // lng: parseFloat(item.center_longitude),
  };
  
  
  const agentInfo = {
    agentName: "Eugene",
    agencyName: "Eugene",
    phoneNumber: "+254 700 236 628",
    email: "info@eugenelands.co.ke",
    // licenseNumber: "License #KR.2023456",
  };
//   const item = 
//     {
//       id: 3,
//       name: "Luxurious Penthouse with a View",
//       image: "apartment3.jpg", // Replace with the actual image URL
//       cash_price: 2500000,
//       address: "789 Oak Avenue, Skyline City",
//       beds: 3,
//       baths: 3,
//       size: "2,500 sqft",
//     };
useEffect(() => {
  const fetchDetails = async () => {
    console.log("hello world");
    try {
      const response = await fetch(`https://landsinafrica.com/api/apartments/${apartmentId}/`);
      // const response = await fetch(`https://landsinafrica.com/api/apartments/4/`);

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
},[]);

if (loading) {
  return <div>Loading...</div>;
}

  console.log(itemDetails)

  return (
    <LoadScript googleMapsApiKey="AIzaSyAr-cGH_dOd4h3lmwoSIEaDXcLn4O3G-98">
      <main id="mainContent" className="main-content">
        {/* Rest of the component */}
        <div className="ldp-grid-container">
          <section className="profile-column-left">
            <section
              id="ldp-property-info-container"
              className="ldp-property-info-container"
            >
              {/* Property Info - Price and Icons */}
              <div className="property-info-price-and-icons">
                <span className="property-info-price" id="price">
                  KES {itemDetails.cash_price}
                </span>
                {/* Rest of the property info icons/buttons */}
              </div>

              {/* Property Info - Status Pill Container */}
              <div className="property-info-status-pill-container">
                {/* Property status pill */}
              </div>

              <div className="property-info-address-and-media-types">
                <div className="property-info-address">
                  <h1 className="property-info-address-main">{itemDetails.county}</h1>
                  <span className="property-info-address-citystatezip">
                    <a
                      className="standard-link text-only"
                      href="/las-vegas-nv/"
                      title="Las Vegas Homes For Sale"
                    >
                      {itemDetails.county}
                    </a>{" "}
                    <a
                      className="standard-link text-only"
                      href="/las-vegas-nv/89128/"
                      title="89128 Homes For Sale"
                    >
                      {/* {sub_county} */}
                    </a>
                  </span>
                  <span className="property-info-neighborhood">
                    <span className="divider">|</span>
                    <a
                      className="standard-link text-only"
                      target="_blank"
                      href="/las-vegas-nv/neighborhood/desert-shores/"
                      title="Desert Shores"
                    >
                      {itemDetails.specific_location}
                    </a>
                  </span>
                </div>
              </div>

              <div>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={markerPosition}
                  zoom={15}
                >
                  <Marker
                    position={markerPosition}
                    title={itemDetails.name}
                    icon={{
                      url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                    }}
                  />
                </GoogleMap>
                </div> 

<p className="property-info-monthly-cost text-only">
  {/* Estimated payment {propertyInfo.monthlyCost} */}
</p>

{/* Property Info - Features */}
<div className="property-info-features plain-list flex">
  <div className="divider"></div>
  <span className="property-info-feature lotsize">
    <span className="feature-lotsize">Lot size: </span>
    <span className="property-info-feature-detail">
      {/* {propertyInfo.lotsize} */}
    </span>
    {/* <span className="feature-lotsize">acres Lot</span> */}
  </span>
  <div className="divider"></div>
</div>
</section>

<section
id="about"
className="ldp-description-container ldp-section-container"
role="region"
aria-label="Property Description"
>
<div className="about-this-home">
  <h2 className="ldp-description-heading ldp-heading">
    About This Apartment
  </h2>
  <div className="ldp-description-text-container truncate-container">
    <p id="ldp-description-text" className="ldp-description-text">
      {itemDetails.content}
    </p>
  </div>
</div>
{/* <button
  className="js-see-all-btn"
  aria-expanded="false"
  aria-controls="ldp-description-text"
  type="button"
>
  See More
</button> */}

<div className="property-image" style={{ width: "100%", height: "400px", }}>
  <img
    src={itemDetails.image}
    alt='houses'
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>


<div className="agent-information-wrapper">
    <div className="agent-information-mls-info">
      <p className="listing-agent-title">Listing Agent</p>
      <p className="agent-information-container">
        <a
          className="agent-information agent-information-fullname standard-link text-only"
          href="/real-estate-agents/kamyar-zargari/k7sjvbb/"
        >
          {agentInfo.agentName}
        </a>
      </p>
      <p className="agent-information-container">
        <span className="agent-information agent-information-agency-name">
          {agentInfo.agencyName}
          <span>  </span>
        </span>
        <span>
          <a
            className="agent-information agent-information-phone-number standard-link text-only"
            href="tel:(0722) 232-229"
          >
          {agentInfo.phoneNumber}
          </a>
        </span>
        <p>
        <span className="agent-information agent-information-email">
          {agentInfo.email}
        </span>
        </p>
        <span className="agent-information agent-information-license-number">
          {agentInfo.licenseNumber}
        </span>
      </p>
    </div>
  </div>
</section>

{/* Rest of the sections and content */}
</section>

<aside className="profile-column-right">
<div className="agent-wrapper fixed" id="fixed-on-scroll">
{/* Agent information and contact form */}
</div>
</aside>
</div>

{/* Realtor Information Box */}
<div className="realtor-info-box">
{/* <h5>Realtor Information</h5>
<div className="agent-avatar">
{agentInfo.image ? (
<img src={agentInfo.image} alt={agentInfo.agentName} />
) : (
<img
src="/path/to/avatar.jpg" // Replace with the URL of the default avatar image
alt={agentInfo.agentName}
/>
)}
</div> */}
<div className="realtor-info-box">
<div className="agent-info-container">
<div className="agent-avatar">
{agentInfo.image ? (
<img src={agentInfo.image} alt={agentInfo.agentName} />
) : (
<i className="fas fa-user fa-3x" />
)}
</div>
<div className="agent-details">
<p className="agent-name">{agentInfo.agentName}</p>
<p>{agentInfo.agencyName}</p>
<p>{agentInfo.licenseNumber}</p>
</div>
</div>
<p className="agent-description">
A passionate realtor with years of experience in helping clients find their dream homes.
</p>
<p className="agent-contacts">
<strong>Contacts:</strong>
</p>
<p>
<strong>Phone:</strong>{" "}
<a href={`tel:${agentInfo.phoneNumber}`}>{agentInfo.phoneNumber}</a>
<button className="call-button" onClick={() => window.location.href = `tel:${agentInfo.phoneNumber}`}>Call</button>
</p>
<p>
<strong>Email:</strong>{" "}
<a href={`mailto:${agentInfo.email}`}>{agentInfo.email}</a>
</p>
</div>

</div>

<div className='item-detail'>
            <div className="item-detail-imgs">
                {itemDetails?.imgList?.map(imgUrl => <img src={imgUrl} />)}
            </div>
            <div className="item-detail-body">
                <div className="item-detail-basic">
                    <div className="item-detail-price">
                        KES{itemDetails.cash_price}
                    </div>
                    <div className="item-detail-title">
                        {itemDetails.title}
                    </div>
                    <div className="item-detail-row-space-between">
                        <p>{itemDetails.county}</p>
                        <p>{itemDetails.updatedAt}</p>
                    </div>
                </div>
                {/* <div className="item-detail-description">
                    {
                        itemDetails.description.split('\n')
                            .map((line, index) => (
                                <p key={index}>{line}</p>
                            ))
                    }
                </div> */}
            </div>
        </div>
</main>
    </LoadScript>
  );
};

export default ApartmentDetail;
