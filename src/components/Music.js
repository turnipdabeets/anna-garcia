import React from 'react';
import { nativeDevice } from '../utils';
import PageTemplate from './PageTemplate';
import trumpet from '../assets/trumpet.png';
import trumpetBlur from '../assets/trumpetBlur.png';
import trumpetNative from '../assets/trumpetNative.jpg';
import trumpetNativeBlur from '../assets/trumpetNativeBlur.jpg';

const image = nativeDevice ? trumpetNative : trumpet;
const preload = nativeDevice ? trumpetNativeBlur : trumpetBlur;

const Music = () => (
  <PageTemplate
    title={'music'}
    imgSrc={image}
    preloadSrc={preload}
    intro="Latin GRAMMY nominee. Winner of an International Trumpet Competition. TV appearances include America’s Got Talent."
    copy={
      <div>
        <p>
          Music is arguably my first language. I grew up in a musical family. My
          sisters and I made an album together called the St. Louis Jazz
          Sisters. Since then I’ve performed at venues from Carnegie Hall in New
          York to The Blue Room in Kansas City and the Kennedy Center in
          Washington D.C. I've also toured the world playing in India, Mexico,
          and all around the US. Before moving to New York, I won the
          International Guild Solo Competition held in Sydney Australia. As a
          freelancer I’ve been a part of many musical groups including NYC’s
          first all female mariachi and a hip hop brass band.
        </p>
        <p>
          My major music influences and mentors have been Vincent Penzarella,
          Mark Gould, David Taylor, and Bobby Watson.
        </p>
      </div>
    }
  />
);

export default Music;
