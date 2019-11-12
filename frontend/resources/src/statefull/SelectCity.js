import React from "react";
import { MultipleSelect } from "../stateless/Select";
import { fetchDataCities, selectCity } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import translation from "../translation"

class SelectCity extends React.Component {

  static propTypes = {
    cities: PropTypes.object.isRequired,
    selectedCity: PropTypes.array.isRequired,
    fetchDataCities: PropTypes.func.isRequired,
    selectCity: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

  handleChange = (event) => {
    const { selectCity } = this.props;
    const city = event.target.value;
    selectCity(city);
  }

  componentDidMount() {
    const { fetchDataCities } = this.props;
    fetchDataCities();
  }
    
    render(){
        const {cities, selectedCity, language} = this.props;
        return (
              <MultipleSelect 
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
const mapDispatchToProps = { fetchDataCities, selectCity };

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);