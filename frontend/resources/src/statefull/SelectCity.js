import React from "react";
import MySelect from "../stateless/Select";
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
      loaded: false,
    };

  handleChange = (event) => {
    const city = event.target.value;
    this.props.selectCity(city);
  }

  componentDidMount() {
    fetch(`${url}/api/city/`)
    .then(response => {
      if (response.status === 200) {
        this.setState({loaded: true });
        return response.json();
      }
      else{
        return []
      }})
    .then(data => this.props.citiesFetched(data))
    .catch();
  }
    
    render(){
        const {loaded} = this.state;
        const {cities, selectedCity, language} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
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