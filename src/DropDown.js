import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton,Menu } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  iconButton: {
      zIndex: "1",
      position: "fixed",
      top: "0",
      left: "0",
      margin: "14px",
      marginLeft:"40px",
      background: "rgba(28, 30, 46, 0.6)",
      '&:hover': {
        background: theme.palette.background.default,
    },
  },
}));

export default function SimpleMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openControl = () => {
    props.changeView(0);
    setAnchorEl(null);
  };
  const openObserve = () => {
    props.changeView(1);
    setAnchorEl(null);
  };


  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.iconButton}>
                    <MenuIcon fontSize="small" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={openControl}>Robot Control</MenuItem>
        <MenuItem onClick={openObserve}>Observe</MenuItem>
      </Menu>
    </div>
  );
}