import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import ContactForm from './ContactForm';

class Contact extends Component {
  render() {
    return (
      <PageTemplate
        title="contact"
        imgSrc={null}
        imgAlt=""
        intro="Send me an email"
        copy={<ContactForm />}
      />
    );
  }
}

export default Contact;
