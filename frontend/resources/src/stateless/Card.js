import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import translation from "../translation"
import SpeedIcon from '@material-ui/icons/Speed';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RssFeedIcon from '@material-ui/icons/RssFeed';


const useStyles = makeStyles({
  card: {
    width: 300,
    borderRadius: 20,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Lato',
    backgroundColor: '#fafafa',
    border: '1px solid #d6d6d6',
    boxShadow: '0px 10px 17px 0px rgba(181,175,181,1)',
  },
  cardTop: {
    position: 'relative',
    top: 20,
    width: '90%',
    left: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  media: {
    height: 60,
    width: 60,
    border: '1px solid black',
    borderRadius: '50%',
    '@media (max-width:600px)' : {
      height: 40,
      width: 40,
    }
  },
  content: {
    padding: 0,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    '@media (max-width:600px)' : {
      height: 50,
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      paddingTop: 0,
      paddingBottom: 0,
    }
  },
  detail : {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      margin: 5,
    }
  },
  icon : {
    height: 40,
    width: 40,
    '@media (max-width:600px)' : {
      height: 30,
      width: 30,
    }
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    backgroundColor: '#bda3f0',
  },
  compare: {
    
  },
});


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
                   offersToCompare}){

  const classes = useStyles();
  let operatorValue = operators.data ? operators.data.filter((el) => {return el.id===operator})[0] ? operators.data.filter((el) => {return el.id===operator})[0][`value_${language}`] : null : null;
  let periodValue = periods.data ? periods.data.filter((el) => {return el.id===period})[0] ? periods.data.filter((el) => {return el.id===period})[0][`value_${language}`] : null : null;
  let typeValue = types.data ? types.data.filter((el) => {return el.id===type})[0] ? types.data.filter((el) => {return el.id===type})[0][`value_${language}`] : null : null;
  
  return(
          <Card className={classes.card}>
              <section className={classes.cardTop}>
                <CardMedia
                  className={classes.media}
                  image =  {operatorValue ? require(`../img/${operatorValue}.png`) : require(`../img/default.png`)}
                  title={operatorValue}
                />
                <FormGroup onChange={() =>selectToCompare(id)} row >
                    <FormControlLabel
                        className={classes.compare}
                        control={<Checkbox checked={offersToCompare.includes(id) ? true : false} color="secondary" />}
                        label={translation.COMPARE[language]}
                        labelPlacement="start"
                    />
                </FormGroup>
              </section>
              <CardContent className={classes.content}>
                <Typography variant="h4" >
                    {`${price} ${translation.ZLOTY[language]}`}
                </Typography>
              </CardContent>
              <CardContent className={classes.details}>
                  <section className={classes.detail} >
                      <SpeedIcon className={classes.icon} />
                      <Typography variant="body2" color="textSecondary">
                      {`${translation.SPEED[language]} ${speed} MB/s`}
                      </Typography>
                  </section>
                  <section className={classes.detail} >
                    <EventNoteIcon className={classes.icon} />
                    <Typography variant="body2" color="textSecondary" component="p">
                    {`${translation.PERIOD[language]} ${periodValue}`}
                    </Typography>
                  </section>
                  <section className={classes.detail} >
                    <RssFeedIcon className={classes.icon} />
                    <Typography variant="body2" color="textSecondary" component="p">
                    {`${translation.TYPE[language]} ${typeValue}`} 
                    </Typography>
                  </section>
              </CardContent>
            <CardActions>
              <Button  className={classes.button} size="small" variant="contained" color="primary" onClick={() => selectOffer(id)}>
                  {translation.OFFER_DETAILS[language]}
              </Button>
            </CardActions>
          </Card>
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