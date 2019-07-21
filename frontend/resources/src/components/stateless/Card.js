import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UPC_logo from '../img/UPC.png';
import VECTRA_logo from '../img/VECTRA.png';
import ORANGE_logo from '../img/ORANGE.png';
import PLAY_logo from '../img/PLAY.png';
import PLUS_logo from '../img/PLUS.png';


const useStyles = makeStyles({
  card: {
    width: 300,
    marginBottom: 30,
  },
  media: {
    marginTop: 20,
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
  }
});


function MyCard ({operator, period, price, speed, type, id, operatorId, selectOffer}){

  let logo;
  switch(operator) {
    case 'UPC':
      logo = UPC_logo;
      break;
    case 'Orange':
      logo = ORANGE_logo;
      break;
    case 'Vectra':
        logo = VECTRA_logo;
        break;
    case 'Plus':
      logo = PLUS_logo;
      break;
    case 'Play':
      logo = PLAY_logo;
      break;
    default:
      // code block
  }

  const classes = useStyles();
   
  return(
          <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image = {logo}
                title={operator}
              />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    {price} zł
                </Typography>
              </CardContent>
              <CardContent className={classes.detail}>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Prędkość: {speed} MB/s
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Długość trwania umowy: {period} 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Typ: {type} 
                  </Typography>
              </CardContent>
            <CardActions>
              <Button  className={classes.button} size="small" color="primary" onClick={() => selectOffer(id, operatorId, operator, period, price, speed, type)}>
                Szczegóły
              </Button>
            </CardActions>
          </Card>
)};

export default MyCard;