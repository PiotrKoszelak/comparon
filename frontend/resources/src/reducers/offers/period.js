import { asyncReducerFactory } from '../HigherOrderReducer'

//periods
export const periods = asyncReducerFactory('PERIODS');

//selected period
export const selectedPeriod = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_PERIOD':
        return action.selectedPeriod;
        
    default:
      return state
  }
}