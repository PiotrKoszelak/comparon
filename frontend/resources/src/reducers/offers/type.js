//types
export const types = (
  state = { data: null, isLoading: false, error: null, success: null},
  action
) => {
  switch (action.type) {
    case "FETCH_TYPES_STARTED":
      return { data: null, isLoading: true, error: null, success: null};
    case "FETCH_TYPES_SUCCESS":
      return { data: action.data, isLoading: false, error: null, success: true};
    case "FETCH_TYPES_ERROR":
      return { data: null, isLoading: false, error: action.error, success: false};
    default:
      return state;
  }
};


//selected types
export const selectedType = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_TYPE':
        return action.selectedType;
        
    default:
      return state
  }
}