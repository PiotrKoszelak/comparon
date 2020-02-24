import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { MenuComponent } from "../../statefull/Menu";
import * as colors from "../../style/colors";

const useStyles = makeStyles(theme => ({
  appBar: {
    height: 70,
    position: 'fixed',
    backgroundColor: `${colors.white}`,
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    fontSize: 15,
    fontFamily: 'Lato',
    fontWeight: 600,
    color: `${colors.secondaryColor}`,
    backgroundColor: 'none',
    transition: 'color 0.5s ease',
    '&:hover' : {
      color: `${colors.primaryColor}`,
      transition: 'color 0.5s ease',
    },
    '@media (max-width:600px)' : {
      fontSize: 10,
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 400,
    '@media (max-width:600px)' : {
      display: 'none',
    },
  },
  buttonContainerMobile: {
    display: 'none',
    '@media (max-width:600px)' : {
      display: 'block',
    },
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none', 
    color: 'white',
    display: 'block',
    backgroundColor: 'none',
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `2px solid ${colors.secondaryColor}`,
  },
  logo: {
    height: 60,
  },
  scroll: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    bottom: 50,
    zIndex: 3,
  },
  fab: {
    background: 'none',
    boxShadow: 'none',
    border: `2px solid ${colors.primaryColor}`,
  },
  '@keyframes blinker': {
    '0%': {opacity: 0},
    '50%': {opacity: 1},
    '100%': {opacity: 0, right: 250}
  },
  addToCompare: {
    display: 'block',
    position: 'absolute',
    top: 15,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: 'red',
    animationName: '$blinker',
    animationDuration: '2s',
    animationDirection: 'forwards',
    animationTimingFunction: 'ease',
    opacity: 0,
    '@media (max-width:600px)' : {
      display: 'none',
    },
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scroll}>
        {children}
      </div>
    </Zoom>
  );
}

function Menu(props) {

  const {title} = props;
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} >
        <Toolbar>
            <MenuComponent classes={classes} title={title} />
        </Toolbar>
      </AppBar>
      <div id="back-to-top-anchor"></div>
      <ScrollTop {...props}>
        <Fab className={classes.fab} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Menu;