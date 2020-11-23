import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import amplitude from 'amplitude-js';

// Components
import { PrivateRoute } from '../utils/PrivateRoute';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Login from './Login';
import Navigation from './Navigation';
import Register from './Register';
import ResponsiveDrawer from './ResponsiveDrawer';
import AddToke from './AddToke';
import DatePicker from './DatePicker';

const useStyles = makeStyles({
  background: {
    backgroundColor: '#3d3d3d',
    height: '100vh',
    width: '100vw',
  },
});

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // useEffect(() => {
  //   amplitude.getInstance().init(process.env.REACT_APP_API_KEY);

  //   return () => console.log('clean-up');
  // }, []);

  return (
    <div className={classes.background}>
      <Navigation handleDrawerToggle={handleDrawerToggle} />
      <ResponsiveDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/add" component={AddToke} />
        <PrivateRoute path="/date" component={DatePicker} />
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
