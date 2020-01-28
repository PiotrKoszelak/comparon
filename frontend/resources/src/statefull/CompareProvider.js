import React, { Component } from "react";
import { connect } from "react-redux";
import Compare from '../stateless/Compare'
import PropTypes from "prop-types";
import { url, key } from '../config.js'
import {setOffersToCompare, selectOffer} from "../actions";
import { withRouter } from "react-router-dom";

export class CompareProvider extends Component {

  static propTypes = {
    offersToCompare: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    operators: PropTypes.object.isRequired,
    periods: PropTypes.object.isRequired,
    types: PropTypes.object.isRequired,
  }

  state = {
    details : null,
    offerInfo : null,
    isLoading: null,
    isEmpty: null,
    success: null,
    error: null,
  };

  componentDidMount() {
      const {offersToCompare} = this.props;
      const {error} = this.state;
      const detailsArray = [];
      const offersArray = [];
      if (offersToCompare.length === 0){
        this.setState({isEmpty: true, isLoading : false});
      }
      else{
      this.setState({isLoading : true});
      const loadDataAll = async () => {
          for (let el of offersToCompare){
              const loadData = async () => {
                const responseDetail  = await fetch(`${url}/api/offerdetail/${el}`, {
                  headers: { "Authorization": key },
                })
                const jsonDetail = await responseDetail.json();
                const responseOffer  = await fetch(`${url}/api/offer/${el}`, {
                  headers: { "Authorization": key },
                })
                const jsonOffer = await responseOffer.json();
                return [jsonDetail, jsonOffer]
              }
              await loadData()
                .then(data => {
                  detailsArray.push(data[0]);
                  offersArray.push(data[1]);
                })
                .catch((error) => {
                    this.setState({error: true, success: false});
                })
          }
      }
      loadDataAll()
        .then(() => {
          if (!error) this.setState({details : detailsArray, offerInfo : offersArray, isLoading : false, success: true});
        })
        .catch((error) => {
          this.setState({isLoading : false, success: false});
        })
      }
  }

  handleDelete = (id) => {
    const {setOffersToCompare, offersToCompare} = this.props;
    const {offerInfo, details} = this.state;
    this.setState({offerInfo : offerInfo.filter(el => el.id !== id), details : details.filter(el => el.id !== id)});
    const newOffersToCompare = [...offersToCompare].filter(el => el !== id);
    setOffersToCompare(newOffersToCompare);
  }

  handleDrag = (newDrag) => {
    const {setOffersToCompare} = this.props;
    setOffersToCompare(newDrag);
  }

  selectOfferInComparison = (id) => {
    const {history, selectOffer} = this.props;
    selectOffer(id);
    history.push('/offers/selectedoffer');
  }

  render() {
    const {language, operators, periods, types} = this.props;
    const {details, offerInfo, isLoading, isEmpty, success, error} = this.state;
        return(
          < Compare
            error={error}
            details={details}
            offerInfo={offerInfo}
            language={language}
            operators={operators}
            periods={periods}
            types={types}
            success={success}
            isLoading={isLoading}
            isEmpty={isEmpty}
            handleDelete={this.handleDelete}
            handleDrag={this.handleDrag}
            selectOffer={this.selectOfferInComparison}
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
    offersToCompare: state.offersToCompare,
  }
};
const mapDispatchToProps = { setOffersToCompare, selectOffer };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompareProvider));