export const updateIndicator = ([indicator, position]) => {
  return {
    type: 'UPDATE_INDICATOR',
    load: [indicator, position]
  };
};

const initialState = {
  0: 0,
  1: 0,
  2: 0
}

export default function indicatorReducer(indicators = initialState, action) {
  

  switch(action.type) {
    case 'UPDATE_INDICATOR':
      indicators = {
        ...indicators,
        [action.load[0]]: action.load[1]
      };
      return indicators
    default:
      return indicators;
  };
};
