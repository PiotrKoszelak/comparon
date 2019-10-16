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

  let operatorValue, periodValue, typeValue, texts;
  if (details && offerInfo && operators && periods && types){
            operatorValue = withoutText ? null : operators.filter((el) => {return el.id===offerInfo.operator})[0][`value_${language}`];
            periodValue = withoutText ? null :periods.filter((el) => {return el.id===offerInfo.period})[0][`value_${language}`];
            typeValue = withoutText ? null : types.filter((el) => {return el.id===offerInfo.types})[0][`value_${language}`];
            texts = [
                {id: 1,
                    iconText: translation.MONTH_COST[language],
                    text: withoutText ? null : `${offerInfo.price} zł`,
                    icon: 'PaymentIcon',
                },
                {id: 2,
                    iconText: translation.OPERATOR[language],
                    text: withoutText ? null : operatorValue ,
                    icon: 'PersonIcon',
                },
                {id: 3,
                    iconText: translation.PERIOD[language],
                    text: withoutText ? null : periodValue ,
                    icon: 'EventNoteIcon',
                },
                {id: 4,
                    iconText: translation.SPEED[language],
                    text: withoutText ? null : `${offerInfo.speed} MB/s` ,
                    icon: 'SpeedIcon',
                },
                {id: 5,
                    iconText: translation.TYPE[language],
                    text: withoutText ? null : typeValue ,
                    icon: 'RssFeedIcon',
                },
                {id: 6,
                    iconText: translation.DELIVERY_TIME[language],
                    text: withoutText ? null : `${details.delivery_time} h`,
                    icon: 'PaymentIcon',
                },
                {id: 7,
                    iconText: translation.DELIVERY_COST[language],
                    text: withoutText ? null : `${details.delivery_cost} zł`,
                    icon: 'LocalShippingIcon',
                },
            ];

        return(
                <div style={{height: '100%',}}>
                    <div className={classes.details}>
                    {texts.map(el => (
                        <div key={el.id} style={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <SimpleSection 
                                classes={classes} 
                                withoutIcon={withoutIcon}
                                withoutText={withoutText}
                                iconText={el.iconText}
                                text={el.text}
                                icon={getIcon(el.icon, classes)}
                            />
                            <Divider className={classes.divider} />
                        </div>
                    ))}
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
    )}
    else{
        return null;
    }
};

  export function SimpleSection (props){
      const { classes, withoutIcon, withoutText, iconText, text, icon } = props;
      return (
            <section className={classes.detail} >
            {withoutIcon ? null :
                <div className={classes.description} >
                    {icon}
                    <span className={classes.text}>{iconText}</span>
                </div>
            }
            {withoutText ? null :
                <span className={classes.text}>{text}</span>
            }
            </section>
      )
  }

  export function getIcon (icon, classes){

    switch (icon){
        case 'PaymentIcon':
            return <PaymentIcon className={classes.icon} />
            break;
        case 'PersonIcon':
            return <PersonIcon className={classes.icon} />
            break;
        case 'EventNoteIcon':
            return <EventNoteIcon className={classes.icon} />
            break;
        case 'SpeedIcon':
            return <SpeedIcon className={classes.icon} />
            break;
        case 'RssFeedIcon':
            return <RssFeedIcon className={classes.icon} />
            break;
        case 'LocalShippingIcon':
            return <LocalShippingIcon className={classes.icon} />
            break;
        return null;
    }
}

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