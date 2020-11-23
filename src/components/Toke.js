import React from 'react';
import dayjs from 'dayjs';

import {
  makeStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles({
  avatar: {
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: '12px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
  },
});

const Toke = ({ toke }) => {
  const classes = useStyles();
  const date = dayjs(toke.date).format('ddd[, ]MMM[ ]D');
  const amount = toke.amount.toFixed(2);

  return (
    <ListItem>
      <ListItemAvatar className={classes.avatar}>
        <IconButton
          className={classes.button}
          aria-label="edit toke"
          component="span"
        >
          <AttachMoneyIcon />
        </IconButton>
      </ListItemAvatar>
      <ListItemText primary={`${date}`} />
      <ListItemSecondaryAction>${amount}</ListItemSecondaryAction>
    </ListItem>
  );
};

export default Toke;
