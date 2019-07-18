import React from "react";
import MySelect from "../stateless/Select";
import { citiesFetched, selectedCity } from "../actions";
import { connect } from "react-redux";

class SelectCity extends React.Component {
    state = {
      loaded: false,
      placeholder: "Ładuję..."
    };

  handleChange = (event) => {
    const city = event.target.value;
    this.props.selectedCity(city);
  }

  componentDidMount() {
    fetch("api/city")
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
        const {cities, city} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
                label='Miasto' 
                data={cities} 
                value={city} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    city: state.city,
  }
};
const mapDispatchToProps = { citiesFetched, selectedCity };

export const SelectCityComponent = connect(mapStateToProps, mapDispatchToProps)(SelectCity);