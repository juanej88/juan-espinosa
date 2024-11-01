import '../styles/About.css';
import NavigationArrows from './NavigationArrows';
import { useSelector, useDispatch } from 'react-redux';
import { updateAboutIndicator } from '../../redux/aboutIndicator';

const About = () => {
  const aboutIndicator = useSelector(state => state.aboutIndicator);
  const dispatch = useDispatch();

  const changeAboutIndicator = event => {
    const scrollWidth = event.target.scrollWidth;
    const scrollLeft = event.target.scrollLeft;
    const scrollSegment = Math.round(scrollWidth / 4);

    const indicatorPosition = (
      // 8 px are added due to the right margin of the class 'about-parts'
      scrollLeft < (scrollSegment + 8) ? 0 : 1
      );

    dispatch(updateAboutIndicator(indicatorPosition));
  };

  const slideAbout = event => {
    const aboutPage = (
      event.target.closest('#prev-project') ? aboutIndicator[0] - 1 :
      event.target.closest('#next-project') ? aboutIndicator[0] + 1 :
      Number(event.target.id[0]) // when dots are clicked
    );
    const scrollWidth = document.getElementById('about-container').scrollWidth;
    const position = aboutPage * scrollWidth;
    document.getElementById('about-container').scrollLeft = position;
  };

  const dots = () => {
    const allDots = []
    for (let i = 0; i < 2; i++) {
      allDots.push (
        <div 
          className={aboutIndicator[0] === i ? 'dot dot-active' : 'dot'}
          key={`dot${i}`}
          id={`${i}_about_dot`}
          onClick={slideAbout}
        >
        </div>
        );
    }
    return allDots;
  };
  
  return (
    <section id='about'>
      <h2>About Me</h2>
      <article id='about-container' className='about-container' onScroll={changeAboutIndicator}>
        <div className='about-parts'>
          <h3>Who Am I?</h3>
          <p>I'm a Software Developer with a passion for learning and writing practical code solutions. I thrive on tackling challenging problems that foster my growth as a programmer. My background spans across Software Development, Project Management, and Retail Management, where I've successfully managed diverse tasks.</p>
          <h3>Coding Journey</h3>
          <p>From Legos to managing construction projects, I have always loved building and problem-solving. Coding is like unlocking a new puzzle, where each line forms part of functional applications. This passion continues to drive my journey as a software developer.</p>
          <p>I started coding as a hobby five years ago and decided to shift into a career in software development this year. This led me to move from NSW to WA to immerse myself in the tech community and work on building and maintaining software applications within a team I am proud to be part of.</p>
        </div>
        <div className='about-parts'>
          <h3>My Latest Project</h3>
          <p>I have come across interactive CSS practice websites, but none dedicated to JavaScript built-in methods. Hence, I developed "Owl Array," a web application enabling users to practice these methods within a playful gaming environment.</p> 
          <p>Featuring essential functions like push, pop, and slice, users can progress through levels with the flexibility to skip ahead or complete them sequentially.</p>
          <h3>My Current Project</h3>
          <p>I frequently miss celebrating the birthdays of loved ones due to overwhelming Facebook notifications from a large friend list. To remedy this, I'm developing a full-stack app named "Cookies & Dates." </p> 
          <p>This platform empowers users to selectively store and receive notifications for important dates, ensuring they never miss a special occasion.</p>
        </div>
      </article> 
      <div className='dots'>
        {dots()}
      </div>
      <NavigationArrows handleClick={slideAbout} indicator={aboutIndicator[0]} sliderLength={1} />
    </section>
  );
};

export default About;