
//operators
export const operators = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_OPERATORS_SUCCESS':
            return [
              ...action.operators
            ]
          default:
            return state
        }
      }

//selected operator
export const operator = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECTED_OPERATOR':
        return action.operator;
        
    default:
      return state
  }
}