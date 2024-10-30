import '../styles/NavigationArrows.css';
import { useSelector } from 'react-redux';
import projectsInfo from '../../data/projectsInfo';

const NavigationArrows = props => {
  const projectsIndicator = useSelector(state => state.projectsIndicator);

  return (
    <div className='navigation-arrows'>
      <button id='prev-project' onClick={props.handleClick} disabled={projectsIndicator[0] <= 0}>
        <i className='fa-solid fa-chevron-left'></i>
      </button>
      <button id='next-project' onClick={props.handleClick} disabled={projectsIndicator[0] >= projectsInfo.length - 1}>
        <i className='fa-solid fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default NavigationArrows;