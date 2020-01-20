import React, { Component } from "react";
import { connect } from "react-redux";
import Detail from '../stateless/Detail'
import PropTypes from "prop-types";
import { url, key } from '../config.js'
import Snackbar from '../stateless/Snackbar'
import translation from '../translation'

export class DetailProvider extends Component {

  static propTypes = {
    selectedOffer: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
  }

  state = {
    details : null,
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


  handleIsSnackbar = (is) => {
    this.setState({isSnackbar: is});
    this.props.setDetailWindowOpen(false);
  }

  render() {
    const {language, classes} = this.props;
    const {success, details, isSnackbar, isLoading} = this.state;
    if (success===true || isLoading===true){
        return(
          < Detail
            classes={classes}
            details={details}
            language={language}
            isLoading={isLoading}
          />
        );
    }
    else if (success===false){
        return(
          <Snackbar 
                    isOpen={isSnackbar}
                    close={this.handleIsSnackbar}
                    text={translation.DOWNLOAD_ERROR[language]} 
                    vertical={'top'}
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
    selectedOffer: state.selectedOffer,
  }
};

export default connect(mapStateToProps)(DetailProvider);