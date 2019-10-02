import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import translation from "../translation"
import DetailTemplate from './Detail_template';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  title: {
    position: 'relative',
    top: 15,
    marginBottom: 15,
    padding: 0,
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width:600px)' : {
            width: '70vw',   
      }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  detail : {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    '@media (max-width:600px)' : {
      height: 25,  
    }
  },
  icon : {
    height: 40,
    width: 40,
    marginRight: 15,
    '@media (max-width:600px)' : {
      height: 20,
      width: 20,
      marginRight: 10,  
    }
  },
  button: {
    backgroundColor: '#bda3f0',
    marginBottom: 20,
  },
  text : {
    fontSize: 15,
    '@media (max-width:600px)' : {
        fontSize: 11,  
    }
  }
});

function Compare  ({
                  details, 
                  offerInfo,
                  language, 
                  operators,
                  periods,
                  types
                  }){

  const classes = useStyles();
  console.log(offerInfo);
  console.log(details);

    return(
          
                null
            
  )};

  Compare.propTypes = {
  details: PropTypes.array,
  offerInfo: PropTypes.array,
  language: PropTypes.string,
  operators: PropTypes.array,
  periods: PropTypes.array,
  types: PropTypes.array,
};
export default Compare;