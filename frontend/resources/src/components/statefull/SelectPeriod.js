import React from "react";
import MySelect from "../stateless/Select";
import { periodsFetched, selectedPeriod } from "../actions";
import { connect } from "react-redux";

class SelectPeriod extends React.Component {
    state = {
      loaded: false,
      placeholder: "Ładuję...",
    };

  handleChange = (event) => {
    const period = event.target.value;
    this.props.selectedPeriod(period);
  }

  componentDidMount() {
    fetch("api/period")
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Błąd pobierania" });
        }
        return response.json();
      })
      .then(data => this.props.periodsFetched(data), this.setState({loaded: true }));
  }
    
    render(){
        const {loaded, placeholder} = this.state;
        const {periods, period} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
                label='Okres' 
                data={periods} 
                value={period} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    periods: state.periods,
    period: state.period,
  }
};
const mapDispatchToProps = { periodsFetched, selectedPeriod };

export const SelectPeriodComponent = connect(mapStateToProps, mapDispatchToProps)(SelectPeriod);