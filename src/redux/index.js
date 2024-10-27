import { combineReducers, createStore } from 'redux';
import darkModeReducer from './darkMode';
import headingReducer from './heading';
import homeAnimationReducer from './homeAnimation';
import aboutIndicatorReducer from './aboutIndicator';
import projectsIndicatorReducer from './projectsIndicator';
import showMenuReducer from './showMenu';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  heading: headingReducer,
  homeAnimation: homeAnimationReducer,
  aboutIndicator: aboutIndicatorReducer,
  projectsIndicator: projectsIndicatorReducer,
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
