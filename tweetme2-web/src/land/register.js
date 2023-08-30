import React, { useState } from 'react';
import Header from './Header';
import './Contact.css'; // Import your CSS file for AboutPage styling
import Footer from './Footer';


export function  Register () {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    // Data to be sent in the POST request
    const userData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch('https://landsinafrica.com/api/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User registered successfully!');
        // Handle success, e.g., show a success message to the user or redirect to another page
      } else {
        console.error('Failed to register user:', response.status);
        // Handle failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error, e.g., show an error message to the user
    }
  };


  return (
    <div>
    <Header />
    <div style={{ backgroundColor: 'white', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <form onSubmit={handleRegister} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', maxWidth: '400px', width: '90%' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#FFA500', fontSize: '24px' }}>Register</h2>
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="username" style={{ color: '#555', fontSize: '16px' }}>Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          outline: 'none',
          width: '100%',
        }}
      />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="email" style={{ color: '#555', fontSize: '16px' }}>Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          outline: 'none',
          width: '100%',
        }}
      />
    </div>
    <div style={{ marginBottom: '30px' }}>
      <label htmlFor="password" style={{ color: '#555', fontSize: '16px' }}>Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          outline: 'none',
          width: '100%',
        }}
      />
    </div>

    <button type="submit" style={{ backgroundColor: '#FFA500', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', width: '100%', fontSize: '16px' }}>
      Register
    </button>
  </form>
</div>

    <Footer />
  </div>
  );
};

