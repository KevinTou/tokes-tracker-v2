import React from 'react'
// import amplitude from 'amplitude-js';

import { makeStyles, IconButton, Typography } from '@material-ui/core';
import { Photo } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
})

const CameraButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4">Camera</Typography>
      <IconButton color="inherit" onClick={() => {
        alert('Feature coming soon!')
        //   amplitude.getInstance().logEvent('Camera button clicked.');
      }}>
        <Photo />
      </IconButton>
    </div>
  )
}

export default CameraButton
