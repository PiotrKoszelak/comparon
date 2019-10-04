import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectOffer, setDetailWindowOpen, setNumberOffersToCompare } from "../actions";
import Card from '../stateless/Card';


class CardProvider extends React.Component {

  static propTypes = {
        id: PropTypes.number.isRequired,
        operator: PropTypes.number.isRequired,
        type: PropTypes.number.isRequired,
        period: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
        selectOffer: PropTypes.func.isRequired,
        setDetailWindowOpen: PropTypes.func.isRequired,
        language: PropTypes.string.isRequired,
  }

  selectOffer = (id) => {
    this.props.selectOffer(id);
    this.props.setDetailWindowOpen(true);
  }

  selectToCompare = (id) => {
    let newTable = [...this.props.numberOffersToCompare];
    if (newTable.includes(id)){
        newTable.splice(newTable.indexOf(id), 1);
    }
    else{
      newTable.push(id);
    }
    this.props.setNumberOffersToCompare(newTable);
  }

    render(){
        
        const {id, operator, period, price, speed, type, language, operators, periods, types, numberOffersToCompare} = this.props;
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
              periods={periods}
              types={types}
              numberOffersToCompare={numberOffersToCompare}
          />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    operators: state.operators,
    periods: state.periods,
    types: state.types,
    numberOffersToCompare: state.numberOffersToCompare,
  }
};
const mapDispatchToProps = {
  selectOffer, 
  setDetailWindowOpen, 
  setNumberOffersToCompare
 };

export default connect(mapStateToProps, mapDispatchToProps)(CardProvider);