import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import translation from "../translation"
import DetailTemplate from './Detail_template';
import SpeedIcon from '@material-ui/icons/Speed';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import Divider from '@material-ui/core/Divider';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '70vh',
    top: '10vh',
    position: 'relative',
  },
  rootContent : {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
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
      height: 20,  
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
                
    return(
      <section className={classes.root} >
         <div className={classes.details}>
                  <section className={classes.detail} >
                        <div style={{display: 'flex', alignItems: 'flex-end'}}>
                            <PaymentIcon className={classes.icon} /> 
                            <span className={classes.text}>{translation.MONTH_COST[language]}</span>
                        </div>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                        <div style={{display: 'flex', alignItems: 'flex-end'}}>
                            <PersonIcon className={classes.icon} /> 
                            <span className={classes.text}>{translation.OPERATOR[language]}</span>
                        </div>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <EventNoteIcon className={classes.icon} />
                                <span className={classes.text}>{translation.PERIOD[language]}</span>
                            </div>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <SpeedIcon className={classes.icon} />
                                <span className={classes.text}>{translation.SPEED[language]}</span>
                            </div>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <RssFeedIcon className={classes.icon} />
                                <span className={classes.text}>{translation.TYPE[language]}</span>
                            </div>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <LocalShippingIcon className={classes.icon} />
                                <span className={classes.text}>{translation.DELIVERY_TIME[language]}</span>
                            </div>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <LocalShippingIcon className={classes.icon} />
                                <span className={classes.text}>{translation.DELIVERY_COST[language]}</span>
                            </div>
                  </section>
                  <Divider style={{width: '90%'}} />
        </div>
        <div className={classes.rootContent} >
          {offerInfo.map((el, key) => (
                  <DetailTemplate
                      withoutIcon={true}
                      details={details[key]}
                      offerInfo={offerInfo[key]}
                      language={language}
                      operators={operators}
                      periods={periods}
                      types={types}
                      classes={classes}
                  />
              ))}
        </div>
      </section>
       
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