import React, { Component } from 'react';
import '../App/App.css';

// adds a class to the anchor tag when touched on mobile or mouse enters on web

class TouchableAnchor extends Component {
  state = {
    hover: false
  };

  setHover = hover => {
    this.setState({ hover });
  };

  render() {
    const {
      render,
      href,
      title,
      touchClass = 'hitSlop',
      defaultClass,
      target = '_self'
    } = this.props;
    const classes = this.state.hover ? touchClass : defaultClass;
    return (
      <a
        className={classes}
        onMouseEnter={() => this.setHover(true)}
        onMouseLeave={() => this.setHover(false)}
        onClick={() => this.setHover(false)}
        onTouchStart={() => this.setHover(true)}
        onTouchMove={() => this.setHover(false)}
        onTouchEnd={() => this.setHover(false)}
        onTouchCancel={() => this.setHover(false)}
        href={href}
        title={title}
        target={target}
      >
        {render}
      </a>
    );
  }
}

export default TouchableAnchor;
