import React, { useState, useEffect } from 'react';

export function SearchComponent () {
  const [query, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const fetchSearchResults = async () => {
    try{
      const response = await fetch(`http://192.168.0.13:8001/search?q=${query}`)
      const data = await response.json();
      console.log(data)

     
        setSearchResults(data);
     
    } catch(error)  {
        console.error('Error fetching search results:', error);
      };
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ul>
        {searchResults.map((result) => (
          <li key={result.title}>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


