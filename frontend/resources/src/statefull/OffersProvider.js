import React, { Component } from "react";
import Offers from "../stateless/Offers";
import { connect } from "react-redux";
import { offersFetched, setNumberSelectedOffers} from "../actions";
import PropTypes from "prop-types";
import url from '../config.js'

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
  }

  state = {
    loaded: false,
    placeholder: "Ładuję...",
  };

  componentDidMount() {
    fetch(`${url}/api/offer/`)
      .then(response => {
        if (response.status !== 200) {
        return this.setState({ placeholder: "Błąd pobierania" });
      }
      return response.json()
    })
      .then(data => this.props.offersFetched(data), this.setState({loaded: true }));
  }
  
  render() {
    const {loaded, placeholder} = this.state;
    const {offers, selectedOperator, selectedCity, selectedPeriod, selectedType, selectedPrice, selectedSpeed, setNumberSelectedOffers} = this.props;
    return(
        <Offers 
          loaded={loaded} 
          placeholder={placeholder}
          selectedOperator={selectedOperator}
          selectedCity={selectedCity}
          data={offers} 
          selectedPeriod={selectedPeriod}
          selectedType={selectedType} 
          selectedSpeed={selectedSpeed}
          selectedPrice={selectedPrice}
          setNumberSelectedOffers={setNumberSelectedOffers}
          
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
  }
};
const mapDispatchToProps = { offersFetched, setNumberSelectedOffers };

export default connect(mapStateToProps, mapDispatchToProps)(OffersProvider);