// fetch maxParameters data
import { url, key } from '../../config.js'

// fetch offers data
const dataFetchStarted = () => ({
  type: "FETCH_PARAMETERS_STARTED"
});

const dataFetchSucceeded = data => ({
  type: "FETCH_PARAMETERS_SUCCESS",
  data: data
});

const dataFetchErrored = error => ({
  type: "FETCH_PARAMETERS_ERROR",
  error: error
});
export const fetchParametersData = () => (dispatch, getState) => {
  dispatch(dataFetchStarted());
  fetch(`${url}/api/parameters`, {
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