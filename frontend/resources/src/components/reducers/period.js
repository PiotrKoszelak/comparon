
//periods
export const periods = (state = [], action) => { 
        switch (action.type) { 
          case 'FETCH_PERIODS_SUCCESS':
            return [
              ...action.periods
            ]
          default:
            return state
        }
      }

//selected period
export const selectedPeriod = (state = [], action) => { 
  switch (action.type) { 
    case 'SELECT_PERIOD':
        return action.selectedPeriod;
        
    default:
      return state
  }
}