import React from "react";
import { selectSpeed } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Slider from "../stateless/Slider";
import translation from "../translation"


class SelectSpeed extends React.Component {

  static propTypes = {
    selectedSpeed: PropTypes.number.isRequired,
    selectSpeed: PropTypes.func.isRequired,
    maxParam: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
  }

  state = {
    maxSpeed : 0,
  }

  handleChange = (event) => {
    const speed = event.target.value;
    const {maxSpeed} = this.state;
    speed<0 ? this.props.selectSpeed(0) : speed>maxSpeed ? this.props.selectSpeed(maxSpeed) : this.props.selectSpeed(parseInt(speed));
  }

  handleSliderChange = (val) => {
    this.props.selectSpeed(val);
  }

  componentDidUpdate = () => {
    const {maxParam} = this.props;
    const {maxSpeed} = this.state;

    if (maxParam.length !== 0 && maxSpeed === 0){
      const maxSpeedVal = Object.assign({}, maxParam.find(function(el) {
        return el.name === 'max_speed'
      }));
      this.setState({maxSpeed : maxSpeedVal.value});
    }
  }

    render(){
        const {selectedSpeed, language} = this.props;
        const {maxSpeed} = this.state;
      
        return (
          <Slider 
            title={`${translation.SPEED[language]} MB/s`}
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
    maxParam: state.maxParam,
    language: state.language,
  }
};
const mapDispatchToProps = { selectSpeed };

export default connect(mapStateToProps, mapDispatchToProps)(SelectSpeed);