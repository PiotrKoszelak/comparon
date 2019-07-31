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

function MyButton({number}) {
  const classes = useStyles();

  return (
    <Fab variant="extended" className={classes.button}>
          <NavigationIcon />
          Porównaj ({number})
    </Fab>  
  );
}

MyButton.propTypes = {
  number: PropTypes.number.isRequired,
};
export default MyButton;