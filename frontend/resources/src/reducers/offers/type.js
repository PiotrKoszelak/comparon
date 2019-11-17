import { asyncReducerFactory } from '../HigherOrderReducer'

//types
export const types = asyncReducerFactory('TYPES');


//selected types
export const selectedType = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_TYPE':
        return action.selectedType;
        
    default:
      return state
  }
}