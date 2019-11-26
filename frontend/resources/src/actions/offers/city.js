import { url, key } from '../../config.js'

// fetch cities data
const dataFetchStarted = () => ({
  type: "FETCH_CITIES_STARTED"
});

const dataFetchSucceeded = data => ({
  type: "FETCH_CITIES_SUCCESS",
  data: data
});

const dataFetchErrored = error => ({
  type: "FETCH_CITIES_ERROR",
  error: error
});


export const fetchDataCities = () => (dispatch, getState) => {
  dispatch(dataFetchStarted());
  fetch(`${url}/api/city`,{
    headers: { "Authorization": key },
  })
    .then(resp => {
      if (resp.ok) {
          return resp.json()
      } else {
          return Promise.reject(resp)
      }
    })
    .then(json => dispatch(dataFetchSucceeded(json)))
    .catch(err => dispatch(dataFetchErrored(err)))
};

// selected city
export const selectCity = (selectedCity) => ({
  type: 'SELECT_CITY',
  selectedCity
});