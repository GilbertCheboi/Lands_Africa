import React from 'react';
import { ItemDetails } from './detail'; // Import the ItemDetails component

function App1() {
  const itemId = 123; // Replace 123 with the actual itemId you want to fetch

  return (
    <div>
      <h1>My App</h1>
      <ItemDetails itemId={itemId} /> {/* Render the ItemDetails component with the itemId prop */}
    </div>
  );
}

export default App1;
