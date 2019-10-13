import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import DetailTemplate from './Detail_template';
import SpeedIcon from '@material-ui/icons/Speed';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import Divider from '@material-ui/core/Divider';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '70vh',
    top: '10vh',
    left: '5vw',
    width: '90vw',
    position: 'relative',
  },
  rootContent : {
    display: 'flex',
    justifyContent: 'flex-start',
    overflowX: 'auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  detailHeader:{
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    '@media (max-width:600px)' : {
      height: 20,  
    }
  },
  detail : {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '@media (max-width:600px)' : {
      height: 20,
      width: 75,  
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
  },
  info : {
    position: 'relative',
    top: 100,
    width: 150,
    left: 'calc(50vw - 75px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      width: 80,
      left: 'calc(50vw - 40px)',
    }
  },
  progress: {
    position: 'relative',
    top: 100,
  }
});

function Compare  ({
                  details, 
                  offerInfo,
                  language, 
                  operators,
                  periods,
                  types,
                  loadedDetail,
                  loadedOfferInfo,
                  loading,
                  isEmpty
                  }){

  const classes = useStyles();

  if (loading===true){
    return(
      <div className={classes.info} >
          <CircularProgress className={classes.progress} color="secondary" disableShrink />
      </div>
    )
  }
  else if (isEmpty===true){
    return (<div className={classes.info} >
      <LocalOfferIcon color='secondary' className={classes.icon} />
      <span className={classes.text}>{translation.NONE[language]}</span>
      </div>
    )
  }
  else if ((loadedDetail === false || loadedOfferInfo === false) && loading===false){
    return(
      <div className={classes.info}>
          <ErrorOutlineIcon color='secondary' className={classes.icon} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>
    )
  }
  else{
    if (!offerInfo || !details){
      return (<div className={classes.info} >
        <LocalOfferIcon color='secondary' className={classes.icon} />
        <span className={classes.text}>{translation.NONE[language]}</span>
        </div>
      )
    }
    else{
                
        return(
          <section className={classes.root} >
            <div className={classes.details}>
                      <section className={classes.detailHeader} >
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <PaymentIcon className={classes.icon} /> 
                                <span className={classes.text}>{translation.MONTH_COST[language]}</span>
                            </div>
                      </section>
                      <Divider style={{width: '90%'}} />
                      <section className={classes.detailHeader} >
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <PersonIcon className={classes.icon} /> 
                                <span className={classes.text}>{translation.OPERATOR[language]}</span>
                            </div>
                      </section>
                      <Divider style={{width: '90%'}} />
                      <section className={classes.detailHeader} >
                                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                    <EventNoteIcon className={classes.icon} />
                                    <span className={classes.text}>{translation.PERIOD[language]}</span>
                                </div>
                      </section>
                      <Divider style={{width: '90%'}} />
                      <section className={classes.detailHeader} >
                                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                    <SpeedIcon className={classes.icon} />
                                    <span className={classes.text}>{translation.SPEED[language]}</span>
                                </div>
                      </section>
                      <Divider style={{width: '90%'}} />
                      <section className={classes.detailHeader} >
                                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                    <RssFeedIcon className={classes.icon} />
                                    <span className={classes.text}>{translation.TYPE[language]}</span>
                                </div>
                      </section>
                      <Divider style={{width: '90%'}} />
                      <section className={classes.detailHeader} >
                                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                    <LocalShippingIcon className={classes.icon} />
                                    <span className={classes.text}>{translation.DELIVERY_TIME[language]}</span>
                                </div>
                      </section>
                      <Divider style={{width: '90%'}} />
                      <section className={classes.detailHeader} >
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
                          key={key}
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
        )
    }
  }
};

  Compare.propTypes = {
  details: PropTypes.array,
  offerInfo: PropTypes.array,
  language: PropTypes.string,
  operators: PropTypes.array,
  periods: PropTypes.array,
  types: PropTypes.array,
  loadedDetail: PropTypes.bool,
  loadedOfferInfo: PropTypes.bool,
  loading: PropTypes.bool,
  isEmpty: PropTypes.bool,
};
export default Compare;