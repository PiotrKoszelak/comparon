import React, { Component } from "react";
import { connect } from "react-redux";
import Compare from '../stateless/Compare'
import PropTypes from "prop-types";
import url from '../config.js'
import {setOffersToCompare, selectOffer} from "../actions";
import { withRouter } from "react-router-dom";

export class CompareProvider extends Component {

  static propTypes = {
    offersToCompare: PropTypes.array.isRequired,
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
    isEmpty: false,
  };

  componentDidMount() {
      const {offersToCompare} = this.props;
      let detailsArray = [];
      let offersArray = [];
      if (offersToCompare.length === 0){
        this.setState({isEmpty: true, loading: false});
      }
      else{
              async function loadDetails() {
                  for (let el of offersToCompare){
                    const response  = await fetch(`${url}/api/offerdetail/${el}`)
                    const json = await response.json();
                    detailsArray.push(json);
                    if (offersToCompare.length===detailsArray.length){
                      return detailsArray;
                    }
                  };
              }
              async function loadOffer() {
                    for (let el of offersToCompare){
                      const response  = await fetch(`${url}/api/offer/${el}`)
                      const json = await response.json();
                      offersArray.push(json);
                      if (offersToCompare.length===offersArray.length){
                        return offersArray;
                      }
                    };
              }
            const that = this;
            function load() {
              Promise.all([
                  loadDetails(),
                  loadOffer()
              ])
              .then(data => {
                  that.setState({details: data[0], offerInfo: data[1], loadedDetail: true, loadedOfferInfo: true, loading: false});
              })
              .catch((error) => {
                  that.setState({loading : false});
              })
            }
            load();
      }
  }

  handleDelete = (id) => {
    const {setOffersToCompare, offersToCompare} = this.props;
    const {offerInfo, details} = this.state;
    this.setState({offerInfo : offerInfo.filter(el => el.id != id), details : details.filter(el => el.id != id)});
    const newOffersToCompare = [...offersToCompare].filter(el => el != id);
    setOffersToCompare(newOffersToCompare);
  }

  handleDrag = (newDrag) => {
    const {setOffersToCompare} = this.props;
    setOffersToCompare(newDrag);
  }

  selectOfferInComparison = (id) => {
    const { history, selectOffer } = this.props;
    selectOffer(id);
    history.push('/offers/selectedoffer');
  }

  render() {
    const {language, operators, periods, types} = this.props;
    const {loadedDetail, details, loadedOfferInfo, offerInfo, loading, isEmpty} = this.state;
        return(
          < Compare
            details={details}
            offerInfo={offerInfo}
            language={language}
            operators={operators}
            periods={periods}
            types={types}
            loadedDetail={loadedDetail}
            loadedOfferInfo={loadedOfferInfo}
            loading={loading}
            isEmpty={isEmpty}
            handleDelete={this.handleDelete}
            handleDrag={this.handleDrag}
            selectOfferInComparison={this.selectOfferInComparison}
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