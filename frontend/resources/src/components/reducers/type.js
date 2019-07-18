
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
export const typ = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECTED_TYPE':
        return action.typ;
        
    default:
      return state
  }
}