import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner'
import * as colors from "../style/colors";


const useStyles = makeStyles({
  root: {
    outline: 'none',
  },
});

function MyProgress() {
  const classes = useStyles();

  return (
    <Loader type="BallTriangle" color={`${colors.primaryColorDark}`} className={classes.root} height={150} width={150} />
  );
}

export default MyProgress;