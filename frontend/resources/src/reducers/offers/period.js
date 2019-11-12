//periods
export const periods = (
  state = { data: null, isLoading: false, error: null, success: null},
  action
) => {
  switch (action.type) {
    case "FETCH_PERIODS_STARTED":
      return { data: null, isLoading: true, error: null, success: null};
    case "FETCH_PERIODS_SUCCESS":
      return { data: action.data, isLoading: false, error: null, success: true};
    case "FETCH_PERIODS_ERROR":
      return { data: null, isLoading: false, error: action.error, success: false};
    default:
      return state;
  }
};

//selected period
export const selectedPeriod = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_PERIOD':
        return action.selectedPeriod;
        
    default:
      return state
  }
}