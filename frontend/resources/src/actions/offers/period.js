import url from '../../config.js'

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
  fetch(`${url}/api/period/`)
    .then(res => res.json())
    .then(json => dispatch(dataFetchSucceeded(json)))
    .catch(err => dispatch(dataFetchErrored(err)))
};

// selected period
export const selectPeriod = (selectedPeriod) => ({
  type: 'SELECT_PERIOD',
  selectedPeriod
});