import React, { useState, useEffect } from 'react';
import Card from './Card';

export function SearchComponent({ searchQuery }) {
  const [searchResults, setSearchResults] = useState([]);
  // Use useState hook to manage searchQuery state
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    // Update the searchQuery state when the prop changes
    setQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (query.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`https://landsinafrica.com/search?q=${query}`);
      const data = await response.json();
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const cardItems = searchResults.map((item, index) => (
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
      // Add any other props you want to pass to the Card component
    />
  ));

    return (
    <div>
      <form className='search-container'>
        <input
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // <-- Update the state with setQuery
        placeholder="Search..."
        className="search-data"
      />
=======
=======
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
=======
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
=======
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // <-- Update the 
state with setQuery
          placeholder="Search..."
        />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
=======
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
=======
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
=======
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
      </form>
      {cardItems} {/* Assuming cardItems is defined and contains JSX 
elements */}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
  }
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
=======
  }
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
=======
  }
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
=======
  }
>>>>>>> a9239f94900303c171c397f6553e00bed4df48b3
