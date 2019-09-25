import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectOffer, isDetailWindowOpen, setNumberOffersToComapre } from "../actions";
import Card from '../stateless/Card';


class CardProvider extends React.Component {

  static propTypes = {
        id: PropTypes.number.isRequired,
        operator: PropTypes.string.isRequired,
        operatorId: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
        selectOffer: PropTypes.func.isRequired,
        isDetailWindowOpen: PropTypes.func.isRequired,
        language: PropTypes.string.isRequired,
  }

  selectOffer = (id, operator, period, price, speed, type) => {
    let offer = {'id' : id,
                 'operator' : operator,
                 'period' : period,
                 'price' : price,
                 'speed' : speed,
                 'type' : type };
    this.props.selectOffer(offer);
    this.props.isDetailWindowOpen(true);
  }

  selectToCompare = (id) => {
    let newTable = [...this.props.numberOffersToComapre];
    if (newTable.includes(id)){
        newTable.splice(newTable.indexOf(id), 1);
    }
    else{
      newTable.push(id);
    }
    this.props.setNumberOffersToComapre(newTable);
  }

    render(){
        
        const {id, operator, period, price, speed, type, language, operators, cities, periods, types} = this.props;
        return (
          <Card
              id={id}
              operator={operator}
              period={period}
              price={price}
              speed={speed}
              type={type}
              selectOffer={this.selectOffer}
              selectToCompare={this.selectToCompare}
              language={language}
              operators={operators}
              cities={cities}
              periods={periods}
              types={types}
          />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    operators: state.operators,
    cities: state.cities,
    periods: state.periods,
    types: state.types,
  }
};
const mapDispatchToProps = {
  selectOffer, 
  isDetailWindowOpen, 
  setNumberOffersToComapre
 };

export default connect(mapStateToProps, mapDispatchToProps)(CardProvider);