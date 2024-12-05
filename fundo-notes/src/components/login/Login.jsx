import React, { useState } from 'react';
import "./Login.css";
import TextField from '@mui/material/TextField';
import { LoginApiCall } from '../../utils/Apis';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format'); 
      return;
    }
  
    setError('');
  
    LoginApiCall({ email, password })
      .then((response) => {
        console.log('Login successful:', response);
        alert('Login successful');
        navigate("/dashboard")
      })
      .catch((err) => {
        console.error('Login error:', err);
  
        const errorMessage = err?.error || 'An unexpected error occurred';
        setError(errorMessage);
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form-box">
          <h1 className="login-logo">Fundo</h1>
          <h2>Sign in</h2>
          <p>Use your Fundo Account</p>
          <form onSubmit={handleLogin}>
            <div className="login-input-group">
              <TextField 
                id="email" 
                label="Email" 
                variant="outlined" 
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error} // Show error styling if there is an error
                helperText={error} // Display error message below the input
              />
            </div>
            <div className="login-input-group"> 
              <TextField 
                id="password" 
                label="Password" 
                type="password" 
                variant="outlined" 
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-links">
              <a href="#">Forgot password</a>
            </div>
            <div className="login-bottom-links">
              <a href="#" className="login-create-account" onClick={()=> navigate('/register')}>Create account</a>
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
