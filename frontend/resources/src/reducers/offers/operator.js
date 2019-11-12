//operators
export const operators = (
  state = { data: null, isLoading: false, error: null, success: null},
  action
) => {
  switch (action.type) {
    case "FETCH_OPERATORS_STARTED":
      return { data: null, isLoading: true, error: null, success: null};
    case "FETCH_OPERATORS_SUCCESS":
      return { data: action.data, isLoading: false, error: null, success: true};
    case "FETCH_OPERATORS_ERROR":
      return { data: null, isLoading: false, error: action.error, success: false};
    default:
      return state;
  }
};

//selected operator
export const selectedOperator = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_OPERATOR':
        return action.selectedOperator;
        
    default:
      return state
  }
}