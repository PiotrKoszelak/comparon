import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class NumberOfOffersToCompare extends React.Component {

  static propTypes = {
    numberOffersToCompare: PropTypes.array.isRequired,
  }

    render(){
        
        const {numberOffersToCompare} = this.props;

        return (
          <span>
              {numberOffersToCompare.length}
          </span> 
        );
    }
}

const mapStateToProps = (state) => {
  return {
    numberOffersToCompare: state.numberOffersToCompare,
  }
};
const mapDispatchToProps = {
 };

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfOffersToCompare);