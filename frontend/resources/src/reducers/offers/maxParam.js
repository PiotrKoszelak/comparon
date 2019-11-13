
//max parameters

export const maxParam = (
  state = { data: null, isLoading: false, error: null, success: null},
  action
) => {
  switch (action.type) {
    case "FETCH_PARAMETERS_STARTED":
      return { data: null, isLoading: true, error: null, success: null};
    case "FETCH_PARAMETERS_SUCCESS":
      return { data: action.data, isLoading: false, error: null, success: true};
    case "FETCH_PARAMETERS_ERROR":
      return { data: null, isLoading: false, error: action.error, success: false};
    default:
      return state;
  }
};