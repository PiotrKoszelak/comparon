import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner'
import * as colors from "../style/colors";


const styles = {
  root: {
    outline: 'none',
    position: 'absolute',
    top: 'calc(40vh - 75px)',
    left: 'calc(50% - 75px)',
  },
};

class MyProgress extends Component {

  render(){
    
    const {classes} = this.props;

    return (
      <Loader type="BallTriangle" color={`${colors.primaryColor}`} className={classes.root} height={150} width={150} />
    );
  }
}

export default withStyles(styles)(MyProgress);