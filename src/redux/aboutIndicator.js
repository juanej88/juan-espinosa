export const updateAboutIndicator = (position) => {
  return {
    type: 'UPDATE_ABOUT_INDICATOR',
    load: position
  };
};

export default function aboutIndicatorReducer(indicator = {0: 0}, action) {
  switch(action.type) {
    case 'UPDATE_ABOUT_INDICATOR':
      indicator = {
        0: action.load
      };
      return indicator;
    default:
      return indicator;
  };
};
