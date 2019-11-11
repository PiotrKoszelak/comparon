import React from "react";
import { MultipleSelect } from "../stateless/Select";
import { periodsFetched, selectPeriod } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import url from '../config.js'
import translation from "../translation"

class SelectPeriod extends React.Component {

  static propTypes = {
    periods: PropTypes.array.isRequired,
    selectedPeriod: PropTypes.array.isRequired,
    periodsFetched: PropTypes.func.isRequired,
    selectPeriod: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

    state = {
      isLoaded: false,
    };

  handleChange = (event) => {
    const { selectPeriod } = this.props;
    const period = event.target.value;
    selectPeriod(period);
  }

  componentDidMount() {
    const { periodsFetched } = this.props;
    fetch(`${url}/api/period/`)
    .then(response => {
      if (response.status === 200) {
        this.setState({isLoaded: true });
        return response.json();
      }
      else{
        return []
      }})
    .then(data => periodsFetched(data))
  }
    
    render(){
        const {isLoaded} = this.state;
        const {periods, selectedPeriod, language} = this.props;
        return (
              <MultipleSelect 
                isLoaded={isLoaded} 
                label={translation.PERIOD[language]} 
                data={periods} 
                value={selectedPeriod} 
                handleChange={this.handleChange} 
                language={language}
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    periods: state.periods,
    selectedPeriod: state.selectedPeriod,
    language: state.language,
  }
};
const mapDispatchToProps = { periodsFetched, selectPeriod };

export default connect(mapStateToProps, mapDispatchToProps)(SelectPeriod);