import React from "react";
import MySelect from "../stateless/Select";
import { typesFetched, selectType } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import url from '../config.js'

class SelectType extends React.Component {

  static propTypes = {
    types: PropTypes.array.isRequired,
    selectedType: PropTypes.array.isRequired,
    typesFetched: PropTypes.func.isRequired,
    selectType: PropTypes.func.isRequired,
  }

    state = {
      loaded: false,
      placeholder: "Ładuję...",
    };

  handleChange = (event) => {
    const typ = event.target.value;
    this.props.selectType(typ);
  }

  componentDidMount() {
    fetch(`${url}/api/type/`)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Błąd pobierania" });
        }
        return response.json();
      })
      .then(data => this.props.typesFetched(data), this.setState({loaded: true }));
  }
    
    render(){
        const {loaded, placeholder} = this.state;
        const {types, selectedType} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
                label='Typ' 
                data={types} 
                value={selectedType} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    types: state.types,
    selectedType: state.selectedType,
  }
};
const mapDispatchToProps = { typesFetched, selectType };

export default connect(mapStateToProps, mapDispatchToProps)(SelectType);