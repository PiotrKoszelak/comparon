import React from "react";
import { selectPrice } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SelectPrice extends React.Component {

  static propTypes = {
    selectedPrice: PropTypes.array.isRequired,
    selectPrice: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    const price = event.target.value;
    this.props.selectPrice(price);
  }
    render(){
        const {selectedPrice} = this.props;
        return (
          <div>
        
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    selectedPrice: state.selectedPrice,
  }
};
const mapDispatchToProps = { selectPrice };

export const SelectPriceComponent = connect(mapStateToProps, mapDispatchToProps)(SelectPrice);