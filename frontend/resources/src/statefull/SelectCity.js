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
      placeholder: ""
    };

  handleChange = (event) => {
    const city = event.target.value;
    this.props.selectCity(city);
  }

  componentDidMount() {
    const {language} = this.props;
    fetch(`${url}/api/city/`)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] });
        }
        return response.json();
      })
      .then(data => this.props.citiesFetched(data), this.setState({loaded: true }));
  }
    
    render(){
        const {loaded, placeholder} = this.state;
        const {cities, selectedCity, language} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
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