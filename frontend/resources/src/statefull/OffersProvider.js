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
    placeholder: "",
  };

  componentDidMount() {
    const {language} = this.props;
    fetch(`${url}/api/offers/`)
      .then(response => {
        if (response.status !== 200) {
        return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] });
      }
      return response.json()
    })
      .then(data => this.props.offersFetched(data), this.setState({loaded: true }))
      .catch(() => {return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] })});
  }
  
  render() {
    const {loaded, placeholder} = this.state;
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
          placeholder={placeholder}
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