import React, { Component } from "react";
import { connect } from "react-redux";
import Detail from '../stateless/Detail'
import PropTypes from "prop-types";
import url from '../config.js'
import {setDetailWindowOpen} from "../actions";
import Snackbar from '../stateless/Snackbar'
import translation from '../translation'

export class DetailProvider extends Component {

  static propTypes = {
    selectedOffer: PropTypes.number.isRequired,
    setDetailWindowOpen: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    operators: PropTypes.array.isRequired,
    periods: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
  }

  state = {
    details : {},
    loadedDetail: null,
    offerInfo : {},
    loadedOfferInfo: null,
  };

  componentDidMount() {
        fetch(`${url}/api/offerdetail/${this.props.selectedOffer}`)
          .then(response => {
              if (response.ok) {
                return response.json()
              } else 
              {
                return Promise.reject()
              }
          })
          .then(data => this.setState({loadedDetail: true, details: data}))
          .catch(() => this.setState({loadedDetail: false}));

          
        fetch(`${url}/api/offer/${this.props.selectedOffer}`)
          .then(response => {
                if (response.ok) {
                  return response.json()
                } else 
                {
                  return Promise.reject()
                }
          })
          .then(data => this.setState({loadedOfferInfo: true, offerInfo: data}))
          .catch(() => this.setState({loadedOfferInfo: false}));
  }


  closeDetailWindow = () => {
    this.props.setDetailWindowOpen(false);
  }

  render() {
    const {language, operators, periods, types, selectedOffer} = this.props;
    const {loadedDetail, details, loadedOfferInfo, offerInfo} = this.state;

    if (loadedDetail===true && loadedOfferInfo===true){
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
    else if (loadedDetail===false || loadedOfferInfo===false){
        return(
          <Snackbar selectedOffer={selectedOffer} text={translation.DOWNLOAD_ERROR[language]}/>
        )
    }
    else{
      return(
        null
      )
    }
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
const mapDispatchToProps = { setDetailWindowOpen };

export default connect(mapStateToProps, mapDispatchToProps)(DetailProvider);