import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles({
  root: {
    outline: 'none'
  },
});

function MyProgress() {
  const classes = useStyles();

  return (
    <CircularProgress className={classes.root} color="secondary" disableShrink />
  );
}

export default MyProgress;