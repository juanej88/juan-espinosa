import '../styles/Home.css';

const Home = props => {
  return (
    <section 
      id='home' 
      className={props.darkMode ? 'dark-mode' : null}
    >
      <aside className='home-background-colour'></aside>
      <aside className='home-background-scene'>
        <div className='mountain mountain-one'></div>
        <div className='mountain mountain-two'></div>
        <div className='mountain mountain-three'></div>
        <div className='mountain mountain-four'></div>
      </aside>
      <article className='home-header'>
        <h1>Hello, I'm Juan Espinosa</h1>
      </article>
    </section>
  );
};

export default Home;
