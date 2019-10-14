import React, { Component } from "react";
import { connect } from "react-redux";
import Compare from '../stateless/Compare'
import PropTypes from "prop-types";
import url from '../config.js'
import {setNumberOffersToCompare} from "../actions";

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
    isEmpty: false,
  };

  componentDidMount() {
      const {numberOffersToCompare} = this.props;
      let detailsArray = [];
      let offersArray = [];
      if (numberOffersToCompare.length === 0){
        this.setState({isEmpty: true, loading: false});
      }
      else{
              async function loadDetails() {
                  for (let el of numberOffersToCompare){
                    const response  = await fetch(`${url}/api/offerdetail/${el}`)
                    const json = await response.json();
                    detailsArray.push(json);
                    if (numberOffersToCompare.length===detailsArray.length){
                      return detailsArray;
                    }
                  };
              }
              async function loadOffer() {
                    for (let el of numberOffersToCompare){
                      const response  = await fetch(`${url}/api/offer/${el}`)
                      const json = await response.json();
                      offersArray.push(json);
                      if (numberOffersToCompare.length===offersArray.length){
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
    const {setNumberOffersToCompare, numberOffersToCompare} = this.props;
    const {offerInfo, details} = this.state;
    this.setState({offerInfo : offerInfo.filter(el => el.id != id), details : details.filter(el => el.id != id)});
    const newNumberOffersToCompare = [...numberOffersToCompare].filter(el => el != id);
    console.log(newNumberOffersToCompare);
    setNumberOffersToCompare(newNumberOffersToCompare);
  }

  handleDrag = (newDrag) => {
    const {setNumberOffersToCompare} = this.props;
    setNumberOffersToCompare(newDrag);
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
    numberOffersToCompare: state.numberOffersToCompare,
  }
};
const mapDispatchToProps = { setNumberOffersToCompare };

export default connect(mapStateToProps, mapDispatchToProps)(CompareProvider);