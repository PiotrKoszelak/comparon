import React from "react";
import MySelect from "../stateless/Select";
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
      loaded: false,
      placeholder: "",
    };

  handleChange = (event) => {
    const operator = event.target.value;
    this.props.selectOperator(operator);
  }

  componentDidMount() {
    const {language} = this.props;
    fetch(`${url}/api/operator/`)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] });
        }
        return response.json();
      })
      .then(data => this.props.operatorsFetched(data), this.setState({loaded: true }));
  }
    
    render(){
        const {loaded, placeholder} = this.state;
        const {operators, selectedOperator, language} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
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