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
    const { selectSpeed } = this.props;
    const speed = event.target.value;
    const {maxSpeed} = this.state;
    speed<0 ? selectSpeed(0) : speed>maxSpeed ? selectSpeed(maxSpeed) : selectSpeed(parseInt(speed));
  }

  handleSliderChange = (val) => {
    const { selectSpeed } = this.props;
    selectSpeed(val);
  }

  componentDidUpdate = (prevProps) => {
    const {maxParam} = this.props;
    const {maxSpeed} = this.state;

    if (maxParam.length !== 0 && maxSpeed === 0){
      const maxSpeedVal = Object.assign({}, maxParam.find(function(el) {
        return el.name === 'max_speed'
      }));
      this.setState({maxSpeed : maxSpeedVal.value});
    }
    else if (maxParam.length === 0 && maxParam !== prevProps.maxParam){
      this.setState({maxSpeed : 1000});
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