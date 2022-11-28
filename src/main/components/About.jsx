import '../styles/About.css';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <article className='about-container'>
        <p>I'm a Wollongong based full-stack web developer who loves to write functional code and solve coding problems.</p>
        <h3>Background</h3>
        <p>I've always liked to build things such as Lego sets and puzzles since I was a kid. Years later, I concluded my bachelor degree in architectural engineering and I became a construction project manager which felt like building Lego sets in human scale.</p>
        <h3>Coding Journey</h3>
        <p>I started to learn to code in 2019 by building my favourite board game "Four in a Line". Since that moment, coding felt like building puzzles which pieces need to be connected together to make a functional application.</p>
        <h3>My current situation</h3>
        <p>I'm working as a supervisor at Woolworths while building projects and gaining more coding skills.</p>
      </article> 
      <a href='#skills'><i className='fa-solid fa-angle-down'></i></a>
    </section>
  );
};

export default About;