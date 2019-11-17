import React from "react";
import { MultipleSelect } from "../stateless/Select";
import { fetchDataTypes, selectType } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import translation from "../translation"

class SelectType extends React.Component {

  static propTypes = {
    types: PropTypes.object.isRequired,
    selectedType: PropTypes.array.isRequired,
    fetchDataTypes: PropTypes.func.isRequired,
    selectType: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

  handleChange = (event) => {
    const { selectType } = this.props;
    const typ = event.target.value;
    selectType(typ);
  }

  componentDidMount() {
    const { fetchDataTypes } = this.props;
    fetchDataTypes();
  }
    
    render(){
        const {types, selectedType, language} = this.props;
        return (
              <MultipleSelect 
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
const mapDispatchToProps = { fetchDataTypes, selectType };

export default connect(mapStateToProps, mapDispatchToProps)(SelectType);