import React from 'react';
// import store from '../src/redux';


// import redux from 'redux';
// import { createStore } from 'redux';
// import { Counter } from './features/counter/Counter';

import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../src/redux/darkMode';

import './App.css';
import Logo from '../src/header/components/Logo';
import LightDarkIcon from '../src/header/components/LightDarkIcon';
import Home from './main/components/Home';
import About from './main/components/About';
import Skills from '../src/main/components/Skills';
import Projects from '../src/main/components/Projects';
import Contact from '../src/main/components/Contact';

// console.log(createStore);

function App(props) {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const changeDarkMode = () => {
    dispatch(toggleDarkMode());
  }

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <header>
        <Logo darkMode={darkMode} />
        <LightDarkIcon
          darkMode={darkMode}
          changeDarkMode={changeDarkMode} 
        />
      </header>
      <main>
        <Home darkMode={darkMode} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
