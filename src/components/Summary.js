import React from 'react';
import amplitude from 'amplitude-js';

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
  cardHeader: {
    // color: '',
  },
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
              onClick={() => history.push('/date')}
            >
              <MoreVertIcon />
            </IconButton>
          }
          subheader="Expected Tips"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" color="textPrimary" component="p">
            ${tokes.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
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
          {/* <Typography variant="body2" component="p">
            Oct 16-Oct 19
          </Typography> */}
          <Typography variant="body2" component="p">
            SET DATE RANGE
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default Summary;
