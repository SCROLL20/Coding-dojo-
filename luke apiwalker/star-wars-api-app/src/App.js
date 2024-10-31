// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';
import Character from './Character';
import Planet from './Planet';
import Error from './Error';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/character/:id" component={Character} />
        <Route path="/planet/:id" component={Planet} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
