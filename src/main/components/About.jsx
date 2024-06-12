import '../styles/About.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateAboutIndicator } from '../../redux/aboutIndicator';

const About = () => {
  const aboutIndicator = useSelector(state => state.aboutIndicator);
  const dispatch = useDispatch();

  const changeAboutIndicator = e => {
    const scrollWidth = e.target.scrollWidth;
    const scrollLeft = e.target.scrollLeft;
    const scrollSegment = Math.round(scrollWidth / 4);

    const indicatorPosition = (
      // 8 px are added due to the right margin of the class 'about-parts'
      scrollLeft < (scrollSegment + 8) ? 0 : 1
      );

    dispatch(updateAboutIndicator(indicatorPosition));
  };

  const activateIndicator = e => {
    const eventID = e.target.id;
    const scrollWidth = document.getElementById('about-container').scrollWidth;
    
    const position = (
      eventID === 'about_dot_0' ? 0 : scrollWidth
    );

    document.getElementById('about-container').scrollLeft = position;
  };

  const dots = () => {
    const allDots = []
    for (let i = 0; i < 2; i++) {
      allDots.push (
        <div 
          className={aboutIndicator[0] === i ? 'dot dot-active' : 'dot'}
          key={`dot${i}`}
          id={`about_dot_${i}`}
          onClick={activateIndicator}
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
        <span className='about-parts'>
          <h3>Who Am I?</h3>
          <p>I'm a Software Developer with a passion for learning and writing practical code solutions. I thrive on tackling challenging problems that foster my growth as a programmer. My background spans across Software Development, Project Management, and Retail Management, where I've successfully managed diverse tasks.</p>
          <h3>Coding Journey</h3>
          <p>From Legos to managing construction projects, I have always loved building and problem-solving. Coding is like unlocking a new puzzle, where each line forms part of functional applications. This passion continues to drive my journey as a software developer.</p>
          <p>I started coding as a hobby five years ago and decided to shift into a career in software development this year. This led me to move from NSW to WA to immerse myself in the tech community and work on building and maintaining software applications within a team I am proud to be part of.</p>
        </span>
        <span className='about-parts'>
          <h3>Challenge I've Encountered</h3>
          <p>While developing the Speedy Auto Centre Pty Ltd website, the owner wanted a booking system to receive email notifications for service requests. Despite GitHub's limitations, I found a solution by hosting the website on Google Cloud, enabling to send booking confirmations directly.</p>
          <h3>Latest Project that I Developed</h3>
          <p>I have come across interactive CSS practice websites, but none dedicated to JavaScript built-in methods. Hence, I developed "Owl Array," a web application enabling users to practice these methods within a playful gaming environment. Featuring essential functions like push, pop, and slice, users can progress through levels with the flexibility to skip ahead or complete them sequentially.</p>
          <h3>Current Project I'm Working at</h3>
          <p>I frequently miss celebrating the birthdays of loved ones due to overwhelming Facebook notifications from a large friend list. To remedy this, I'm developing a full-stack app named "Cookies & Dates.” This platform empowers users to selectively store and receive notifications for important dates, ensuring they never miss a special occasion.</p>
        </span>
      </article> 
      <div className='dots'>
        {dots()}
      </div>
    </section>
  );
};

export default About;