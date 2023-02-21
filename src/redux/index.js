import { combineReducers, createStore } from 'redux';
import darkModeReducer from './darkMode';
import headingReducer from './heading';
import homeAnimationReducer from './homeAnimation';
import aboutIndicatorReducer from './aboutIndicator';
import indicatorReducer from './indicators';
import showMenuReducer from './showMenu';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  heading: headingReducer,
  homeAnimation: homeAnimationReducer,
  aboutIndicator: aboutIndicatorReducer,
  indicators: indicatorReducer,
  showMenu: showMenuReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  return;
});
// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
