import React from "react";
import MySelect from "../stateless/Select";
import { typesFetched, selectedType } from "../actions";
import { connect } from "react-redux";

class SelectType extends React.Component {
    state = {
      loaded: false,
      placeholder: "Ładuję...",
    };

  handleChange = (event) => {
    const typ = event.target.value;
    this.props.selectedType(typ);
  }

  componentDidMount() {
    fetch("api/type")
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
        const {types, typ} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
                label='Typ' 
                data={types} 
                value={typ} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    types: state.types,
    typ: state.typ,
  }
};
const mapDispatchToProps = { typesFetched, selectedType };

export const SelectTypeComponent = connect(mapStateToProps, mapDispatchToProps)(SelectType);