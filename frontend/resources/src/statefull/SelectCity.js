import React from "react";
import MySelect from "../stateless/Select";
import { citiesFetched, selectCity } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import url from '../config.js'

class SelectCity extends React.Component {

  static propTypes = {
    cities: PropTypes.array.isRequired,
    selectedCity: PropTypes.array.isRequired,
    citiesFetched: PropTypes.func.isRequired,
    selectCity: PropTypes.func.isRequired,
  }

    state = {
      loaded: false,
      placeholder: "Ładuję..."
    };

  handleChange = (event) => {
    const city = event.target.value;
    this.props.selectCity(city);
  }

  componentDidMount() {
    fetch(`${url}/api/city/`)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Błąd pobierania" });
        }
        return response.json();
      })
      .then(data => this.props.citiesFetched(data), this.setState({loaded: true }));
  }
    
    render(){
        const {loaded, placeholder} = this.state;
        const {cities, selectedCity} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
                label='Miasto' 
                data={cities} 
                value={selectedCity} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    selectedCity: state.selectedCity,
  }
};
const mapDispatchToProps = { citiesFetched, selectCity };

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);