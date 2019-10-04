import React, { Component } from "react";
import { connect } from "react-redux";
import Compare from '../stateless/Compare'
import PropTypes from "prop-types";
import url from '../config.js'
import translation from '../translation'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CircularProgress from '@material-ui/core/CircularProgress';

export class CompareProvider extends Component {

  static propTypes = {
    numberOffersToCompare: PropTypes.array.isRequired,
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
    loading: true,
  };

  componentDidMount() {
      const {numberOffersToCompare} = this.props;

      let detailsArray = [];
      let offersArray = [];

      const loadDetails = () => {
        return new Promise((resolve, reject) => {
          for (let el of numberOffersToCompare){
            fetch(`${url}/api/offerdetail/${el}`)
              .then(response => {
                return response.json()
              })
              .then(data => {
                detailsArray.push(data);
                  if (numberOffersToCompare.length===detailsArray.length){
                    resolve(detailsArray);
                  }
              })
              .catch((error) => {reject(error)});
          }
        });
    }

    const loadOffers = () => {
      return new Promise((resolve, reject) => {
        for (let el of numberOffersToCompare){
          fetch(`${url}/api/offer/${el}`)
            .then(response => {
              return response.json()
            })
            .then(data => {
              offersArray.push(data);
                if (numberOffersToCompare.length===offersArray.length){
                  resolve(offersArray);
                }
            })
            .catch((error) => {reject(error)});
        }
      });
    }

    loadOffers().then(
      result => this.setState({loadedOfferInfo : true, offerInfo : result}),
      error => null,
    ).then(
      loadDetails().then(
        result => this.setState({loadedDetail : true, details : result}),
        error => null,
      )
    ).then(
      this.setState({loading : false})
    )

  }

  render() {
    const {language, operators, periods, types, numberOffersToCompare} = this.props;
    const {loadedDetail, details, loadedOfferInfo, offerInfo, loading} = this.state;
    if (loading===true){
      return(
          <CircularProgress style={{position: 'relative', top: 100, left:'calc(50vw - 20px)'}} color="secondary" disableShrink />
      )
    }


    else if (loadedDetail===true && loadedOfferInfo===true && offerInfo.length!==0 && details.length!==0) {
        return(
          < Compare
            details={details}
            offerInfo={offerInfo}
            language={language}
            operators={operators}
            periods={periods}
            types={types}
          />
        );
      }
      else if (numberOffersToCompare.length===0 && offerInfo.length===0 && details.length===0) {
        return(
          <div 
            style={{
              position: 'relative',
              top: 100,
              width: 150,
              left:'calc(50vw - 100px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              '@media (maxWidth:600px)' : {
                width: 60,
              }
          }}>
          <LocalOfferIcon 
            color='secondary' 
            style={{width: 50,
                  height: 50,
                  '@media (maxWidth:600px)' : {
                      width: 30,
                      height: 30,
                  }}} 
          />
          <span 
            style={{fontSize: 20,
            '@media (maxWidth:600px)' : {
                fontSize: 15,
            }}}
          >
              {translation.NONE[language]}
          </span>
      </div>
        );
      }
      else if (numberOffersToCompare.length !== 0 && (loadedDetail===false || loadedOfferInfo===false) && loading===false){
        return(
          <div 
            style={{
              position: 'relative',
              top: 100,
              width: 200,
              left:'calc(50vw - 100px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              '@media (maxWidth:600px)' : {
                width: 80,
              }
          }}>
          <ErrorOutlineIcon 
            color='secondary' 
            style={{width: 50,
                  height: 50,
                  '@media (maxWidth:600px)' : {
                      width: 30,
                      height: 30,
                  }}} 
          />
          <span 
            style={{fontSize: 20,
            '@media (maxWidth:600px)' : {
                fontSize: 15,
            }}}
          >
              {translation.DOWNLOAD_ERROR[language]}
          </span>
      </div>
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
    numberOffersToCompare: state.numberOffersToCompare,
  }
};
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(CompareProvider);