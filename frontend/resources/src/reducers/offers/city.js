import { asyncReducerFactory } from '../HigherOrderReducer'
// cities
export const cities = asyncReducerFactory('CITIES');

//selected city
export const selectedCity = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_CITY':
      return action.selectedCity;
      
    default:
      return state
  }
}