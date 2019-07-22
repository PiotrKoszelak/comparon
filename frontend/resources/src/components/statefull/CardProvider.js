import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectOffer, 
         isDetailWindowOpen } from "../actions";
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
        selectOffer: PropTypes.func.isRequired,
        isDetailWindowOpen: PropTypes.func.isRequired,
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
  selectOffer, 
  isDetailWindowOpen, 
 };

export const CardProviderComponent = connect(mapStateToProps, mapDispatchToProps)(CardProvider);