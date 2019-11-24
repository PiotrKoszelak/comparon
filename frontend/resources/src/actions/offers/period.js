import { url, key } from '../../config.js'

// fetch periods data
const dataFetchStarted = () => ({
  type: "FETCH_PERIODS_STARTED"
});

const dataFetchSucceeded = data => ({
  type: "FETCH_PERIODS_SUCCESS",
  data: data
});

const dataFetchErrored = error => ({
  type: "FETCH_PERIODS_ERROR",
  error: error
});


export const fetchDataPeriods = () => (dispatch, getState) => {
  dispatch(dataFetchStarted());
  fetch(`${url}/api/period/`, {
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

// selected period
export const selectPeriod = (selectedPeriod) => ({
  type: 'SELECT_PERIOD',
  selectedPeriod
});