import React from "react";
import PropTypes from "prop-types";
import MyCard from "./Card";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  offer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  subtitle: {
    fontFamily: 'Lato',
  }
});

function Offers  ({ loaded, placeholder, data, operator, city, period, type}){

  const classes = useStyles();

  if (loaded === false){
    return(<p>{placeholder}</p>)
  }  
  if (data.length == false){
    return (<p>Brak ofert</p>)
  }

  // filtering
  let dataNew = [];
  for (let i=0; i<data.length; i++) {
    if (operator.length == 0 && city.length == 0) dataNew.push(data[i]);
    if (operator.length == 0 && city.length != 0){
       city.includes(data[i].city) ? dataNew.push(data[i]) : {};
    }
    if (operator.length != 0 && city.length == 0){
      operator.includes(data[i].operator) ? dataNew.push(data[i]) : {};
    }
    if (operator.length != 0 && city.length != 0){
      (city.includes(data[i].city) && operator.includes(data[i].operator)) ? dataNew.push(data[i]) : {};
    }
  };

    let setPeriod;
    return(
    <section>
      <h2 className={classes.subtitle}>
        Znaleziono <strong>{dataNew.length} ofert</strong>
      </h2>
      <section className={classes.offer} >
      {dataNew.map(el => (
              < MyCard 
                  id={el.id}
                  operator={el.operator}
                  operatorId={el.operator_id}
                  period={setPeriod}
                  price={el.price}
                  speed={el.speed}
                  type={el.type}
              />
          ))}
      </section>

    </section>
  )};

Offers.propTypes = {
  data: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  operator: PropTypes.array.isRequired,
  city: PropTypes.array.isRequired,
  period: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Offers;