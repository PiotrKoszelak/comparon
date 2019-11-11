import React from "react";
import { MultipleSelect } from "../stateless/Select";
import { typesFetched, selectType } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import url from '../config.js'
import translation from "../translation"

class SelectType extends React.Component {

  static propTypes = {
    types: PropTypes.array.isRequired,
    selectedType: PropTypes.array.isRequired,
    typesFetched: PropTypes.func.isRequired,
    selectType: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

    state = {
      isLoaded: false,
    };

  handleChange = (event) => {
    const { selectType } = this.props;
    const typ = event.target.value;
    selectType(typ);
  }

  componentDidMount() {
    const { typesFetched } = this.props;
    fetch(`${url}/api/type/`)
      .then(response => {
        if (response.status === 200) {
          this.setState({isLoaded: true });
          return response.json();
        }
        else{
          return []
        }})
      .then(data => typesFetched(data))
  }
    
    render(){
        const {isLoaded} = this.state;
        const {types, selectedType, language} = this.props;
        return (
              <MultipleSelect 
                isLoaded={isLoaded} 
                label={translation.TYPE[language]} 
                data={types} 
                value={selectedType} 
                handleChange={this.handleChange} 
                language={language}
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    types: state.types,
    selectedType: state.selectedType,
    language: state.language,
  }
};
const mapDispatchToProps = { typesFetched, selectType };

export default connect(mapStateToProps, mapDispatchToProps)(SelectType);