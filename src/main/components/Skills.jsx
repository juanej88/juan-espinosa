import '../styles/Skills.css';
import icons from '../../data/icons';

const Skills = () => {
  const skillElements = () => {
    const names = Object.keys(icons);
    const iconElements = Object.values(icons);
    const htmlElements = names.map((skill, index) => {
      return (
        <div className='skill-container' key={`skill ${index + 1}`}>
          {iconElements[index]}
          <p>{skill}</p>
        </div>
      );
    });

    return htmlElements;
  };

  return (
    <section id='skills'>
      <article className='skills-header'>
        <h2>Core Skills</h2>
        <aside className='skills-container'>
          {skillElements()}
        </aside>
      </article>
      <button className='open-window open-more-skills'>Show more skills</button>
    </section>
  );
};

export default Skills;
