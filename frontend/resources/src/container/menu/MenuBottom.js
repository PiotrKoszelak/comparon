import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Language from "../../statefull/Language";
import { MenuBottomButtonsComponent } from "../../statefull/Menu";


const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: 30,
  },
  toolBar: {
    minHeight: 30,
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 10,
    '@media (max-width:600px)' : {
      fontSize: 8,
  },
}
}));

function MenuBottom() {

  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <MenuBottomButtonsComponent classes={classes} />
          <Language />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBottom;