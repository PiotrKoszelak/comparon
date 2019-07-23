import React from "react";
import { selectSpeed } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MySlider from "../stateless/Slider";


const maxSpeed=1000;

class SelectSpeed extends React.Component {

  static propTypes = {
    selectedSpeed: PropTypes.array.isRequired,
    selectSpeed: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    const speed = event.target.value;
    speed<0 ? this.props.selectSpeed(0) : speed>maxSpeed ? this.props.selectSpeed(maxSpeed) : this.props.selectSpeed(speed);
  }

  handleSliderChange = (val) => {
    this.props.selectSpeed(val);
  }

    render(){
        const {selectedSpeed} = this.props;
        return (
          <MySlider 
            title={'Prędkość MB/s'}
            handleChange={this.handleChange}
            value={selectedSpeed}
            maxValue={maxSpeed}
            handleSliderChange={this.handleSliderChange}
          />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    selectedSpeed: state.selectedSpeed,
  }
};
const mapDispatchToProps = { selectSpeed };

export const SelectSpeedComponent = connect(mapStateToProps, mapDispatchToProps)(SelectSpeed);