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
    border: '2px solid green',
  },
  header: {
    fontSize: 20,
    color: `${colors.secondaryColor}`,
    '@media (max-width:1000px)' : {
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
  container: {
    position: 'absolute',
    border: '2px solid red',
    width: 'calc(83vw - 300px)',
    left: 'calc(12vw + 300px)',
    height: '76vh',
    top: '12vh',
    '@media (max-width:1000px)' : {
      width: '80vw',
      top: 'calc(25vh + 100px)',
      left: '10vw',
      height: 'calc(60vh - 100px)',
    },
  },
  picture: {
    zIndex: 2,
    position: 'absolute',
    opacity: 0,
    width: 'auto',
    height: 60,
    transition: 'transform 0.5s ease',
    animation: '$show 1s linear 4s forwards',
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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '@media (max-width:600px)' : {
      height: 60,
    },
  },
  svgContainer: {
    position: 'absolute',
    width: '900px',
    left: '40vw',
    height: '100vh',
    border: '2px solid blue',
    top: -10,
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
    strokeWidth:2,
    strokeDasharray: 300,
    strokeDashoffset: 300,
    animation: '$dash 4s linear forwards',
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

      <div className={classes.svgContainer}>
            <img className={classes.pictureMain} src={require(`../img/main.png`)} alt='compareON' />
            <svg className={classes.svg} >
              <line x1=" 270px" y1="calc(45vh + 150px)" x2="110px" y2="75vh" className={classes.line} />
            </svg>
            <Picture label='test' name='1' left='0' top='75vh'   />

            <svg className={classes.svg} >
              <line x1="270px" y1="calc(45vh + 75px)" x2="calc(75px + 70px)" y2="60vh" className={classes.line} />
            </svg>
            <Picture label='test2' name='2' left='75px' top='60vh'   />

            <svg className={classes.svg} >
              <line x1=" 270px" y1="calc(45vh + 75px)" x2="45px" y2="calc(45vh + 60px)" className={classes.line} />
            </svg>
            <Picture label='test3' name='3' left='-75px' top='45vh'   />

            <svg className={classes.svg} >
              <line x1=" 270px" y1="45vh" x2="225px" y2="calc(35vh + 60px)" className={classes.line} />
            </svg>
            <Picture label='test4' name='4' left='115px' top='35vh'   />

            <svg className={classes.svg} >
              <line x1=" 270px" y1="45vh" x2="235px" y2="calc(15vh + 60px)" className={classes.line} />
            </svg>
            <Picture label='test5' name='5' left='180px' top='15vh'   />

            <svg className={classes.svg} >
              <line x1="calc( 270px + 120px)" y1="45vh" x2="385px" y2="calc(25vh + 60px)" className={classes.line} />
            </svg>
            <Picture label='test6' name='6' left='330px' top='25vh'   />

            <svg className={classes.svg} >
              <line x1="calc( 270px + 240px)" y1="45vh" x2="580px" y2="calc(13vh + 60px)" className={classes.line} />
            </svg>
            <Picture label='test7' name='7' left='525px' top='13vh'   />

            <svg className={classes.svg} >
              <line x1="calc( 270px + 240px)" y1="45vh" x2="675px" y2="calc(30vh + 60px)" className={classes.line} />
            </svg>
            <Picture label='test8' name='8' left='675px' top='30vh'   />

            <svg className={classes.svg} >
              <line x1="calc( 270px + 240px)" y1="calc(45vh + 75px)" x2="750px" y2="calc(50vh + 30px)" className={classes.line} />
            </svg>
            <Picture label='test9' name='9' left='750px' top='50vh'   />

            <svg className={classes.svg} >
              <line x1="calc( 270px + 240px)" y1="calc(45vh + 150px)" x2="600px" y2="70vh" className={classes.line} />
            </svg>
            <Picture label='test10' name='10' left='600px' top='70vh'   />
      </div>
  </div>
)};


function Picture ({label, name, left, top, specClass}){

  const classes = useStyles();
  return(
        <img className={classes.picture} style={{left: `${left}`, top: `${top}`}} src={require(`../img/${name}.png`)} alt={`${label}`} />
)};


export default AboutContent;