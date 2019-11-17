import url from '../../config.js'

// fetch types data
const dataFetchStarted = () => ({
  type: "FETCH_TYPES_STARTED"
});

const dataFetchSucceeded = data => ({
  type: "FETCH_TYPES_SUCCESS",
  data: data
});

const dataFetchErrored = error => ({
  type: "FETCH_TYPES_ERROR",
  error: error
});


export const fetchDataTypes = () => (dispatch, getState) => {
  dispatch(dataFetchStarted());
  fetch(`${url}/api/type/`)
    .then(res => res.json())
    .then(json => dispatch(dataFetchSucceeded(json)))
    .catch(err => dispatch(dataFetchErrored(err)))
};


// selected type
export const selectType = (selectedType) => ({
  type: 'SELECT_TYPE',
  selectedType
});
