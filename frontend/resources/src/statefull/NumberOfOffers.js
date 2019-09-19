import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import translation from "../translation"


class NumberOfOffers extends React.Component {

  static propTypes = {
    numberSelectedOffers: PropTypes.string.isRequired,
  }

    render(){
        
        const {numberSelectedOffers, language} = this.props;

        return (
          <span>
              {translation.FOUND_OFFERS[language]} : <strong>{numberSelectedOffers}</strong>
          </span>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    numberSelectedOffers: state.numberSelectedOffers,
    language: state.language,
  }
};
const mapDispatchToProps = {
 };

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfOffers);