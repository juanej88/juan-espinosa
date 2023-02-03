import '../styles/MenuIcon.css';

import { useSelector, useDispatch } from 'react-redux';
import { toggleShowMenu } from '../../redux/showMenu';

const MenuIcon = () => {
  const showMenuStatus = useSelector(state => state.showMenu);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleShowMenu());
  };

  return (
    <section 
      id='menu-icon'
      onClick={toggleMenu}
    >
      <div 
        className={showMenuStatus ? 'bars bar1-closed' : 'bars bar1-open'}
      ></div>
      <div 
        className={showMenuStatus ? 'bars bar2-closed' : 'bars bar2-open'}
      ></div>
    </section>
  );
};

export default MenuIcon;