import React from 'react';
import PageTemplate from '../PageTemplate';

const About = () => (
  <PageTemplate
    title="Anna Garcia"
    imgSrc={null}
    imgAlt=""
    intro="I'm a Software Engineer, Musician, and Entrepreneur living in New York City."
    copy={
      <div>
        <p>
          I'm an award winning musician, founder of the world's first Juice
          Crawl and work as a Software Engineer developing for web and mobile
          platforms. When I'm not coding, playing music, or running a business,
          I'm learning something new or eating{' '}
          <span style={{ textDecoration: 'line-through' }}>vegetables</span>{' '}
          vegan brownies. Oh, also I pronounce my name{' '}
          <code style={{ color: '#666', fontSize: '1.1em' }}>[AHHH-nuh]</code>
        </p>
        <p>
          People often remark that music and programming are very different, but
          I disagree. Music is a language and musicians create music following a
          set of rules and patterns just as a programmer uses a language to
          express and create an app.
        </p>
        <p style={{ color: '#888', fontSize: '0.9em', fontStyle: 'italic', marginTop: '0.4rem' }}>
          &iexcl;Hola! Mucho gusto conocerte. Soy m&uacute;sica, emprendedora y programadora.
          Cuando no estoy programando, tocando m&uacute;sica ni dirigiendo un negocio,
          dedico mi tiempo a aprender o a comer{' '}
          <span style={{ textDecoration: 'line-through' }}>vegetables</span>{' '}
          brownies veganos.
        </p>
        <p style={{ color: '#888', fontSize: '0.9em', fontStyle: 'italic', marginTop: '0.4rem' }}>
          La gente suele decir que la m&uacute;sica y la programaci&oacute;n son muy diferentes,
          pero no estoy de acuerdo. La m&uacute;sica es un lenguaje, y los m&uacute;sicos crean
          m&uacute;sica siguiendo reglas y patrones, igual que un programador usa un lenguaje
          para expresar y crear una aplicaci&oacute;n.
        </p>
      </div>
    }
  />
);

export default About;
