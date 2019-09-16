import React from "react";
import MySelect from "../stateless/Select";
import { periodsFetched, selectPeriod } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SelectPeriod extends React.Component {

  static propTypes = {
    periods: PropTypes.object.isRequired,
    selectedPeriod: PropTypes.array.isRequired,
    periodsFetched: PropTypes.func.isRequired,
    selectPeriod: PropTypes.func.isRequired,
  }

    state = {
      loaded: false,
      placeholder: "Ładuję...",
    };

  handleChange = (event) => {
    const period = event.target.value;
    this.props.selectPeriod(period);
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
        const {periods, selectedPeriod} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
                label='Okres' 
                data={periods} 
                value={selectedPeriod} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    periods: state.periods,
    selectedPeriod: state.selectedPeriod,
  }
};
const mapDispatchToProps = { periodsFetched, selectPeriod };

export const SelectPeriodComponent = connect(mapStateToProps, mapDispatchToProps)(SelectPeriod);