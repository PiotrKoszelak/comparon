import React, { Component } from "react";
import Table from "../stateless/Table";
import { connect } from "react-redux";
import { offerFetched } from "../actions";

export class DataProvider extends Component {
  state = {
    loaded: false,
    placeholder: "Ładuję...",
  };

  componentDidMount() {
    fetch('api/offer')
      .then(response => {
        if (response.status !== 200) {
        return this.setState({ placeholder: "Błąd pobierania" });
      }
      return response.json()
    })
      .then(data => this.props.offerFetched(data), this.setState({loaded: true }));
  }
  
  render() {
    const {loaded, placeholder} = this.state;
    const {offer, operator, city} = this.props;
    return(
        <Table 
          loaded={loaded} 
          placeholder={placeholder}
          operator={operator}
          city={city}
          data={offer} 
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    offer: state.offer,
    operator: state.operator,
    city: state.city,
  }
};
const mapDispatchToProps = { offerFetched };

export const DataProviderComponent = connect(mapStateToProps, mapDispatchToProps)(DataProvider);