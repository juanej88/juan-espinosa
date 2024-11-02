import '../styles/Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateHeading } from '../../redux/heading';
import { showHomeAnimation } from '../../redux/homeAnimation';
import { useEffect } from 'react';

const Home = props => {
  const heading = useSelector(state => state.heading);
  const dispatch = useDispatch();

  useEffect(() => {
    let milliseconds = 50
    if(heading.length >= 24) {
      dispatch(showHomeAnimation());
      return;
    } else if(heading.length === 0) {
      milliseconds = 1000;
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

  const getRandomNum = () => {
    return Math.floor(Math.random() * 80) + 10;
  }

  const star = (num) => {
    const stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<div key={`star_${i}`} style={{left: `${getRandomNum()}%`, top: `${getRandomNum()}%`}} className='star'></div>);
    };
    return stars;
  };

  return (
    <section 
      id='home' 
      className={props.homeAnimation ? null : 'show-complete-home'}
    >
      <aside className='stars'>{star(12)}</aside>
      <aside className='home-background-filter'></aside>
      <article className='home-header'>
        <h1 translate='no'>
          <span>{heading}</span>
          <span id='textCursor'>
            |
          </span>
        </h1>
        <p>Full-Stack Developer</p>
      </article>
    </section>
  );
};

export default Home;
