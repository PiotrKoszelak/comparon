import url from '../../config.js'

// fetch offers data
const dataFetchStarted = () => ({
  type: "FETCH_OFFERS_STARTED"
});

const dataFetchSucceeded = data => ({
  type: "FETCH_OFFERS_SUCCESS",
  data: data
});

const dataFetchErrored = error => ({
  type: "FETCH_OFFERS_ERROR",
  error: error
});
export const fetchOffersData = () => (dispatch, getState) => {
  dispatch(dataFetchStarted());
  fetch(`${url}/api/offers/`)
    .then(res => res.json())
    .then(json => dispatch(dataFetchSucceeded(json)))
    .catch(err => dispatch(dataFetchErrored(err)))
};

// selected offer
export const selectOffer = (selectedOffer) => ({
  type: 'SELECT_OFFER',
  selectedOffer
});

// number of selected offers
export const setNumberSelectedOffers = (numberSelectedOffers) => ({
  type: 'SET_NUMBER_SELECTED_OFFERS',
  numberSelectedOffers
});

// number of offers to compare
export const setOffersToCompare= (offersToCompare) => ({
  type: 'SET_OFFERS_TO_COMPARE',
  offersToCompare
});

// selected sort type
export const setSortType= (sortType) => ({
  type: 'SET_SORT_TYPE',
  sortType
});