import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: 30,
  },
  toolBar: {
    minHeight: 30,
  },
  button: {
    fontSize: 12,
    '@media (max-width:600px)' : {
      fontSize: 10,
}
  }
}));

function MenuBottom() {

  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <Button color="inherit" className={classes.button} >Polityka prywatności</Button>
          <Button color="inherit" className={classes.button} >Regulamin</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBottom;