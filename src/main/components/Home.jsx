import '../styles/Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateHeading } from '../../redux/heading';
import { useEffect } from 'react';

const Home = props => {
  const heading = useSelector(state => state.heading);
  const dispatch = useDispatch();

  useEffect(() => {
    let milliseconds = 60
    if(heading.length >= 24) {
      return;
    } else if(heading.length === 0) {
      milliseconds = 2000;
    } else if(heading.length === 5) {
      milliseconds = 500;
    };

    const dispatchUpdate = () => dispatch(updateHeading());
    const timer = setTimeout(dispatchUpdate, milliseconds);
    return () => clearTimeout(timer);
  }, [heading, dispatch]);

  useEffect(() => {
    const textCursor = document.getElementById('textCursor');

    if(heading.length >= 24) {
      textCursor.style.display = 'none';
      return;
    } else if(heading.length > 0) {
      return;
    }

    let visible = false;
    const blink = () => {
      visible ? 
      textCursor.style.visibility = 'hidden' :
      textCursor.style.visibility = 'visible';
      visible = !visible;
    }
    const timer = setInterval(blink, 500);
    return () => clearInterval(timer);
  }, [heading]);

  return (
    <section 
      id='home' 
      className={props.darkMode ? 'dark-mode' : null}
    >
      <aside className='home-background-colour'></aside>
      <aside className='home-background-scene'>
        <div className='mountain mountain-one'></div>
        <div className='mountain mountain-two'></div>
        <div className='mountain mountain-three'></div>
        <div className='mountain mountain-four'></div>
      </aside>
      <article className='home-header'>
        <h1 translate='no'>
          {heading}
          <span id='textCursor'>
            |
          </span>
        </h1>
      </article>
    </section>
  );
};

export default Home;
