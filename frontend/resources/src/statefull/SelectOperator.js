import React from "react";
import { MultipleSelect } from "../stateless/Select";
import { fetchDataOperators, selectOperator } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import translation from "../translation"


class SelectOperator extends React.Component {

  static propTypes = {
    operators: PropTypes.object.isRequired,
    selectedOperator: PropTypes.array.isRequired,
    fetchDataOperators: PropTypes.func.isRequired,
    selectOperator: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

  handleChange = (event) => {
    const { selectOperator } = this.props;
    const operator = event.target.value;
    selectOperator(operator);
  }

  componentDidMount() {
    const { fetchDataOperators, operators } = this.props;
    if (!operators.data) fetchDataOperators();
  }
    
    render(){
        const {operators, selectedOperator, language} = this.props;
        return (
              <MultipleSelect 
                label={translation.OPERATOR[language]} 
                data={operators} 
                value={selectedOperator} 
                handleChange={this.handleChange} 
                language={language}
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    operators: state.operators,
    selectedOperator: state.selectedOperator,
    language: state.language,
  }
};
const mapDispatchToProps = { fetchDataOperators, selectOperator };

export default connect(mapStateToProps, mapDispatchToProps)(SelectOperator);