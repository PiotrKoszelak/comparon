import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles({
  button: {
    fontSize: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

function MyButton({numberToShow}) {
  const classes = useStyles();

  return (
    <Fab variant="extended" size="small" className={classes.button}>
          <NavigationIcon />
          Porównaj ({numberToShow})
    </Fab>  
  );
}

MyButton.propTypes = {
  numberToShow: PropTypes.number.isRequired,
};
export default MyButton;