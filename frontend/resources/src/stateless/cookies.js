import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation";
import * as colors from "../style/colors";
import CookieConsent from "react-cookie-consent";

const useStyles = makeStyles({
  text: {
    fontSize: 15,
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Lato',
    '@media (max-width:600px)' : {
      fontSize: 11,
    }
  },
  button: {
    color: `${colors.secondaryColorDark}`, 
    background: `${colors.primaryColor}`, 
    fontSize: 15, 
    borderRadius: 5, 
    fontFamily: 'Lato', 
    cursor: 'pointer',
    border: 'none',
    marginTop: 10,
    padding: `5px 10px`,
    transition: 'background-color 0.5s ease, color 0.5s ease',
    '&:hover' : {
      background: `${colors.primaryColorDark}`, 
      color: `${colors.white}`, 
      transition: 'background-color 0.5s ease, color 0.5s ease',
    },
    '@media (max-width:600px)' : {
      fontSize: 10,
      marginTop: 15,
    }
  },
  root: {
    background: `${colors.secondaryColor}`,
    boxSizing: 'border-box',
    padding: 20, 
    position: 'absolute', 
    top: '80vh', 
    width: '40%',
    left: '30%', 
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      top: '70vh',
      width: '70%',
      left: '15%',
    }
  }
});


function CookiesInfo ({language}){

  const classes = useStyles();
   
  return(
         <CookieConsent
              location="none"
              disableStyles={true}
              buttonText={translation.UNDERSTAND[language]}
              cookieName="comparonAllowCookies"
              expires={150}
              buttonClasses={classes.button}
              containerClasses={classes.root}
              contentClasses="text-capitalize"
          >
              <span className={classes.text}>{translation.THIS_WEBSITE_USES_COOKIES[language]}</span>
          </CookieConsent>
)};


export default CookiesInfo;