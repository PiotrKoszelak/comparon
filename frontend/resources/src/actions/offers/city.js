// fetch cities data
export const citiesFetched = (cities) => ({
  type: 'FETCH_CITIES_SUCCESS',
  cities
});

// selected city
export const selectCity = (selectedCity) => ({
  type: 'SELECT_CITY',
  selectedCity
});