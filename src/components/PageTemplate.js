import React from 'react';
import { nativeDevice } from '../utils';
import './PageTemplate.css';

const addNativeClass = nativeDevice ? 'native-content' : '';

const PageTemplate = ({
  title,
  intro,
  imgSrc,
  imgAlt = 'a picture of Anna',
  copy
}) => (
  <section className={`main ${addNativeClass}`}>
    <div className="text-main">
      <h1 className={`title ${addNativeClass}`}>{title}</h1>
      <p className={`intro ${addNativeClass}`}>{intro}</p>
      {nativeDevice && <hr />}
      {nativeDevice &&
        imgSrc && (
          <div>
            <img
              src={imgSrc}
              className={`image ${addNativeClass}`}
              alt={imgAlt}
            />
            <hr />
          </div>
        )}
      <div className={`copy ${addNativeClass}`}>{copy}</div>
    </div>
    {!nativeDevice &&
      imgSrc && (
        <div>
          <img
            src={imgSrc}
            className={`image ${addNativeClass}`}
            alt={imgAlt}
          />
        </div>
      )}
  </section>
);

export default PageTemplate;
