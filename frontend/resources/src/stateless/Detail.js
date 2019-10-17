import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import translation from "../translation"
import DetailTemplate from './Detail_template';
import { Link } from 'react-router-dom'

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
    fontFamily: "Lato",
  },
  detail : {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    '@media (max-width:600px)' : {
      fontSize: 9,  
    }
  },
  text : {
    fontSize: 15,
    '@media (max-width:600px)' : {
        fontSize: 11,  
    }
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    '@media (max-width:600px)' : {
      top: 5,
      right: 5, 
    }
  },
  divider: {
    width: '90%',
  },
  description: {
    display: 'flex', 
    alignItems: 'center',
  }
});

function Detail  ({
                  details, 
                  closeDetailWindow, 
                  offerInfo,
                  language, 
                  operators,
                  periods,
                  types
                  }){

  const classes = useStyles();
  
    return(
          <Dialog
            open={true}
            onClose={closeDetailWindow}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className={classes.title} >{translation.OFFER_DETAILS[language]}</DialogTitle>
            <IconButton aria-label="close" color="secondary" className={classes.closeButton} onClick={closeDetailWindow}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <DetailTemplate
                    details={details}
                    offerInfo={offerInfo}
                    language={language}
                    operators={operators}
                    periods={periods}
                    types={types}
                    classes={classes}
                    withoutIcon={false}
                    withoutText={false}
                    enableDelete={false}
                    enableButton={false}
                />
            </DialogContent>
            <DialogActions style={{display: 'flex', justifyContent: 'center'}}>
              <Link to="/offers/selectedoffer" style={{textDecoration: 'none', color: 'white'}}>
                <Button  size="small" variant="contained" color="primary" className={classes.button}>
                    {translation.CHOOSE_OFFER[language]}
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
  )};

Detail.propTypes = {
  closeDetailWindow : PropTypes.func,
  offerInfo: PropTypes.object,
  details: PropTypes.object,
  language: PropTypes.string,
  operators: PropTypes.array,
  periods: PropTypes.array,
  types: PropTypes.array,
};
export default Detail;