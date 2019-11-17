import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 15,
    '@media (max-width:600px)' : {
      fontSize: 12,
    }
  },
  sections: {
    position: 'relative',
    top: 30,
    display: 'flex',
    width: '80vw',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    color: '#64c41f',
    height: 'auto',
    marginBottom: 10,
    '@media (max-width:600px)' : {
      width: 30,
    }
  }
});


function AboutContent ({language}){

  const classes = useStyles();

  const about = { 
    p1 : {
      pl: 'Comparon to idealne rozwiązanie dla osób, które zastanawiają się nad wyborem oferty internetu',
      en: 'Comparon is an ideal solution for people who are thinking about choosing an Internet offer'
    },
    p2 : {
      pl: 'Nasze rozwiązanie jest',
      en: 'The solution is'
    },
  }

  return(
      <div className={classes.root}>
        <h2 className={classes.header}>{translation.ABOUT[language]}</h2>
        <div className={classes.content} >
          <p>{about.p1[language]}</p>
          <p>{about.p2[language]}</p>
          <div className={classes.sections}>
            <Section label={translation.FAST[language]} icon={<AccessTimeIcon className={classes.icon} />} />
            <Section label={translation.INTUITIVE[language]} icon={<EmojiPeopleIcon className={classes.icon} />} />
            <Section label={translation.FREE[language]} icon={<MoneyOffIcon className={classes.icon} />} />
          </div>
        </div>
      </div>
)};


function Section ({label, icon}){

  const classes = useStyles();
  return(
      <div className={classes.sectionContent}>
        {icon}
        <span>{label}</span>
      </div>
)};


export default AboutContent;