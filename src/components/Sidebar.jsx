//Sidebar.js
import React from 'react';
import './css/Sidebar.css';

const menuItems = [
  { name: 'REGULAR COLLECTION', link: '/product-category/regularCollection' },
  { name: 'MUSICAL BANDS', link: '/product-category/musicalBands' },
  { name: 'ISLAMIC COLLECTION', link: '/product-category/islamicCollection' },
  { name: 'SONATONI COLLECTION', link: '/product-category/sonatonoCollection' },
  { name: 'BANGLA COLLECTION', link: '/product-category/banglaCollection' },
  { name: 'FUNKYSTILE', link: '/product-category/funkyStyle' },
];

const Sidebar = () => {
  return (
    <div className="menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
