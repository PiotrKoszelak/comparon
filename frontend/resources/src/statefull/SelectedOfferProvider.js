import React, { Component } from "react";
import { connect } from "react-redux";
import SelectedOffer from '../stateless/SelectedOffer'
import PropTypes from "prop-types";
import { url, key } from '../config.js'


export const sendMessageToServer= async (option, userEmail, userComment, emailTo, offerId, userName, userLastname, userPhone, userAddress) => {
  const response  = await fetch(`${url}/api/offer/sendmessage`, {
    method: "post",
    body: `{"option" : "${option}", 
            "userEmail" : "${userEmail}", 
            "userComment" : "${userComment.split("\n").join(" | ")}", 
            "emailTo" : "${emailTo}", 
            "offerId" : "${offerId}",
            "userName" : "${userName}",
            "userLastname" : "${userLastname}",
            "userPhone" : "${userPhone}",
            "userAddress" : "${userAddress}"}`,
    headers: { "Authorization": key }
  });
  const json = await response.json();
  return json.success;
}

export class SelectedOfferProvider extends Component {

  static propTypes = {
    selectedOffer: PropTypes.number,
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
    isEmpty: null,
  };

  componentDidMount() {
      const {selectedOffer} = this.props;
      if (!selectedOffer){
        this.setState({isEmpty: true, isLoading : false});
      }
      else{
          this.setState({isLoading : true});
          const loadData = async () => {
                const responseDetail  = await fetch(`${url}/api/offerdetail/${selectedOffer}`, {
                  headers: { "Authorization": key },
                })
                const jsonDetail = await responseDetail.json();
                const responseOffer  = await fetch(`${url}/api/offer/${selectedOffer}`, {
                  headers: { "Authorization": key },
                })
                const jsonOffer = await responseOffer.json();
                const operatorId = await jsonOffer.operator;
                const responseContact  = await fetch(`${url}/api/contact/${operatorId}`, {
                  headers: { "Authorization": key },
                })
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
  }

  render() {
    const {language, operators, periods, types} = this.props;
    const {success, details, offerInfo, isLoading, contact, isEmpty} = this.state;
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
            sendMessageToServer={sendMessageToServer}
            success={success}
            isEmpty={isEmpty}
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