import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import translation from "../translation"
import SpeedIcon from '@material-ui/icons/Speed';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import * as colors from "../style/colors";
import { Link } from 'react-router-dom'
import DetailProvider from '../statefull/DetailProvider';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    border: `1px solid ${colors.secondaryColor}`,
    borderRadius: 10,
    margin: '15px 0px',
    padding: 0,
  },
  summaryPanel: {
    '@media (max-width:450px)' : {
      flexDirection: 'column',
      marginBottom: 0,
    }
  },
  panel: {
    padding: 0,
    minHeight: 100,
    display: 'flex',
    width: '100%',
    '@media (max-width:450px)' : {
      marginTop: 30,
      alignContent: 'space-between',
      flexDirection: 'column',
      minHeight: 100,
      width: '60vw',
    }
  },
  panelFirst: {
    display: 'flex', 
    flexBasis: '30%'
  },
  panelSecond: {
    display: 'flex', 
    flexBasis: '70%',
  },
  media: {
    height: 80,
    width: 80,
    border: `1px solid ${colors.secondaryColor}`,
    borderRadius: 10,
    '@media (max-width:1000px)' : {
      height: 50,
      width: 50,
    },
    '@media (max-width:600px)' : {
      height: 30,
      width: 30,
    }
  },
  column: {
    flexBasis: '33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: `${colors.secondaryColor}`,
    fontFamily: 'Lato',
    padding: '0 10',
    '@media (max-width:600px)' : {
      flexDirection: 'column',
    }
  },
  icon : {
    height: 30,
    width: 30,
    marginRight: 10,
    '@media (max-width:1000px)' : {
      height: 20,
      width: 20,
    },
    '@media (max-width:600px)' : {
      height: 15,
      width: 15,
    }
  },
  compare: {
    position: 'absolute',
    left: 'auto',
    right: 0,
    margin: 0,
    top: -3,
    fontSize: `10px !important`,
    '@media (max-width:1000px)' : {
      fontSize: 6,
    }
  },
  detailsInvisible: {
    alignItems: 'center',
    visibility: 'hidden',
    opacity: 0,
  },
  detailsVisible: {
    alignItems: 'center',
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity 2s ease',
  },
  helper: {
    borderLeft: `2px solid ${colors.secondaryColor}`,
    padding: theme.spacing(1, 2),
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    fontFamily: 'Lato',
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    padding: '5px 20px',
    color: `${colors.secondaryColor}`,
    cursor: 'pointer',
    width: 120,
    textAlign: 'center',
    backgroundColor: `${colors.white}`,
    transition: 'color 0.5s ease, background-color 0.5s ease',
    '&:hover' : {
      backgroundColor: `${colors.primaryColor}`,
      color: `${colors.white}`,
      transition: 'color 0.5s ease, background-color 0.5s ease',
    },
    border: `1.5px solid ${colors.primaryColor}`,
    borderRadius: 10,
    fontSize: 15,
    '@media (max-width:600px)' : {
      fontSize: 10,
      width: 50,
      margin: 0,
    },
    input: {
      color: `${colors.secondaryColor}`,
    }
  },
  price: {
    fontSize: 30,
    '@media (max-width:1000px)' : {
      fontSize: 25,
    },
    '@media (max-width:600px)' : {
      fontSize: 18,
    }
  },
  desc: {
    fontSize: 16,
    '@media (max-width:1000px)' : {
      fontSize: 14,
    },
    '@media (max-width:600px)' : {
      fontSize: 12,
    }
  }
}));

const YellowCheckbox = withStyles({
  root: {
    color: colors.secondaryColor,
    '&$checked': {
      color: colors.primaryColor,
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


function MyCard ({ operator, 
                   period, 
                   price, 
                   speed, 
                   type, 
                   id, 
                   selectOffer, 
                   selectToCompare, 
                   language,  
                   operators,
                   periods,
                   types,
                   offersToCompare,
                   selectedOffer}){

  const classes = useStyles();
  let operatorValue = operators.data ? operators.data.filter((el) => {return el.id===operator})[0] ? operators.data.filter((el) => {return el.id===operator})[0][`value_${language}`] : null : null;
  let periodValue = periods.data ? periods.data.filter((el) => {return el.id===period})[0] ? periods.data.filter((el) => {return el.id===period})[0][`value_${language}`] : null : null;
  let typeValue = types.data ? types.data.filter((el) => {return el.id===type})[0] ? types.data.filter((el) => {return el.id===type})[0][`value_${language}`] : null : null;

  const handleChange = id => (event, isExpanded) => {
    if (selectedOffer !== id ){
      selectOffer(id);
    }
    else{
      selectOffer(null);
    }
  };

  return(
     <div className={classes.root}>
      <ExpansionPanel expanded={selectedOffer===id} onChange={handleChange(id)} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.summaryPanel}
        >
          <div className={classes.panel}>
              <div className={classes.panelFirst}>
                    <div className={classes.column} style={{flexBasis: '50%'}}>
                      <CardMedia
                            className={classes.media}
                            image =  {operatorValue ? require(`../img/${operatorValue}.png`) : require(`../img/default.png`)}
                            title={operatorValue}
                      />
                    </div>
                    <div className={classes.column} style={{flexBasis: '50%'}}>
                          <Typography className={classes.price} >
                              {`${price} ${translation.ZLOTY[language]}`}
                          </Typography>
                    </div>
              </div>
              <div className={classes.panelSecond} >
                    <div className={classes.column}>
                          <SpeedIcon className={classes.icon} />
                          <Typography className={classes.desc} >
                          {` ${speed} MB/s`}
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
                    <div className={classes.columnLast}>
                          <FormGroup onChange={() =>selectToCompare(id)} row onClick={event => event.stopPropagation()} >
                                <FormControlLabel
                                    className={classes.compare}
                                    control={<YellowCheckbox checked={offersToCompare.includes(id) ? true : false} />}
                                    label={translation.COMPARE[language]}
                                    labelPlacement="start"
                                />
                          </FormGroup>
                    </div>
              </div>
          </div>
        </ExpansionPanelSummary>
        {selectedOffer===id ? <DetailProvider classes={classes} /> : null}
        <Divider />
        <ExpansionPanelActions className={classes.actions}>
          <Link to="/offers/selectedoffer" style={{textDecoration: 'none', color: 'white'}}>
            <div className={classes.button} >
                {translation.CHOOSE_OFFER[language]}
            </div>
          </Link>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
)};

Card.propTypes = {
  id: PropTypes.number,
  operator: PropTypes.string,
  operatorId: PropTypes.number,
  type: PropTypes.string,
  period: PropTypes.number,
  price: PropTypes.number,
  speed: PropTypes.number,
  selectOffer: PropTypes.func,
  language: PropTypes.string,
};

export default MyCard;