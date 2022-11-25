import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id='projects'>
      <article className='projects-headers'>
        <h2>Projects</h2>
      </article>
      <article className='projects-windows'>
        <span className='project-element owl-array'></span>
        <div>
          <h3>Owl Array</h3>
          <p>This application was created to practice built-in array methods in JavaScript</p>
          <br />
          <p>Technologies: <strong>HTML, CSS, JavaScript, React</strong></p>
        </div>
        <span className='project-element speedy-auto-centre'></span>
        <div>
          <h3>Speedy Auto Centre</h3>
          <p>This application was created to practice built-in array methods in JavaScript</p>
          <br />
          <p>Technologies: <strong>HTML, CSS, PHP</strong></p>
        </div>
        <span className='project-element four-in-a-line'></span>
        <div>
          <h3>Four in a Line</h3>
          <p>This application was created to practice built-in array methods in JavaScript</p>
          <br />
          <p>Technologies: <strong>HTML, CSS, JavaScript</strong></p>
        </div>
      </article>
    </section>
  );
};

export default Projects;
