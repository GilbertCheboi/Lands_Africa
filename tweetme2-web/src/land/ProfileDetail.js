import React, { useEffect, useState } from 'react';
import Header from './Header';
import "./PropertyDetails.css"

export function ProfileDetail   ({ username }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/profiles/${username}/`);
        if (!response.ok) {
          throw new Error('Error fetching profile details');
        }
        const data = await response.json();
        if (data) {
          setProfile(data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching profile details:', error);
        setLoading(false);
      }
    };

    fetchProfileDetails();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="profile-container">
        <h1>Realtor Profile</h1>
        <div className="profile-section">
          <h2>{profile.fullName}</h2>
          <p>Email: {profile.email}</p>
          <p>Phone Number: {profile.phoneNumber}</p>
          <button onClick={() => alert('Edit Profile functionality can be implemented here.')}>
            Edit Profile
          </button>
        </div>
      </div>
      <hr />
      <PostLandListing />
      <hr />
      <LandListings />
    </div>
  );
};

const PostLandListing = () => {
  const [landTitle, setLandTitle] = useState('');
  const [landDescription, setLandDescription] = useState('');
  const [landPrice, setLandPrice] = useState('');
  const [landImage, setLandImage] = useState('');
  const [landListings, setLandListings] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Similar to the previous example, handle the form submission here to add the new listing to the landListings state.
  };

  return (
    <div className="post-land-section">
      <h2>Post New Land Listing</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for land listing */}
        {/* ... (similar to the previous example) */}
        <button type="submit">Post Land Listing</button>
      </form>
    </div>
  );
};

const LandListings = () => {
  const [landListings, setLandListings] = useState([
    {
      title: 'Beautiful Beachfront Property',
      description: 'This property is located right on the beach with stunning ocean views.',
      price: 250000,
      image: 'https://example.com/beachfront-property.jpg',
      status: 'available',
    },
    {
      title: 'Spacious Countryside Lot',
      description: 'A large countryside lot with ample space for building your dream home.',
      price: 180000,
      image: 'https://example.com/countryside-lot.jpg',
      status: 'available',
    },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedListings = [...landListings];
    updatedListings[index].status = newStatus;
    setLandListings(updatedListings);
  };

  const handleDeleteListing = (index) => {
    const updatedListings = [...landListings];
    updatedListings.splice(index, 1);
    setLandListings(updatedListings);
  };

  return (
    <div className="land-listings-section">
      <h2>Land Listings:</h2>
      <ul>
        {landListings.map((listing, index) => (
          <li key={index}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>Price: KSH{listing.price}</p>
            <p>Status: {listing.status}</p>
            <img src={listing.image} alt={listing.title} style={{ maxWidth: '300px' }} />
            <button onClick={() => handleStatusChange(index, 'sold')}>Mark as Sold</button>
            <button onClick={() => handleDeleteListing(index)}>Delete Listing</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
