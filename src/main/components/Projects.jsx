import '../styles/Projects.css';
import { otherSkills } from '../../data/icons';
import owlArray1 from '../../images/projects/owl-array-1.png';
import owlArray2 from '../../images/projects/owl-array-2.png';
import speedy1 from '../../images/projects/speedy-auto-centre-1.png';
import speedy2 from '../../images/projects/speedy-auto-centre-2.png';
import fourInALine1 from '../../images/projects/four-in-a-line-1.png';
import fourInALine2 from '../../images/projects/four-in-a-line-2.png';

const Projects = () => {
  const dots = () => {
    return (
      <div className='dots'>
        <div className='dot dot-active'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
    );
  };

  return (
    <section id='projects'>
      <article className='projects-headers'>
        <h2>Projects</h2>
      </article>
      <article className='projects-windows'>
        <div className='screenshoot-container'>
          <div className='info'>
            <h3>Owl Array</h3>
            <p>I created this application to let users practice built-in array methods in JavaScript. I got inspired by some games that gave me another approach while interacting with code in a fun way.</p>
            <p>Technologies: <strong>HTML, CSS, JavaScript, React</strong></p>
            <p>Year: <strong>2022</strong></p>
            <div className='project-icons'>
              <a 
                className='project-anchor chrome-icon'
                href='https://owl-array.netlify.app'
                target='_blank'
                rel='noreferrer'
                title='Go to Website'
              ><i className='fa-solid fa-square-arrow-up-right'></i></a>
              <a 
                className='project-anchor github-icon'
                href='https://github.com/juanej88/owl-array'
                target='_blank'
                rel='noreferrer'
                title='See Code on GitHub'
              >{otherSkills.GitHub}</a>
            </div>
          </div>
          <img src={owlArray1} alt='Owl Array screenshot 1' />
          <img src={owlArray2} alt='Owl Array screenshot 2' />
        </div>
        <aside className='project-description'>
          {/* <h3>Owl Array</h3> */}
          {dots()}
          {/* <div className='project-icons'>
            <a 
              className='chrome-icon'
              href='https://owl-array.netlify.app'
              target='_blank'
              rel='noreferrer'
              title='Go to Website'
            ><i className='fa-solid fa-square-arrow-up-right'></i></a>
            <a 
              className='github-icon'
              href='https://github.com/juanej88/owl-array'
              target='_blank'
              rel='noreferrer'
              title='See the Code on GitHub'
            >{otherSkills.GitHub}</a>
          </div> */}
          
          {/* <p>This application was created to practice built-in array methods in JavaScript</p>
          <p><strong>HTML, CSS, JavaScript, React</strong></p> */}
        </aside>
      </article>

      <article className='projects-windows'>
        <div className='screenshoot-container'>
          <img src={speedy1} alt='Owl Array screenshot 1' />
          <img src={speedy2} alt='Owl Array screenshot 2' />
        </div>
        <aside className='project-description'>
          {dots()}
          {/* <h3>Speedy Auto Centre</h3>
          <div>...</div>
          <div className='project-icons'>
            <span className='chrome-icon'><i className='fa-solid fa-square-arrow-up-right'></i></span>
            <span className='github-icon'>{otherSkills.GitHub}</span>
          </div> */}
          {/* <p>This website was created for the company Speedy Auto Centre</p>
          <p><strong>HTML, CSS, JavaScript, PHP</strong></p> */}
        </aside>
      </article>

      <article className='projects-windows'>
        <div className='screenshoot-container'>
          <img src={fourInALine1} alt='Four in a Line screenshot 1' />
          <img src={fourInALine2} alt='Owl Array screenshot 2' />
        </div>
        <aside className='project-description'>
          {dots()}
          {/* <h3>Four in a Line</h3>
          <div>...</div>
          <div className='project-icons'>
            <span className='chrome-icon'><i className='fa-solid fa-square-arrow-up-right'></i></span>
            <span className='github-icon'>{otherSkills.GitHub}</span>
          </div> */}
          {/* <p>This game was created to play four in a line</p>
          <p><strong>HTML, CSS, JavaScript</strong></p> */}
        </aside>
      </article>

    </section>
  );
};

export default Projects;
