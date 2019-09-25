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


const useStyles = makeStyles({
  card: {
    width: 300,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    '@media (max-width:400px)' : {
      width: '90%',
    }
  },
  media: {
    marginLeft: 20,
    height: 100,
    width: 100,
    float: 'left',
    border: '1px solid black',
    borderRadius: 10,
  },
  content: {
    padding: 0,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'Lato',
    clear: 'both',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  compare: {
    marginLeft: '60%',
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
                   cities,
                   periods,
                   types,
                   numberOffersToCompare}){

  const classes = useStyles();
  let operatorValue = operators.filter((el) => {return el.id===operator})[0][`value_${language}`];
  let periodValue = periods.filter((el) => {return el.id===period})[0][`value_${language}`];
  let typeValue = types.filter((el) => {return el.id===type})[0][`value_${language}`];
  
  return(
          <Card className={classes.card + ' col-sm-3'}>
              <FormGroup onChange={() =>selectToCompare(id)} row >
                  <FormControlLabel
                      className={classes.compare}
                      control={<Checkbox checked={numberOffersToCompare.includes(id) ? true : false} color="secondary" />}
                      label={translation.COMPARE[language]}
                      labelPlacement="start"
                  />
              </FormGroup>
              <CardMedia
                className={classes.media}
                image =  {require(`../img/${operatorValue}.png`)}
                title={operatorValue}
              />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    {`${price} ${translation.ZLOTY[language]}`}
                </Typography>
              </CardContent>
              <CardContent className={classes.detail}>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {`${translation.SPEED[language]} ${speed} MB/s`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {`${translation.PERIOD[language]} ${periodValue}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {`${translation.TYPE[language]} ${typeValue}`} 
                  </Typography>
              </CardContent>
            <CardActions>
              <Button  className={classes.button} size="small" color="primary" onClick={() => selectOffer(id, operator, period, price, speed, type)}>
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