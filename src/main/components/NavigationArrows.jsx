import '../styles/NavigationArrows.css';

const NavigationArrows = props => {
  return (
    <div className='navigation-arrows'>
      <button id='prev-project' onClick={props.handleClick} disabled={props.indicator <= 0}>
        <i className='fa-solid fa-chevron-left'></i>
      </button>
      <button id='next-project' onClick={props.handleClick} disabled={props.indicator >= props.sliderLength}>
        <i className='fa-solid fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default NavigationArrows;