import React, { Component } from "react";
import { connect } from "react-redux";
import { isDetailWindowOpen } from "../actions";
import Detail from '../stateless/Detail'
import PropTypes from "prop-types";

export class DetailProvider extends Component {

  static propTypes = {
    isDetailOpen: PropTypes.bool.isRequired,
    selectedOffer: PropTypes.object.isRequired,
    isDetailWindowOpen: PropTypes.func.isRequired,
  }


  closeDetailWindow = () => {
    this.props.isDetailWindowOpen(false);
  }

  render() {
    const {isDetailOpen, selectedOffer} = this.props;
    if (isDetailOpen === true) {
        return(
          < Detail
            offerPrice={selectedOffer.price}
            offerOperator={selectedOffer.operator}
            offerPeriod={selectedOffer.period}
            offerSpeed={selectedOffer.speed}
            offerType={selectedOffer.type}
            closeDetailWindow={this.closeDetailWindow}
          />
        );
      }
      else{
        return ( false )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    isDetailOpen : state.isDetailOpen,
    selectedOffer : state.selectedOffer,
  }
};
const mapDispatchToProps = { isDetailWindowOpen };

export const DetailProviderComponent = connect(mapStateToProps, mapDispatchToProps)(DetailProvider);