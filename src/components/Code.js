import React from 'react';
import Loadable from 'react-loadable';
import {
  Header,
  PageWrapper,
  SectionWrapper,
  CopyWrapper
} from './PageTemplate';
import './Code.css';

const WordCloud = Loadable({
  loader: () => import('react-d3-cloud'),
  loading: () => <p />
});

const data = [
  { text: 'JavaScript', value: 12800 },
  { text: 'python', value: 5 },
  { text: 'React Native', value: 16900 },
  { text: 'React', value: 10800 },
  { text: 'Node', value: 900 },
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
  { text: 'angular', value: 5 },
  { text: 'Kotlin', value: 120 },
  { text: 'Java', value: 117 },
  { text: 'Swift', value: 111 },
  { text: 'Objective C', value: 100 },
  { text: 'R', value: 25 }
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
      width={290}
      height={320}
    />
  </PageWrapper>
);

export default Code;
