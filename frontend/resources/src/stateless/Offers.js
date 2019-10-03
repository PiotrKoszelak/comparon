import React from "react";
import PropTypes from "prop-types";
import CardProvider from "../statefull/CardProvider";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"


const useStyles = makeStyles({
  offer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
    top: 100,
    width: '100%',
    '@media (max-width:600px)' : {
        justifyContent: 'center',
    }
  },
  error : {
    position: 'relative',
    top: 100,
    width: '100%',
    textAlign: 'center',
  }
});

function Offers  ({ loaded, 
                    data, 
                    selectedOperator, 
                    selectedCity, 
                    selectedPeriod, 
                    selectedType, 
                    selectedPrice, 
                    selectedSpeed, 
                    setNumberSelectedOffers, 
                    language,
                    sortType }){

  const classes = useStyles();

  if (loaded === false){
    return(<p className={classes.error}>{translation.DOWNLOAD_ERROR[language]}</p>)
  }  
  if (data.length === false){
    return (<p className={classes.error}>{translation.NONE[language]}</p>)
  }
  // filtering
  let dataNew = [];
  // if empty then show all offers
  if (selectedOperator.length === 0 && 
    selectedCity.length === 0 && 
    selectedType.length === 0 && 
    selectedPeriod.length === 0 &&
    selectedPrice===0 &&
    selectedSpeed===0 ) {dataNew = [...data]}
  else{
    let withOperator;
    let withCity;
    let withPeriod;
    let withType;
    let withSpeed;
    let withPrice;
    // operator filtering
     if (selectedOperator.length !== 0){
      withOperator = data.filter(function(el) {
            return selectedOperator.includes(el.operator)
        })
      }
      else{
        withOperator = [...data];
      };
    // city filtering
     if (selectedCity.length !== 0){
      withCity = withOperator.filter(function(el) {
            return selectedCity.includes(el.city)
        })
      }
      else{
        withCity = [...withOperator];
      };
      // period filtering
     if (selectedPeriod.length !== 0){
      withPeriod = withCity.filter(function(el) {
            return selectedPeriod.includes(el.period)
        })
      }
      else{
        withPeriod = [...withCity];
      };
      // type filtering
     if (selectedType.length !== 0){
      withType = withPeriod.filter(function(el) {
            return selectedType.includes(el.types)
        })
      }
      else{
        withType = [...withPeriod];
      };
      // price filtering
     if (selectedPrice !== 0){
      withPrice = withType.filter(function(el) {
            return el.price <= selectedPrice
        })
      }
      else{
        withPrice = [...withType];
      };
      // speed filtering
     if (selectedSpeed !== 0){
      withSpeed = withPrice.filter(function(el) {
            return el.speed <= selectedSpeed
        })
      }
      else{
        withSpeed = [...withPrice];
      };

      dataNew = [...withSpeed]
  };

  //sort
  let dataNewSorted = [];
  if (sortType===1)
    dataNewSorted = dataNew.sort((a,b) => {
      return a.price - b.price
  })
  else if (sortType===2)
    dataNewSorted = dataNew.sort((a,b) => {
      return b.price - a.price
  })
  else if (sortType===3)
    dataNewSorted = dataNew.sort((a,b) => {
      return a.speed - b.speed
  })
  else if (sortType===4)
    dataNewSorted = dataNew.sort((a,b) => {
      return b.speed - a.speed
  })

  setNumberSelectedOffers(JSON.stringify(dataNew.length));

  
    return(
        <section className={classes.offer} >
        {dataNewSorted.map(el => (
                < CardProvider
                    key={el.id}
                    id={el.id}
                    operator={el.operator}
                    period={el.period}
                    price={el.price}
                    speed={el.speed}
                    type={el.types}
                />
            ))}
        </section>
  )};

Offers.propTypes = {
  data: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  selectedOperator: PropTypes.array.isRequired,
  selectedCity: PropTypes.array.isRequired,
  selectedPeriod: PropTypes.array.isRequired,
  selectedType: PropTypes.array.isRequired,
};
export default Offers;