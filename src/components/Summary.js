import React from 'react';
// import amplitude from 'amplitude-js';

import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Divider,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(4),
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to bottom right, #FFEAE6, #FFBFB3)',
    borderRadius: '12px',
  },
  cardHeader: {},
  cardContent: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '1.5rem',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
  },
}));

const Summary = ({ tokes }) => {
  const classes = useStyles();
  const history = useHistory();

  const amount = tokes.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);

  let date = () => {
    const starting_period = JSON.parse(
      window.localStorage.getItem('starting_period')
    );
    const ending_period = JSON.parse(
      window.localStorage.getItem('ending_period')
    );

    if (starting_period && ending_period) {
      return `${starting_period}-${ending_period}`;
    } else if (starting_period) {
      return `SINCE ${starting_period}`;
    } else if (ending_period) {
      return `BEFORE ${ending_period}`;
    } else {
      return `SET DATE RANGE`;
    }
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          action={
            <IconButton
              aria-label="settings"
              // onClick={(e) => {
              //   amplitude.getInstance().logEvent('Settings button clicked.');
              //   console.log('clicked');
              // }}
              onClick={() => history.push('/settings/date')}
            >
              <MoreVertIcon />
            </IconButton>
          }
          subheader="Expected Tips"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" color="textPrimary" component="p">
            ${amount}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions
          disableSpacing
          className={classes.cardFooter}
        // onClick={() =>
        //   amplitude
        //     .getInstance()
        //     .logEvent('Tried to click dates to open prompt.')
        // }
        >
          <Typography variant="body2" component="p">
            DATES
          </Typography>
          <Typography variant="body2" component="p">
            {date()}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default Summary;
