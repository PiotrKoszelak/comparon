
//types
export const maxParam = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_MAX_PARAM_SUCCESS':
            return [
              ...action.maxParam
            ]
          default:
            return state
        }
      }