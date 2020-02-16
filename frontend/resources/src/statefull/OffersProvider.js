import React, { Component } from "react";
import Offers from "../stateless/Offers";
import { connect } from "react-redux";
import { fetchOffersData, setNumberSelectedOffers} from "../actions";
import PropTypes from "prop-types";

class OffersProvider extends Component {

  static propTypes = {
    selectedOperator: PropTypes.array.isRequired,
    offers: PropTypes.object,
    selectedCity: PropTypes.array.isRequired,
    selectedPeriod: PropTypes.array.isRequired,
    selectedType: PropTypes.array.isRequired,
    selectedPrice: PropTypes.number.isRequired,
    selectedSpeed: PropTypes.number.isRequired,
    fetchOffersData: PropTypes.func.isRequired,
    setNumberSelectedOffers: PropTypes.func.isRequired,
    numberSelectedOffers: PropTypes.string,
    language: PropTypes.string.isRequired,
  }

  componentDidUpdate(prevProps) {
    const { fetchOffersData, selectedCity } = this.props;
    if (selectedCity !== prevProps.selectedCity && selectedCity.length!==0){
      fetchOffersData(selectedCity[0]);
    }
  }
  
  render() {
    const { offers, 
            selectedOperator, 
            selectedCity, 
            selectedPeriod, 
            selectedType, 
            selectedPrice, 
            selectedSpeed, 
            setNumberSelectedOffers, 
            language,
            sortType,
            selectedOfferId} = this.props;
    return(
        <div>
            <Offers 
              selectedOperator={selectedOperator}
              selectedCity={selectedCity}
              offers={offers} 
              selectedPeriod={selectedPeriod}
              selectedType={selectedType} 
              selectedSpeed={selectedSpeed}
              selectedPrice={selectedPrice}
              setNumberSelectedOffers={setNumberSelectedOffers}
              language={language}
              sortType={sortType}
              selectedOfferId={selectedOfferId}
            />
        </div>
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
    selectedOfferId: state.selectedOfferId,
  }
};
const mapDispatchToProps = { fetchOffersData, setNumberSelectedOffers };

export default connect(mapStateToProps, mapDispatchToProps)(OffersProvider);