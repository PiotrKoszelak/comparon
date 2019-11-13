export const asyncReducerFactory = (name) => {
    return (state = { data: null, isLoading: false, error: null, success: null}, action) => {
      switch (action.type) {
        case `FETCH_${name}_STARTED`:
          return { data: null, isLoading: true, error: null, success: null };
        case `FETCH_${name}_SUCCESS`:
          return { data: action.data, isLoading: false, error: null, success: true };
        case `FETCH_${name}_ERROR`:
          return { data: null, isLoading: false, error: action.error, success: false };
        default:
          return state;
      }
    };
  };