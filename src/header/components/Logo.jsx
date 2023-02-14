import '../styles/Logo.css';
import juanLogo from '../../images/logo/juanLogo.png';

const Logo = props => {
  return (
    <div className='logo-container'>
      <img 
        id='logo' 
        src={juanLogo} 
        alt='Juan Espinosa Logo'
      />
    </div>
  );
};

export default Logo;
