import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Email() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Subscribe
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe to our Email List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your first name, last name, and email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}