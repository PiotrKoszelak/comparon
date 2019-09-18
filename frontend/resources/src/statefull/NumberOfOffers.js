import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class NumberOfOffers extends React.Component {

  static propTypes = {
    numberSelectedOffers: PropTypes.string.isRequired,
  }

    render(){
        
        const {numberSelectedOffers} = this.props;

        return (
          <span>
              Znaleziono <strong> {numberSelectedOffers} ofert</strong>
          </span>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    numberSelectedOffers: state.numberSelectedOffers,
  }
};
const mapDispatchToProps = {
 };

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfOffers);