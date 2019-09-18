
//types
export const types = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_TYPES_SUCCESS':
            return [
              ...action.types
            ]
          default:
            return state
        }
      }

//selected types
export const selectedType = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_TYPE':
        return action.selectedType;
        
    default:
      return state
  }
}