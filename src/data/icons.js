import django from '../images/icons/django.svg';
import mysql from '../images/icons/mysql-logo.svg';
import googleCloud from '../images/icons/google-cloud.png';


const coreSkills = {
  HTML: <i className='fa-brands fa-html5'></i>,
  CSS: <i className='fa-brands fa-css3-alt'></i>,
  JavaScript: <i className='fa-brands fa-square-js'></i>,
  React: <i className='fa-brands fa-react'></i>,
  Python: <i className='fa-brands fa-python'></i>,
  Django: <img className='django' src={django} alt='Django icon' />,
  MySQL: <img className='mysql' src={mysql} alt='MySQL icon' />,
  'Google Cloud': <img className='google-cloud' src={googleCloud} alt='Google Cloud icon' />,
  PHP: <i className='fa-brands fa-php'></i>,
}

const otherSkills = {
  Figma: <i className='fa-brands fa-figma'></i>,
  Git: <i className='fa-brands fa-git-alt'></i>,
  GitHub: <i className='fa-brands fa-github'></i>,
}

export { coreSkills, otherSkills };







