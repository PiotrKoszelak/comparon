import React from "react";
import { MultipleSelect } from "../stateless/Select";
import { fetchDataPeriods, selectPeriod } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import translation from "../translation"

class SelectPeriod extends React.Component {

  static propTypes = {
    periods: PropTypes.object.isRequired,
    selectedPeriod: PropTypes.array.isRequired,
    fetchDataPeriods: PropTypes.func.isRequired,
    selectPeriod: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
  }

  handleChange = (event) => {
    const { selectPeriod } = this.props;
    const period = event.target.value;
    selectPeriod(period);
  }

  componentDidMount() {
    const { fetchDataPeriods, periods } = this.props;
    if (!periods.data) fetchDataPeriods();
  }
    
    render(){
        const {periods, selectedPeriod, language} = this.props;
        return (
              <MultipleSelect 
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
const mapDispatchToProps = { fetchDataPeriods, selectPeriod };

export default connect(mapStateToProps, mapDispatchToProps)(SelectPeriod);