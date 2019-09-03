import React from "react";
import { maxParamFetched } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class OtherData extends React.Component {

  static propTypes = {
    maxParamFetched: PropTypes.func.isRequired,
  }

  componentDidMount() {
    fetch("api/parameters")
      .then(response => {
        if (response.status !== 200) {
          return null;
        }
        return response.json();
      })
      .then(data => this.props.maxParamFetched(data));
  }
    
    render(){
        return (
            null
        );
    }
}

const mapStateToProps = (state) => {
  return {
  }
};
const mapDispatchToProps = { maxParamFetched };

export const OtherDataComponent = connect(mapStateToProps, mapDispatchToProps)(OtherData);