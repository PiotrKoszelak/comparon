import React from "react";
import { fetchParametersData } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import url from '../config.js'

class OtherData extends React.Component {

  static propTypes = {
    fetchParametersData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchParametersData } = this.props;
    fetchParametersData();
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
const mapDispatchToProps = { fetchParametersData };

export default connect(mapStateToProps, mapDispatchToProps)(OtherData);