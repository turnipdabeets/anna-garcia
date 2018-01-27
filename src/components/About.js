import React from 'react';
import PageTemplate from './PageTemplate';

const About = () => (
  <PageTemplate
    title="about"
    imgSrc={null}
    imgAlt=""
    intro="I’m a Musician, Entrepreneur and Programmer living in New York City."
    copy={
      <p>
        I’m an award winning musician, founder of the world’s first Juice Crawl
        and work as a Software Engineer developing for web and mobile platforms.
        When I’m not coding, playing music, or running a business, I’m learning
        something new or eating{' '}
        <span style={{ textDecoration: 'line-through' }}>vegetables</span> vegan
        brownies. Oh, also I pronounce my name{' '}
        <code style={{ color: '#666', fontSize: '1.1em' }}>[AH-nuh]</code>
      </p>
    }
  />
);

export default About;
