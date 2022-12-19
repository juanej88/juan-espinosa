import React from 'react';
import './Footer.css';

const Footer = () => {

  const getYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  }

  getYear();

  return (
    <footer id='footer'>
      <p>Copyright &#xa9; {getYear()} Juan Espinosa Jorrin</p>
      <p>Wollongong, Australia</p>
    </footer>
  );
}

export default Footer;
