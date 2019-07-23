import React from "react";
import PropTypes from "prop-types";
import { CardProviderComponent } from "../statefull/CardProvider";
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

function Offers  ({ loaded, placeholder, data, selectedOperator, selectedCity, selectedPeriod, selectedType, selectedPrice, selectedSpeed}){

  const classes = useStyles();

  if (loaded === false){
    return(<p>{placeholder}</p>)
  }  
  if (data.length == false){
    return (<p>Brak ofert</p>)
  }

  // filtering
  let dataNew = [];
  // if empty then show all offers
  if (selectedOperator.length == 0 && 
    selectedCity.length == 0 && 
    selectedType.length == 0 && 
    selectedPeriod.length == 0 &&
    selectedPrice==0 &&
    selectedSpeed==0 ) {dataNew = [...data]}
  else{
    let withOperator;
    let withCity;
    let withPeriod;
    let withType;
    let withSpeed;
    let withPrice;
    // operator filtering
     if (selectedOperator.length != 0){
      withOperator = data.filter(function(el) {
            return selectedOperator.includes(el.operator)
        })
      }
      else{
        withOperator = [...data];
      };
    // city filtering
     if (selectedCity.length != 0){
      withCity = withOperator.filter(function(el) {
            return selectedCity.includes(el.city)
        })
      }
      else{
        withCity = [...withOperator];
      };
      // period filtering
     if (selectedPeriod.length != 0){
      withPeriod = withCity.filter(function(el) {
            return selectedPeriod.includes(el.period)
        })
      }
      else{
        withPeriod = [...withCity];
      };
      // type filtering
     if (selectedType.length != 0){
      withType = withPeriod.filter(function(el) {
            return selectedType.includes(el.type)
        })
      }
      else{
        withType = [...withPeriod];
      };
      // price filtering
     if (selectedPrice != 0){
      withPrice = withType.filter(function(el) {
            return el.price <= selectedPrice
        })
      }
      else{
        withPrice = [...withType];
      };
      // speed filtering
     if (selectedSpeed != 0){
      withSpeed = withPrice.filter(function(el) {
            return el.speed <= selectedSpeed
        })
      }
      else{
        withSpeed = [...withPrice];
      };

      dataNew = [...withSpeed]
  };

  
    return(
    <section>
      <h2 className={classes.subtitle}>
        Znaleziono <strong>{dataNew.length} ofert</strong>
      </h2>
      <section className={classes.offer} >
      {dataNew.map(el => (
              < CardProviderComponent 
                  id={el.id}
                  operator={el.operator}
                  operatorId={el.operator_id}
                  period={el.period}
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
  selectedOperator: PropTypes.array.isRequired,
  selectedCity: PropTypes.array.isRequired,
  selectedPeriod: PropTypes.string.isRequired,
  selectedType: PropTypes.string.isRequired,
};
export default Offers;