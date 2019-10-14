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
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


function DetailTemplate  ({
                  details, 
                  offerInfo,
                  language, 
                  classes,
                  operators, 
                  periods, 
                  types,
                  withoutIcon,
                  withoutText,
                  enableDelete,
                  handleDelete}){

  let operatorValue, periodValue, typeValue;
  if (details && offerInfo){
        operatorValue = operators.filter((el) => {return el.id===offerInfo.operator})[0][`value_${language}`];
        periodValue = periods.filter((el) => {return el.id===offerInfo.period})[0][`value_${language}`];
        typeValue = types.filter((el) => {return el.id===offerInfo.types})[0][`value_${language}`];
  }
  else{
        operatorValue = null;
        periodValue = null;
        typeValue = null;
  }

    return(
            <div style={{height: '100%',}}>
                <div className={classes.details}>
                  <section className={classes.detail} >
                    {withoutIcon ? null :
                        <div className={classes.description} >
                            <PaymentIcon className={classes.icon} /> 
                            <span className={classes.text}>{translation.MONTH_COST[language]}</span>
                        </div>
                    }
                    {withoutText ? null :
                        <span className={classes.text}>{`${offerInfo.price} zł`}</span>
                    }
                  </section>
                  <Divider className={classes.divider} />
                  <section className={classes.detail} >
                    {withoutIcon ? null :
                        <div className={classes.description} >
                            <PersonIcon className={classes.icon} /> 
                            <span className={classes.text}>{translation.OPERATOR[language]}</span>
                        </div>
                    }
                    {withoutText ? null :
                        <span className={classes.text}>{operatorValue}</span>
                    }
                  </section>
                  <Divider className={classes.divider} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div className={classes.description} >
                                <EventNoteIcon className={classes.icon} />
                                <span className={classes.text}>{translation.PERIOD[language]}</span>
                            </div>
                        }
                        {withoutText ? null :
                            <span className={classes.text}>{periodValue} </span>
                        }
                  </section>
                  <Divider className={classes.divider} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div className={classes.description} >
                                <SpeedIcon className={classes.icon} />
                                <span className={classes.text}>{translation.SPEED[language]}</span>
                            </div>
                        }
                        {withoutText ? null :
                            <span className={classes.text}>{`${offerInfo.speed} MB/s`}</span>
                        }
                  </section>
                  <Divider className={classes.divider} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div className={classes.description} >
                                <RssFeedIcon className={classes.icon} />
                                <span className={classes.text}>{translation.TYPE[language]}</span>
                            </div>
                        }
                        {withoutText ? null :
                            <span className={classes.text}>{typeValue}</span>
                        }
                  </section>
                  <Divider className={classes.divider} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div className={classes.description} >
                                <LocalShippingIcon className={classes.icon} />
                                <span className={classes.text}>{translation.DELIVERY_TIME[language]}</span>
                            </div>
                        }
                        {withoutText ? null :
                            <span className={classes.text}>{`${details.delivery_time} h`}</span>
                        }
                  </section>
                  <Divider className={classes.divider} />
                  <section className={classes.detail} >
                        {withoutIcon ? null :
                            <div className={classes.description} >
                                <LocalShippingIcon className={classes.icon} />
                                <span className={classes.text}>{translation.DELIVERY_COST[language]}</span>
                            </div>
                        }
                        {withoutText ? null :
                            <span className={classes.text}>{`${details.delivery_cost} zł`} </span>
                        }
                  </section>
                  <Divider className={classes.divider} />
                </div>
                <div className={classes.actions}>
                    {withoutText ? null : withoutIcon ?
                        <Button  size="small" variant="contained" color="primary" className={classes.button}>
                                {translation.CHOOSE_OFFER[language]}
                        </Button>
                    : null
                    }
                    {enableDelete !== true ? null :
                            <IconButton aria-label="close" color="secondary" className={classes.closeButton} onClick={() => handleDelete(offerInfo.id)}>
                                    <CloseIcon />
                            </IconButton>
                    }
                </div>
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
  withoutText: PropTypes.bool,
  enableDelete: PropTypes.bool,
  handleDelete: PropTypes.func,
};
export default DetailTemplate;