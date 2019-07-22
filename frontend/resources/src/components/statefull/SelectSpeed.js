import React from "react";
import { selectSpeed } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SelectSpeed extends React.Component {

  static propTypes = {
    selectedSpeed: PropTypes.array.isRequired,
    selectSpeed: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    const speed = event.target.value;
    this.props.selectSpeed(speed);
  }
    render(){
        const {selectedSpeed} = this.props;
        return (
          <div>
        
          </div>
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