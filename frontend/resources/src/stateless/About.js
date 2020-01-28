import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import * as colors from "../style/colors";
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
   root: {
    zIndex: 2,
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
    '@media (max-width:1000px)' : {
      maxWidth: '80vw',
      top: 100,
      left: '10vw',
      alignItems: 'center',
      height: '20vh',
    },
  },
  header: {
    fontSize: 20,
    color: `${colors.secondaryColor}`,
    '@media (max-width:1000px)' : {
      fontSize: 15,
      textAlign: 'center',
    },
    '@media (max-width:600px)' : {
      marginTop: 30,
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
      marginTop: 30,
      fontSize: 12,
      padding: '10px 15px',
      width: 150,
    }
  },
  containerBig: {
    position: 'absolute',
    width: 'calc(83vw - 300px)',
    left: 'calc(12vw + 300px)',
    height: '76vh',
    top: '12vh',
    '@media (max-width:1000px)' : {
      display: 'none',
    },
  },
  containerMedium: {
    '@media (min-width:1000px)' : {
      display: 'none',
    },
    '@media (max-width:1000px)' : {
      position: 'absolute',
      width: '80vw',
      top: 'calc(25vh + 100px)',
      left: '10vw',
      height: 'calc(65vh - 100px)',
    },
    '@media (max-width:600px)' : {
      display: 'none',
    },
  },
  picture: {
    zIndex: 2,
    position: 'absolute',
    opacity: 0,
    width: 'auto',
    height: 60,
    transition: 'transform 0.5s ease',
    animation: '$show 1s linear 1s forwards',
    '&:hover' : {
      transform: 'scale(1.3, 1.3)',
      transition: 'transform 0.5s ease',
    },
    '@media (max-width:1000px)' : {
      height: 30,
    },
  },
  pictureMain: {
    position: 'absolute',
    width: 'auto',
    height: 150,
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '@media (max-width:1000px)' : {
      height: 100,
    },
  },
  svg: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  '@keyframes dash' : {
    to : {
      strokeDashoffset: 0,
    }
  },
  '@keyframes show' : {
    from : {
      opacity: 0,
    },
    to : {
      opacity: 1,
    }
  },
  line: {
    stroke: `${colors.secondaryColor}`, 
    strokeWidth: 1,
    strokeDasharray: 300,
    strokeDashoffset: 300,
    animation: '$dash 1s linear forwards',
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
          <Link to="/offers" style={{textDecoration: 'none', color: 'white'}}>
              <div className={classes.button}>{translation.GO_TO_SEARCH[language]}</div>
          </Link>
      </div>

      <div className={classes.containerBig}>
            <img className={classes.pictureMain} src={require(`../img/main.png`)} alt='compareON' />
            <svg className={classes.svg} >
              <line x1="calc(50% - 115px)" y1="calc(60% + 75px)" x2="110px" y2="80%" className={classes.line} />
            </svg>
            <Picture label='test' name='1' left='0' top='80%'   />

            <svg className={classes.svg} >
              <line x1="calc(50% - 115px)" y1="60%" x2="calc(6% + 110px)" y2="calc(55% + 30px)" className={classes.line} />
            </svg>
            <Picture label='test2' name='2' left='10%' top='55%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% - 115px)" y1="60%" x2="110px" y2="calc(35% + 30px)" className={classes.line} />
            </svg>
            <Picture label='test3' name='3' left='0' top='35%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% - 115px)" y1="calc(60% - 75px)" x2="calc(20% + 55px)" y2="calc(25% + 60px)" className={classes.line} />
            </svg>
            <Picture label='test4' name='4' left='20%' top='25%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% - 115px)" y1="calc(60% - 75px)" x2="calc(25% + 55px)" y2="calc(5% + 60px)" className={classes.line} />
            </svg>
            <Picture label='test5' name='5' left='20%' top='5%'   />

            <svg className={classes.svg} >
                <line x1="50% " y1="calc(60% - 75px)" x2="calc(40% + 55px)" y2="calc(20% + 60px)" className={classes.line} />
            </svg>
            <Picture label='test6' name='6' left='40%' top='20%'   />

            <svg className={classes.svg} >
                <line x1="50% " y1="calc(60% - 75px)" x2="calc(55% + 55px)" y2="60px" className={classes.line} />
            </svg>
            <Picture label='test7' name='7' left='55%' top='0'   />

            <svg className={classes.svg} >
                <line x1="calc(50% + 110px) " y1="calc(60% - 75px)" x2="calc(80% + 40px)" y2="calc(10% + 60px)" className={classes.line} />
            </svg>
            <Picture label='test8' name='8' left='80%' top='10%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% + 110px) " y1="calc(60% - 75px)" x2="calc(95% + 40px)" y2="calc(30% + 30px)" className={classes.line} />
            </svg>
            <Picture label='test9' name='9' left='92%' top='30%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% + 110px) " y1="60%" x2="85%" y2="70%" className={classes.line} />
            </svg>
            <Picture label='test10' name='10' left='85%' top='70%'   />
            
      </div>

      <div className={classes.containerMedium}>
          <img className={classes.pictureMain} src={require(`../img/main.png`)} alt='compareON' />

          <svg className={classes.svg} >
              <line x1="calc(50% - 80px)" y1="calc(60% + 50px)" x2="55px" y2="80%" className={classes.line} />
            </svg>
            <Picture label='test' name='1' left='0' top='80%'   />

            <svg className={classes.svg} >
              <line x1="calc(50% - 80px)" y1="60%" x2="calc(6% + 60px)" y2="calc(55% + 15px)" className={classes.line} />
            </svg>
            <Picture label='test2' name='2' left='10%' top='55%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% - 80px)" y1="60%" x2="55px" y2="calc(35% + 15px)" className={classes.line} />
            </svg>
            <Picture label='test3' name='3' left='0' top='35%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% - 80px)" y1="calc(60% - 50px)" x2="calc(20% + 25px)" y2="calc(25% + 30px)" className={classes.line} />
            </svg>
            <Picture label='test4' name='4' left='20%' top='25%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% - 80px)" y1="calc(60% - 50px)" x2="calc(25% + 25px)" y2="calc(5% + 30px)" className={classes.line} />
            </svg>
            <Picture label='test5' name='5' left='20%' top='5%'   />

            <svg className={classes.svg} >
                <line x1="50% " y1="calc(60% - 50px)" x2="calc(40% + 25px)" y2="calc(20% + 30px)" className={classes.line} />
            </svg>
            <Picture label='test6' name='6' left='40%' top='20%'   />

            <svg className={classes.svg} >
                <line x1="50% " y1="calc(60% - 50px)" x2="calc(55% + 25px)" y2="30px" className={classes.line} />
            </svg>
            <Picture label='test7' name='7' left='55%' top='0'   />

            <svg className={classes.svg} >
                <line x1="calc(50% + 80px) " y1="calc(60% - 50px)" x2="calc(80% + 20px)" y2="calc(10% + 30px)" className={classes.line} />
            </svg>
            <Picture label='test8' name='8' left='80%' top='10%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% + 80px) " y1="calc(60% - 50px)" x2="92%" y2="calc(30% + 15px)" className={classes.line} />
            </svg>
            <Picture label='test9' name='9' left='92%' top='30%'   />

            <svg className={classes.svg} >
                <line x1="calc(50% + 80px) " y1="60%" x2="85%" y2="70%" className={classes.line} />
            </svg>
            <Picture label='test10' name='10' left='85%' top='70%'   />
            

      </div>
  </div>
)};


function Picture ({label, name, left, top, specClass}){

  const classes = useStyles();
  return(
        <img className={classes.picture} style={{left: `${left}`, top: `${top}`}} src={require(`../img/${name}.png`)} alt={`${label}`} />
)};


export default AboutContent;