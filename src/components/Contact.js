import React from 'react';
import { Header, PageWrapper, SectionWrapper } from './PageTemplate';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <PageWrapper>
      <SectionWrapper>
        <Header title="contact" intro="Send me an email" />
        <ContactForm />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Contact;
