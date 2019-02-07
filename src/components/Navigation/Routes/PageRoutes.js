import React from 'react';
import { Switch, Route } from 'react-router';
import { About, Contact, Music, Code, NoMatch } from './AsyncRoutes';

const PageRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/contact" component={Contact} />
      <Route from="/music" component={Music} />
      <Route path="/code" component={Code} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default PageRoutes;
