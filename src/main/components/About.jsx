import '../styles/About.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateAboutIndicator } from '../../redux/aboutIndicator';

const About = () => {
  const aboutIndicator = useSelector(state => state.aboutIndicator);
  const dispatch = useDispatch();

  const changeAboutIndicator = e => {
    let position = e.target.id === 'about_dot_0' ? 0 : 1;
    dispatch(updateAboutIndicator(position));
  };

  console.log(aboutIndicator)

  const dots = () => {
    const allDots = []
    for (let i = 0; i < 2; i++) {
      allDots.push (
        <div 
          className={aboutIndicator[0] === i ? 'dot dot-active' : 'dot'}
          key={`dot${i}`}
          id={`about_dot_${i}`}
          onClick={changeAboutIndicator}
        >
        </div>
        );
    }
    return allDots;
  };
  
  return (
    <section id='about'>
      <h2>About Me</h2>
      <article className='about-container'>
        <span className='about-parts'>
          <h3>Who Am I?</h3>
          <p>I'm a Front-End Web Developer with a Bachelor Degree in Architectural Engineering</p>
          <h3>Coding Journey</h3>
          <p>In 2019, I started to code by building my favourite board game "Connect Four" and since that moment, I got passionate about the process of developing web applications.</p>
          <p>In 2020, I did a website for a local business in Sydney, and two years later, I decided to change careers. Since then, I've been focused on building strong skills to get into the web development world, while building awesome applications.</p>
          <h3>My Current Situation</h3>
          <p>I'm working as a supervisor at Woolworths while building projects and gaining more coding skills.</p>
        </span>
        <span className='about-parts'>
          <h3>Background</h3>
          <p>I've always liked to build things such as Lego sets and puzzles since I was a kid. Years later, I became a construction project manager which felt like building Lego sets in human scale. I saw coding as building puzzles which pieces need to be connected together to make functional applications.</p>
          <h3>Hobbies</h3>
          <p>I love solving coding challenges, playing videogames and hitting some mountain bike trails.</p>
          <h3>Extras</h3>
          <p>Thinking about it...</p>
        </span>
      </article> 

      {/* <button className='about-button'>+</button> */}
      {/* <button 
        className='about-button skills-button'
        onClick={changeShowMore}
      >
        {showMoreButton ? 'Show less' : 'Show more'}
      </button> */}
      <div className='dots'>
        {dots()}
      </div>
    </section>
  );
};

export default About;