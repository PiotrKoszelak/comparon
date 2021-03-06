import { url, key } from '../../config.js'

// fetch operators data
const dataFetchStarted = () => ({
  type: "FETCH_OPERATORS_STARTED"
});

const dataFetchSucceeded = data => ({
  type: "FETCH_OPERATORS_SUCCESS",
  data: data
});

const dataFetchErrored = error => ({
  type: "FETCH_OPERATORS_ERROR",
  error: error
});

export const fetchDataOperators = () => (dispatch, getState) => {
  dispatch(dataFetchStarted());
  fetch(`${url}/api/operator/`,{
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

// selected operator
export const selectOperator = (selectedOperator) => ({
  type: 'SELECT_OPERATOR',
  selectedOperator
});