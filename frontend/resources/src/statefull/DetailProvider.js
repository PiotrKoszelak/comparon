import React, { Component } from "react";
import { connect } from "react-redux";
import Detail from '../stateless/Detail'
import PropTypes from "prop-types";
import { url, key } from '../config.js'
import {setDetailWindowOpen} from "../actions";
import Snackbar from '../stateless/Snackbar'
import translation from '../translation'

export class DetailProvider extends Component {

  static propTypes = {
    selectedOffer: PropTypes.number.isRequired,
    setDetailWindowOpen: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    operators: PropTypes.object.isRequired,
    periods: PropTypes.object.isRequired,
    types: PropTypes.object.isRequired,
  }

  state = {
    details : null,
    offerInfo : null,
    isLoading: null,
    success: null,
    isSnackbar: false,
  };

  componentDidMount() {
    const {selectedOffer} = this.props;
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
            return [jsonDetail, jsonOffer]
      }
    loadData()
      .then(data => {
          this.setState({details: data[0], offerInfo: data[1], success: true, isLoading: false});
      })
      .catch((error) => {
          this.setState({isLoading : false, success: false, isSnackbar: true});
      })
  }

  closeDetailWindow = () => {
    this.props.setDetailWindowOpen(false);
  }

  handleIsSnackbar = (is) => {
    this.setState({isSnackbar: is});
    this.props.setDetailWindowOpen(false);
  }

  render() {
    const {language, operators, periods, types, setDetailWindowOpen, isDetailOpen} = this.props;
    const {success, details, offerInfo, isSnackbar} = this.state;
    if (success===true){
        return(
          < Detail
            details={details}
            offerInfo={offerInfo}
            closeDetailWindow={this.closeDetailWindow}
            language={language}
            operators={operators}
            periods={periods}
            types={types}
            setDetailWindowOpen={setDetailWindowOpen}
          />
        );
    }
    else if (success===false){
        return(
          <Snackbar 
                    isOpen={isSnackbar}
                    close={this.handleIsSnackbar}
                    text={translation.DOWNLOAD_ERROR[language]} 
                    vertical={'bottom'}
                    horizontal={'center'}
          />
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
    isDetailOpen : state.isDetailOpen,
  }
};
const mapDispatchToProps = { setDetailWindowOpen };

export default connect(mapStateToProps, mapDispatchToProps)(DetailProvider);