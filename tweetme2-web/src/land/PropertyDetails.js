import React from "react";
import "./PropertyDetails.css";
import { GoogleMap, Marker, LoadScript, Polyline } from "@react-google-maps/api";
import './styles.css';

const PropertyDetails = ({ itemDetails }) => {
  // Static data for property details
  const price = itemDetails.price
  const description = itemDetails.content
  const sub_county =  itemDetails.sub_county
  const specific_location = itemDetails.specific_location
  const county = itemDetails.county
  const title = itemDetails.title
  const image = itemDetails.image

  // Static data for agent information
  const agentInfo = {
    agentName: "Eugene",
    agencyName: "Eugene",
    phoneNumber: "+254 700 236 628",
    email: "info@eugenelands.co.ke",
    // licenseNumber: "License #KR.2023456",
  };

  // const mapContainerStyle = {
  //   width: "100%",
  //   height: '500px',
  //   // left: '400px'
  // };
  const containerStyle = {
    height: "400px",
    width: "100%",
  };
  
  const center_latitude = parseFloat(itemDetails.center_latitude);
  const center_longitude = parseFloat(itemDetails.center_longitude);
  const pointA_latitude = parseFloat(itemDetails.pointA_latitude);
  const pointA_longitude = parseFloat(itemDetails.pointA_longitude);
  const pointA1_latitude = parseFloat(itemDetails.pointA1_latitude);
  const pointA1_longitude = parseFloat(itemDetails.pointA1_longitude);
  const pointB_latitude = parseFloat(itemDetails.pointB_latitude);
  const pointB_longitude = parseFloat(itemDetails.pointB_longitude);
  const pointC_latitude = parseFloat(itemDetails.pointC_latitude);
  const pointC_longitude = parseFloat(itemDetails.pointC_longitude);
  const pointD_latitude = parseFloat(itemDetails.pointD_latitude);
  const pointD_longitude = parseFloat(itemDetails.pointD_longitude);
    // const center = {
    //   lat: center_latitude,
    //   lng: center_longitude,
    //   // lat: 0.467818, lng: 35.373523
    // };


  const markerPosition = {
    lat: center_latitude, 
    lng: center_longitude
  //  lat: 0.467818, lng: 35.373523
  };

  const polylinePath = [

    { lat: pointA_latitude, lng: pointA_longitude },
    { lat: pointB_latitude, lng: pointB_longitude },
    { lat: pointC_latitude, lng: pointC_longitude },
    { lat: pointD_latitude, lng: pointD_longitude },
    { lat: pointA1_latitude, lng: pointA1_longitude },

    ];


  return (
    <LoadScript googleMapsApiKey="AIzaSyAr-cGH_dOd4h3lmwoSIEaDXcLn4O3G-98">
    <main id="mainContent" className="main-content">

      <div className="ldp-grid-container">
        <section className="profile-column-left">
          <section
            id="ldp-property-info-container"
            className="ldp-property-info-container"
          >
            {/* Property Info - Price and Icons */}
            <div className="property-info-price-and-icons">
              <span className="property-info-price" id="price">
                KES {price}
              </span>
              {/* Rest of the property info icons/buttons */}
            </div>

            {/* Property Info - Status Pill Container */}
            <div className="property-info-status-pill-container">
            {/* Property status pill */}
          </div>

          <div className="property-info-address-and-media-types">
            <div className="property-info-address">
              <h1 className="property-info-address-main">
                {county}
              </h1>
              <span className="property-info-address-citystatezip">
                <a
                  className="standard-link text-only"
                  href="/las-vegas-nv/"
                  title="Las Vegas Homes For Sale"
                >
                  {county}
                </a>{" "}
                <a
                  className="standard-link text-only"
                  href="/las-vegas-nv/89128/"
                  title="89128 Homes For Sale"
                >
                  {sub_county}
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
                  {specific_location}
                </a>
              </span>
            </div>
          </div>

       <div>  
      <GoogleMap mapContainerStyle={containerStyle} center={markerPosition} zoom={15}>
      <Marker
  position={markerPosition}
  title={title}
  icon={{
    url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
  }}
/>        <Polyline
          path={polylinePath}
          geodesic={true}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
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
              About This Land
            </h2>
            <div className="ldp-description-text-container truncate-container">
              <p id="ldp-description-text" className="ldp-description-text">
                {description}
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

          <div className="property-image" style={{ width: "100%", height: "400px", overflow: "hidden" }}>
            <img
              src={image}
              alt={title}
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
  </main>
  </LoadScript>
);
};
export default PropertyDetails;
