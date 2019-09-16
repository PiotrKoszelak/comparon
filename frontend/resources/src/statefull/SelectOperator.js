import React from "react";
import MySelect from "../stateless/Select";
import { operatorsFetched, selectOperator } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SelectOperator extends React.Component {

  static propTypes = {
    operators: PropTypes.object.isRequired,
    selectedOperator: PropTypes.array.isRequired,
    operatorsFetched: PropTypes.func.isRequired,
    selectOperator: PropTypes.func.isRequired,
  }

    state = {
      loaded: false,
      placeholder: "Ładuję...",
    };

  handleChange = (event) => {
    const operator = event.target.value;
    this.props.selectOperator(operator);
  }

  componentDidMount() {
    fetch("api/operator")
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Błąd pobierania" });
        }
        return response.json();
      })
      .then(data => this.props.operatorsFetched(data), this.setState({loaded: true }));
  }
    
    render(){
        const {loaded, placeholder} = this.state;
        const {operators, selectedOperator} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
                label='Operator' 
                data={operators} 
                value={selectedOperator} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    operators: state.operators,
    selectedOperator: state.selectedOperator,
  }
};
const mapDispatchToProps = { operatorsFetched, selectOperator };

export const SelectOperatorComponent = connect(mapStateToProps, mapDispatchToProps)(SelectOperator);