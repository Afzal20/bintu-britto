// SliderWithSidebar.js
import React from 'react';
import Slider from 'react-slick';
import Sidebar from './Sidebar';
import "./css/Slider.css"

import slider1 from '../assets/images/slider/products02.png'
import slider2 from '../assets/images/slider/products03.png'
import slider3 from '../assets/images/slider/products3.png'
// Custom Arrow Components with custom icons
const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    {'>'}
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    {'<'}
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const images = [
   {slider1},
   {slider2},
   {slider3},
];

const SliderWithSidebar = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderWithSidebar;
