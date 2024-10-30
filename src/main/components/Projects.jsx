import '../styles/Projects.css';
import { otherSkills } from '../../data/icons';

import { useSelector, useDispatch } from 'react-redux';
import { updateProjectsIndicator } from '../../redux/projectsIndicator';

import projectsInfo from '../../data/projectsInfo';
import NavigationArrows from './NavigationArrows';

const Projects = () => {
  const projectsIndicator = useSelector(state => state.projectsIndicator);
  const dispatch = useDispatch();

  const slideProjects = event => {
    // The position takes the projectNum multiplied by the scrollWitdth multiplied by the segementsPercentage plus 12 which is the margin in pixels of each project container
    const projectNum = (
      event.target.closest('#prev-project') ? projectsIndicator[0] - 1 :
      event.target.closest('#next-project') ? projectsIndicator[0] + 1 :
      Number(event.target.id[0]) // when dots are clicked
    );
    const scrollWidth = document.getElementById('projects-slider').scrollWidth;
    const segmentsPercentage = 1 / projectsInfo.length;
    const position = projectNum * scrollWidth * segmentsPercentage + 12;
    document.getElementById('projects-slider').scrollLeft = position;
  };

  const dots = () => {
    return projectsInfo.map((project, idx) => {
      return (
        <aside
          className={projectsIndicator[0] === idx ? 'dot dot-active' : 'dot'}
          key={`${idx}dot${idx}`}
          id={`${idx}_${project.projectID}`}
          onClick={slideProjects}
        >
        </aside>
      );
    });
  };

  const displayIndicator = event => {
    const scrollWidth = event.target.scrollWidth;
    const scrollLeft = event.target.scrollLeft;
    const scrollSegment = Math.round(scrollWidth / (projectsInfo.length * 2));
    const indicatorPosition = (
      // 12 px are added due to the left margin of the class 'project-container'
      scrollLeft < (scrollSegment + 12) ? 0 :
      scrollLeft < (scrollSegment * 3 + 12) ? 1 : 
      scrollLeft < (scrollSegment * 5 + 12) ? 2 : 3
    );
    dispatch(updateProjectsIndicator(indicatorPosition));
  };

  const getProjects = () => {
    return projectsInfo.map(project => {
      return (
        <aside className='project-container' key={`${project.projectName}_key`}>
          <div className='project-header'>
            <a 
              className='project-anchor link-icon'
              href={project.webLink}
              target='_blank'
              rel='noreferrer'
              title='Go to Website'
              >
                <h3>{project.projectName}</h3>
                <i className='fa-solid fa-arrow-up-right-from-square'></i>
            </a>
            <a 
              className='project-anchor github-icon'
              href={project.gitHubLink}
              target='_blank'
              rel='noreferrer'
              title='See Code on GitHub'
              >{otherSkills.GitHub}
            </a>
          </div>
          <figure className='project-window'>
            <a 
              className='project-link'
              href={project.webLink}
              target='_blank'
              rel='noreferrer'
              title='Go to Website'
              >
              <img src={project.screenShotName1} alt={`${project.alt} 1`} />
            </a>
          </figure>
          <figcaption className='info'>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            
          </figcaption>
        </aside>
      );
    });
  };

  return (
    <section id='projects'>
      <h2>Projects</h2>
      <article id='projects-slider' className='projects-slider' onScroll={displayIndicator}>
        {getProjects()}
      </article>
      <article className='dots'>
        {dots()}
      </article>
      <NavigationArrows handleClick={slideProjects} indicator={projectsIndicator[0]} sliderLength={projectsInfo.length - 1} />
    </section>
  );
};

export default Projects;