import React from "react";
import { maxParamFetched } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import url from '../config.js'

class OtherData extends React.Component {

  static propTypes = {
    maxParamFetched: PropTypes.func.isRequired,
  }

  componentDidMount() {
    fetch(`${url}/api/parameters`)
      .then(response => {
        if (response.status !== 200) {
          return [];
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

export default connect(mapStateToProps, mapDispatchToProps)(OtherData);