import { combineReducers, createStore } from 'redux';
import darkModeReducer from './darkMode';
import headingReducer from './heading';
import homeAnimationReducer from './homeAnimation';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  heading: headingReducer,
  homeAnimation: homeAnimationReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  return;
});
// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
