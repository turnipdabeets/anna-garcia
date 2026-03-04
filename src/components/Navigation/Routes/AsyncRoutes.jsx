import React, { Suspense, lazy } from 'react';
import BasicPageLoader from '../../Loader/BasicPageLoader';
import ContactPageLoader from '../../Loader/ContactPageLoader';

const MusicPage = lazy(() => import('../../Music/'));
const AboutPage = lazy(() => import('../../About'));
const CodePage = lazy(() => import('../../Code'));
const ContactPage = lazy(() => import('../../Contact'));
const NoMatchPage = lazy(() => import('../../NotFound'));

export const Music = () => (
  <Suspense fallback={<BasicPageLoader />}><MusicPage /></Suspense>
);
export const About = () => (
  <Suspense fallback={<BasicPageLoader />}><AboutPage /></Suspense>
);
export const Code = () => (
  <Suspense fallback={<BasicPageLoader />}><CodePage /></Suspense>
);
export const Contact = () => (
  <Suspense fallback={<ContactPageLoader />}><ContactPage /></Suspense>
);
export const NoMatch = () => (
  <Suspense fallback={<BasicPageLoader />}><NoMatchPage /></Suspense>
);
