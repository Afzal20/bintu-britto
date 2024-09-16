import React, { useState } from 'react';
import './css/register.css'; 
import { GoogleLogin } from 'react-google-login';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Handle registration logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google Response:', response);
    // Handle Google authentication success here
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Login Error:', error);
    // Handle Google authentication failure here
  };

  return (
    <section className="container-forms">
      <div className="form register">
        <h3>Register</h3>
        {error && (
          <div className="alert alert-primary" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="field input-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="field input-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="field input-field">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="field button-field">
            <button type="submit">Register</button>
          </div>
          <div className="form-link">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
          <div className="divider">or</div>
          <div className="continue-with-google">
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google client ID
              buttonText="Continue with Google"
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
