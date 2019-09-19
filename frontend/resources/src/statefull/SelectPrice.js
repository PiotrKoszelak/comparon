import React from "react";
import { selectPrice } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MySlider from "../stateless/Slider";
import translation from "../translation"


class SelectPrice extends React.Component {

  static propTypes = {
    selectedPrice: PropTypes.number.isRequired,
    maxParam: PropTypes.array.isRequired,
    selectPrice: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }


  handleChange = (event, maxPrice) => {
    const price = event.target.value;
    price<0 ? this.props.selectPrice(0) : price>maxPrice ? this.props.selectPrice(maxPrice) : this.props.selectPrice(price);
  }

  handleSliderChange = (val) => {
    this.props.selectPrice(val);
  }


    render(){
        const {selectedPrice, maxParam, language} = this.props;
        if (maxParam.length !== 0){
              const maxPrice = Object.assign({}, maxParam.find(function(el) {
                return el.name === 'max_price'
              }));
            
              return (
                <MySlider 
                  title={translation.PRICE[language]}
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
    language: state.language,
  }
};
const mapDispatchToProps = { selectPrice };

export default connect(mapStateToProps, mapDispatchToProps)(SelectPrice);