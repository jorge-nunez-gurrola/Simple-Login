import React, { useState } from 'react';
import './App.css';
import { db } from './db'; // Simulated database
import { useNavigate } from 'react-router-dom'; // Import React Router's `useNavigate` hook

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Create navigate function

  const handleLogin = () => {
    const user = db.users.find(user => user.username === username && user.password === password);
    if (user) {
      setMessage(`Welcome, ${user.username}!`);
      navigate('/home'); // Navigate to the "home" page after successful login
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
