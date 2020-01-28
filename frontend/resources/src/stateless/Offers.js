import React from "react";
import PropTypes from "prop-types";
import CardProvider from "../statefull/CardProvider";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import * as colors from "../style/colors";
import MyProgress from '../stateless/Progress';


const useStyles = makeStyles({
  offer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
    top: 60,
    width: '100%',
    '@media (max-width:600px)' : {
        justifyContent: 'center',
    }
  },
  error : {
    position: 'relative',
    top: 100,
    maxWidth: 150,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      maxWidth: 200,
    }
  },
  icon : {
    width: 50,
    height: 50,
    marginRight: 20,
    '@media (max-width:600px)' : {
        width: 30,
        height: 30,
    }
  },
  text : {
    fontSize: 20,
    fontFamily: "Lato",
    color: `${colors.secondaryColor}`,
    '@media (max-width:600px)' : {
        fontSize: 15,
    }
  },
});

function Offers  ({ offers, 
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

  if (selectedCity.length === 0){
    setNumberSelectedOffers('0');
    return (
      <div className={classes.error} style={{maxWidth: 400}}>
          <img className={classes.icon} src={require(`../img/city.jpg`)} alt='city' />
          <span className={classes.text}>{translation.CHOOSE_CITY[language]}</span>
      </div>
    )
  }

  if (offers.isLoading === true){
    return(
      <MyProgress />
    )
  }
  else if (offers.success !== true){
    return(
      <div className={classes.error}>
          <ErrorOutlineIcon color='secondary' className={classes.icon} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>)
  }  
  else{
    // filtering
    let filteredData = [...offers.data];
    const parametersFromSelect = [selectedOperator, selectedType, selectedPeriod];
    const parametersFromSlider = [selectedPrice, selectedSpeed];
    parametersFromSelect.map((el, key) => {
        if (el.length !== 0){
          switch (key){
            case 0:
                filteredData = filteredData.filter(elem => el.includes(elem.operator));
                break
            case 1:
                filteredData = filteredData.filter(elem => el.includes(elem.types));
                break
            case 2:
                filteredData = filteredData.filter(elem => el.includes(elem.period));
                break
          }
        }
    });
    parametersFromSlider.map((el, key) => {
        if (el !== 0){
            switch (key){
              case 0:
                  filteredData = filteredData.filter(elem => elem.price <= el);
                  break
              case 1:
                  filteredData = filteredData.filter(elem => elem.speed <= el);
                  break
            }
        }
    })

    //sorting
    if (sortType===1)
        filteredData = filteredData.sort((a,b) => {
        return a.price - b.price
    })
    else if (sortType===2)
        filteredData = filteredData.sort((a,b) => {
        return b.price - a.price
    })
    else if (sortType===3)
        filteredData = filteredData.sort((a,b) => {
        return a.speed - b.speed
    })
    else if (sortType===4)
        filteredData = filteredData.sort((a,b) => {
        return b.speed - a.speed
    })

    setNumberSelectedOffers(JSON.stringify(filteredData.length));

    if (filteredData.length === 0){
      return (<div className={classes.error} >
            <img className={classes.icon} src={require(`../img/none.jpg`)} alt='none' />
            <span className={classes.text}>{translation.NONE[language]}</span>
        </div>)
    }
      return(
          <section className={classes.offer} >
          {filteredData.map(el => (
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
};

Offers.propTypes = {
  offers: PropTypes.object,
  selectedOperator: PropTypes.array.isRequired,
  selectedCity: PropTypes.array.isRequired,
  selectedPeriod: PropTypes.array.isRequired,
  selectedType: PropTypes.array.isRequired,
};
export default Offers;