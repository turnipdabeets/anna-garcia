import React from 'react';
import { Header } from './PageTemplate';
import { nativeDevice } from '../utils';
import './PageTemplate.css';
import ContactForm from './ContactForm';

const addNativeClass = nativeDevice ? 'native-content' : '';

const Contact = () => {
  return (
    <section className={`main ${addNativeClass}`}>
      <div className="text-main">
        <Header title="contact" intro="Send me an email" />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
