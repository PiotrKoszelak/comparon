import React, { Component } from "react";
import { connect } from "react-redux";
import SelectedOffer from '../stateless/SelectedOffer'
import PropTypes from "prop-types";
import url from '../config.js'

export class SelectedOfferProvider extends Component {

  static propTypes = {
    selectedOffer: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    operators: PropTypes.array.isRequired,
    periods: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
  }

  state = {
    details : [],
    loadedDetail: false,
    offerInfo : [],
    loadedOfferInfo: false,
    contact : [],
    loadedContact: false,
    loading: true,
    isEmpty: false,
  };

  componentDidMount() {
      const {selectedOffer} = this.props;

      let operatorId;

      async function loadDetails() {
            const response  = await fetch(`${url}/api/offerdetail/${selectedOffer}`)
            const json = await response.json();
            return json;
      }
      async function loadOffer() {
              const response  = await fetch(`${url}/api/offer/${selectedOffer}`)
              const json = await response.json();
              operatorId = json.operator;
              return json;

      }
      async function loadContact() {
          const response  = await fetch(`${url}/api/contact/${operatorId}`)
          const json = await response.json();
          return json;
    }
    const that = this;
    async function load() {
      Promise.all([
          await loadDetails(),
          await loadOffer(),
          await loadContact()
      ])
      .then(data => {
          that.setState({details: data[0], offerInfo: data[1], contact: data[2], loadedContact: true, loadedDetail: true, loadedOfferInfo: true, loading: false});
      })
      .catch((error) => {
          that.setState({loading : false});
      })
    }
    load(); 
  }

  render() {
    const {language, operators, periods, types} = this.props;
    const {loadedDetail, details, loadedOfferInfo, offerInfo, loading, contact, loadedContact} = this.state;
        return(
          < SelectedOffer
            details={details}
            offerInfo={offerInfo}
            language={language}
            operators={operators}
            periods={periods}
            types={types}
            loadedDetail={loadedDetail}
            loadedOfferInfo={loadedOfferInfo}
            loading={loading}
            contact={contact}
            loadedContact={loadedContact}
          />
        );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    operators: state.operators,
    periods: state.periods,
    types: state.types,
    selectedOffer: state.selectedOffer,
  }
};
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(SelectedOfferProvider);