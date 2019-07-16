import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
    height: 140,
  },
});

function MyCard ({id, operator, operatorId, period, price, speed, type}){

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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {operator}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Prędkość: {speed} MB/s </p>
            <p>Cena: {price} zł </p>
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Szczegóły
        </Button>
      </CardActions>
    </Card>
  )};

  MyCard.propTypes = {
    id: PropTypes.number.isRequired,
    operator: PropTypes.string.isRequired,
    operatorId: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    period: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
  };

export default MyCard;