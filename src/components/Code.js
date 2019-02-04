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
  { text: 'React Native', value: 16900 },
  { text: 'Swift', value: 13800 },
  { text: 'React', value: 9800 },
  { text: 'python', value: 500 },
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
  { text: 'Objective C', value: 65 },
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
          {`I'm a Fullstack Software Engineer working on web and mobile apps. I enjoy solving problems, and bringing ideas to life. To me, coding is
          an art.`}
        </p>

        <strong>Technologies I use every day and love:</strong>
        <ul>
          <li>
            Javascript <i>or TypeScript</i>
          </li>
          <li>React & React Native</li>
          <li>Swift (iOS) </li>
          <li>Redux</li>
          <li>Node</li>
          <li>Bash and UNIX based systems</li>
        </ul>

        <strong>Technologies I'm learning or interested in:</strong>
        <ul>
          <li>
            Python <i>data and machine learning</i>
          </li>
          <li>Blockchain</li>
          <li>Kotlin</li>
          <li>Objective C</li>
        </ul>

        <p>
          You might find me at a React meetup giving a talk on "React Native
          Brownfield".
        </p>
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
