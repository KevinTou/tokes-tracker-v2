import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

// Components
import { PrivateRoute } from '../utils/PrivateRoute';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Login from './Login';
import Navigation from './Navigation';
import Register from './Register';

const useStyles = makeStyles({
  background: {
    backgroundColor: '#3d3d3d',
    height: '100vh',
    width: '100vw',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
