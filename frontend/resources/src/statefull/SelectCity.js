import React from "react";
import { fetchDataCities, selectCity } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import translation from "../translation"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


class SelectCity extends React.Component {

  static propTypes = {
    cities: PropTypes.object.isRequired,
    selectedCity: PropTypes.array.isRequired,
    fetchDataCities: PropTypes.func.isRequired,
    selectCity: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { fetchDataCities } = this.props;
    fetchDataCities();
  }

  handleChangeInput = (event) => {
    const { selectCity, cities } = this.props;
    console.log('aa');
    const valueInput = event.target.value;
    let valueCapitalized = '';
    if (valueInput) valueCapitalized = valueInput.charAt(0).toUpperCase() + valueInput.slice(1).toLowerCase();
    const foundCity = cities.data.filter(({value}) => value==valueCapitalized);
    if (foundCity.length === 1){
      selectCity([foundCity[0].id]);
    }
    else{
      selectCity([]);
    }
  }

  handleChange = (event, val) => {
    const { selectCity, cities } = this.props;
    const foundCity = cities.data.filter(({value}) => value==val);
    if (foundCity.length === 1){
      selectCity([foundCity[0].id]);
    }
    else{
      selectCity([]);
    }
  }
  
    
    render(){
        const {cities, selectedCity, language} = this.props;

        return (

              <Autocomplete
                freeSolo
                options={cities.data ? cities.data.map(option => option.value) : null}
                style={{width: '100%'}}
                onChange={(event, value) => this.handleChange(event, value)}
                renderInput={params => (
                    <TextField 
                      error={selectedCity.length===0 ? true : false}
                      {...params} 
                      onChange={this.handleChangeInput}  
                      label={translation.CITY[language]}
                      variant="outlined" 
                      style={{width: '100%'}} 
                    />
                )}
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