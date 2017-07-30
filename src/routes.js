import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './containers/Wrapper';
import App from './containers/App';
import Login from './containers/Login';

const routes = (
  <Router>
    <Wrapper>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={App} />
    </Wrapper>
  </Router>
);

export default routes;
