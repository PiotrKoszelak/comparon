import React, { Component } from "react";
import Offers from "../stateless/Offers";
import { connect } from "react-redux";
import { offersFetched, setNumberSelectedOffers} from "../actions";
import PropTypes from "prop-types";
import url from '../config.js'
import translation from "../translation"

class OffersProvider extends Component {

  static propTypes = {
    selectedOperator: PropTypes.array.isRequired,
    offers: PropTypes.array.isRequired,
    selectedCity: PropTypes.array.isRequired,
    selectedPeriod: PropTypes.array.isRequired,
    selectedType: PropTypes.array.isRequired,
    selectedPrice: PropTypes.number.isRequired,
    selectedSpeed: PropTypes.number.isRequired,
    offersFetched: PropTypes.func.isRequired,
    setNumberSelectedOffers: PropTypes.func.isRequired,
    numberSelectedOffers: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }

  state = {
    loaded: false,
  };

  componentDidMount() {
    fetch(`${url}/api/offers/`)
    .then(response => {
      if (response.status === 200) {
        this.setState({loaded: true });
        return response.json();
      }
      else{
        return []
      }})
    .then(data => this.props.offersFetched(data))
    .catch();
  }
  
  render() {
    const {loaded} = this.state;
    const { offers, 
            selectedOperator, 
            selectedCity, 
            selectedPeriod, 
            selectedType, 
            selectedPrice, 
            selectedSpeed, 
            setNumberSelectedOffers, 
            language,
            sortType } = this.props;
    return(
        <Offers 
          loaded={loaded} 
          selectedOperator={selectedOperator}
          selectedCity={selectedCity}
          data={offers} 
          selectedPeriod={selectedPeriod}
          selectedType={selectedType} 
          selectedSpeed={selectedSpeed}
          selectedPrice={selectedPrice}
          setNumberSelectedOffers={setNumberSelectedOffers}
          language={language}
          sortType={sortType}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    selectedOperator: state.selectedOperator,
    selectedCity: state.selectedCity,
    selectedPeriod: state.selectedPeriod,
    selectedType: state.selectedType,
    selectedPrice: state.selectedPrice,
    selectedSpeed: state.selectedSpeed,
    numberSelectedOffers: state.numberSelectedOffers,
    language: state.language,
    sortType: state.sortType,
  }
};
const mapDispatchToProps = { offersFetched, setNumberSelectedOffers };

export default connect(mapStateToProps, mapDispatchToProps)(OffersProvider);