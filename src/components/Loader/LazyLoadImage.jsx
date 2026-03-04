import React, { Component } from 'react';
import './LazyLoadImage.css';

class LazyLoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
    this.LazyLoadImage = null;
  }

  componentDidMount() {
    const { srcLoaded } = this.props;
    const loadingImg = new Image();
    loadingImg.src = srcLoaded;
    loadingImg.onload = () => {
      this.LazyLoadImage.setAttribute(
        'style',
        `background-image: url('${srcLoaded}')`
      );
      this.setState({ loaded: true });
      this.LazyLoadImage.classList.add('image-fade-in');
    };
  }

  render() {
    const { loaded } = this.state;
    const { containerClass, srcPreload } = this.props;
    const preloadClass = loaded ? 'imgage-hide' : 'image-preload';
    return (
      <div className={containerClass}>
        <div
          className="image-loaded"
          ref={imageElem => (this.LazyLoadImage = imageElem)}
        />
        <div
          className={preloadClass}
          style={{ backgroundImage: `url('${srcPreload}')` }}
        />
      </div>
    );
  }
}

export default LazyLoadImage;
