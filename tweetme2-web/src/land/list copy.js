// import React, { useEffect, useState } from 'react';
// import { Map } from './feed';
// import './styles.css';
// import './Header.css';
// import Card from './Card';
// import Header from './Header';

// export function App() {
//   const [items, setItems] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/Land/');
//       const data = await response.json();
//       console.log(data);
//       setItems(data.results);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const fetchSearchResults = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/search?q=${searchQuery}`);
//       const data = await response.json();
//       setSearchResults(data);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   const handleSearchInputChange = (e) => {
//     const newSearchQuery = e.target.value;
//     setSearchQuery(newSearchQuery);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (searchQuery.trim() !== '') {
//       fetchSearchResults();
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchQuery]);

//   const cardItems = (searchQuery.trim() !== '' ? searchResults : items).map((item, index) => (
//     <Card
//       id={item.id}
//       key={index}
//       title={item.name}
//       description={`${item.country}, ${item.county}, ${item.specific_location}`}
//       country={item.country}
//       county={item.county}
//       sub_county={item.sub_county}
//       price={item.price}
//       image={item.image}
//       content={item.content}
//       timestamp={item.timestamp}
//       realtor={item.realtor}
//       center_latitude={item.center_latitude}
//       // ...other props
//     />
//   ));

//   return (
//     <div className="main-page">
//       <Header />
//       <div className="main-container">
//         <div className="side-page">
//           <form className="search-container">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//               placeholder="Search..."
//               className="search-data"
//             />
//           </form>
//           <ul>{cardItems}</ul>
//         </div>
//         <div className="map-container">
//           <Map items={items} />
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { Map } from './feed';
import './styles.css';
import "./Header.css";
import Card from './Card';
import Header from './Header';
// import PropertyDetails from './PropertyDetails';
import { SearchComponent } from './search'; // Import the SearchComponent

function PropertyList({ filteredProperties }) {
  const propertyCards = filteredProperties.map(property => (
    <Card key={property.key} property={property} />
  ));

  return <div>{propertyCards}</div>;
}

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '70vh' }}>
      {props.children}
    </div>
  );
}

export function App() {
  const [searchField, setSearchField] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 


  const fetchData = async () => {
    try {
      const response = await fetch(`https://landsinafrica.com/api/Land/`);
      const data = await response.json();
      console.log(data);
      setItems(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const filteredProperties = items.filter(property => {
    return (
      property.title.toLowerCase().includes(searchField.toLowerCase()) ||
      property.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

 

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
       center_latitude={item.center_latitude}
       center_longitude={item.center_longitude}
       pointA_latitude={item.pointA_latitude}
       pointA_longitude={item.pointA_longitude}
       pointA1_latitude={item.pointA1_latitude}
       pointA1_longitude={item.pointA1_longitude}
       pointB_latitude={item.pointB_latitude}
       pointB_longitude={item.pointB_longitude}
       pointC_latitude={item.pointC_latitude}
       pointC_longitude={item.pointC_longitude}
       pointD_latitude={item.pointD_latitude}
       pointD_longitude= {item.pointD_longitude}
      // Add any other props you want to pass to the Card component
    />
  ));



  const handleSearch = e => {
    setSearchField(e.target.value);
  };

  function renderPropertyList() {
    return (
      <Scroll>
        <PropertyList filteredProperties={filteredProperties} />
      </Scroll>
    );
  }

  return (
    <div className='main-page'>
      <Header />
      <div className="main-container">
        <div className='side-page '>
        <div className="navy georgia ma0 grow">
          <h2 className="f2">Search Properties</h2>
        </div>
        <div className="pa2">
          <input
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type="search"
            placeholder="Search Properties"
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
          <Map items={items} />
        </div>
      </div>
    </div>
  );
}