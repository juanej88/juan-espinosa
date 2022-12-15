export const showHomeAnimation = () => {
  return {
    type: 'SHOW_HOME_ANIMATION'
  };
};

export default function homeAnimationReducer(animation = true, action) {

  switch(action.type) {
    case 'SHOW_HOME_ANIMATION':
      return false;
    default:
      return animation;
  };
};
