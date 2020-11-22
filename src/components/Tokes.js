import React from 'react';
import { makeStyles, Divider, Typography, List } from '@material-ui/core';

import Toke from './Toke';

const useStyles = makeStyles((theme) => ({
  list: {
    color: 'white',
    height: '200px',
    // height: '100%',
    overflow: 'auto',
    margin: '1rem 0 0 0',
  },
  message: {
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '.75rem 1rem',
    fontSize: '1rem',
    color: 'white',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  divider: {
    backgroundColor: 'white',
  },
}));

const Tokes = ({ tokes }) => {
  const classes = useStyles();

  const renderTokes = (tokes) => {
    return tokes.map((toke, index) => (
      <React.Fragment key={toke.id}>
        {index !== 0 && <Divider className={classes.divider} />}
        <Toke toke={toke} />
      </React.Fragment>
    ));
  };

  return (
    <>
      <List className={classes.list} id="listed">
        {tokes.length === 0 ? (
          <Typography className={classes.message} variant="body1" component="p">
            Add Your First Tip
          </Typography>
        ) : (
          renderTokes(tokes)
        )}
      </List>
      <div className={classes.buttonContainer}>
        {tokes.length > 3 && (
          <button className={classes.button}>See All</button>
        )}
      </div>
    </>
  );
};

export default Tokes;
