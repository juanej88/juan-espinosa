import owlArray1 from '../images/projects/owl-array-1.png';
import cookiesDates from '../images/projects/cookies-dates.png';
import speedy1 from '../images/projects/speedy-auto-centre-1.png';
import fourInALine1 from '../images/projects/four-in-a-line-1.png';

const projectsInfo = [
  {
    projectID: 'cookies-dates',
    screenShotName1: cookiesDates,
    alt: 'Cookies & Dates screenshot',
    projectName: 'Cookies & Dates',
    description: "Web app for storing and receiving notifications for dates like birthdays and anniversaries, with personalised messages generated using ChatGPT's API.",
    technologies: 'HTML, CSS, JavaScript, React, Python, Django, MySQL',
    year: 2024,
    webLink: 'https://cookiesanddates.com',
    gitHubLink: 'https://github.com/juanej88/cookies-dates'
  },
  {
    projectID: 'owl-array',
    screenShotName1: owlArray1,
    alt: 'Owl Array screenshot',
    projectName: 'Owl Array',
    description: 'Interactive application for practicing built-in array methods like push, pop, and slice in a gaming environment. Users navigate levels, skip ahead, or complete sequentially.',
    technologies: 'HTML, CSS, JavaScript, React',
    year: 2022,
    webLink: 'https://owl-array.netlify.app',
    gitHubLink: 'https://github.com/juanej88/owl-array'
  },
  {
    projectID: 'speedy',
    screenShotName1: speedy1,
    alt: 'Speedy Auto Centre screenshot',
    projectName: 'Speedy Auto Centre',
    description: 'Developed for Speedy Auto Centre, a Sydney-based mechanic workshop, this website serves as a showcase of their services and facilitates online bookings for their clients.',
    technologies: 'HTML, CSS, JavaScript, PHP',
    year: 2020,
    webLink: 'https://www.speedyautocentre.com',
    gitHubLink: 'https://github.com/juanej88/SpeedyAutoCentre'
  },
  {
    projectID: 'four-in-a-line',
    screenShotName1: fourInALine1,
    alt: 'Four in a Line screenshot',
    projectName: 'Four in a Line',
    description: 'This interactive application allows two players to compete against each other on the same computer. The objective is to be the first to align four checkers in a row.',
    technologies: 'HTML, CSS, JavaScript',
    year: 2019,
    webLink: 'https://juanej88.github.io/FourInALine',
    gitHubLink: 'https://github.com/juanej88/FourInALine'
  }
];

export default projectsInfo;