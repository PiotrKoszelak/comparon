import React, { Component } from "react";
import Offers from "../stateless/Offers";
import { connect } from "react-redux";
import { offersFetched } from "../actions";
import PropTypes from "prop-types";

class OffersProvider extends Component {

  static propTypes = {
    selectedOperator: PropTypes.array.isRequired,
    offers: PropTypes.object.isRequired,
    selectedCity: PropTypes.array.isRequired,
    selectedPeriod: PropTypes.array.isRequired,
    selectedType: PropTypes.array.isRequired,
    offersFetched: PropTypes.func.isRequired,
  }

  state = {
    loaded: false,
    placeholder: "Ładuję...",
  };

  componentDidMount() {
    fetch('api/offer')
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
    const {offers, selectedOperator, selectedCity, selectedPeriod, selectedType} = this.props;
    return(
        <Offers 
          loaded={loaded} 
          placeholder={placeholder}
          selectedOperator={selectedOperator}
          selectedCity={selectedCity}
          data={offers} 
          selectedPeriod={selectedPeriod}
          selectedType={selectedType} 
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
  }
};
const mapDispatchToProps = { offersFetched };

export const OffersProviderComponent = connect(mapStateToProps, mapDispatchToProps)(OffersProvider);