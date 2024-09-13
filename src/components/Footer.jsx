

import React from 'react';
import { FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import "./css/Footer.css"
import 'tailwindcss/tailwind.css';
import logo from "../assets/img/logo-2-300x124.png"
import qr_code from "../assets/img/transparent-2-qr-1024x1024.png"



const Footer = () => {
  return (
    <div className="contact-container flex flex-col md:flex-row justify-around items-center bg-black text-yellow-400 p-5 w-full">
      <div className="qr-code mb-5 md:mb-0">
        <img src= {qr_code} alt="QR Code" className="w-40 h-auto md:w-52" />
      </div>
      <div className="form-container w-full md:w-96 flex flex-col mb-5 md:mb-0">
        <form className="flex flex-col">
          <input type="email" placeholder="EMAIL" className="bg-gray-800 border border-yellow-400 p-2 mb-2 text-yellow-400" />
          <input type="text" placeholder="SUBJECT" className="bg-gray-800 border border-yellow-400 p-2 mb-2 text-yellow-400" />
          <textarea placeholder="DETAILS" maxLength="250" className="bg-gray-800 border border-yellow-400 p-2 mb-2 text-yellow-400"></textarea>
          <button type="submit" className="bg-yellow-400 text-black p-2 mt-2">Send Message</button>
        </form>
      </div>
      <div className="contact-info flex flex-col items-center">
        <div className="logo-footer mb-2">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
        </div>
        <div>
          <h2 className="mb-2 text-xl">CONTACT US</h2>
          <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> bindubritto2024@gmail.com</p>
          <p className="flex items-center mb-2"><FaWhatsapp className="mr-2" /> +8801306994872</p>
          <p className="flex items-center mb-2"><FaPhone className="mr-2" /> +8801771325577</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
