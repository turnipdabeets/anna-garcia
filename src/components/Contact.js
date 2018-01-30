import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import './Contact.css';

const initialState = {
  email: '',
  message: '',
  onblur: {
    email: false,
    message: false
  },
  focused: {
    email: false,
    message: false
  },
  sent: false
};

class Contact extends Component {
  state = initialState;

  validEmail = email => {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  };

  validMessage = message => {
    return message.length > 8;
  };

  validForm = () => {
    const { email, message } = this.state;
    if (this.validEmail(email) && this.validMessage(message)) {
      return true;
    }
    return false;
  };

  invalidValue = type => {
    const { email, message } = this.state;
    let invalid = null;
    switch (type) {
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
      onblur: { ...this.state.onblur, [event.target.name]: true },
      focused: { ...this.state.focused, [event.target.name]: false }
    });
  };

  handleFocus = event => {
    this.setState({
      focused: { ...initialState.focused, [event.target.name]: true },
      onblur: { ...this.state.onblur, [event.target.name]: false }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, message } = this.state;
    const data = {
      email,
      message,
      formDataNameOrder: JSON.stringify(['email', 'message']),
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
    const { email, message, onblur, focused } = this.state;
    const emailError =
      email && this.invalidValue('email') && onblur.email && !focused.email;
    const messageError =
      message &&
      this.invalidValue('message') &&
      onblur.message &&
      !focused.message;
    const emailInputStyle = emailError
      ? { ...inputStyle, ...invalidInput }
      : inputStyle;
    const messageInputStyle = messageError
      ? { ...textAreaStyle, ...invalidInput }
      : textAreaStyle;

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
                <label htmlFor="email">Your email: </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur}
                  onFocus={this.handleFocus}
                  aria-required="true"
                  aria-invalid={!this.validEmail(email)}
                  style={emailInputStyle}
                />
                {emailError && (
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
                  onFocus={this.handleFocus}
                  aria-required="true"
                  aria-invalid={message.length < 5}
                  style={messageInputStyle}
                />
                {messageError && (
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

const errorMessage = {
  color: '#ec5840',
  fontSize: '.8em'
};

const invalidInput = {
  borderColor: '#ec5840',
  backgroundColor: 'rgba(236, 88, 64, 0.1)'
};

const inputStyle = {
  height: '30px',
  lineHeight: '30px',
  width: '100%',
  color: '#111',
  fontSize: ' 1.2em',
  padding: 0,
  border: '#CCC solid 1px',
  borderRadius: '2px'
};

const textAreaStyle = {
  ...inputStyle,
  height: 150
};