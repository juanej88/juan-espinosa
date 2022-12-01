import '../styles/Projects.css';
import { otherSkills } from '../../data/icons';

const Projects = () => {
  return (
    <section id='projects'>
      <article className='projects-headers'>
        <h2>Projects</h2>
      </article>
      <article className='projects-windows'>
        <span className='project-element owl-array'></span>
        <aside className='project-description'>
          <h3>Owl Array</h3>
          <div>...</div>
          <div className='project-icons'>
            <a 
              className='chrome-icon'
              href='https://owl-array.netlify.app'
              target='_blank'
              rel="noreferrer"
            ><i class="fa-brands fa-chrome"></i></a>
            <a 
              className='github-icon'
              href='https://github.com/juanej88/owl-array'
              target='_blank'
              rel="noreferrer"
            >{otherSkills.GitHub}</a>
          </div>
          
          {/* <p>This application was created to practice built-in array methods in JavaScript</p>
          <p><strong>HTML, CSS, JavaScript, React</strong></p> */}
        </aside>
      </article>

      <article className='projects-windows'>
        <span className='project-element speedy-auto-centre'></span>
        <aside className='project-description'>
          <h3>Speedy Auto Centre</h3>
          <div>...</div>
          <div className='project-icons'>
            <span className='chrome-icon'><i class="fa-brands fa-chrome"></i></span>
            <span className='github-icon'>{otherSkills.GitHub}</span>
          </div>
          {/* <p>This website was created for the company Speedy Auto Centre</p>
          <p><strong>HTML, CSS, JavaScript, PHP</strong></p> */}
        </aside>
      </article>

      <article className='projects-windows'>
      <span className='project-element four-in-a-line'></span>
        <aside className='project-description'>
          <h3>Four in a Line</h3>
          <div>...</div>
          <div className='project-icons'>
            <span className='chrome-icon'><i class="fa-brands fa-chrome"></i></span>
            <span className='github-icon'>{otherSkills.GitHub}</span>
          </div>
          {/* <p>This game was created to play four in a line</p>
          <p><strong>HTML, CSS, JavaScript</strong></p> */}
        </aside>
      </article>

    </section>
  );
};

export default Projects;
