import React, { Component } from "react";
import { connect } from "react-redux";
import { isDetailWindowOpen, offerDetailFetched, contactFetched } from "../actions";
import Detail from '../stateless/Detail'
import PropTypes from "prop-types";

export class DetailProvider extends Component {

  static propTypes = {
    isDetailOpen: PropTypes.bool.isRequired,
    selectedOffer: PropTypes.object.isRequired,
    isDetailWindowOpen: PropTypes.func.isRequired,
    offerDetailFetched: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired,
    contactFetched: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
  }

  state = {
    loadedDetail: false,
    placeholderDetail: "Ładuję szczegóły...",
    loadedContact: false,
    placeholderContact: "Ładuję numer kontaktowy...",
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedOffer !== prevProps.selectedOffer) {
        fetch(`api/offerdetail/${this.props.selectedOffer.id}`)
          .then(response => {
            if (response.status !== 200) {
            return this.setState({ placeholderDetail: "Błąd pobierania szczegółów" });
          }
          return response.json()
        })
          .then(data => this.props.offerDetailFetched(data), this.setState({loadedDetail: true }));

          fetch(`api/contact/${this.props.selectedOffer.operatorId}`)
          .then(response => {
            if (response.status !== 200) {
            return this.setState({ placeholderContact: "Błąd pobierania numeru kontaktowego" });
          }
          return response.json()
        })
          .then(data => this.props.contactFetched(data), this.setState({loadedContact: true }));
      }
  }


  closeDetailWindow = () => {
    this.props.isDetailWindowOpen(false);
  }

  render() {
    const {isDetailOpen, selectedOffer, details, contact} = this.props;
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
            offerPrice={selectedOffer.price}
            offerOperator={selectedOffer.operator}
            offerPeriod={selectedOffer.period}
            offerSpeed={selectedOffer.speed}
            offerType={selectedOffer.type}
            closeDetailWindow={this.closeDetailWindow}
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
  }
};
const mapDispatchToProps = { isDetailWindowOpen, offerDetailFetched, contactFetched };

export const DetailProviderComponent = connect(mapStateToProps, mapDispatchToProps)(DetailProvider);