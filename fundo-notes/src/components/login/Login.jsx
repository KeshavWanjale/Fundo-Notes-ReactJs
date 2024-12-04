import React from 'react'
import "./Login.css";
import TextField from '@mui/material/TextField';


export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-form-box">
          <h1 className="login-logo">Fundo</h1>
          <h2>Sign in</h2>
          <p>Use your Fundo Account</p>
          <form>
            <div className="login-input-group">
              <TextField id="email" label="Email" variant="outlined" fullWidth/>
            </div>
            <div className="login-input-group"> 
                <TextField id="password" label="Password" type="password" variant="outlined" fullWidth/>
            </div>
            <div className="login-links">
              <a href="#">Forgot password</a>
            </div>
            <div className="login-bottom-links">
              <a href="register.html" className="login-create-account">Create account</a>
              <button type="submit" className="login-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}
