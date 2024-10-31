import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../src/redux/darkMode';

import './App.css';
import MenuIcon from '../src/header/components/MenuIcon';
import Logo from '../src/header/components/Logo';
import Menu from '../src/header/components/Menu';
import LightDarkIcon from '../src/header/components/LightDarkIcon';
import Home from './main/components/Home';
import About from './main/components/About';
import Skills from '../src/main/components/Skills';
import Projects from '../src/main/components/Projects';
import Contact from '../src/main/components/Contact';
import Footer from './footer/Footer';

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
        <MenuIcon />
        <Logo darkMode={darkMode} />
        <Menu />
        <LightDarkIcon
          darkMode={darkMode}
          changeDarkMode={changeDarkMode} 
        />
      </header>
      <main>
        <Home homeAnimation={homeAnimation} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
