import React, { Suspense, lazy } from 'react';
import {
  PageWrapper,
  SectionWrapper,
} from '../PageTemplate';
import './Code.css';

const WordCloud = lazy(() => import('react-d3-cloud'));

const data = [
  { text: 'Swift', value: 16900 },
  { text: 'React Native', value: 14800 },
  { text: 'React', value: 14200 },
  { text: 'TypeScript', value: 13800 },
  { text: 'JavaScript', value: 13200 },
  { text: 'Rust', value: 12500 },
  { text: 'Golang', value: 11000 },
  { text: 'Claude', value: 9500 },
  { text: 'MCP', value: 8500 },
  { text: 'LangChain', value: 7500 },
  { text: 'Python', value: 6000 },
  { text: 'SwiftUI', value: 5500 },
  { text: 'Next.js', value: 5000 },
  { text: 'Node', value: 4500 },
  { text: 'PostgreSQL', value: 3000 },
  { text: 'Supabase', value: 2800 },
  { text: 'AWS Lambda', value: 2500 },
  { text: 'Docker', value: 2200 },
  { text: 'GitHub Actions', value: 2000 },
  { text: 'Bazel', value: 1800 },
  { text: 'Kotlin', value: 1500 },
  { text: 'Flutter', value: 1200 },
  { text: 'Vercel', value: 1000 },
  { text: 'Bash', value: 900 },
  { text: 'OpenAI', value: 800 },
  { text: 'Objective C', value: 500 },
  { text: 'WordPress', value: 400 },
  { text: 'MongoDB', value: 300 },
  { text: 'Angular', value: 200 },
];

const fontSizeMapper = (word) => Math.log2(word.value) * 3;
const rotate = () => 0;

const stats = [
  { value: '10+', label: 'Years Shipping' },
  { value: '2', label: 'Top-Tier Companies' },
  { value: 'M+', label: 'Users Reached' },
  { value: '∞', label: 'Problems Solved' },
];

const highlights = [
  {
    icon: '🏆',
    title: '#1 in J.D. Power',
    body: 'React Native feature credited with helping AmEx jump from 7th to 1st in the J.D. Power 2018 U.S. Credit Card App Satisfaction Study.',
  },
  {
    icon: '📦',
    title: 'SDKs at Scale',
    body: 'Built Swift and React Native SDKs from scratch through multiple releases, adopted by Sephora and reaching millions of users.',
  },
  {
    icon: '⚡',
    title: 'Zero to Board Room',
    body: 'Built an iOS demo app in days so the CEO could present new product workflows to the board — shipped, polished, on deadline.',
  },
];

const techStack = [
  {
    category: 'Mobile',
    tags: ['Swift', 'SwiftUI', 'UIKit', 'React Native', 'Flutter', 'Kotlin', 'Android'],
  },
  {
    category: 'Web & Backend',
    tags: ['React', 'Next.js', 'TypeScript', 'Node', 'Rust', 'Go', 'Python', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'AI / ML',
    tags: ['Claude', 'OpenAI', 'MCP', 'LangChain', 'Embeddings', 'Agent Orchestration'],
  },
  {
    category: 'Infrastructure',
    tags: ['Docker', 'AWS Lambda', 'GitHub Actions', 'GitLab CI', 'Bazel', 'Vercel', 'Cocoapods', 'NPM'],
  },
];

const talks = [
  { title: '"Implementing Passwordless Auth: Passkeys, WebAuthn and FIDO"', venue: 'Beyond Identity Engineering Meetup' },
  { title: '"How React Native Works"', venue: 'React Ladies NYC Meetup' },
  { title: '"React Native Brownfield"', venue: 'React Native NYC Meetup' },
  { title: '"Introduction to React Native"', venue: 'Internal workshops at AmEx' },
];

const Code = () => (
  <PageWrapper>
    <SectionWrapper>

      {/* ── Header ── */}
      <div className="code-header typewriter">
        <h1 className="code-title">code</h1>
        <p className="code-intro">Senior Software Engineer.</p>
      </div>

      <p className="code-summary">
        I build across the stack — mobile, backend, web, and AI. 10+ years of taking
        on ambitious projects end-to-end, from architecture to CI/CD to production.
        I love hard problems, tight deadlines, and leaving things better than I found them.
      </p>

      {/* ── Stats ── */}
      <div className="code-stats">
        {stats.map(s => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Highlights ── */}
      <h2 className="code-section-title">Highlights</h2>
      <div className="code-highlights">
        {highlights.map(h => (
          <div key={h.title} className="highlight-card">
            <span className="highlight-icon">{h.icon}</span>
            <strong className="highlight-title">{h.title}</strong>
            <p className="highlight-body">{h.body}</p>
          </div>
        ))}
      </div>

      {/* ── Tech Stack ── */}
      <h2 className="code-section-title">Tech Stack</h2>
      <div className="tech-stack">
        {techStack.map(group => (
          <div key={group.category} className="tech-group">
            <span className="tech-category">{group.category}</span>
            <div className="tech-tags">
              {group.tags.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Talks ── */}
      <h2 className="code-section-title">Talks</h2>
      <ul className="talks-list">
        {talks.map(t => (
          <li key={t.title} className="talk-item">
            <span className="talk-title">{t.title}</span>
            <span className="talk-venue">{t.venue}</span>
          </li>
        ))}
      </ul>

      {/* ── Download ── */}
      <a
        className="resume-download-btn"
        href="/anna_garcia_resume.pdf"
        download="anna_garcia_resume.pdf"
      >
        &#8595;&nbsp; Download Resume
      </a>

    </SectionWrapper>

    {/* ── Word Cloud ── */}
    <Suspense fallback={<p />}>
      <WordCloud
        data={data}
        padding={2}
        fontSizeMapper={fontSizeMapper}
        rotate={rotate}
        width={290}
        height={380}
      />
    </Suspense>
  </PageWrapper>
);

export default Code;
