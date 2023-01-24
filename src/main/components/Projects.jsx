import '../styles/Projects.css';
import { otherSkills } from '../../data/icons';
import speedy1 from '../../images/projects/speedy-auto-centre-1.png';
import speedy2 from '../../images/projects/speedy-auto-centre-2.png';
import fourInALine1 from '../../images/projects/four-in-a-line-1.png';
import fourInALine2 from '../../images/projects/four-in-a-line-2.png';

import { useSelector, useDispatch } from 'react-redux';
import { updateIndicator } from '../../redux/indicators';

import projectsInfo from '../../data/projectsInfo';

const Projects = () => {
  const indicatorStatus = useSelector(state => state.indicators);
  const dispatch = useDispatch();

  const dots = (project) => {
    const allDots = []
    for (let i = 0; i < 3; i++) {
      allDots.push (
        <div 
          className={indicatorStatus[project] === i ? 'dot dot-active' : 'dot'}
        >
        </div>
        );
    }
    return allDots;
  };

  const displayIndicator = e => {
    const scrollWidth = e.target.scrollWidth;
    const scrollLeft = e.target.scrollLeft;
    const scrollSegment = Math.round(scrollWidth / 6);
    const indicatorPosition = (
      // 8 px are added due to the left margin of the class 'projects-windows'
      scrollLeft < (scrollSegment + 8) ? 0 :
      scrollLeft > (scrollSegment * 3 + 8) ? 2 :
      1
      );

    const projectIndicator = e.target.id === 'owl-array' ? 0 : 1;

    const modifyIndicator = () => {
      dispatch(updateIndicator([projectIndicator, indicatorPosition]));
    };

    modifyIndicator();
  };

  const generateProject = (projectNum) => {
    const projectData = projectsInfo[projectNum];
    return (
      <article className='projects-windows'>
        <aside 
        id={projectData.projectID}
        className='screenshoot-container'
        onScroll={displayIndicator}
        >
          <img src={projectData.screenShotName1} alt={`${projectData.alt} 1`} />
          <img src={projectData.screenShotName2} alt={`${projectData.alt} 2`} />
          <div className='info'>
            <h3>{projectData.projectName}</h3>
            <p>{projectData.description}</p>
            <p>Technologies: <strong>{projectData.technologies}</strong></p>
            <p>Year: <strong>{projectData.year}</strong></p>
            <div className='project-icons'>
              <a 
                className='project-anchor chrome-icon'
                href={projectData.webLink}
                target='_blank'
                rel='noreferrer'
                title='Go to Website'
              ><i className='fa-solid fa-square-arrow-up-right'></i></a>
              <a 
                className='project-anchor github-icon'
                href={projectData.gitHubLink}
                target='_blank'
                rel='noreferrer'
                title='See Code on GitHub'
              >{otherSkills.GitHub}</a>
            </div>
          </div>
          
        </aside>
        <aside className='project-description'>
          <div className='dots'>
            {dots(projectNum)}
          </div>
        </aside>
      </article>
    );
  }

  return (
    <section id='projects'>
      <article className='projects-headers'>
        <h2>Projects</h2>
      </article>
      
      {generateProject(0)}

      <article className='projects-windows'>
        <div className='screenshoot-container'>
          <img src={speedy1} alt='Owl Array screenshot 1' />
          <img src={speedy2} alt='Owl Array screenshot 2' />
        </div>
        <aside className='project-description'>
          <div className='dots'>
            {dots(1)}
          </div>
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
          <div className='dots'>
            {dots(2)}
          </div>
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
