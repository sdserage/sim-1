import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Components
import Home from './components/Home/Home';
import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/bins/:shelf" component={Shelf}/>
      <Route path="/bins/:shelf/:binnumber" component={Bin}/>
    </Switch>
  </Router>
);
