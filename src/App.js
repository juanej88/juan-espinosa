import React from 'react';
// import { createStore } from 'redux';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Logo from '../src/header/components/Logo';
import Introduction from '../src/main/components/Introduction';
import Skills from '../src/main/components/Skills';
import Projects from '../src/main/components/Projects';
import Contact from '../src/main/components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      <main>
        <Introduction />
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
