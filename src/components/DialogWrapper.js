import React from 'react';
import { makeStyles, Dialog, DialogContent } from '@material-ui/core';

const useStyles = makeStyles({
  dialog: {
    backgroundColor: 'black'
  },
  dialogContent: {
    backgroundColor: 'black',
    border: '1px solid black'
  }
})

const DialogWrapper = ({ open, handleClose, title, children }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog className={classes.dialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent className={classes.dialogContent}>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogWrapper