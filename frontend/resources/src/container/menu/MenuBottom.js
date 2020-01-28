import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Language from "../../statefull/Language";
import { MenuBottomButtonsComponent } from "../../statefull/Menu";
import * as colors from "../../style/colors";


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    height: 50,
    backgroundColor: `${colors.white}`,
    boxShadow: 'none',
  },
  toolBar: {
    minHeight: 30,
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none', 
    color: 'white',
    display: 'block',
  },
  button: {
    fontFamily: 'Lato',
    color: `${colors.secondaryColor}`,
    transition: 'color 0.5s ease',
    fontSize: 10,
    '&:hover' : {
      color: `${colors.primaryColor}`,
      transition: 'color 0.5s ease',
    },
    '@media (max-width:600px)' : {
      fontSize: 8,
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height: 30,
    '@media (max-width:600px)' : {
      flexDirection: 'column',
      width: 100,
    },
  }
}));

function MenuBottom(props) {

  const {title} = props;
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <MenuBottomButtonsComponent classes={classes} title={title} />
          <Language />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBottom;