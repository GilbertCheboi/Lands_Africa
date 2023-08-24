  import React from 'react';
  import { GoogleMap, Marker, LoadScript, Polyline} from "@react-google-maps/api";
  import './styles.css';

  export function Map({ items }) {

    // Function to extract coordinates for markers and polylines from 'items' data
    const extractCoordinates = () => {
      const coordinates1 = []; // Array for markers
      const coordinates = []; // Array for polylines

      items.forEach((item) => {
        const center_latitude = parseFloat(item.center_latitude);
        const center_longitude = parseFloat(item.center_longitude);
        const pointA_latitude = parseFloat(item.pointA_latitude);
        const pointA_longitude = parseFloat(item.pointA_longitude);
        const pointA1_latitude = parseFloat(item.pointA1_latitude);
        const pointA1_longitude = parseFloat(item.pointA1_longitude);
        const pointB_latitude = parseFloat(item.pointB_latitude);
        const pointB_longitude = parseFloat(item.pointB_longitude);
        const pointC_latitude = parseFloat(item.pointC_latitude);
        const pointC_longitude = parseFloat(item.pointC_longitude);
        const pointD_latitude = parseFloat(item.pointD_latitude);
        const pointD_longitude = parseFloat(item.pointD_longitude);

        // Push coordinates for markers
        coordinates1.push({
          lat: center_latitude,
          lng: center_longitude,
          title: item.specific_location,
        });

        // Push coordinates for polylines
        coordinates.push([
          { lat: pointA_latitude, lng: pointA_longitude },
          { lat: pointB_latitude, lng: pointB_longitude },
          { lat: pointC_latitude, lng: pointC_longitude },
          { lat: pointD_latitude, lng: pointD_longitude },
          { lat: pointA1_latitude, lng: pointA1_longitude },
        ]);
      });

      return { coordinates1, coordinates };
    };

    const { coordinates1, coordinates } = extractCoordinates();

    const mapContainerStyle = {
      width: 'calc(100% - 8px)', /* 100% width minus 8px (4px on each side) for the left margin */
      height: 'calc(100% - 50px - 8px)', /* 100% height minus 50px (header height) and 8px for the top margin */
      margin: '4px', /* Add 4px margin on all sides */
      position: 'relative', /* Position relative to allow positioning of child elements */
    };
    
    const handleLink = (item) => {
      // Check if the item object exists and has the 'id' property
      if (item && item.id) {
        // Use window.location.href to navigate to the detail page
        window.location.href = `/Land/${item.id}`;
      } else {
        console.error('Item data is missing or invalid.');
      }
    };

    return (
      <LoadScript googleMapsApiKey="AIzaSyAr-cGH_dOd4h3lmwoSIEaDXcLn4O3G-98">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={coordinates1[2]} // Set the center to the first marker coordinates
          zoom={8}
        >
          <div>
          {coordinates1.map((marker, index, item) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
              onClick={() => handleLink(items[index])} 
              
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
          </div>
        </GoogleMap>
      </LoadScript>
    );
  }








  // import { GoogleMap, Marker, LoadScript, Polyline } from "@react-google-maps/api";
  // import './styles.css';





  // export function Map({ items }) {



  //   const mapContainerStyle = {
  //     width: '100%',
  //     height: '800px',
  //     left: '400px'
  //   };




  // // const marker = new google.maps.Marker({
  // //   position: center,

  // //   title: 'Marker Title' // Replace with your desired marker title
  // // });


  //   return (

  //     <LoadScript googleMapsApiKey="AIzaSyAr-cGH_dOd4h3lmwoSIEaDXcLn4O3G-98">
  //       <GoogleMap
  //         mapContainerStyle={mapContainerStyle}
  //         center={center}
  //         zoom={7}
  //       >
  //       {coordinates1.map((marker, index) => (
  //         <Marker 
  //         key={index} 
  //         position={{ lat: marker.lat, lng: marker.lng }}  
  //         title={marker.title}/>
  //       ))}
  //         {coordinates.map((coords, index) => (
  //         <Polyline
  //         path={coords}
  //         key={index} 
  //         options={{
  //           strokeColor: '#32CD32', // Dark grey color
  //           strokeOpacity: 1,
  //           strokeWeight: 5,
  //         }} 


  //         />))}

          
  //       </GoogleMap>
        
  //     </LoadScript>
    

    
  //   );
  // }

  // const coordinates = [ 
      
  //   { lat: items.pointA_latitude, lng: items.pointA_longitude },
  //   { lat: items.pointB_latitude, lng: items.pointB_longitude },
  //   { lat: items.pointC_latitude, lng: items.pointC_longitude },
  //   { lat: items.pointD_latitude, lng: items.pointD_longitude },
  //   { lat: items.pointA1_latitude, lng: items.pointA1_longitude},

  // ]


  // const center = 
  // { lat: -0.149895, lng: 37.308025}
  // // { lat: 0.467818, lng: 35.373523},


  // const coordinates1 = [
    // { lat: items.center_latitude, lng: items.center_longitude, title: items.realtor },
      // { lat: 0.467818, lng: 35.373523, title: 'Optiven' },
      // { lat: -1.288179, lng: 36.795621, title: 'Optiven' },
      // { lat: -2.156234, lng: 40.598549, title: 'Optiven' },
      // { lat: -1.800367, lng: 36.759096, title: 'Optiven' },
      // { lat: -1.239454, lng: 36.886929, title: 'Optiven' },
      // { lat: 0.531382, lng: 35.561828, title: 'Optiven' }, 
      // { lat: 3.761184, lng: 34.860423, title: 'Optiven' }, 
      // { lat: 2.624855, lng: 36.603047, title: 'Optiven' }, 
      // { lat: -0.471087, lng: 34.017127, title: 'Optiven' }, 

    // Add more coordinates as needed
  // ];
  // const coordinates = data.map(coord => ({
  //   lat: coord.pointA_latitude,
  //   lng: coord.pointA_longitude,
  //   lat: coord.pointB_latitude,
  //   lng: coord.pointB_longitude,
  //   lat: coord.pointC_latitude,
  //   lng: coord.pointC_longitude,
  //   lat: coord.pointD_latitude,
  //   lng: coord.pointD_longitude,
  //   lat: coord.pointA1_latitude,
  //   lng: coord.pointA_longitude,
  // }));

  // const coordinates = [ [

  // { lat: 0.468085, lng: 35.373855 },
  // { lat: 0.468230, lng: 35.374021 },
  // { lat: 0.467846, lng: 35.374496 },
  // { lat: 0.467631, lng: 35.374314 },
  // { lat: 0.468085, lng: 35.373855 },

  // ],
  // [
  // { lat: 0.467647, lng: 35.373393 },
  // { lat: 0.467563, lng: 35.373548 },
  // { lat: 0.467955, lng: 35.373650 },
  // { lat: 0.467976, lng: 35.373489 },
  // { lat: 0.467647, lng: 35.373393 },
  // ]
  // ]
