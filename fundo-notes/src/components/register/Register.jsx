import React from 'react'
import "./Register.css"
import TextField from '@mui/material/TextField';
import RegisterImage from '../../assets/register.jpg';

export default function Register() {
  return (
    <>
    <div className="register-global">
      <div className="register-container">
        {/* Form Section */}
        <div className="register-form-container">
          <h1>Fundo</h1>
          <h2>Create your Fundo Account</h2>
          <form action="login.html">
            <div className="register-input-group">
            <TextField id="first-name" label="First Name" variant="outlined" required fullWidth />
            <TextField id="last-name" label="Last Name" variant="outlined" required fullWidth />
            </div>
            <TextField id="username" label="Username" variant="outlined" required fullWidth/>
            <small>You can use letters, numbers & periods</small>
            <div className="register-input-group">
                <TextField id="password" label="Password" type="password" variant="outlined" required fullWidth/>
                <TextField id="confirm-password" label="Confirm" type="password" variant="outlined" required fullWidth/>
            </div>
            <small>Use 8 or more characters with a mix of letters, numbers & symbols</small>
            <div className="register-bottom-links">
              <a href="login.html" className="signin-link">
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
    </>
  )
}
