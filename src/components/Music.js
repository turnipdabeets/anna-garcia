import React from 'react';
import './Music.css';
import { nativeDevice } from '../utils';
import trumpet from '../assets/trumpet.png';
import trumpetNative from '../assets/trumpetNative.jpg';

const addNativeClass = nativeDevice ? 'native-content' : '';

const Music = () => (
  <section className={`main ${addNativeClass}`}>
    <div className="text-main">
      <h1 className={`title ${addNativeClass}`}>music</h1>
      <p className={`intro ${addNativeClass}`}>
        Latin GRAMMY nominee. Winner of an International Trumpet Competition. TV
        appearances include America’s Got Talent.
      </p>
      {nativeDevice && <hr />}
      {nativeDevice && (
        <div>
          <img
            src={trumpetNative}
            className={`image ${addNativeClass}`}
            alt="Anna holding a trumpet"
          />
        </div>
      )}
      {nativeDevice && <hr />}
      <p className={`copy ${addNativeClass}`}>
        Music is arguably my first language. I grew up in a musical family. My
        sisters and I made an album together called the St. Louis Jazz Sisters.
        Since then I’ve performed at venues from Carnegie Hall in New York to
        The Blue Room in Kansas City and the Kennedy Center in Washington D.C.
        I've also toured the world playing in India, Mexico, and all around the
        US. Before moving to New York, I won the International Guild Solo
        Competition held in Sydney Australia. As a freelancer I’ve been a part
        of many musical groups including NYC’s first all female mariachi and a
        hip hop brass band.
      </p>
      <p className={`copy ${addNativeClass}`}>
        My major music influences and mentors have been Vincent Penzarella, Mark
        Gould, David Taylor, and Bobby Watson.
      </p>
    </div>
    {!nativeDevice && (
      <div>
        <img
          src={trumpet}
          className={`image ${addNativeClass}`}
          alt="Anna holding a trumpet"
        />
      </div>
    )}
  </section>
);

export default Music;
