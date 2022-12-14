import '../styles/About.css';

const About = () => {
  const showMore = false;
  return (
    <section id='about'>
      <h2>About Me</h2>
      <article className='about-container'>
        <h3>Who Am I?</h3>
        <p>I'm a Front-End Web Developer with a Bachelor Degree in Architectural Engineering</p>
      </article> 
      <article className='about-container'>
        <h3>Coding Journey</h3>
        <p>In 2019, I started to code by building my favourite board game "Connect Four" and since that moment, I got passionate about the process of developing web applications.</p>
        <p>In 2020, I did a website for a local business in Sydney, and two years later, I decided to change careers. Since then, I've been focused on building strong skills to get into the web development world, while building awesome applications.</p>
      </article>

      <button className='about-button'>Show more &gt;</button>

      {showMore && <>
      <article className='about-container'>
        <h3>Background</h3>
        <p>I've always liked to build things such as Lego sets and puzzles since I was a kid. Years later, I became a construction project manager which felt like building Lego sets in human scale. I saw coding as building puzzles which pieces need to be connected together to make functional applications.</p>
      </article> 
      <article className='about-container'>
        <h3>Hobbies</h3>
        <p>I love solving coding challenges, playing videogames and hitting some mountain bike trails.</p>
      </article> 
      <article className='about-container'>
        <h3>My Current Situation</h3>
        <p>I'm working as a supervisor at Woolworths while building projects and gaining more coding skills.</p>
      </article>
      </>}
    </section>
  );
};

export default About;