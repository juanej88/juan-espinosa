import { combineReducers, createStore } from 'redux';
import darkModeReducer from './darkMode';

const rootReducer = combineReducers({
  darkMode: darkModeReducer
})

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;


// store.dispatch(toggleDarkMode());
// store.dispatch(toggleDarkMode());
// store.dispatch(toggleDarkMode());
