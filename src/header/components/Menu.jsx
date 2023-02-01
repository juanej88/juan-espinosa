import '../styles/Menu.css';
import { useSelector } from 'react-redux';

const Menu = () => {
  const showMenuStatus = useSelector(state => state.showMenu);

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
      className={showMenuStatus ? 'menu-open' : null}
    >
      <ul className='menu-list'>
        {menuElements()}
      </ul>
    </section>
  );
};

export default Menu;
