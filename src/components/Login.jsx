// src/components/Login.js
import React, { useState } from 'react';
import './css/login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here (e.g., API call for authentication)
  };

  return (
    <section className="container-forms">
      <div className="form login">
        <div className="form-content">
          <h3 className="login-text">Login Page</h3>
          {error && (
            <div className="alert alert-primary" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input
                type="email"
                className="form-control"
                name="email"
                id="inputEmail"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                className="form-control"
                name="password"
                id="inputPass"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="field button-field">
              <button type="submit">Login</button>
            </div>
            <div className="form-link">
              <h3>
                If you don't have an account? <a href="/register">Register Now</a>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
