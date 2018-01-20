import React, { Component } from 'react';
import '../App.css';

// adds a class to the anchor tag when touched on mobile or hovering on web

class TouchableIcon extends Component {
  state = {
    hover: false
  };

  setHover = hover => {
    this.setState({ hover });
  };

  render() {
    const {
      icon,
      href,
      title,
      hoverClass = 'hitSlop',
      defaultClass,
      target = '_self'
    } = this.props;
    const classes = this.state.hover ? hoverClass : defaultClass;
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
        {icon}
      </a>
    );
  }
}

export default TouchableIcon;
