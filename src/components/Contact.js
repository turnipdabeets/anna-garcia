import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import './Contact.css';

const initialState = {
  name: '',
  email: '',
  message: '',
  touched: {
    name: false,
    email: false,
    message: false
  },
  sent: false
};

const errorMessage = {
  color: '#ec5840',
  fontSize: '.8em'
};

const invalidInput = {
  borderColor: '#ec5840',
  backgroundColor: 'rgba(236, 88, 64, 0.1)'
};

class Contact extends Component {
  state = initialState;

  validEmail = email => {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  };

  validName = name => {
    return name.length > 2;
  };

  validMessage = message => {
    return message.length > 8;
  };

  validForm = () => {
    const { name, email, message } = this.state;
    if (
      this.validEmail(email) &&
      this.validName(name) &&
      this.validMessage(message)
    ) {
      return true;
    }
    return false;
  };

  shouldShowError = type => {
    const { name, email, message } = this.state;
    let invalid = null;
    switch (type) {
      case 'name':
        invalid = !this.validName(name);
        break;
      case 'email':
        invalid = !this.validEmail(email);
        break;
      case 'message':
        invalid = !this.validMessage(message);
        break;
    }

    return invalid;
  };

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleBlur = event => {
    this.setState({
      touched: { ...this.state.touched, [event.target.name]: true }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const data = {
      name,
      email,
      message,
      formDataNameOrder: JSON.stringify(['name', 'email', 'message']),
      formGoogleSheetName: 'responses'
    };
    const url =
      'https://script.google.com/macros/s/AKfycbymR0qVb1Mfkt9-qtlQsiNgPPE1Dma_dF1_AuTJ0niZVqluoik/exec';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onerror = function(e) {
      console.error(xhr.statusText);
    };
    xhr.onreadystatechange = () => {
      this.setState({ ...initialState, sent: true });
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
      .join('&');
    xhr.send(encoded);
  };

  render() {
    console.log(this.state);
    const inputStyle = {
      height: '30px',
      lineHeight: '30px',
      width: '100%',
      color: '#111',
      fontSize: ' 1.2em',
      padding: '0',
      border: '#CCC solid 1px',
      borderRadius: '2px'
    };

    const { name, email, message, touched } = this.state;
    return (
      <PageTemplate
        title="contact"
        imgSrc={null}
        imgAlt=""
        intro="Send me an email"
        copy={
          <form onSubmit={this.handleFormSubmit}>
            <div className="group1">
              <div
                style={{
                  marginBottom: '1em',
                  lineHeight: '1.4em'
                }}
              >
                <label htmlFor="name">Your name: </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  value={name}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur}
                  aria-required="true"
                  aria-invalid={name.length < 4}
                  minLength="2"
                  style={inputStyle}
                />
                {touched.name &&
                  this.shouldShowError('name') && (
                    <span style={errorMessage}>please enter a valid name</span>
                  )}
              </div>
              <div
                style={{
                  marginBottom: '1em',
                  lineHeight: '1.4em'
                }}
              >
                <label htmlFor="email">Your email: </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur}
                  aria-required="true"
                  aria-invalid={!this.validEmail(email)}
                  style={inputStyle}
                />
                {touched.email &&
                  this.shouldShowError('email') && (
                    <span style={errorMessage}>
                      please enter a valid email address
                    </span>
                  )}
              </div>
            </div>
            <div className="group2">
              <div
                style={{
                  marginBottom: '1em',
                  lineHeight: '1.4em'
                }}
              >
                <label htmlFor="message">Your message: </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  minLength="8"
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur}
                  aria-required="true"
                  aria-invalid={message.length < 5}
                  style={{
                    height: 150,
                    width: '100%',
                    color: '#111',
                    fontSize: ' 1.2em',
                    padding: 0,
                    border: '#CCC solid 1px',
                    borderRadius: '2px'
                  }}
                />
                {touched.message &&
                  this.shouldShowError('message') && (
                    <span style={errorMessage}>please write a little more</span>
                  )}
              </div>
              <button
                className="contact_button"
                disabled={this.validForm() ? false : 'disabled'}
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        }
      />
    );
  }
}

export default Contact;
