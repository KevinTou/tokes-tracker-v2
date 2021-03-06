import React, { useState } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import { setToke, deleteToke } from '../actions';

import {
  makeStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import DialogWrapper from './DialogWrapper';
import EditToke from './EditToke';

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

const Toke = ({ toke, deleteToke, setToke }) => {
  const classes = useStyles();
  const date = dayjs(toke.date).format('ddd[, ]MMM[ ]D');
  const amount = (+toke.amount).toFixed(2);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleDialogClose = () => {
    setOpen(false);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar className={classes.avatar}>
          <IconButton
            className={classes.button}
            aria-label="open options menu"
            component="span"
            onClick={handleClick}
          >
            <AttachMoneyIcon />
          </IconButton>
        </ListItemAvatar>
        <ListItemText primary={`${date}`} />
        <ListItemSecondaryAction>${amount}</ListItemSecondaryAction>
      </ListItem>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setToke(toke);
            handleOpen();
          }}
        >
          Edit
        </MenuItem>
        <MenuItem onClick={() => deleteToke(toke?.id)}>Delete</MenuItem>
      </Menu>
      <DialogWrapper open={open} handleClose={handleDialogClose}>
        <EditToke handleClose={handleDialogClose} />
      </DialogWrapper>
    </>
  );
};

export default connect(null, { setToke, deleteToke })(Toke);
