// cities
export const cities = (
  state = { data: null, isLoading: false, error: null, success: null},
  action
) => {
  switch (action.type) {
    case "FETCH_CITIES_STARTED":
      return { data: null, isLoading: true, error: null, success: null};
    case "FETCH_CITIES_SUCCESS":
      return { data: action.data, isLoading: false, error: null, success: true};
    case "FETCH_CITIES_ERROR":
      return { data: null, isLoading: false, error: action.error, success: false};
    default:
      return state;
  }
};

//selected city
export const selectedCity = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_CITY':
      return action.selectedCity;
      
    default:
      return state
  }
}