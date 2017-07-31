import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './containers/Wrapper';
import Search from './containers/Search';
import Login from './containers/Login';
import Result from './containers/Result';

const routes = (
  <Router>
    <Wrapper>
      <Route exact path="/" component={Login} />
      <Route exact path="/search" component={Search} />
      <Route path="/search/:song/:id" component={Result} />
    </Wrapper>
  </Router>
);

export default routes;
