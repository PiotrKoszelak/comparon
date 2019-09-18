import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class NumberOfOffersToCompare extends React.Component {

  static propTypes = {
    numberOffersToComapre: PropTypes.array.isRequired,
  }

    render(){
        
        const {numberOffersToComapre} = this.props;

        return (
          <span>
              {numberOffersToComapre.length}
          </span> 
        );
    }
}

const mapStateToProps = (state) => {
  return {
    numberOffersToComapre: state.numberOffersToComapre,
  }
};
const mapDispatchToProps = {
 };

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfOffersToCompare);