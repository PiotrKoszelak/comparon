import React from "react";
import MySelect from "../stateless/Select";
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
      loaded: false,
      placeholder: "",
    };

  handleChange = (event) => {
    const period = event.target.value;
    this.props.selectPeriod(period);
  }

  componentDidMount() {
    const {language} = this.props;
    fetch(`${url}/api/period/`)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder:  translation.DOWNLOAD_ERROR[language] });
        }
        return response.json();
      })
      .then(data => this.props.periodsFetched(data), this.setState({loaded: true }))
      .catch(() => {return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] })});
  }
    
    render(){
        const {loaded, placeholder} = this.state;
        const {periods, selectedPeriod, language} = this.props;
        return (
              <MySelect 
                loaded={loaded} 
                placeholder={placeholder}
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