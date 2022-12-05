import '../styles/LightDarkIcon.css';

const LightDarkIcon = props => {
  return (
    <section 
      className='lightAndDarkMode'
      onClick={props.changeDarkMode}
    >
      <div className='sun'></div>
      <div className='sunBeams sunBeam1'></div>
      <div className='sunBeams sunBeam2'></div>
      <div className='sunBeams sunBeam3'></div>
      <div className='sunBeams sunBeam4'></div>
    </section>
  );
};

export default LightDarkIcon;
