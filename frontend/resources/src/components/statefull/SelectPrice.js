import React from "react";
import { selectedPrice } from "../actions";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Slider } from 'material-ui-slider';

class SelectPrice extends React.Component {

  handleChange = (event) => {
    const price = event.target.value;
    this.props.selectedPrice(price);
  }

  valuetext = (price) => {
    return `${price}°C`;
  }
    
    render(){
        const {price} = this.props;
        console.log(price)
        return (
          <div>
              <Typography id="discrete-slider" gutterBottom>
                Temperature
              </Typography>
              <Slider
                defaultValue={30}
                getAriaValueText={price}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
              />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    price: state.price,
  }
};
const mapDispatchToProps = { selectedPrice };

export const SelectPriceComponent = connect(mapStateToProps, mapDispatchToProps)(SelectPrice);