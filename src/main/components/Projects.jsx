import '../styles/Projects.css';
import owlArray1 from '../../images/projects/owl-array-1.png';
import speedyAutoCentre1 from '../../images/projects/speedy-auto-centre-1.png';
import fourInALine1 from '../../images/projects/four-in-a-line-1.png';

const Projects = () => {
  return (
    <section id='projects'>
      <article className='projects-headers'>
        <h2>Projects</h2>
      </article>
      <article className='projects-windows'>
        <aside className='project-element'>
          <img src={owlArray1} alt='Project Owl Array screenshot 1' />
          <h3>Owl Array</h3>
        </aside>
        <aside className='project-element'>
          <img src={speedyAutoCentre1} alt='Project Speedy Auto Centre screenshot 1' />
          <h3>Speedy Auto Centre</h3>
        </aside>
        <aside className='project-element'>
          <img src={fourInALine1} alt='Project Speedy Auto Centre screenshot 1' />
          <h3>Four in a Line</h3>
        </aside>
      </article>
    </section>
  );
};

export default Projects;
