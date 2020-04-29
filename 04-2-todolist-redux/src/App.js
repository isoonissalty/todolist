import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Create from './pages/Create'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/edit/:id">
          <Create edit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
