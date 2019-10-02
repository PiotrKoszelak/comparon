import React, { Component } from "react";
import { connect } from "react-redux";
import { isDetailWindowOpen } from "../actions";
import Detail from '../stateless/Detail'
import PropTypes from "prop-types";
import url from '../config.js'

export class DetailProvider extends Component {

  static propTypes = {
    isDetailOpen: PropTypes.bool.isRequired,
    selectedOffer: PropTypes.object.isRequired,
    isDetailWindowOpen: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    operators: PropTypes.array.isRequired,
    periods: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
  }

  state = {
    details : {},
    loadedDetail: false,
    offerInfo : {},
    loadedOfferInfo: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedOffer !== prevProps.selectedOffer) {
        fetch(`${url}/api/offerdetail/${this.props.selectedOffer.id}`)
          .then(response => {
            return response.json()
          })
          .then(data => this.setState({loadedDetail: true, details: data}))
          .catch(() => {return this.setState({loadedDetail: false})});

          
        fetch(`${url}/api/offer/${this.props.selectedOffer.id}`)
          .then(response => {
            return response.json()
          })
          .then(data => this.setState({loadedOfferInfo: true, offerInfo: data}))
          .catch(() => {return this.setState({ loadedOfferInfo: false })});
          
      }
  }


  closeDetailWindow = () => {
    this.props.isDetailWindowOpen(false);
  }

  render() {
    const {isDetailOpen, language, operators, periods, types} = this.props;
    const {loadedDetail, details, loadedOfferInfo, offerInfo} = this.state;

    if (isDetailOpen === true && loadedDetail===true && loadedOfferInfo===true) {
        return(
          < Detail
            details={details}
            offerInfo={offerInfo}
            closeDetailWindow={this.closeDetailWindow}
            language={language}
            operators={operators}
            periods={periods}
            types={types}
          />
        );
      }
      else{
        return ( null )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    isDetailOpen : state.isDetailOpen,
    selectedOffer : state.selectedOffer,
    language: state.language,
    operators: state.operators,
    periods: state.periods,
    types: state.types,
  }
};
const mapDispatchToProps = { isDetailWindowOpen };

export default connect(mapStateToProps, mapDispatchToProps)(DetailProvider);