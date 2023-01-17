import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
        <h2>Contact</h2>
      <article className='contact-elements'>
        <aside className='contact-container'>
          <a 
            className='contant-link'
            href='mailto:arq.jorrin@gmail.com'
          >
            <i className='fa-solid fa-envelope'></i>
            <p>Email</p>
          </a>

          <a
            className='contant-link'
            href='https://www.linkedin.com/in/juanespinosajorrin/'
            target='_blank'
            rel='noreferrer'
            title='Go to my LinkedIn'
          >
            <i className='fa-brands fa-linkedin'></i>
            <p>LinkedIn</p>
          </a>

          <a 
            className='contant-link'
            href='tel:0481990856'
          >
            <i className='fa-solid fa-square-phone'></i>
            <p>Phone</p>
          </a>
        </aside>
      </article>
    </section>
  );
};

export default Contact;
