import React, { Component } from "react";
import { connect } from "react-redux";
import { isDetailWindowOpen, offerDetailFetched, contactFetched } from "../actions";
import Detail from '../stateless/Detail'
import PropTypes from "prop-types";
import url from '../config.js'
import translation from "../translation"

export class DetailProvider extends Component {

  static propTypes = {
    isDetailOpen: PropTypes.bool.isRequired,
    selectedOffer: PropTypes.object.isRequired,
    isDetailWindowOpen: PropTypes.func.isRequired,
    offerDetailFetched: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired,
    contactFetched: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
  }

  state = {
    loadedDetail: false,
    placeholderDetail: "",
    loadedContact: false,
    placeholderContact: "",
  };

  componentDidUpdate(prevProps) {
    const {language} = this.props;
    if (this.props.selectedOffer !== prevProps.selectedOffer) {
        fetch(`${url}/api/offerdetail/${this.props.selectedOffer.id}`)
          .then(response => {
            if (response.status !== 200) {
            return this.setState({ placeholderDetail: translation.DOWNLOAD_ERROR[language] });
          }
          return response.json()
        })
          .then(data => this.props.offerDetailFetched(data), this.setState({loadedDetail: true }))
          .catch(() => {return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] })});

          fetch(`${url}/api/contact/${this.props.selectedOffer.operator}`)
          .then(response => {
            if (response.status !== 200) {
            return this.setState({ placeholderContact: translation.DOWNLOAD_ERROR[language] });
          }
          return response.json()
        })
          .then(data => this.props.contactFetched(data), this.setState({loadedContact: true }))
          .catch(() => {return this.setState({ placeholder: translation.DOWNLOAD_ERROR[language] })});
      }
  }


  closeDetailWindow = () => {
    this.props.isDetailWindowOpen(false);
  }

  render() {
    const {isDetailOpen, selectedOffer, details, contact, language, operators, cities, periods, types} = this.props;
    const {loadedDetail, placeholderDetail, loadedContact, placeholderContact} = this.state;
    if (isDetailOpen === true) {
        return(
          < Detail
            loadedDetail={loadedDetail} 
            placeholderDetail={placeholderDetail}
            details={details}
            loadedContact={loadedContact} 
            placeholderContact={placeholderContact}
            contact={contact.phone}
            selectedOffer={selectedOffer}
            closeDetailWindow={this.closeDetailWindow}
            language={language}
            operators={operators}
            cities={cities}
            periods={periods}
            types={types}
          />
        );
      }
      else{
        return ( false )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    isDetailOpen : state.isDetailOpen,
    selectedOffer : state.selectedOffer,
    details: state.details,
    contact: state.contact,
    language: state.language,
    operators: state.operators,
    cities: state.cities,
    periods: state.periods,
    types: state.types,
  }
};
const mapDispatchToProps = { isDetailWindowOpen, offerDetailFetched, contactFetched };

export default connect(mapStateToProps, mapDispatchToProps)(DetailProvider);