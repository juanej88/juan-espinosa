export const updateProjectsIndicator = (position) => {
  return {
    type: 'UPDATE_PROJECTS_INDICATOR',
    load: position
  };
};

export default function aboutIndicatorReducer(indicator = {0: 0}, action) {
  switch(action.type) {
    case 'UPDATE_PROJECTS_INDICATOR':
      indicator = {
        0: action.load
      };
      return indicator;
    default:
      return indicator;
  };
};
