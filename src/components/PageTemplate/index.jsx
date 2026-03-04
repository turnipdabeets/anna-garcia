import React from 'react';
import { nativeDevice } from '../../utils';
import LazyLoadImage from '../Loader/LazyLoadImage';
import './PageTemplate.css';

const addNativeClass = nativeDevice ? 'native-content' : '';

export const Title = ({ text, className = '', style }) => (
  <h1 style={style} className={`title ${addNativeClass} ${className}`}>
    {text}
  </h1>
);

export const Intro = ({ text, className = '', style }) => (
  <h2 style={style} className={`intro ${addNativeClass} ${className}`}>
    {text}
  </h2>
);

export const Header = ({ title, intro, className = '', style }) => (
  <div className={className} style={style}>
    <Title text={title} />
    <Intro text={intro} />
    {nativeDevice && <hr />}
  </div>
);

export const PageWrapper = ({ children, className = '', style }) => (
  <section style={style} className={`main ${addNativeClass} ${className}`}>
    {children}
  </section>
);

export const SectionWrapper = ({ children, className = '', style }) => (
  <div style={style} className={`text-main ${className}`}>
    {children}
  </div>
);

export const CopyWrapper = ({ children, className = '', style }) => (
  <div style={style} className={`copy ${addNativeClass} ${className}`}>
    {children}
  </div>
);

const PageTemplate = ({
  title,
  intro,
  imgSrc,
  preloadSrc,
  containerClass,
  copy
}) => (
  <PageWrapper>
    <SectionWrapper>
      <Header title={title} intro={intro} />
      {nativeDevice && imgSrc && (
        <div>
          <LazyLoadImage
            srcPreload={preloadSrc}
            srcLoaded={imgSrc}
            containerClass={containerClass}
          />
          <hr />
        </div>
      )}
      <CopyWrapper>{copy}</CopyWrapper>
    </SectionWrapper>
    {!nativeDevice && imgSrc && (
      <div>
        <LazyLoadImage
          srcPreload={preloadSrc}
          srcLoaded={imgSrc}
          containerClass={containerClass}
        />
      </div>
    )}
  </PageWrapper>
);

export default PageTemplate;
