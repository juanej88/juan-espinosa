import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
        <h2>Contact</h2>
      <article className='contact-container'>
        <div>
          <i className='fa-solid fa-square-phone'></i>
          <p>0481-990-856</p>
        </div>
        <div>
          <i className='fa-solid fa-envelope'></i>
          <p>arq.jorrin@gmail.com</p>
        </div>
        <div>
        <i className='fa-brands fa-linkedin'></i>
        <p>
          <a 
          href='https://www.linkedin.com/in/juanespinosajorrin/'
          target='_blank'
          rel='noreferrer'
          title='Go to LinkedIn'
          >linkedin.com/in/juanespinosajorrin/</a>
        </p>
        </div>
      </article>
    </section>
  );
};

export default Contact;
