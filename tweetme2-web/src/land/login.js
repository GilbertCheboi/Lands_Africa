import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


export function  Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    // Data to be sent in the POST request
    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful!', data);
        window.location.href = '/'
        // Handle successful login, e.g., store user data in the state or redirect to another page
      } else {
        console.error('Failed to login:', response.status);
        // Handle login failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error, e.g., show an error message to the user
    }
  };


  return (
    <div>
    <Header />
    <div style={{ backgroundColor: 'white', marginTop: '100px', marginBottom: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <form onSubmit={handleLogin} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', maxWidth: '400px', width: '90%' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#FFA500', fontSize: '24px' }}>Login</h2>
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
        }}
      />
    </div>
    <div style={{ marginBottom: '20px' }}>
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
        }}
      />
    </div>

    <button type="submit" style={{ backgroundColor: '#FFA500', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', width: '100%', fontSize: '16px' }}>
          Login
        </button>
  </form>

    </div>

    <Footer />
  </div>
  );
};

