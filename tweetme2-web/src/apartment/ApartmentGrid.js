import React, { useState, useEffect } from 'react';
import ApartmentItem from './ApartmentItem';
import './../styles/apartment/apartmentGrid.css';

const ApartmentGrid = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [apartment, setApartment] = useState([]); // Initialize apartments as an empty array

  useEffect(() => {
    fetch('https://landsinafrica.com/api/apartments/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        // Set the fetched apartments in the state
        setApartment(data.results);
        console.log(apartment)
      })
      .catch(error => {
        // Handle any errors here
        console.error(error);
      });
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  const totalPages = Math.ceil(apartment.length / itemsPerPage);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop(); // Scroll to the top
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop(); // Scroll to the top
    }
  };
  const handleLink = (apartment) => {
    // Check if the apartment object exists and has the 'id' property
    if (apartment && apartment.id) {
      // Use window.location.href to navigate to the detail page
      window.location.href = `/Apartment/${apartment.id}`;
    } else {
      console.error('Item data is missing or invalid.');
    }
  };
  

const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentApartment = apartment.slice(startIndex, endIndex);

  return (
    <div className='apartment-grid-container'>
        <h3 className="apartment-title">Apartment for Sale</h3>
    <div className="apartment-grid" >
      {currentApartment.map((item) => (
        <div
          key={item.id}
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <ApartmentItem apartment={item}  onClick={() => handleLink(item)}/> {/* Use "apartment" instead of "house" */}
        </div>
      ))}
    </div>
    <div className='pagination'>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ApartmentGrid;
