
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