
// fetch offers data
export const offerFetched = (offer) => ({
    type: 'FETCH_OFFER_SUCCESS',
    offer
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
export const selectedOperator = (operator) => ({
  type: 'SELECTED_OPERATOR',
  operator
});

// selected city
export const selectedCity = (city) => ({
  type: 'SELECTED_CITY',
  city
});

// selected period
export const selectedPeriod = (period) => ({
  type: 'SELECTED_PERIOD',
  period
});

// selected type
export const selectedType = (typ) => ({
  type: 'SELECTED_TYPE',
  typ
});

// selected price
export const selectedPrice = (price) => ({
  type: 'SELECTED_PRICE',
  price
});