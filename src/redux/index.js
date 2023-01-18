import { combineReducers, createStore } from 'redux';
import darkModeReducer from './darkMode';
import headingReducer from './heading';
import homeAnimationReducer from './homeAnimation';
import buttonReducer from './showMoreButton';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  heading: headingReducer,
  homeAnimation: homeAnimationReducer,
  showMoreButton: buttonReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  return;
});
// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
