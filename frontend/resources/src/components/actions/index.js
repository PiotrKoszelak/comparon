
// fetch offers data
export const offersFetched = (offers) => ({
    type: 'FETCH_OFFERS_SUCCESS',
    offers
  });

// fetch operators data
export const operatorsFetched = (operators) => ({
  type: 'FETCH_OPERATORS_SUCCESS',
  operators
});

// fetch cities data
export const citiesFetched = (cities) => ({
  type: 'FETCH_CITIES_SUCCESS',
  cities
});

// fetch periods data
export const periodsFetched = (periods) => ({
  type: 'FETCH_PERIODS_SUCCESS',
  periods
});

// fetch types data
export const typesFetched = (types) => ({
  type: 'FETCH_TYPES_SUCCESS',
  types
});

// selected operator
export const selectOperator = (selectedOperator) => ({
  type: 'SELECT_OPERATOR',
  selectedOperator
});

// selected city
export const selectCity = (selectedCity) => ({
  type: 'SELECT_CITY',
  selectedCity
});

// selected period
export const selectPeriod = (selectedPeriod) => ({
  type: 'SELECT_PERIOD',
  selectedPeriod
});

// selected type
export const selectType = (selectedType) => ({
  type: 'SELECT_TYPE',
  selectedType
});

// selected price
export const selectPrice = (selectedPrice) => ({
  type: 'SELECT_PRICE',
  selectedPrice
});

// selected speed
export const selectSpeed = (selectedSpeed) => ({
  type: 'SELECT_SPEED',
  selectedSpeed
});

// selected offer
export const selectOffer = (selectedOffer) => ({
  type: 'SELECT_OFFER',
  selectedOffer
});

// fetch offer detail
export const offerDetailFetched = (offerDetail) => ({
  type: 'FETCH_OFFER_DETAIL_SUCCESS',
  offerDetail
});

// fetch contact
export const contactFetched = (contact) => ({
  type: 'FETCH_CONTACT_SUCCESS',
  contact
});

// detail window
export const isDetailWindowOpen = (isDetailOpen) => ({
  type: 'IS_DETAIL_WINDOW_OPEN',
  isDetailOpen
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