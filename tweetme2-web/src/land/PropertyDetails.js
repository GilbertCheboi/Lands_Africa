import React from "react";
import "./PropertyDetails.css";
import { GoogleMap, Marker, LoadScript, Polyline } from "@react-google-maps/api";
import './styles.css';

const PropertyDetails = ({ itemDetails }) => {
  // Static data for property details
  const price = itemDetails.price
  const propertyInfo = {
    // price: "KES 85,000,000",
    lotsize: "0.5",
    address: "Kilimani Area, Nairobi",
    city: "Nairobi",
    zipcode: "Nairobi",
    neighborhood: "Kilimani",
    monthlyCost: "KES 250,000 (estimated)",
    description:
      "Welcome to this remarkable property situated in Nairobi's prestigious Kilimani area. This prime land spans approximately 10,454 square feet, offering an excellent opportunity for investors and developers to create their vision in one of the city's most sought-after neighborhoods.The property's strategic location ensures easy access to major roads, shopping centers, schools, hospitals, and various amenities, making it an ideal investment prospect. With the potential to develop residential or commercial projects, this land promises lucrative returns and endless possibilities.Don't miss out on this rare opportunity to own a piece of Kilimani's real estate. Schedule a viewing today and explore the potential that this outstanding property holds.",
  };

  // Static data for agent information
  const agentInfo = {
    agentName: "Jane Muthoni",
    agencyName: "Afya Realty Kenya",
    phoneNumber: "+254 712 345 678",
    email: "info@afyarealty.co.ke",
    licenseNumber: "License #KR.2023456",
  };

  const mapContainerStyle = {
    width: "100%",
    height: '600px',
    // left: '400px'
  };

  const center =
  {
    lat: -0.149895, lng: 37.308025
  };
  // { lat: 0.467818, lng: 35.373523},


  const coordinates1 = [
    // { lat: items.center_latitude, lng: items.center_longitude, title: items.realtor },
    { lat: 0.467818, lng: 35.373523, title: 'Optiven' },
    { lat: -1.288179, lng: 36.795621, title: 'Optiven' },
    { lat: -2.156234, lng: 40.598549, title: 'Optiven' },
    { lat: -1.800367, lng: 36.759096, title: 'Optiven' },
    { lat: -1.239454, lng: 36.886929, title: 'Optiven' },
    { lat: 0.531382, lng: 35.561828, title: 'Optiven' },
    { lat: 3.761184, lng: 34.860423, title: 'Optiven' },
    { lat: 2.624855, lng: 36.603047, title: 'Optiven' },
    { lat: -0.471087, lng: 34.017127, title: 'Optiven' },
  ];

  const coordinates = [
    [

      { lat: 0.468085, lng: 35.373855 },
      { lat: 0.468230, lng: 35.374021 },
      { lat: 0.467846, lng: 35.374496 },
      { lat: 0.467631, lng: 35.374314 },
      { lat: 0.468085, lng: 35.373855 },

    ],
    [
      { lat: 0.467647, lng: 35.373393 },
      { lat: 0.467563, lng: 35.373548 },
      { lat: 0.467955, lng: 35.373650 },
      { lat: 0.467976, lng: 35.373489 },
      { lat: 0.467647, lng: 35.373393 },
    ]
  ]

  return (
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
                {propertyInfo.address}
              </h1>
              <span className="property-info-address-citystatezip">
                <a
                  className="standard-link text-only"
                  href="/las-vegas-nv/"
                  title="Las Vegas Homes For Sale"
                >
                  {propertyInfo.city}, {propertyInfo.state}
                </a>{" "}
                <a
                  className="standard-link text-only"
                  href="/las-vegas-nv/89128/"
                  title="89128 Homes For Sale"
                >
                  {propertyInfo.zipcode}
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
                  {propertyInfo.neighborhood}
                </a>
              </span>
            </div>
          </div>

          <LoadScript googleMapsApiKey="AIzaSyAr-cGH_dOd4h3lmwoSIEaDXcLn4O3G-98">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={coordinates1[0]} // Set the center to the first marker coordinates
              zoom={7}
            >
              {coordinates1.map((marker, index) => (
                <Marker
                  key={index}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  title={marker.title}
                />
              ))}
              {coordinates.map((coords, index) => (
                <Polyline
                  path={coords}
                  key={index}
                  options={{
                    strokeColor: '#32CD32', // Dark grey color
                    strokeOpacity: 1,
                    strokeWeight: 5,
                  }}
                />
              ))}
            </GoogleMap>
          </LoadScript>
          <p className="property-info-monthly-cost text-only">
            Estimated payment {propertyInfo.monthlyCost}
          </p>

          {/* Property Info - Features */}
          <div className="property-info-features plain-list flex">
            <div className="divider"></div>
            <span className="property-info-feature lotsize">
              <span className="property-info-feature-detail">
                {propertyInfo.lotsize}
              </span>
              <span className="feature-lotsize">acres Lot</span>
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
              About This Home
            </h2>
            <div className="ldp-description-text-container truncate-container">
              <p id="ldp-description-text" className="ldp-description-text">
                {propertyInfo.description}
              </p>
            </div>
          </div>
          <button
            className="js-see-all-btn"
            aria-expanded="false"
            aria-controls="ldp-description-text"
            type="button"
          >
            See All
          </button>
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
                  </span>
                  <span>
                    <a
                      className="agent-information agent-information-phone-number standard-link text-only"
                      href="tel:(702) 367-2323"
                    >
                      {agentInfo.phoneNumber}
                    </a>
                  </span>
                  <span className="agent-information agent-information-email">
                    {agentInfo.email}
                  </span>
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
        <h3>Realtor Information</h3>
        <div className="agent-avatar">
          <img
            src="/path/to/avatar.jpg" // Replace with the URL of the avatar image
            alt="A"
          />
        </div>
        <p className="agent-name">{agentInfo.agentName}</p>
        <p>{agentInfo.agencyName}</p>
        <p>{agentInfo.licenseNumber}</p>
        <p>
          Phone: <a href={`tel:${agentInfo.phoneNumber}`}>{agentInfo.phoneNumber}</a>
        </p>
        <p>
          Email: <a href={`mailto:${agentInfo.email}`}>{agentInfo.email}</a>
        </p>
      </div>
  </main>
);
                };
export default PropertyDetails;
