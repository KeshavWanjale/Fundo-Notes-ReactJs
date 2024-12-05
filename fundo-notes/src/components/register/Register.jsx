import React, { useState } from 'react';
import "./Register.css";
import TextField from '@mui/material/TextField';
import RegisterImage from '../../assets/register.jpg';
import { RegisterApiCall } from '../../utils/Apis';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateUsername = (username) =>
    /^[A-Z][a-zA-Z]{2,}$/.test(username); 

  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password); 

  const handleRegister = (e) => {
    e.preventDefault();
  
    const newErrors = {};
    if (!validateEmail(email)) newErrors.email = 'Invalid email format.';
    if (!validateUsername(username))
      newErrors.username =
        'Username must start with a capital letter, contain only letters, and be at least 3 characters long.';
    if (!validatePassword(password))
      newErrors.password =
        'Password must be at least 8 characters long and include one uppercase letter, one number, and one special character.';
    if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    setErrors({});
    
    RegisterApiCall({ email, username, password })
    .then((response) => {
        alert('Registration successful!');
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((err) => {
        console.error('Register error:', err);
        const errorMessage = err?.error || 'An unexpected error occurred';
        setErrors(errorMessage);
      });
  };

  return (
    <div className="register-global">
      <div className="register-container">
        {/* Form Section */}
        <div className="register-form-container">
          <h1>Fundo</h1>
          <h2>Create your Fundo Account</h2>
          <form onSubmit={handleRegister}>
            <div className="register-input-group">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
            </div>

            <TextField
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
              required
            />
            <small>You can use letters, numbers & periods</small>

            <div className="register-input-group">
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                required
              />
              <TextField
                id="confirm-password"
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                required
              />
            </div>
            <small>Use 8 or more characters with a mix of letters, numbers & symbols</small>

            <div className="register-bottom-links">
              <a href="#" className="signin-link" onClick={()=> navigate("/login")}>
                Sign in instead
              </a>
              <button type="submit" className="register-btn">
                Register
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="register-image-container">
          <img src={RegisterImage} alt="Avatar Icon" />
          <p>One account. All of Fundo working for you.</p>
        </div>
      </div>
    </div>
  );
}
