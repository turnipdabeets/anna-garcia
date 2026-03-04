import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Music, Code, NoMatch } from './AsyncRoutes';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/music" element={<Music />} />
      <Route path="/code" element={<Code />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
