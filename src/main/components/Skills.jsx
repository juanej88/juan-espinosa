import '../styles/Skills.css';
import { coreSkills, otherSkills } from '../../data/icons';

const Skills = () => {
  const skillElements = (icons) => {
    const names = Object.keys(icons);
    const iconElements = Object.values(icons);
    const htmlElements = names.map((skill, index) => {
      return (
        <div className='skill-container' key={`skill ${skill}`}>
          {iconElements[index]}
          <p>{skill}</p>
        </div>
      );
    });

    return htmlElements;
  };

  return (
    <section id='skills'>
      <h2>Skills</h2>
      <article className='skills-elements core-skills'>
        <aside className='skills-container'>
          {skillElements(coreSkills)}
        </aside>
      </article>
      <div className='skills-division'></div>
      <article className='skills-elements other-skills'>
        <h2>Other Skills</h2>
        <aside className='skills-container'>
          {skillElements(otherSkills)}
        </aside>
      </article>
      <button className='about-button skills-button'>Show more &gt;</button>

    </section>
  );
};

export default Skills;
