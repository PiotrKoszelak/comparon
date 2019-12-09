import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { MenuComponent } from "../../statefull/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    height: 60,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    fontSize: 12,
    '@media (max-width:600px)' : {
      fontSize: 10,
    },
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scroll: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    bottom: 50,
    zIndex: 3,
  },
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
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed" >
        <Toolbar>
            <MenuComponent classes={classes} title={title} />
        </Toolbar>
      </AppBar>
      <div id="back-to-top-anchor"></div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Menu;