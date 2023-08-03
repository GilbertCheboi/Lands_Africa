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
      const response = await fetch(`http://127.0.0.1:8000/search?q=${query}`);
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
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // <-- Update the state with setQuery
        placeholder="Search..."
        className="search-data"
      />
      </form>
      {cardItems}
    </div>
  );
}