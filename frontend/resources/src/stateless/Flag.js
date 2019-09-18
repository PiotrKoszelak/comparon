import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  flag : {
    width: 20,
    height: 20,
  }
});


function Flag ({language, handleChange}){

  const classes = useStyles();
   
  return(
      <IconButton onClick={() => handleChange(language)}>
            <Avatar alt={language} src={require(`../img/flag_${language}.jpg`)} className={classes.flag} />
      </IconButton>
)};

Flag.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Flag;