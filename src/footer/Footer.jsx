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
      <a 
        href='https://github.com/juanej88'
        target='_blank'
        rel='noreferrer'
        title='Go to my GitHub'
      >
        <i className='fa-brands fa-github'></i>
      </a>
      
    </footer>
  );
}

export default Footer;
