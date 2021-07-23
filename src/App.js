import React from "react";
import Home from './Home';
import Form from './Form';
import { Route, Switch } from 'react-router-dom'

const App = () => {











  return (
      <Switch>
        <Route path = '/Form'>
          <Form />
        </Route>
        <Route exact path = '/'>
          <Home />
        </Route>
      </Switch>
  );
};
export default App;
