import React, { useReducer, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Create from './pages/Create'

import { TodoContext } from './context'
import { initState, todoReducer } from './reducer'

function App() {

  const [{ todos }, dispatch] = useReducer(todoReducer, initState)
  const contextValue = useMemo(() => ({ todos, dispatch }), [todos, dispatch])

  return (
    <TodoContext.Provider value={contextValue}>
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
    </TodoContext.Provider>
  );
}

export default App;
