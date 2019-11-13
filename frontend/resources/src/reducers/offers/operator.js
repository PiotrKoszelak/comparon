import { asyncReducerFactory } from '../HigherOrderReducer'
//operators
export const operators = asyncReducerFactory('OPERATORS');

//selected operator
export const selectedOperator = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_OPERATOR':
        return action.selectedOperator;
        
    default:
      return state
  }
}