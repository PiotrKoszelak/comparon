import React from "react";
import { MultipleSelect } from "../stateless/Select";
import { operatorsFetched, selectOperator } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import url from '../config.js'
import translation from "../translation"


class SelectOperator extends React.Component {

  static propTypes = {
    operators: PropTypes.array.isRequired,
    selectedOperator: PropTypes.array.isRequired,
    operatorsFetched: PropTypes.func.isRequired,
    selectOperator: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

    state = {
      isLoaded: false,
    };

  handleChange = (event) => {
    const { selectOperator } = this.props;
    const operator = event.target.value;
    selectOperator(operator);
  }

  componentDidMount() {
    const { operatorsFetched } = this.props;
    fetch(`${url}/api/operator/`)
    .then(response => {
      if (response.status === 200) {
        this.setState({isLoaded: true });
        return response.json();
      }
      else{
        return []
      }})
    .then(data => operatorsFetched(data))
    .catch();
  }
    
    render(){
        const {isLoaded} = this.state;
        const {operators, selectedOperator, language} = this.props;
        return (
              <MultipleSelect 
                isLoaded={isLoaded} 
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
const mapDispatchToProps = { operatorsFetched, selectOperator };

export default connect(mapStateToProps, mapDispatchToProps)(SelectOperator);