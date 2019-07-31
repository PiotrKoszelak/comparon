import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MyButton from '../stateless/Button';


class ButtonComparison extends React.Component {

  static propTypes = {
    numberOffersToComapre: PropTypes.array.isRequired,
  }

    render(){
        
        const {numberOffersToComapre} = this.props;

        return (
          <MyButton 
              number={numberOffersToComapre.length}
          />
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

export const ButtonComparisonComponent = connect(mapStateToProps, mapDispatchToProps)(ButtonComparison);