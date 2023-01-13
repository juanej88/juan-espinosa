import '../styles/MenuIcon.css';

const MenuIcon = props => {

  return (
    <section 
      id='menu-icon' 
      // className={props.darkMode ? 'dark-mode' : null}
    >
      <i className='fa-solid fa-bars'></i>
    </section>
  );
};

export default MenuIcon;