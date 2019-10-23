import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"

const useStyles = makeStyles({
   root: {
    position: 'relative',
    top: 100,
    left: '10vw',
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Lato',
  },
  header: {
    fontSize: 20,
    '@media (max-width:600px)' : {
      fontSize: 15,
    }
  },
  content: {
    alignItems: 'flex-start',
    fontSize: 15,
    '@media (max-width:600px)' : {
      fontSize: 12,
    }
  }
});


function PolicyPrivacyContent ({language}){

  const classes = useStyles();
   
  return(
      <div className={classes.root}>
        <h2 className={classes.header}>{translation.POLICY_PRIVACY[language]}</h2>
        <div className={classes.content} >
          <p>
            
          </p>
        </div>
      </div>
)};


export default PolicyPrivacyContent;