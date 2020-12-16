import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTokes, logout } from '../actions';

import { makeStyles, Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Summary from './Summary';
import Tokes from './Tokes';
import AddToke from './AddToke';
import DialogWrapper from './DialogWrapper';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
  },
  button: {
    backgroundColor: '#FFBFB3',
  },
}));

const Dashboard = ({ tokes, getTokes, user_id, error, isLoading, history }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getTokes(user_id, history);
  }, [getTokes, tokes.length, user_id, history]);

  return (
    <Container className={classes.content} component="main" maxWidth="xs">
      <Summary tokes={tokes} />
      <Tokes tokes={tokes} />
      {/* Add Button */}
      <div className={classes.buttonContainer}>
        <Fab
          className={classes.button}
          onClick={handleClickOpen}
          aria-label="add"
        >
          <AddIcon />
        </Fab>
        {/* <Fab
          className={classes.button}
          component={Link}
          to="/tokes/add"
          aria-label="add"
        >
          <AddIcon />
        </Fab> */}
      </div>
      <DialogWrapper open={open} handleClose={handleClose} title="Add Toke">
        <AddToke handleClose={handleClose} />
      </DialogWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { tokes, isLoading, error } = state.tokes;
  const { user_id } = state.auth;

  return {
    tokes: tokes,
    user_id: user_id,
    isLoading: isLoading,
    error: error,
  };
};

export default connect(mapStateToProps, { getTokes, logout })(Dashboard);
