import React from "react";
import PropTypes from "prop-types";
import translation from "../translation"
import SpeedIcon from '@material-ui/icons/Speed';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import Divider from '@material-ui/core/Divider';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';


function DetailTemplate  ({
                  details, 
                  offerInfo,
                  language, 
                  classes,
                  operators, 
                  periods, 
                  types,
                  withoutIcon }){

  let operatorValue = operators.filter((el) => {return el.id===offerInfo.operator})[0][`value_${language}`];
  let periodValue = periods.filter((el) => {return el.id===offerInfo.period})[0][`value_${language}`];
  let typeValue = types.filter((el) => {return el.id===offerInfo.types})[0][`value_${language}`];

    return(
                <div className={classes.details}>
                  <section className={classes.detail} >
                    {withoutIcon ? null :
                        <div style={{display: 'flex', alignItems: 'flex-end'}}>
                            <PaymentIcon className={classes.icon} /> 
                            <span className={classes.text}>{translation.MONTH_COST[language]}</span>
                        </div>
                    }
                    <span className={classes.text}>{`${offerInfo.price} zł`}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                    {withoutIcon ? null :
                        <div style={{display: 'flex', alignItems: 'flex-end'}}>
                            <PersonIcon className={classes.icon} /> 
                            <span className={classes.text}>{translation.OPERATOR[language]}</span>
                        </div>
                    }
                      <span className={classes.text}>{operatorValue}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <EventNoteIcon className={classes.icon} />
                                <span className={classes.text}>{translation.PERIOD[language]}</span>
                            </div>
                        }
                      <span className={classes.text}>{periodValue} </span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <SpeedIcon className={classes.icon} />
                                <span className={classes.text}>{translation.SPEED[language]}</span>
                            </div>
                        }
                      <span className={classes.text}>{`${offerInfo.speed} MB/s`}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <RssFeedIcon className={classes.icon} />
                                <span className={classes.text}>{translation.TYPE[language]}</span>
                            </div>
                        }
                      <span className={classes.text}>{typeValue}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <LocalShippingIcon className={classes.icon} />
                                <span className={classes.text}>{translation.DELIVERY_TIME[language]}</span>
                            </div>
                        }
                      <span className={classes.text}>{`${details.delivery_time} h`}</span>
                  </section>
                  <Divider style={{width: '90%'}} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                <LocalShippingIcon className={classes.icon} />
                                <span className={classes.text}>{translation.DELIVERY_COST[language]}</span>
                            </div>
                        }
                      <span className={classes.text}>{`${details.delivery_cost} zł`} </span>
                  </section>
                  <Divider style={{width: '90%'}} />
                </div>
  )};

DetailTemplate.propTypes = {
  offerInfo: PropTypes.object,
  details: PropTypes.object,
  language: PropTypes.string,
  classes: PropTypes.object,
  operators: PropTypes.array,
  periods: PropTypes.array,
  types: PropTypes.array,
  withoutIcon: PropTypes.bool,
};
export default DetailTemplate;