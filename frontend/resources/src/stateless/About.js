import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import * as colors from "../style/colors";

const useStyles = makeStyles({
   root: {
    position: 'relative',
    top: '30vh',
    height: '25vh',
    left: '10vw',
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'left',
    fontFamily: 'Lato',
    '@media (max-width:600px)' : {
      maxWidth: '80vw',
      top: 100,
      left: '10vw',
      alignItems: 'center',
      height: '20vh',
    }
  },
  header: {
    fontSize: 20,
    color: `${colors.secondaryColor}`,
    '@media (max-width:600px)' : {
      fontSize: 15,
      textAlign: 'center',
    }
  },
  button: {
    width: 200,
    textAlign: 'center',
    padding: '15px 20px',
    color: `${colors.secondaryColor}`,
    cursor: 'pointer',
    transition: 'color 0.5s ease, background-color 0.5s ease',
    '&:hover' : {
      backgroundColor: `${colors.primaryColor}`,
      color: `${colors.white}`,
      transition: 'color 0.5s ease, background-color 0.5s ease',
    },
    border: `2px solid ${colors.primaryColor}`,
    borderRadius: 10,
    fontSize: 15,
    '@media (max-width:600px)' : {
      fontSize: 12,
      padding: '10px 15px',
      width: 150,
    }
  },
  picture: {
    position: 'absolute',
    width: 'auto',
    height: 60,
    transition: 'transform 0.5s ease',
    '&:hover' : {
      transform: 'scale(1.3, 1.3)',
      transition: 'transform 0.5s ease',
    },
    '@media (max-width:600px)' : {
      height: 30,
    },
  },
  pictureMain: {
    position: 'absolute',
    width: 'auto',
    height: 150,
    top: '45vh',
    left: '58vw',
    '@media (max-width:600px)' : {
      height: 60,
    },
  },

});


function AboutContent ({language}){

  const classes = useStyles();

  const about = { 
    title : {
      pl: 'Comparon to idealne rozwiązanie dla osób poszukujących oferty zakupu internetu',
      en: 'Comparon is a perfect solution for people who are looking for buying the Internet offer'
    }
  }

  return(
    <div>
      <div className={classes.root}>
          <header className={classes.header} >{about.title[language]}</header>
          <div className={classes.button}>{translation.GO_TO_SEARCH[language]}</div>
      </div>
      <img className={classes.pictureMain} src={require(`../img/main.png`)} alt='compareON' />
      <Picture label='test' name='1' left='40vw' top='75vh' />
      <Picture label='test2' name='2' left='45vw' top='60vh' />
      <Picture label='test3' name='3' left='35vw' top='45vh' />
      <Picture label='test4' name='4' left='47vw' top='35vh' />
      <Picture label='test5' name='5' left='52vw' top='15vh' />
      <Picture label='test6' name='6' left='62vw' top='25vh' />
      <Picture label='test7' name='7' left='75vw' top='13vh' />
      <Picture label='test8' name='8' left='85vw' top='30vh' />
      <Picture label='test9' name='9' left='90vw' top='50vh' />
      <Picture label='test10' name='10' left='80vw' top='70vh' />
    </div>
)};


function Picture ({label, name, left, top}){

  const classes = useStyles();
  return(
        <img className={classes.picture} style={{left: `${left}`, top: `${top}`}} src={require(`../img/${name}.png`)} alt={`${label}`} />
)};


export default AboutContent;