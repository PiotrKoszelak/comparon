import React, { Component } from "react";
import Flag from "../stateless/Flag";
import { connect } from "react-redux";
import { setLanguage } from "../actions";
import PropTypes from "prop-types";

class Language extends Component {
  
  static propTypes = {
    setLanguage: PropTypes.func.isRequired,
  }

  handleChange = (language) => {
    this.props.setLanguage(language);
  }

  render() {
    
    return(
        <span>
            <Flag language='pl' handleChange={this.handleChange} />
            <Flag language='en' handleChange={this.handleChange} />
        </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
  }
};
const mapDispatchToProps = { setLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(Language);