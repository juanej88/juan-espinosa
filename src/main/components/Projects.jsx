import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id='projects'>
      <article className='projects-headers'>
        <h2>Projects</h2>
      </article>
      <article className='projects-windows'>
        <span className='project-element owl-array'></span>
        {/* <span className='project-element speedy-auto-centre'></span> */}
        <aside className='project-description'>
          <h3>Owl Array</h3>
          {/* <p>This application was created to practice built-in array methods in JavaScript</p> */}
          {/* <p><strong>HTML, CSS, JavaScript, React</strong></p> */}
        </aside>
        
        {/* <div>
          <h3>Speedy Auto Centre</h3>
          <p>This website was created for the company Speedy Auto Centre</p>
          <p><strong>HTML, CSS, JavaScript, PHP</strong></p>
        </div>
        <span className='project-element four-in-a-line'></span>
        <span className='project-element'></span>
        <div>
          <h3>Four in a Line</h3>
          <p>This game was created to play four in a line</p>
          <p><strong>HTML, CSS, JavaScript</strong></p>
        </div>

        <div>
          <h3>Coming Soon</h3>
          <p>This application is under construction</p>
          <p><strong>HTML, CSS, JavaScript, React, Node.js</strong></p>
        </div> */}
      </article>

      <article className='projects-windows'>
        <span className='project-element speedy-auto-centre'></span>
        <aside className='project-description'>
          <h3>Speedy Auto Centre</h3>
          {/* <p>This website was created for the company Speedy Auto Centre</p>
          <p><strong>HTML, CSS, JavaScript, PHP</strong></p> */}
        </aside>
      </article>

      <article className='projects-windows'>
      <span className='project-element four-in-a-line'></span>
        <aside className='project-description'>
          <h3>Four in a Line</h3>
          {/* <p>This game was created to play four in a line</p>
          <p><strong>HTML, CSS, JavaScript</strong></p> */}
        </aside>
      </article>

    </section>
  );
};

export default Projects;
