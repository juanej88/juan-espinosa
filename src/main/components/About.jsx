import '../styles/About.css';

const About = () => {
  const showMore = false;
  return (
    <section id='about'>
      <h2>About Me</h2>
      <article className='about-container'>
        <h3>Who Am I?</h3>
        <p>I'm a Full-Stack Web Developer with a Bachelor Degree in Architectural Engineering</p>
      </article> 
      <article className='about-container'>
        <h3>Coding Journey</h3>
        <p>In 2019, I started to code by building my favourite board game "Four in a Line" and since that moment, I considered the possibility to become a full-stack developer.</p>
        <p>A year later, I did a website for a local business in Sydney. In 2022, I finally decided to change careers, so I started to build up this portfolio and more applications to get the necessary skills to become a full-stack web developer.</p>
      </article>

      <button className='about-button'>Show more about me</button>

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