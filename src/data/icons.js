import jQuery from '../images/icons/jquery.gif';
import redux from '../images/icons/redux.png';
import postgresql from '../images/icons/postgresql.png';

const coreSkills = {
  HTML: <i className='fa-brands fa-html5'></i>,
  CSS: <i className='fa-brands fa-css3-alt'></i>,
  JavaScript: <i className='fa-brands fa-square-js'></i>,
  PHP: <i className='fa-brands fa-php'></i>,
  React: <i className='fa-brands fa-react'></i>,
  'Node.js': <i className='fa-brands fa-node'></i>,
  'Express.js': <i className='express'>Express</i>,
  PostgreSQL: <img className='icon-img postgre' src={postgresql} alt='postgreSQL icon' />
}

const otherSkills = {
  jQuery: <img className='icon-img' src={jQuery} alt='jQuery icon' />,
  Redux: <img className='icon-img' src={redux} alt='redux icon' />,
  Git: <i className='fa-brands fa-git-alt'></i>,
  GitHub: <i className='fa-brands fa-github'></i>,
}

export { coreSkills, otherSkills };
