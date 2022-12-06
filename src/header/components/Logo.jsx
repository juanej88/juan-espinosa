import '../styles/Logo.css';
import logoLightMode from '../../images/logo/logoLightMode.png';
import logoDarkMode from '../../images/logo/logoDarkMode.png';

const Logo = props => {
  return (
    <img 
      id='logo' 
      src={props.darkMode ? logoDarkMode : logoLightMode} 
      alt='Juan Espinosa Logo'
      />
  );
};

export default Logo;
