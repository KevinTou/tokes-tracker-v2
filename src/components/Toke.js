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
  },
});

const Toke = ({ toke }) => {
  const classes = useStyles();

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
      <ListItemText primary={`${dayjs(toke.date).format('ddd[, ]MMM[ ]D')}`} />
      <ListItemSecondaryAction>
        ${toke.amount.toFixed(2)}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Toke;
