import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  makeStyles,
  useTheme,
  Drawer,
  List,
  ListItem,
  Divider,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ResponsiveDrawer = (props) => {
  const { window, token, handleDrawerToggle, mobileOpen } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <Divider />
        <ListItem component={Link} onClick={handleDrawerToggle} to="/">
          Home
        </ListItem>
        {token ? (
          <>
            <Divider />
            <ListItem
              component={Link}
              onClick={handleDrawerToggle}
              to="/dashboard"
            >
              Dashboard
            </ListItem>
            <Divider />
            <ListItem
              component={Link}
              onClick={handleDrawerToggle}
              to="/tokes/add"
            >
              Add Toke
            </ListItem>
          </>
        ) : (
          <>
            <Divider />
            <ListItem component={Link} onClick={handleDrawerToggle} to="/login">
              Login
            </ListItem>
            <Divider />
            <ListItem
              component={Link}
              onClick={handleDrawerToggle}
              to="/register"
            >
              Register
            </ListItem>
          </>
        )}
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="site links">
      <Drawer
        container={container}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

const mapStateToProps = (state) => {
  const { token } = state.auth;

  return {
    token: token,
  };
};

export default connect(mapStateToProps, {})(ResponsiveDrawer);
