import React, { Component } from "react";
import { connect } from "react-redux";
import SelectedOffer from '../stateless/SelectedOffer'
import PropTypes from "prop-types";
import url from '../config.js'

export class SelectedOfferProvider extends Component {

  static propTypes = {
    selectedOffer: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    operators: PropTypes.object.isRequired,
    periods: PropTypes.object.isRequired,
    types: PropTypes.object.isRequired,
  }

  state = {
    details : null,
    offerInfo : null,
    contact : null,
    isLoading: null,
    success: null,
  };

  componentDidMount() {
      const {selectedOffer} = this.props;
      this.setState({isLoading : true});
      const loadData = async () => {
            const responseDetail  = await fetch(`${url}/api/offerdetail/${selectedOffer}`)
            const jsonDetail = await responseDetail.json();
            const responseOffer  = await fetch(`${url}/api/offer/${selectedOffer}`)
            const jsonOffer = await responseOffer.json();
            const operatorId = await jsonOffer.operator;
            const responseContact  = await fetch(`${url}/api/contact/${operatorId}`)
            const jsonContact = await responseContact.json();
            return [jsonDetail, jsonOffer, jsonContact]
      }
    loadData()
      .then(data => {
          this.setState({details: data[0], offerInfo: data[1], contact: data[2], success: true, isLoading: false});
      })
      .catch((error) => {
          this.setState({isLoading : false, success: false});
      })
      
  }

  sendMessageToServer= async () => {
      const response  = await fetch(`${url}/api/offer/sendmessage`, {
        method: "post",
        body: "name=Marcin&surname=Nowak"
      });
      const json = await response.json();
      return json.success;
  }

  render() {
    const {language, operators, periods, types, selectedOffer} = this.props;
    const {success, details, offerInfo, isLoading, contact} = this.state;
        return(
          < SelectedOffer
            details={details}
            offerInfo={offerInfo}
            language={language}
            operators={operators}
            periods={periods}
            types={types}
            isLoading={isLoading}
            contact={contact}
            sendMessageToServer={this.sendMessageToServer}
            success={success}
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