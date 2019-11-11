import React from "react";
import { MultipleSelect } from "../stateless/Select";
import { citiesFetched, selectCity } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import url from '../config.js'
import translation from "../translation"

class SelectCity extends React.Component {

  static propTypes = {
    cities: PropTypes.array.isRequired,
    selectedCity: PropTypes.array.isRequired,
    citiesFetched: PropTypes.func.isRequired,
    selectCity: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

    state = {
      isLoaded: false,
    };

  handleChange = (event) => {
    const { selectCity } = this.props;
    const city = event.target.value;
    selectCity(city);
  }

  componentDidMount() {
    const { citiesFetched } = this.props;
    fetch(`${url}/api/city/`)
    .then(response => {
      if (response.status === 200) {
        this.setState({isLoaded: true });
        return response.json();
      }
      else{
        return []
      }})
    .then(data => citiesFetched(data))
    .catch();
  }
    
    render(){
        const {isLoaded} = this.state;
        const {cities, selectedCity, language} = this.props;
        return (
              <MultipleSelect 
                isLoaded={isLoaded} 
                label={translation.CITY[language]}
                data={cities} 
                value={selectedCity} 
                handleChange={this.handleChange} 
                language={language}
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    selectedCity: state.selectedCity,
    language: state.language,
  }
};
const mapDispatchToProps = { citiesFetched, selectCity };

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);