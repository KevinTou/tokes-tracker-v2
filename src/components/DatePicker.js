import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

import {
  makeStyles,
  TextField,
  Container,
  Hidden,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import {
  MobileDateRangePicker,
  DateRangeDelimiter,
  DesktopDateRangePicker,
} from '@material-ui/pickers';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { getTokes } from '../actions';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    borderRadius: '12px',
    background: 'linear-gradient(to bottom right, #FFEAE6, #FFBFB3)',
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // height: '500px',
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
  button: {
    textTransform: 'none',
  },
}));

const DatePicker = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState([null, null]);

  const handleSave = async (event) => {
    const [starting_period, ending_period] = value;

    await axiosWithAuth().put('api/users/' + props.user_id, {
      starting_period,
      ending_period,
    });

    localStorage.setItem(
      'starting_period',
      JSON.stringify(
        starting_period ? dayjs(starting_period).format('MMM[ ]D') : null
      )
    );

    localStorage.setItem(
      'ending_period',
      JSON.stringify(
        ending_period ? dayjs(ending_period).format('MMM[ ]D') : null
      )
    );

    await props.getTokes(props.user_id, history);

    props.handleClose();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Paper className={classes.content}>
          <Typography className={classes.title} variant="h5">
            Select a Date Range:
          </Typography>
          <Hidden mdUp>
            <MobileDateRangePicker
              startText="Start"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <DateRangeDelimiter> to </DateRangeDelimiter>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
              disableFuture={true}
            />
          </Hidden>
          <Hidden smDown>
            <DesktopDateRangePicker
              startText="Start"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <DateRangeDelimiter> to </DateRangeDelimiter>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
              disableFuture={true}
            />
          </Hidden>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={props.handleClose}
            >
              Cancel
            </Button>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { user_id } = state.auth;

  return {
    user_id: user_id,
  };
};

export default connect(mapStateToProps, { getTokes })(DatePicker);
