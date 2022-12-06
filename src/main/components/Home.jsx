import '../styles/Home.css';

const Home = props => {
  return (
    <section 
      id='home' 
      className={props.darkMode ? 'dark-mode' : null}
    >
      <aside className='home-background'></aside>
      <article className='home-header'>
        <h1>Hello, I'm Juan Espinosa</h1>
      </article>
    </section>
  );
};

export default Home;
