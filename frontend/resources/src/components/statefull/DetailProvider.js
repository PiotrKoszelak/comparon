import React, { Component } from "react";
import { connect } from "react-redux";
import { isDetailWindowOpen } from "../actions";
import Detail from '../stateless/Detail'

export class DetailProvider extends Component {


  closeDetailWindow = () => {
    this.props.isDetailWindowOpen(false);
  }

  render() {
    const {isDetailOpen, offerPrice, offerOperator, offerPeriod, offerSpeed, offerType} = this.props;
    if (isDetailOpen === true) {
        return(
          < Detail
            offerPrice={offerPrice}
            offerOperator={offerOperator}
            offerPeriod={offerPeriod}
            offerSpeed={offerSpeed}
            offerType={offerType}
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
    offerPrice : state.offerPrice,
    offerOperator: state.offerOperator,
    offerPeriod: state.offerPeriod,
    offerSpeed: state.offerSpeed,
    offerType: state.offerType,
  }
};
const mapDispatchToProps = { isDetailWindowOpen };

export const DetailProviderComponent = connect(mapStateToProps, mapDispatchToProps)(DetailProvider);