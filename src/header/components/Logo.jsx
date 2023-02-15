import '../styles/Logo.css';
import juanLogo from '../../images/logo/juanLogo.png';

const Logo = props => {
  return (
    <a 
      className='logo-container'
      href='https://juanespinosa.netlify.app/'
      rel='noreferrer'
      title='Reload this Website'
    >
      <img 
        id='logo' 
        src={juanLogo} 
        alt='Juan Espinosa Logo'
      />
    </a>
  );
};

export default Logo;
