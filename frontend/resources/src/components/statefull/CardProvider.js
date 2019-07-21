import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectedOffer, 
         isDetailWindowOpen, 
         offerPriceSelected, 
         offerOperatorSelected, 
         offerPeriodSelected, 
         offerSpeedSelected, 
         offerTypeSelected } from "../actions";
import MyCard from '../stateless/Card';


class CardProvider extends React.Component {

  static propTypes = {
        id: PropTypes.number.isRequired,
        operator: PropTypes.string.isRequired,
        operatorId: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        period: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
        classes: PropTypes.object.isRequired,
  }

  selectOffer = (id, operatorId, operator, period, price, speed, type) => {
    let offer = [id, operatorId];
    this.props.selectedOffer(offer);
    this.props.isDetailWindowOpen(true);
    this.props.offerOperatorSelected(operator);
    this.props.offerPeriodSelected(period);
    this.props.offerPriceSelected(price);
    this.props.offerSpeedSelected(speed);
    this.props.offerTypeSelected(type);
  }

    render(){
        
        const {id, operator, operatorId, period, price, speed, type} = this.props;

        return (
          <MyCard
              id={id}
              operatorId={operatorId}
              operator={operator}
              period={period}
              price={price}
              speed={speed}
              type={type}
              selectOffer={this.selectOffer}
          />
        );
    }
}

const mapStateToProps = (state) => {
  return {

  }
};
const mapDispatchToProps = {
  selectedOffer, 
  isDetailWindowOpen, 
  offerPriceSelected,
  offerOperatorSelected,
  offerPeriodSelected,
  offerSpeedSelected,
  offerTypeSelected};

export const CardProviderComponent = connect(mapStateToProps, mapDispatchToProps)(CardProvider);