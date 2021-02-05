import React from 'react'
// import amplitude from 'amplitude-js';

import { makeStyles, Button, Typography } from '@material-ui/core';
import { Photo } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  button: {
    textTransform: 'none',
    marginTop: '0.5rem'
  }
})

const CameraButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5">Camera</Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Photo />}
        onClick={() => {
          alert('Feature coming soon!')
          //   amplitude.getInstance().logEvent('Camera button clicked.');
        }}>
        Use a Photo
      </Button>
    </div>
  )
}

export default CameraButton
