import React from 'react';
import {
  Header,
  PageWrapper,
  SectionWrapper,
  CopyWrapper
} from './PageTemplate';
import WordCloud from 'react-d3-cloud';
import './Code.css';

const data = [
  { text: 'JavaScript', value: 1080 },
  { text: 'React Native', value: 1100 },
  { text: 'React', value: 1080 },
  { text: 'Node', value: 120 },
  { text: 'SQL', value: 50 },
  { text: 'three.js', value: 10 },
  { text: 'design', value: 40 },
  { text: 'webpack', value: 27 },
  { text: 'HTML', value: 309 },
  { text: 'CSS/SCSS', value: 200 },
  { text: 'tone.js', value: 10 },
  { text: 'npm', value: 80 },
  { text: 'babel', value: 80 },
  { text: 'mongo', value: 20 },
  { text: 'angular', value: 5 }
];

const fontSizeMapper = word => Math.log2(word.value) * 3;
const rotate = word => word.value % 360;

const Code = () => (
  <PageWrapper>
    <SectionWrapper>
      <Header
        className="typewriter"
        title="code"
        intro="Web and Mobile Developer."
      />
      <CopyWrapper>
        <p>
          I'm a fullstack JavaScript developer currently working at American
          Express on hybrid mobile web apps and React Native mobile experiences.
        </p>
        <p>I'm interested in the blockchain and machine learning.</p>
      </CopyWrapper>
    </SectionWrapper>
    <WordCloud
      data={data}
      fontSizeMapper={fontSizeMapper}
      rotate={rotate}
      width={320}
      height={300}
    />
  </PageWrapper>
);

export default Code;
