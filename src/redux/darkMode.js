export const toggleDarkMode = () => {
  return {
    type: 'TOGGLE_DARK_MODE'
  };
};

export default function darkModeReducer(darkMode = false, action) {
  switch(action.type) {
    case 'TOGGLE_DARK_MODE':
      return !darkMode
    default:
      return darkMode;
  };
};
