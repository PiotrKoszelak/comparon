import React from "react";
import { selectPrice } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MySlider from "../stateless/Slider";


class SelectPrice extends React.Component {

  static propTypes = {
    selectedPrice: PropTypes.array.isRequired,
    maxParam: PropTypes.array.isRequired,
    selectPrice: PropTypes.func.isRequired,
  }


  handleChange = (event, maxPrice) => {
    const price = event.target.value;
    price<0 ? this.props.selectPrice(0) : price>maxPrice ? this.props.selectPrice(maxPrice) : this.props.selectPrice(price);
  }

  handleSliderChange = (val) => {
    this.props.selectPrice(val);
  }


    render(){
        const {selectedPrice, maxParam} = this.props;
        if (maxParam.length !== 0){
              const maxPrice = Object.assign({}, maxParam.find(function(el) {
                return el.name === 'max_price'
              }));
            
              return (
                <MySlider 
                  title={'Cena'}
                  handleChange={(event) => this.handleChange(event, maxPrice)}
                  value={selectedPrice}
                  maxValue={maxPrice.value}
                  handleSliderChange={this.handleSliderChange}
                
                />
              );
        }
        else{
          return (null)
        }
    }
}

const mapStateToProps = (state) => {
  return {
    selectedPrice: state.selectedPrice,
    maxParam: state.maxParam,
  }
};
const mapDispatchToProps = { selectPrice };

export const SelectPriceComponent = connect(mapStateToProps, mapDispatchToProps)(SelectPrice);