import React, { Component } from "react";
import { connect } from "react-redux";
import Compare from '../stateless/Compare'
import PropTypes from "prop-types";
import url from '../config.js'

export class CompareProvider extends Component {

  static propTypes = {
    numberOffersToCompare: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    operators: PropTypes.array.isRequired,
    periods: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
  }

  state = {
    details : [],
    loadedDetail: false,
    offerInfo : [],
    loadedOfferInfo: false,
  };

  componentDidMount() {
      const {numberOffersToCompare} = this.props;
      let detailsArray = [];
      let offersArray = [];
      for (let el of numberOffersToCompare){
        fetch(`${url}/api/offerdetail/${el}`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            detailsArray.push(data);
          })
          .catch(() => {return null});

          
        fetch(`${url}/api/offer/${el}`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            offersArray.push(data);
          })
          .catch(() => {return null});
      }

      console.log(numberOffersToCompare.length, detailsArray.length);
      if (detailsArray.length === numberOffersToCompare.length) this.setState({loadedDetail : true, details:detailsArray});
      if (offersArray.length === numberOffersToCompare.length) this.setState({loadedOfferInfo : true, offerInfo: offersArray});
  }


  render() {
    const {language, operators, periods, types} = this.props;
    const {loadedDetail, details, loadedOfferInfo, offerInfo} = this.state;
    

    if (loadedDetail===true && loadedOfferInfo===true) {
        return(
          < Compare
            details={details}
            offerInfo={offerInfo}
            language={language}
            operators={operators}
            periods={periods}
            types={types}
          />
        );
      }
      else{
        return ( null )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    operators: state.operators,
    periods: state.periods,
    types: state.types,
    numberOffersToCompare: state.numberOffersToCompare,
  }
};
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(CompareProvider);