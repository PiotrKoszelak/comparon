import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
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
    color: "white", 
    background: "#f5429b", 
    fontSize: 13, 
    borderRadius: 5, 
    fontFamily: 'Lato', 
    cursor: 'pointer',
    border: 'none',
    padding: 5,
    '&:hover' : {
      background: "#ed66a9", 
    },
    '@media (max-width:600px)' : {
      fontSize: 10,
      marginTop: 15,
    }
  },
  root: {
    background: "#2B373B",
    boxSizing: 'border-box',
    padding: 20, 
    position: 'absolute', 
    top: '80vh', 
    width: '60%',
    left: '20%', 
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-around',
    '@media (max-width:600px)' : {
      flexDirection: 'column',
      alignItems: 'center',
      top: '70vh',
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