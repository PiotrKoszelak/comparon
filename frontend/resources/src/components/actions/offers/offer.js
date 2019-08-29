// fetch offers data
export const offersFetched = (offers) => ({
  type: 'FETCH_OFFERS_SUCCESS',
  offers
});

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
export const setNumberOffersToComapre= (numberOffersToComapre) => ({
  type: 'SET_NUMBER_OFFERS_TO_COMPARE',
  numberOffersToComapre
});