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

function Offers  ({ loaded, placeholder, data, selectedOperator, selectedCity, selectedPeriod, selectedType}){

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
    if (selectedOperator.length == 0 && selectedCity.length == 0) dataNew.push(data[i]);
    if (selectedOperator.length == 0 && selectedCity.length != 0){
      selectedCity.includes(data[i].city) ? dataNew.push(data[i]) : {};
    }
    if (selectedOperator.length != 0 && selectedCity.length == 0){
      selectedOperator.includes(data[i].operator) ? dataNew.push(data[i]) : {};
    }
    if (selectedOperator.length != 0 && selectedCity.length != 0){
      (selectedCity.includes(data[i].city) && selectedOperator.includes(data[i].operator)) ? dataNew.push(data[i]) : {};
    }
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