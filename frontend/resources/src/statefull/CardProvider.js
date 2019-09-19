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

  selectOffer = (id, operatorId, operator, period, price, speed, type) => {
    let offer = {'id' : id,
                 'operatorId' : operatorId,
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
        
        const {id, operator, operatorId, period, price, speed, type, language} = this.props;
        return (
          <Card
              id={id}
              operatorId={operatorId}
              operator={operator}
              period={period}
              price={price}
              speed={speed}
              type={type}
              selectOffer={this.selectOffer}
              selectToCompare={this.selectToCompare}
              language={language}
          />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
  }
};
const mapDispatchToProps = {
  selectOffer, 
  isDetailWindowOpen, 
  setNumberOffersToComapre
 };

export default connect(mapStateToProps, mapDispatchToProps)(CardProvider);