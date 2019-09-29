import React from "react";
import MySelect from "../stateless/Select";
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
      loaded: false,
      placeholder: "",
    };

  handleChange = (event) => {
    const typ = event.target.value;
    this.props.selectType(typ);
  }

  componentDidMount() {
    const {language} = this.props;
    fetch(`${url}/api/type/`)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] });
        }
        return response.json();
      })
      .then(data => this.props.typesFetched(data), this.setState({loaded: true }))
      .catch(() => {return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] })});
  }
    
    render(){
        const {loaded, placeholder} = this.state;
        const {types, selectedType, language} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
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