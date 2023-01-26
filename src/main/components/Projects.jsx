import '../styles/Projects.css';
import { otherSkills } from '../../data/icons';

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

    const projectIndicator = (e.target.id === 'owl-array' ? 0 :
      e.target.id === 'speedy' ? 1 : 2);

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
      {generateProject(1)}
      {generateProject(2)}
    </section>
  );
};

export default Projects;
