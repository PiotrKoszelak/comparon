import React from "react";
import PropTypes from "prop-types";
import CardProvider from "../statefull/CardProvider";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CircularProgress from '@material-ui/core/CircularProgress';


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
    width: 150,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      width: 80,
    }
  },
  icon : {
    width: 50,
    height: 50,
    '@media (max-width:600px)' : {
        width: 30,
        height: 30,
    }
  },
  text : {
    fontSize: 20,
    '@media (max-width:600px)' : {
        fontSize: 15,
    }
  },
  progress: {
    position: 'relative',
    top: 100,
  }
});

function Offers  ({ loaded, 
                    loading,
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

  if (loading===true && loaded === false){
    return(
      <CircularProgress className={classes.progress} color="secondary" disableShrink />
    )
  }
  else if (loaded === false && loading === false){
    return(
      <div className={classes.error}>
          <ErrorOutlineIcon color='secondary' className={classes.icon} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>)
  }  
  else {
    if (!data){
      return(
        <CircularProgress className={classes.progress} color="secondary" disableShrink />
      )
    }
    else{
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

      if (dataNew.length === 0){
        return (<div className={classes.error} >
              <LocalOfferIcon color='secondary' className={classes.icon} />
              <span className={classes.text}>{translation.NONE[language]}</span>
          </div>)
      }
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
      )}
    }
};

Offers.propTypes = {
  data: PropTypes.array,
  loaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedOperator: PropTypes.array.isRequired,
  selectedCity: PropTypes.array.isRequired,
  selectedPeriod: PropTypes.array.isRequired,
  selectedType: PropTypes.array.isRequired,
};
export default Offers;