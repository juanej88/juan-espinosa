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
          <p>I'm a full-stack developer who works with React on the front end to build responsive, user-friendly interfaces, while Django and MySQL form the backbone of my back end, ensuring scalability and reliability.</p>
          <p>My approach to design is all about minimalism. I prioritise simplicity and avoid unnecessary features, focusing on delivering essential functionality in a clean, intuitive way.</p>
          <h3>Career Highlights</h3>
          <p>Developed and deployed a full-featured web app for managing personal dates and milestones. The front end is hosted on Netlify with a custom domain, while the back end runs on Railway, using Docker to set up the virtual environment for a Django API and MySQL database.</p>
          <p>Integrated with the ChatGPT API, the app allows users 10 custom messages per month. Notifications are managed with GitHub Actions, which runs every 3 hours to deliver timely reminders across time zones, ensuring each user receives notifications between 6 am and 9 am.</p>
        </div>
        <div className='about-parts'>
          <h3>Coding Journey</h3>
          <p>From building with Legos to managing construction projects, I've always had a passion for creating and problem-solving. Although I initially explored robotics and mechatronics before studying architectural engineering, I now realise that my true passion lies in software development.</p>
          <p>I started coding as a hobby five years ago, and recently, before developing my last project, I chose to make it my career. This year, I moved from NSW to WA to immerse myself in the tech community, excited to bring creativity and logic together in building impactful applications every day.</p>
          <h3>What's Next?</h3>
          <p>When I'm not coding, I'm exploring ways to enhance my skills and dive deeper into the tech world. My goal is to keep building innovative applications while expanding my expertise with new technologies like Next.js, TypeScript, Node.js, and Express, along with Docker and GitHub Actions for scalable deployments.</p> 
          <p>Learning these tools is part of my journey to continuously evolve as a developer and deliver even more powerful solutions.</p>
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