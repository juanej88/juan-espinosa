import '../styles/Menu.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowMenu } from '../../redux/showMenu';

const Menu = () => {
  const showMenuStatus = useSelector(state => state.showMenu);
  const dispatch = useDispatch();
  
  const hideFilter = () => {
    dispatch(toggleShowMenu());
  };

  const menuElements = () => {
    const menuArray = ['home', 'about', 'skills', 'projects', 'contact'];
    return menuArray.map(element => {
      return (
        <li className='menu-element' key={element}>
          <a 
            href={`#${element}`}
            onClick={hideFilter}
          >{element}</a>
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
      <span id='menu-filter' onClick={hideFilter} onTouchStart={hideFilter}></span>
    </section>
  );
};

export default Menu;
