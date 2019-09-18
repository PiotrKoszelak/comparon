
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
export const selectedOperator = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_OPERATOR':
        return action.selectedOperator;
        
    default:
      return state
  }
}