import React from "react";
import { selectPrice } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MySlider from "../stateless/Slider";

const maxPrice=300;

class SelectPrice extends React.Component {

  static propTypes = {
    selectedPrice: PropTypes.array.isRequired,
    selectPrice: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    const price = event.target.value;
    price<0 ? this.props.selectPrice(0) : price>maxPrice ? this.props.selectPrice(maxPrice) : this.props.selectPrice(price);
  }

  handleSliderChange = (val) => {
    this.props.selectPrice(val);
  }


    render(){
        const {selectedPrice} = this.props;
        return (
          <MySlider 
            title={'Cena'}
            handleChange={this.handleChange}
            value={selectedPrice}
            maxValue={maxPrice}
            handleSliderChange={this.handleSliderChange}
          
          />
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