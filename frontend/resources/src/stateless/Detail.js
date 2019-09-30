import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import translation from "../translation"
import SpeedIcon from '@material-ui/icons/Speed';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import Divider from '@material-ui/core/Divider';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  },
  text : {
    fontSize: 15,
    '@media (max-width:600px)' : {
        fontSize: 11,  
    }
  }
});

function Detail  ({loadedDetail, 
                  placeholderDetail, 
                  details, 
                  loadedContact, 
                  placeholderContact, 
                  contact, 
                  closeDetailWindow, 
                  selectedOffer,
                  language, 
                  operators, 
                  cities, 
                  periods, 
                  types}){

  const classes = useStyles();
  let operatorValue = operators.filter((el) => {return el.id===selectedOffer.operator})[0][`value_${language}`];
  let periodValue = periods.filter((el) => {return el.id===selectedOffer.period})[0][`value_${language}`];
  let typeValue = types.filter((el) => {return el.id===selectedOffer.type})[0][`value_${language}`];

    return(
          <Dialog
            open={true}
            TransitionComponent={Transition}
            onClose={closeDetailWindow}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className={classes.title} >{translation.OFFER_DETAILS[language]}</DialogTitle>
            <DialogContent>
                <div className={classes.details}>
                  <section className={classes.detail} >
                      <div style={{display: 'flex', alignItems: 'flex-end'}}>
                          <PaymentIcon className={classes.icon} />
                          <span className={classes.text}>{translation.MONTH_COST[language]}</span>
                      </div>
                      <span className={classes.text}>{`${selectedOffer.price} zł`}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                      <div style={{display: 'flex', alignItems: 'flex-end'}}>
                          <PersonIcon className={classes.icon} />
                          <span className={classes.text}>{translation.OPERATOR[language]}</span>
                      </div>
                      <span className={classes.text}>{operatorValue}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                      <div style={{display: 'flex', alignItems: 'flex-end'}}>
                          <EventNoteIcon className={classes.icon} />
                          <span className={classes.text}>{translation.PERIOD[language]}</span>
                      </div>
                      <span className={classes.text}>{periodValue} </span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                      <div style={{display: 'flex', alignItems: 'flex-end'}}>
                          <SpeedIcon className={classes.icon} />
                          <span className={classes.text}>{translation.SPEED[language]}</span>
                      </div>
                      <span className={classes.text}>{`${selectedOffer.speed} MB/s`}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                      <div style={{display: 'flex', alignItems: 'flex-end'}}>
                          <RssFeedIcon className={classes.icon} />
                          <span className={classes.text}>{translation.TYPE[language]}</span>
                      </div>
                      <span className={classes.text}>{typeValue}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                      <div style={{display: 'flex', alignItems: 'flex-end'}}>
                          <LocalShippingIcon className={classes.icon} />
                          <span className={classes.text}>{translation.DELIVERY_TIME[language]}</span>
                      </div>
                      <span className={classes.text}>{loadedDetail===true ? `${details.delivery_time} h` : placeholderDetail}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                      <div style={{display: 'flex', alignItems: 'flex-end'}}>
                          <LocalShippingIcon className={classes.icon} />
                          <span className={classes.text}>{translation.DELIVERY_COST[language]}</span>
                      </div>
                      <span className={classes.text}>{loadedDetail===true ? `${details.delivery_cost} zł` : placeholderDetail} </span>
                  </section>
                  <Divider style={{width: '90%'}} />
                </div>
            </DialogContent>
            <DialogActions style={{display: 'flex', justifyContent: 'center'}}>
              <Button onClick={closeDetailWindow} size="small" variant="contained" color="primary" className={classes.button}>
                  {translation.CLOSE[language]}
              </Button>
            </DialogActions>
          </Dialog>
  )};

Detail.propTypes = {
  closeDetailWindow : PropTypes.func,
  offerPrice: PropTypes.number,
  offerOperator: PropTypes.string,
  offerPeriod: PropTypes.string,
  offerSpeed: PropTypes.number,
  offerType: PropTypes.string,
  detail: PropTypes.object,
  loadedDetail: PropTypes.bool,
  placeholderDetail: PropTypes.string,
  contact: PropTypes.string,
  loadedContact: PropTypes.bool,
  placeholderContact: PropTypes.string,
};
export default Detail;