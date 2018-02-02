import React from 'react';
import { nativeDevice } from '../utils';
import './PageTemplate.css';

const addNativeClass = nativeDevice ? 'native-content' : '';

export const Title = ({ text, className = '' }) => (
  <h1 className={`title ${addNativeClass} ${className}`}>{text}</h1>
);

export const Intro = ({ text, className = '' }) => (
  <h2 className={`intro ${addNativeClass} ${className}`}>{text}</h2>
);

export const Header = ({ title, intro, className = '' }) => (
  <div className={className}>
    <Title text={title} />
    <Intro text={intro} />
    {nativeDevice && <hr />}
  </div>
);

export const PageWrapper = ({ children, className = '' }) => (
  <section className={`main ${addNativeClass} ${className}`}>
    {children}
  </section>
);

export const SectionWrapper = ({ children, className = '' }) => (
  <div className={`text-main ${className}`}>{children}</div>
);

export const CopyWrapper = ({ children, className = '' }) => (
  <div className={`copy ${addNativeClass} ${className}`}>{children}</div>
);

const PageTemplate = ({
  title,
  intro,
  imgSrc,
  imgAlt = 'a picture of Anna',
  copy
}) => (
  <PageWrapper>
    <SectionWrapper>
      <Header title={title} intro={intro} />
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
      <CopyWrapper>{copy}</CopyWrapper>
    </SectionWrapper>
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
  </PageWrapper>
);

export default PageTemplate;
