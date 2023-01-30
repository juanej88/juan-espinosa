export const toggleShowMenu = () => {
  return {
    type: 'TOGGLE_SHOW_MENU'
  };
};

export default function showMenuReducer(showMenu = false, action) {
  switch(action.type) {
    case 'TOGGLE_SHOW_MENU':
      return !showMenu
    default:
      return showMenu;
  };
};
