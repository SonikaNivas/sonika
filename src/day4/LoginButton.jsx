import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
function ButtonDesign() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginClick = () => {
    handleClose();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUsername("");
    setPassword("");
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <center>
        <Button variant="contained" onClick={handleOpen} data-testid="login">
          Login
        </Button>
      </center>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            data-testid="username"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            data-testid="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleLoginClick} data-testid="dia-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ButtonDesign;