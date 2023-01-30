import '../styles/MenuIcon.css';

import { useSelector, useDispatch } from 'react-redux';
import { toggleShowMenu } from '../../redux/showMenu';

const MenuIcon = props => {
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
        className={showMenuStatus ? 'bars' : 'bars bar1-closed'}
      ></div>
      <div 
        className={showMenuStatus ? 'bars' : 'bars bar2-closed'}
      ></div>
    </section>
  );
};

export default MenuIcon;