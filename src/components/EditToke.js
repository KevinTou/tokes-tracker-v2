import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

import {
  makeStyles,
  TextField,
  Typography,
  Container,
  Paper,
  Button,
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';

import { editToke } from '../actions';

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
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 0),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    width: '100%',
  },
}));

const EditToke = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [date, setDate] = useState(props.toke.date);
  const [amount, setAmount] = useState(`${props.toke.amount}`);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!date || !amount) return;

    const id = +props.toke.id;
    const newToke = {
      date: dayjs(date).format('YYYY[-]MM[-]DD'),
      amount: +amount,
    };

    await props.editToke(id, newToke);
    history.push('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Paper className={classes.content}>
          <Container className={classes.container}>
            <Typography component="h1" variant="h5">
              Edit a Toke
            </Typography>
            <form className={classes.form}>
              <DatePicker
                label="Date"
                value={date}
                onChange={(newDate) => setDate(newDate)}
                renderInput={(props) => <TextField {...props} />}
                disableFuture={true}
                required
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="amount"
                label="Amount ($)"
                type="number"
                id="amount"
                onChange={handleChange}
                value={amount}
              />
            </form>
            <div className={classes.buttonContainer}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                component={Link}
                to="/dashboard"
              >
                Cancel
              </Button>
            </div>
          </Container>
        </Paper>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { toke } = state.tokes;

  return {
    toke: toke,
  };
};

export default connect(mapStateToProps, { editToke })(EditToke);
