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
      <h2 className='heading-with-button'>Skills</h2>
      <article className='skills-elements core-skills'>
        <aside className='skills-container'>
          {skillElements(coreSkills)}
          {skillElements(otherSkills)}
        </aside>
      </article>
    </section>
  );
};



export default Skills;
