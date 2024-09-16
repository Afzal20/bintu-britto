import React from 'react';
import Login from '../components/Login';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <div>
      <Navbar/>
      <Login />
      <Footer/>
    </div>
  );
};

export default LoginPage;
