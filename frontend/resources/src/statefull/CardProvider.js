import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectOffer, setDetailWindowOpen, setOffersToCompare } from "../actions";
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
    const { selectOffer, setDetailWindowOpen } = this.props;
    selectOffer(id);
    setDetailWindowOpen(true);
  }

  selectToCompare = (id) => {
    const { offersToCompare, setOffersToCompare } = this.props;
    let newTable = [...offersToCompare];
    if (newTable.includes(id)){
        newTable.splice(newTable.indexOf(id), 1);
    }
    else{
      newTable.push(id);
    }
    setOffersToCompare(newTable);
  }

    render(){
        
        const {id, operator, period, price, speed, type, language, operators, periods, types, offersToCompare} = this.props;
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
              offersToCompare={offersToCompare}
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
    offersToCompare: state.offersToCompare,
  }
};
const mapDispatchToProps = {
  selectOffer, 
  setDetailWindowOpen, 
  setOffersToCompare
 };

export default connect(mapStateToProps, mapDispatchToProps)(CardProvider);