import React, { useState } from 'react';

import {
  makeStyles,
  TextField,
  Container,
  Hidden,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  MobileDateRangePicker,
  DateRangeDelimiter,
  DesktopDateRangePicker,
  DateRange,
} from '@material-ui/pickers';

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
}));

const DatePicker = () => {
  const classes = useStyles();
  const [value, setValue] = useState([null, null]);

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
            />
          </Hidden>
        </Paper>
      </div>
    </Container>
  );
};

export default DatePicker;
