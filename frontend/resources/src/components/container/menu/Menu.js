import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NumberOfOffersToCompareComponent } from "../../statefull/NumberOfOffersToCompare"; 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    heigt: 80,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    '@media (max-width:600px)' : {
      fontSize: 12,
}
  }
}));

function Menu({title}) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit" className={classes.button} >{`Compare (`}<NumberOfOffersToCompareComponent />{`)`}</Button>
          <Button color="inherit" className={classes.button} >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Menu;