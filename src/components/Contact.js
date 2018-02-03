import React, { Component } from 'react';
import { PageWrapper, SectionWrapper, Title, Intro } from './PageTemplate';
import { nativeDevice } from '../utils';
import bird from '../svg/bird';
import checkmark from '../svg/checkmark';
import ContactForm from './ContactForm';
import './ContactForm.css';

// adds padding below form which only affects native to hid bird before submitting
const nativePadding = <div style={{ paddingTop: '9rem' }} />;

class Contact extends Component {
  state = {
    intro: 'Send me an email',
    sent: false
  };

  onSuccess = () => {
    this.setState({ intro: 'Thanks for contacting me!', sent: true });
  };

  render() {
    const { intro, sent } = this.state;
    return (
      <PageWrapper>
        <SectionWrapper>
          <div>
            <div style={{ display: 'flex' }}>
              <Title text="contact" />
              {sent && !nativeDevice && checkmark}
            </div>
            <Intro text={intro} />
          </div>
          {nativeDevice && <hr />}
          {!sent && <ContactForm onSuccess={this.onSuccess} />}
          {!sent && nativePadding}
        </SectionWrapper>
        <SectionWrapper>{bird}</SectionWrapper>
      </PageWrapper>
    );
  }
}

export default Contact;
