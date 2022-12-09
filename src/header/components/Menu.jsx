import '../styles/Menu.css';

const Menu = props => {
  const menuElements = () => {
    const menuArray = ['home', 'about', 'skills', 'projects', 'contact'];
    return menuArray.map(element => {
      return (
        <li className='menu-element' key={element}>
          <a href={`#${element}`}>{element}</a>
        </li>
      );
    });
  };

  return (
    <section 
      id='menu' 
      className={props.darkMode ? 'dark-mode' : null}
    >
      <ul className='menu-list'>
        {menuElements()}
      </ul>
    </section>
  );
};

export default Menu;
