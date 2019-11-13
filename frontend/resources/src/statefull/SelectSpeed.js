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
    maxParam: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
  }

  handleChange = (event, maxSpeed) => {
    const { selectSpeed } = this.props;
    const speed = event.target.value;
    speed<0 ? selectSpeed(0) : speed>maxSpeed ? selectSpeed(maxSpeed) : selectSpeed(parseInt(speed));
  }

  handleSliderChange = (val) => {
    const { selectSpeed } = this.props;
    selectSpeed(val);
  }

    render(){
        const {selectedSpeed, language, maxParam} = this.props;
        const maxSpeed = {value: 0};
        if (maxParam.success === true){
              maxSpeed.value = maxParam.data.find(({name}) => name === 'max_speed').value;
        }
        else{
          maxSpeed.value = 1000;
        }
      
        return (
          <Slider 
            title={`${translation.SPEED[language]} MB/s`}
            handleChange={(event) => this.handleChange(event, maxSpeed)}
            value={selectedSpeed}
            maxValue={maxSpeed.value}
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