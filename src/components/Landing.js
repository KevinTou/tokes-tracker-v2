import React from 'react';

import { makeStyles } from '@material-ui/core';

import { ReactComponent as CalculatorSVG } from '../images/calculator.svg'

const useStyles = makeStyles(theme => ({
  backgroundBanner: {
    height: '40vh',
    backgroundColor: 'white',
    display: 'grid',
  },
  bannerImageContainer: {
    width: '500px',
    height: 'auto'
  },
  bannerImage: {
    width: '100%',
    height: '100%'
  }
}))

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.backgroundBanner}>
        <div className={classes.bannerImageContainer}>
          <CalculatorSVG className={classes.bannerImage} />
        </div>
        {/* <div>
          <h2>Lorem</h2>
        </div> */}
      </div>
    </>
  );
};

export default Landing;
