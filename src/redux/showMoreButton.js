export const toggleButton = () => {
  return {
    type: 'TOGGLE_BUTTON'
  };
};

export default function buttonReducer(showMore = false, action) {
  switch(action.type) {
    case 'TOGGLE_BUTTON':
      return !showMore
    default:
      return showMore;
  };
};
