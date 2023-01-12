import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
        <h2>Contact</h2>
      <article className='contact-container'>
        <a 
          className='contant-link'
          href='mailto:arq.jorrin@gmail.com'
        >
          <i className='fa-solid fa-envelope'></i>
          <p>arq.jorrin@gmail.com</p>
        </a>

        <a
          className='contant-link'
          href='https://www.linkedin.com/in/juanespinosajorrin/'
          target='_blank'
          rel='noreferrer'
          title='Go to LinkedIn'
        >
          <i className='fa-brands fa-linkedin'></i>
          <p>LinkedIn</p>
        </a>

        <a 
          className='contant-link'
          href='tel:0481990856'
        >
          <i className='fa-solid fa-square-phone'></i>
          <p>0481-990-856</p>
        </a>
      </article>
    </section>
  );
};

export default Contact;
