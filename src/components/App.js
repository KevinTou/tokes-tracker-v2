import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { PrivateRoute } from '../utils/PrivateRoute';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Login from './Login';
import Navigation from './Navigation';
import Register from './Register';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </>
  );
}

export default App;
