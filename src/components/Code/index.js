import React from 'react';
import Loadable from 'react-loadable';
import {
  Header,
  PageWrapper,
  SectionWrapper,
  CopyWrapper,
} from '../PageTemplate';
import './Code.css';

const WordCloud = Loadable({
  loader: () => import('react-d3-cloud'),
  loading: () => <p />,
});

const data = [
  { text: 'JavaScript', value: 12800 },
  { text: 'TypeScript', value: 12800 },
  { text: 'React', value: 13800 },
  { text: 'React Native', value: 13800 },
  { text: 'passkeys', value: 14800 },
  { text: 'Swift', value: 16900 },
  { text: 'Rust', value: 7200 },
  { text: 'Golang', value: 5000 },
  { text: 'AWS', value: 1400 },
  { text: 'Docker', value: 950 },
  { text: 'ChatGPT', value: 1250 },
  { text: 'LLM', value: 1200 },
  { text: 'LangChain', value: 1200 },
  { text: 'SwiftUI', value: 1000 },
  { text: 'Node', value: 900 },
  { text: 'python', value: 500 },
  { text: 'FIDO', value: 30 },
  { text: 'SQL', value: 50 },
  { text: 'three.js', value: 10 },
  { text: 'design', value: 40 },
  { text: 'webpack', value: 27 },
  { text: 'rollup', value: 30 },
  { text: 'HTML', value: 309 },
  { text: 'CSS', value: 50 },
  { text: 'SCSS', value: 50 },
  { text: 'tone.js', value: 10 },
  { text: 'npm', value: 80 },
  { text: 'yarn', value: 80 },
  { text: 'pnpm', value: 80 },
  { text: 'babel', value: 80 },
  { text: 'MongoDB', value: 20 },
  { text: 'Angular', value: 15 },
  { text: 'Flutter', value: 15 },
  { text: 'Kotlin', value: 120 },
  { text: 'Java', value: 117 },
  { text: 'Objective C', value: 65 },
  { text: 'R', value: 25 },
  { text: 'OAuth', value: 25 },
  { text: 'OIDC', value: 25 },
  { text: 'NextAuth', value: 25 },
  { text: 'Supabase', value: 24 },
  { text: 'bash', value: 25 },
  { text: 'UNIX', value: 25 },
];

const fontSizeMapper = (word) => Math.log2(word.value) * 3;
const rotate = (word) => word.value % 360;

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
          <li>Swift (iOS) </li>
          <li>Javascript and TypeScript</li>
          <li>React and React Native</li>
          <li>Next.js and NextAuth</li>
          <li>Node</li>
          <li>Bash and UNIX based systems</li>
        </ul>

        <strong>Technologies I've used in the past:</strong>
        <ul>
          <li>Chat GPT and LLMs</li>
          <li>LangChain</li>
          <li>Rust</li>
          <li>Golang</li>
          <li>Python</li>
          <li>AWS Lambda</li>
          <li>Docker</li>
          <li>SQL and MongoDB</li>
          <li>Supabase</li>
          <li>Flutter</li>
          <li>Angular</li>
          <li>Kotlin</li>
          <li>Java</li>
          <li>Vercel, circleci, GitLab, GitHub Actions</li>
          <li>MacStadium and Bitrise</li>
          <li>Objective C</li>
          <li>Wordpress</li>
        </ul>
        <p>
          In the past, you might have found me at a React meetup giving a talk
          on "React Native Brownfield". Today I'm passionate about passkeys,
          OAuth2, OIDC and FIDO.
        </p>
      </CopyWrapper>
    </SectionWrapper>
    <WordCloud
      data={data}
      padding={1}
      fontSizeMapper={fontSizeMapper}
      rotate={rotate}
      width={290}
      height={320}
    />
  </PageWrapper>
);

export default Code;
