import React from "react";
import MySelect from "../stateless/Select";
import { operatorsFetched, selectedOperator } from "../actions";
import { connect } from "react-redux";

class SelectOperator extends React.Component {
    state = {
      loaded: false,
      placeholder: "Ładuję...",
    };

  handleChange = (event) => {
    const operator = event.target.value;
    this.props.selectedOperator(operator);
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
        const {operators, operator} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
                label='Operator' 
                data={operators} 
                value={operator} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    operators: state.operators,
    operator: state.operator,
  }
};
const mapDispatchToProps = { operatorsFetched, selectedOperator };

export const SelectOperatorComponent = connect(mapStateToProps, mapDispatchToProps)(SelectOperator);