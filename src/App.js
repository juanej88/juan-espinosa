import React, { useEffect } from 'react';

// import redux from 'redux';
// import { createStore } from 'redux';
// import { Counter } from './features/counter/Counter';

import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../src/redux/darkMode';

import './App.css';
import Logo from '../src/header/components/Logo';
import Menu from '../src/header/components/Menu';
import LightDarkIcon from '../src/header/components/LightDarkIcon';
import Home from './main/components/Home';
import About from './main/components/About';
import Skills from '../src/main/components/Skills';
import Projects from '../src/main/components/Projects';
import Contact from '../src/main/components/Contact';

function App() {
  const darkMode = useSelector(state => state.darkMode);
  const homeAnimation = useSelector(state => state.homeAnimation);
  const dispatch = useDispatch();

  const changeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  

  useEffect(() => {
    const defineOpacity = () => {
      let colour;
      if(darkMode) {
        colour = '200, 0%, 10%';
      } else {
        colour = '40, 75%, 97%';
      }
      const header = document.getElementById('header');
      if (window.scrollY < 200) {
        let percentage = Math.floor(window.scrollY * 90 / 200);
        header.style.backgroundColor = `hsla(${colour}, ${percentage}%)`;
        header.style.backdropFilter = 'blur(0px)';
      } else {
        header.style.backgroundColor = `hsla(${colour}, 90%)`;
        header.style.backdropFilter = 'blur(5px)';
      }
      console.log(window.scrollY);
    };

    window.addEventListener('scroll', defineOpacity);

    defineOpacity();

    // return window.removeEventListener('scroll', defineOpacity);
  }, [darkMode]);

  return (
    <div 
      className={darkMode ? 'App dark-mode' : 'App'}
    >
      <header
        id='header'
        className={homeAnimation ?  'hidden' : 'visible'}
      >
        <Logo darkMode={darkMode} />
        <Menu darkMode={darkMode} />
        <LightDarkIcon
          darkMode={darkMode}
          changeDarkMode={changeDarkMode} 
        />
      </header>
      <main>
        <Home homeAnimation={homeAnimation} />
        {!homeAnimation && <>
        <About />
        <Skills />
        <Projects />
        <Contact />
        </>}
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
