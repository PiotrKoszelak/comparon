import React from "react";
import { selectPrice } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MySlider from "../stateless/Slider";
import translation from "../translation"


class SelectPrice extends React.Component {

  static propTypes = {
    selectedPrice: PropTypes.number.isRequired,
    maxParam: PropTypes.object.isRequired,
    selectPrice: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }


  handleChange = (event, maxPrice) => {
    const { selectPrice } = this.props;
    const price = event.target.value;
    price<0 ? selectPrice(0) : price>maxPrice ? selectPrice(maxPrice) : selectPrice(parseInt(price));
  }

  handleSliderChange = (val) => {
    const { selectPrice } = this.props;
    selectPrice(val);
  }


    render(){
        const {selectedPrice, maxParam, language} = this.props;
        const maxPrice = {value: 0};
        if (maxParam.success === true){
              maxPrice.value = maxParam.data.find(({name}) => name === 'max_price').value;
        }
        else{
              maxPrice.value = 300;
        }
              return (
                <MySlider 
                  title={`${translation.PRICE[language]} ${translation.ZLOTY[language]}`}
                  handleChange={(event) => this.handleChange(event, maxPrice)}
                  value={selectedPrice}
                  maxValue={maxPrice.value}
                  handleSliderChange={this.handleSliderChange}
                
                />
              );
        
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