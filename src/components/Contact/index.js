import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { PageWrapper, SectionWrapper, Title, Intro } from '../PageTemplate';
import ContactFormLoader from '../Loader/ContactFormLoader';
import { nativeDevice } from '../../utils';
import './ContactForm.css';

const ContactForm = Loadable({
  loader: () => import('./ContactForm'),
  loading: ContactFormLoader
});

const Checkmark = Loadable({
  loader: () => import('../../svg/checkmark'),
  loading: () => <p />
});

const Bird = Loadable({
  loader: () => import('../../svg/bird'),
  loading: () => <p />
});

// adds padding below form which only affects native to hid bird before submitting
const nativePadding = <div style={{ paddingTop: '9rem' }} />;

class Contact extends Component {
  state = {
    intro: 'Send me an email',
    sent: false,
    error: false
  };

  onSuccess = e => {
    this.setState({ intro: 'Thanks for contacting me!', sent: true });
  };

  onError = e => {
    console.log(e);
    this.setState({ intro: 'Oh no! Something went wrong.', error: true });
  };

  render() {
    const { intro, sent, error } = this.state;
    return (
      <PageWrapper>
        <SectionWrapper>
          <div>
            <div style={{ display: 'flex' }}>
              <Title text="contact" />
              {sent && !nativeDevice && <Checkmark />}
            </div>
            <Intro style={error ? { color: '#ec5840' } : null} text={intro} />
          </div>
          {nativeDevice && <hr />}
          {error && (
            <p>
              Try sending me an email at{' '}
              <a href="mailto:annaegarcia@gmail.com?subject=alternate%20message%20from%20annagarcia.live!">
                annaegarcia@gmail.com
              </a>
            </p>
          )}
          {!sent && !error && (
            <ContactForm onSuccess={this.onSuccess} onError={this.onError} />
          )}
          {!sent && !error && nativePadding}
        </SectionWrapper>
        <SectionWrapper>
          <Bird />
        </SectionWrapper>
      </PageWrapper>
    );
  }
}

export default Contact;
