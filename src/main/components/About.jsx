import '../styles/About.css';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      {/* <article className='about-container'>
        <p className='intro'>I'm a Full-Stack Web Developer with an Architectural Engineering Bachelor Degree</p>
        <h3>Background</h3>
        <p>I've always liked to build things such as Lego sets and puzzles since I was a kid. Years later, I became a construction project manager which felt like building Lego sets in human scale.</p>
        <h3>Coding Journey</h3>
        <p>I started to code by building my favourite board game "Four in a Line" and since that moment, I saw coding as building puzzles which pieces need to be connected together to make functional applications.</p>
        <h3>Hobbies</h3>
        <p>I love solving coding challenges, playing videogames and hitting some mountain bike trails.</p>
        <h3>My current situation</h3>
        <p>I'm working as a supervisor at Woolworths while building projects and gaining more coding skills.</p>
      </article>  */}
      <article className='about-container'>
        <h3>Who Am I?</h3>
        <p>I'm a Full-Stack Web Developer with a Bachelor Degree in Architectural Engineering</p>
      </article> 
      <article className='about-container'>
        <h3>Background</h3>
        <p>I've always liked to build things such as Lego sets and puzzles since I was a kid. Years later, I became a construction project manager which felt like building Lego sets in human scale.</p>
      </article> 
      <article className='about-container'>
        <h3>Coding Journey</h3>
        <p>I started to code by building my favourite board game "Four in a Line" and since that moment, I saw coding as building puzzles which pieces need to be connected together to make functional applications.</p>
      </article> 
      <article className='about-container'>
        <h3>Hobbies</h3>
        <p>I love solving coding challenges, playing videogames and hitting some mountain bike trails.</p>
      </article> 
      <article className='about-container'>
        <h3>My Current Situation</h3>
        <p>I'm working as a supervisor at Woolworths while building projects and gaining more coding skills.</p>
      </article> 
    </section>
  );
};

export default About;