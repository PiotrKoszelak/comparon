import React, { Component } from "react";
import Offers from "../stateless/Offers";
import { connect } from "react-redux";
import { fetchOffersData, setNumberSelectedOffers} from "../actions";
import PropTypes from "prop-types";
import DetailProvider from './DetailProvider';

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
    numberSelectedOffers: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { fetchOffersData } = this.props;
    fetchOffersData();
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
            isDetailOpen} = this.props;
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
            />
            {isDetailOpen ? <DetailProvider /> : null}
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
    isDetailOpen : state.isDetailOpen,
  }
};
const mapDispatchToProps = { fetchOffersData, setNumberSelectedOffers };

export default connect(mapStateToProps, mapDispatchToProps)(OffersProvider);