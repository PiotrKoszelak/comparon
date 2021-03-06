import React, { useState } from "react";
import PropTypes from "prop-types";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import translation from "../translation"
import SpeedIcon from '@material-ui/icons/Speed';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import PaymentIcon from '@material-ui/icons/Payment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import clsx from 'clsx';


function OfferTemplate  ({
                  details, 
                  offerInfo,
                  language, 
                  classes,
                  operators, 
                  periods, 
                  types,
                  handleDelete,
                  selectOffer,
                  handleOffer}){

      let operatorValue, periodValue, typeValue;
      const [invisible, setInvisible] = useState(null);

      if (details && offerInfo && operators.success===true && periods.success===true && types.success===true){

      operatorValue = operators.data.filter((el) => {return el.id===offerInfo.operator})[0][`value_${language}`];
      periodValue = periods.data.filter((el) => {return el.id===offerInfo.period})[0][`value_${language}`];
      typeValue = types.data.filter((el) => {return el.id===offerInfo.types})[0][`value_${language}`];

      const handleDeleteFromList = (id) => {
            setInvisible(id);
            setTimeout(() => {handleDelete(id)}, 1000);
      }

      const classForRoot = invisible===offerInfo.id ? classes.rootPanelInvisible : classes.rootPanel;
      

      if (handleOffer){

            const offer = {
                  id: offerInfo.id,
                  operator: operatorValue,
                  price: offerInfo.price,
                  speed: offerInfo.speed,
                  period: periodValue,
                  type: typeValue,
                  deliveryCost: details.delivery_cost,
                  deliveryTime: details.delivery_time,
                  equipment: details.equipment,
            }

            handleOffer(offer);
      }

      return(
            <ExpansionPanel className={classForRoot} expanded={false}>
            <ExpansionPanelSummary
              aria-controls="panel1c-content"
              id="panel1c-header"
              className={classes.expansionPanelSummary}
            >
              <div className={classes.panel}>
                  <div className={classes.panelFirst}>
                        <div className={classes.column} style={{flexBasis: '50%'}}>
                          <CardMedia
                                className={classes.media}
                                image =  {operatorValue ? require(`../img/${operatorValue}.jpg`) : require(`../img/default.png`)}
                                title={operatorValue}
                          />
                        </div>
                        <div className={classes.column} style={{flexBasis: '50%'}}>
                              <Typography className={classes.price} >
                                  {`${offerInfo.price} ${translation.ZLOTY[language]}`}
                              </Typography>
                        </div>
                  </div>
                  <div className={classes.panelSecond} >
                        <div className={classes.column}>
                              <SpeedIcon className={classes.icon} />
                              <Typography className={classes.desc} >
                              {` ${offerInfo.speed} MB/s`}
                              </Typography>
                        </div>
                        <div className={classes.column}>
                              <EventNoteIcon className={classes.icon} />
                              <Typography className={classes.desc} >
                              {`${periodValue} ${translation.MONTHS[language]}`}
                              </Typography>
                        </div>
                        <div className={classes.column}>
                              <RssFeedIcon className={classes.icon} />
                              <Typography className={classes.desc} >
                              {`${typeValue}`} 
                              </Typography>
                        </div>
                        <div className={classes.column}>
                              <PaymentIcon className={classes.icon} />
                              <Typography className={classes.desc} >
                              {`${details.delivery_cost} zł`}
                              </Typography>
                        </div>
                        <div className={classes.column}>
                              <LocalShippingIcon className={classes.icon} />
                              <Typography className={classes.desc} >
                              {`${details.delivery_time} h`} 
                              </Typography>
                        </div>
                        <div className={clsx(classes.column, classes.helper)}>
                              <img src={require(`../img/${details.equipment}.jpg`)} alt={`${details.equipment}`} className={classes.equipment} ></img>
                        </div>
                  </div>
                  <div className={classes.panelThird}>
                        <div className={classes.button} onClick={() => selectOffer(offerInfo.id)} >
                        {translation.CHOOSE_OFFER[language]}
                        </div>
                        <div className={clsx(classes.button, classes.buttonError)} onClick={() => handleDeleteFromList(offerInfo.id)}>
                        {translation.DELETE_FROM_LIST[language]}
                        </div>
                  </div>
              </div>
            </ExpansionPanelSummary>
          </ExpansionPanel>
    )}
    else{
        return null;
    }
};

OfferTemplate.propTypes = {
  offerInfo: PropTypes.object,
  details: PropTypes.object,
  language: PropTypes.string,
  classes: PropTypes.object,
  operators: PropTypes.object,
  periods: PropTypes.object,
  types: PropTypes.object,
  handleDelete: PropTypes.func,
  selectOffer: PropTypes.func,
  handleOffer: PropTypes.func,
};
export default OfferTemplate;